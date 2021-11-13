// Form Store Module:
export default {
  namespaced: true,

  state: {
    toasts: []
  },

  actions: {
    newToast(context, payload) {
      context.commit("SET_NEW_TOAST", payload);
    }
  },

  mutations: {
    SET_NEW_TOAST(state, value) {
      state.toasts.push({
        id: value.id,
        type: value.type,
        text: value.text
      });
    },

    SET_TOAST_ON_SUCCESS(state, value) {
      const index = state.toasts
        .map((toast) => {
          return toast.id;
        })
        .indexOf(value.id);

      state.toasts[index].type = "success";
      state.toasts[index].text = "Fetching completed";
    }
  },

  getters: {
    toasts(state) {
      return state.toasts;
    }
  }
};
