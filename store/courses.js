import axios from "axios";

const state = {
  courses: []
};

const getters = {
  allCourses: state => state.courses
};

const actions = {
  async fetchCourses({ commit }) {
    const response = await axios.get(process.env.apiUrl + "/courses");
    console.log(response.data);
  }
};

const mutations = {};

export default {
  state,
  getters,
  actions,
  mutations
};
