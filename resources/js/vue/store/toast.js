// Form Store Module:
export default {
  namespaced: true,

  state: {
    activeToasts: []
  },

  actions: {
    newToast(context, payload) {
      context.commit("SET_NEW_TOAST", payload);
    }
  },

  mutations: {
    SET_NEW_TOAST(state, value) {
      state.activeToasts.push({
        type: value.type,
        text: value.text
      });
    }
  },

  getters: {
    activeToasts(state) {
      return state.activeToasts;
    }
  }
};
