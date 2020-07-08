import Vuex from "vuex";
import Vue from "vue";
import profiles from "./profiles";

// Load Vuex
Vue.use(Vuex);

// Create store
export const store = new Vuex.Store({
  modules: {
    profiles
  }
});
