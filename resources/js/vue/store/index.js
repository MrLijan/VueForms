import { createStore } from "vuex";
import form from "./modules/form";
import filled from "./modules/filled";
import toast from "./modules/toast";
import getters from "./getters";

const modules = {
  form,
  toast,
  filled
};

// Create main store with Modules:
export default createStore({
  getters,
  modules
});
