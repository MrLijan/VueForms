import { createStore } from "vuex";
import form from "./modules/form";
import submit from "./modules/submit";
import filledForm from "./filledForm";
import toast from "./toast";
import getters from "./getters";

const modules = {
  form,
  filledForm,
  toast,
  submit
};

// Create main store with Modules:
export default createStore({
  getters,
  modules
});
