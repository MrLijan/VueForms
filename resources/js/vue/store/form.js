import axios from "axios";
import { storeKey } from "vuex";

const apiPath = `${process.env.MIX_API_URL}/forms`;

// Form Store Module:
export default {
  namespaced: true,

  state: {
    forms: {},
    liram: {
      yam: "Liram"
    }
  },
  actions: {
    async getForms(context) {
      const data = await axios.get(apiPath).then((res) => {
        return res.data;
      });

      context.commit("SET_FORMS", data);
    }
  },
  mutations: {
    SET_FORMS(state, value) {
      state.forms = value;
    }
  },
  getters: {}
};
