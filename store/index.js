import Vuex from "vuex";
import Vue from "vue";
import profiles from "./profiles";
import news from "./news";
import courses from "./courses";

// Load Vuex
Vue.use(Vuex);

// Create store
export const store = new Vuex.Store({
  modules: {
    profiles,
    news,
    courses
  }
});
