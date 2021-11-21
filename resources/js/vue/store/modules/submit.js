import { fetchForm, submitForm } from "../../api/forms.api";

export default {
  namespaced: true,

  state: {
    activeForm: {}
  },

  actions: {
    async getForm(context, payload) {
      fetchForm(payload)
        .then((res) => {
          context.commit("SET_ACTIVE_FORM", res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    },

    async submitForm(context, payload) {
      submitForm(payload)
        .then((res) => console.log(res))
        .catch((err) => console.log(err));
    }
  },

  mutations: {
    SET_ACTIVE_FORM(state, value) {
      state.activeForm = value;
    }
  }
};
