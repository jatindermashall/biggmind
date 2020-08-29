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
    //console.log(response.data);
    commit('setCourses',response.data);
  }
};

const mutations = {

setCourses:(state,courses)=>(state.courses=courses)

};

export default {
  state,
  getters,
  actions,
  mutations
};
