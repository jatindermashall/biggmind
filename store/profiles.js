import axios from "axios";

const state = {
  profiles: [],
  selectedProfile: {}
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

  async getProfile ({commit}, payload) {
    const response = await axios.get(`http://161.35.7.108/profiles/${payload}`)
    commit('setSelectedProfile', response.data)
  }
};

const mutations = {
  setProfiles: (state, profiles) => (state.profiles = profiles),
  setSelectedProfile: (state, profile) => (state.selectedProfile = profile)
};

export default {
  state,
  getters,
  actions,
  mutations
};
