import axios from "axios";
import { fetchList, deleteForm } from "../../api/forms.api";

const apiPath = `${process.env.MIX_API_URL}/forms`;

// Helper
const randID = () => {
  return (Math.random().toString(36) + Date.now().toString(36)).substr(2);
};

// Form Store Module:
export default {
  namespaced: true,

  state: {
    list: {},
    totalForms: 0,
    currentPage: 1,
    lastPage: 0,
    singleForm: {}
  },

  actions: {
    async getForms(context, payload) {
      fetchList(payload)
        .then((res) => {
          context.commit("SET_FORMS", res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    },

    async getSingleForm(context, payload) {
      const data = await axios.get(`${apiPath}/${payload}`).then((res) => {
        context.commit("SET_SINGLE_FORM", res.data);
      });

      return data;
    },

    async createNewForm(context, payload) {
      return await axios
        .post(`${apiPath}/create`, payload)
        .then((res) => {
          return res.data;
        })
        .catch((err) => {
          return err;
        });
    },

    async updateForm(context, payload) {
      return await axios
        .put(`${apiPath}/${payload.key}/update`, payload)
        .then((res) => {
          return res.data;
        });
    },

    async deleteForm(context, payload) {
      deleteForm(payload)
        .then((res) => {
          context.dispatch("getForms");
          return res;
        })
        .catch((err) => console.log(err));
    }
  },

  mutations: {
    // normalize the data
    SET_FORMS(state, value) {
      state.list = value.data;
      state.totalForms = value.total_forms;
      state.currentPage = value.current_page;
      state.lastPage = value.last_page;
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
