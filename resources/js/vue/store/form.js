import axios from "axios";
// import { storeKey } from "vuex";

const apiPath = `${process.env.MIX_API_URL}/forms`;

// Form Store Module:
export default {
  namespaced: true,

  state: {
    forms: {},
    singleForm: {}
  },

  actions: {
    async getForms(context) {
      const data = await axios.get(apiPath).then((res) => {
        return res.data;
      });

      context.commit("SET_FORMS", data);
    },

    async getSingleForm(context, payload) {
      const data = await axios.get(`${apiPath}/${payload}`).then((res) => {
        return res.data;
      });

      context.commit("SET_SINGLE_FORM", data);
    },

    async createNewForm(context, payload) {
      await axios.post(`${apiPath}/create`, payload).then((res) => {
        console.log(res.data);
        return res.data;
      });
    },

    async updateForm(context, payload) {
      await axios
        .put(`${apiPath}/${payload.key}/update`, payload)
        .then((res) => {
          console.log(res.data);
          return res.data;
        });
    }
  },

  mutations: {
    SET_FORMS(state, value) {
      state.forms = value;
    },
    SET_SINGLE_FORM(state, value) {
      state.singleForm = value;
    }
  },

  getters: {
    singleForm(state) {
      return state.singleForm;
    }
  }
};
