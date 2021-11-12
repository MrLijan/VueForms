import { createStore } from "vuex";
import form from "./form";
import filledForm from "./filledForm";
import toast from "./toast";

// Create main store with Modules:
export default createStore({
  state: {},
  actions: {},
  mutations: {},
  getters: {},

  modules: {
    form,
    filledForm,
    toast
  }
});
