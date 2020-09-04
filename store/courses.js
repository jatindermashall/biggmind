import axios from "axios";

const state = {
  courses: [],
  selectedcourse: {}
};

const getters = {
  allCourses: state => state.courses,
  course: state => state.selectedcourse
};

const actions = {
  async fetchCourses({ commit }) {
    const response = await axios.get(process.env.apiUrl + "/courses");
    //console.log(response.data);
    commit("setCourses", response.data);
    return true;
  },

  async getCourse({ commit }, payload) {
    var urlp = payload.split(".");
    console.log(urlp[1]);
    const response = await axios.get(
      process.env.apiUrl + `/courses/${urlp[0]}`
    );
    //console.log(response.data);
    commit("setSelectedCourse", response.data);
  }
};

const mutations = {
  setCourses: (state, courses) => (state.courses = courses),
  setSelectedCourse: (state, course) => (state.selectedcourse = course)
};

export default {
  state,
  getters,
  actions,
  mutations
};
