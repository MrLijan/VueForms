import axios from "axios";

const apiPath = `${process.env.MIX_API_URL}/forms`;

// Helper
const randID = () => {
  return (Math.random().toString(36) + Date.now().toString(36)).substr(2);
};

// Form Store Module:
export default {
  namespaced: true,

  state: {
    forms: {},
    singleForm: {}
  },

  actions: {
    async getForms(context) {
      const toast = {
        id: randID(),
        type: "info",
        text: "Fetching all forms..."
      };

      context.dispatch("toast/newToast", toast, { root: true });

      const data = await axios.get(apiPath).then((res) => {
        context.dispatch("toast/newToast", toast, { root: true });
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
    },

    async deleteForm(context, payload) {
      await axios
        .delete(`${apiPath}/${payload}/delete`)
        .then((res) => {
          context.dispatch("getForms");
          return res.data;
        })
        .catch((err) => {
          return err;
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
