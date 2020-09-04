import axios from "axios";

const state = {
  news: [],
  selectednews: {},
  filternewssearch: {},
  filternews: []
};
const getters = {
  allNews: state => state.news,
  news: state => state.selectednews
};
const actions = {
  async fetchNews({ commit }) {
    //alert(process.env.apiUrl);
    const response = await axios.get(process.env.apiUrl + "/newsses");

    //console.log(response.data);

    commit("setNews", response.data);
    return true
  },

  async getNews({ commit }, payload) {
    var urlp = payload.split(".");
    //console.log(urlp[1]);
    const response = await axios.get(
      process.env.apiUrl + `/newsses/${urlp[1]}`
    );
    //console.log(response.data);
    commit("setSelectedNews", response.data);
  },
  async setNewsSearch({ state, commit, dispatch }, payload) {
    if (payload.type.toLowerCase() === "news") {
      let result = await axios.get(
        process.env.apiUrl +
          `/newsses?name_contains=${payload.text.toLowerCase()}`
      );

      commit("setNewsFilter", result.data);
    }
    commit("setNewsSearch", payload);
  }
};

const mutations = {
  setNews: (state, news) => (state.news = news),
  setNewsFilter: (state, news) => (state.filterNews = news),
  setSelectedNews: (state, news) => (state.selectednews = news),
  setNewsSearch: (state, payload) => (state.filternewssearch = payload)
};

export default {
  state,
  getters,
  actions,
  mutations
};
