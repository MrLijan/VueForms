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
      await axios.post(`${apiPath}/create`, payload.value).then((res) => {
        console.log(res);
      });
    }
  },

  mutations: {},

  getters: {}
};
