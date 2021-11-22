import { createStore } from "vuex";
import form from "./modules/form";
import filled from "./modules/filled";
import filledForm from "./filledForm";
import toast from "./toast";
import getters from "./getters";

const modules = {
  form,
  filledForm,
  toast,
  filled
};

// Create main store with Modules:
export default createStore({
  getters,
  modules
});
