// Form Store Module:
export default {
  namespaced: true,

  state: {
    field: {}
  },

  actions: {
    updateFieldState(context, payload) {
      context.commit("UPDATE_FIELD_STATE", payload);
    }
  },

  mutations: {
    UPDATE_FIELD_STATE(state, value) {
      state.field = value;
    }
  },

  getters: {}
};
