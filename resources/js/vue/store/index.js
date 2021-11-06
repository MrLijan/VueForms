import { createStore } from "vuex";
import form from "./form";
import creator from "./creator";

// Create main store with Modules:
export default createStore({
  state: {},
  actions: {},
  mutations: {},
  getters: {},

  modules: {
    form,
    creator
  }
});
