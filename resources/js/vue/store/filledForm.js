import axios from "axios";
// import { storeKey } from "vuex";

const apiPath = `${process.env.MIX_API_URL}/filled`;

// Form Store Module:
export default {
  namespaced: true,

  state: {
    forms: {},
    singleForm: {}
  },

  actions: {
    async submitForm(context, payload) {
      return await axios
        .post(`${apiPath}/create`, payload.value)
        .then((res) => {
          return res;
        })
        .catch((err) => {
          return err;
        });
    }
  },

  mutations: {},

  getters: {}
};
