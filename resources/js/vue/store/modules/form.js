import axios from "axios";
import { fetchList, deleteForm, fetchForm } from "../../api/forms.api";

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
    activeForm: {}
  },

  actions: {
    async getList(context, payload) {
      fetchList(payload)
        .then((res) => {
          context.commit("SET_LIST", res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    },

    async getForm(context, payload) {
      fetchForm(payload)
        .then((res) => {
          return res.data;
        })
        .catch((err) => err);
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
          context.dispatch("getList");
          return res;
        })
        .catch((err) => console.log(err));
    }
  },

  mutations: {
    // normalize the data
    SET_LIST(state, value) {
      state.list = value.data;
      state.totalForms = value.total_forms;
      state.currentPage = value.current_page;
      state.lastPage = value.last_page;
    }
  }
};
