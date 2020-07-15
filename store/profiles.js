import axios from "axios";

const state = {
  profiles: [],
  selectedProfile: {},
  filtersearch: {}
};

const getters = {
  allProfiles: state => state.profiles,
  profile: state => state.selectedProfile
};

const actions = {
  async fetchProfiles({ commit }) {
    const response = await axios.get("http://161.35.7.108/profiles");

    console.log(response.data);

    commit("setProfiles", response.data);
  },

  async getProfile({ commit }, payload) {
    var urlp = payload.split(".");
    console.log(urlp);
    const response = await axios.get(`http://161.35.7.108/profiles/${urlp[0]}`);
    commit("setSelectedProfile", response.data);
  },
  setSearch ({ state,commit, dispatch }, payload) {
    if (payload.type.toLowerCase() === 'profiles') {
      if (payload.text !== '') {
        let result =  state.profiles.filter(item => {
          return item['full_name'].toLowerCase().includes(payload.text.toLowerCase()) })
        commit("setProfiles", result);
      } else {
        dispatch('fetchProfiles')
      }
    }
    commit('setSearch', payload)
  }
};

const mutations = {
  setProfiles: (state, profiles) => (state.profiles = profiles),
  setSelectedProfile: (state, profile) => (state.selectedProfile = profile),
  setSearch: (state,payload) => (state.filtersearch = payload)
};

export default {
  state,
  getters,
  actions,
  mutations
};
