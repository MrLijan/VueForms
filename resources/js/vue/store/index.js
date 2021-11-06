import { createStore } from "vuex";
import form from "./form";
import filledForm from "./filledForm";

// Create main store with Modules:
export default createStore({
  state: {},
  actions: {},
  mutations: {},
  getters: {},

  modules: {
    form,
    filledForm
  }
});
