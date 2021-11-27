/**
 * --> TOASTS STORE MODULE
 */

const randKey = () => {
  return (Math.random().toString(36) + Date.now().toString(36)).substr(2);
};

export default {
  namespaced: true,

  state: {
    messages: []
  },

  actions: {
    new(context, payload) {
      context.commit("NEW_TOAST", payload);
    },

    remove(context, payload) {
      context.commit("REMOVE_TOAST", payload);
    }
  },

  mutations: {
    NEW_TOAST(state, value) {
      state.messages.push({
        id: randKey(),
        type: value.type,
        text: value.text
      });
    },

    REMOVE_TOAST(state, value) {
      const index = state.messages.map((el) => el.id).indexOf(value.id);
      state.messages.splice(index, 1);
    }
  }
};
