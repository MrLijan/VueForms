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
    pagination: {
      total: 0,
      current_page: 1,
      total_pages: 0
    }
  },

  actions: {
    async getForms(context, payload) {
      const data = await axios
        .get(`${apiPath}/paginated?page=${payload}`)
        .then((res) => {
          context.commit("SET_FORMS", res.data);
        })
        .catch((err) => {
          return err;
        });

      return data;
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
      const data = await axios
        .delete(`${apiPath}/${payload}/delete`)
        .then((res) => {
          context.dispatch("getForms");
          return res.data;
        })
        .catch((err) => {
          return err;
        });

      return data;
    }
  },

  mutations: {
    SET_FORMS(state, value) {
      state.forms = value.data;
      state.pagination = {
        total: value.total,
        current_page: value.current_page,
        total_pages: value.total_pages
      };
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
