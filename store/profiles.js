import axios from "axios";

const state = {
  profiles: []
};

const getters = {
  allProfiles: state => state.profiles
};

const actions = {
  async fetchProfiles({ commit }) {
    const response = await axios.get("http://161.35.7.108/profiles");

    console.log(response.data);

    commit("setProfiles", response.data);
  }
};

const mutations = {
  setProfiles: (state, profiles) => (state.profiles = profiles)
};

export default {
  state,
  getters,
  actions,
  mutations
};
