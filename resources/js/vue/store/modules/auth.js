/**
 * Authentication Module
 */
import * as auth from "../../api/auth.api";

export default {
  namespaced: true,

  state: {
    username: null,
    token: null
  },

  actions: {
    async submitRegister(context, payload) {
      await register(payload)
        .then((res) => {
          console.log(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    },

    async submitLogin(context, payload) {
      return new Promise((resolve, reject) => {
        auth
          .login(payload)
          .then((res) => {
            context.commit("SET_ACTIVE_USER", res.data);
            resolve(res.data);
          })
          .catch((err) => {
            reject(err);
          });
      });
    },

    async submitLogout(context, payload) {
      logout(payload)
        .then((res) => {
          console.log(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  },

  mutations: {
    SET_ACTIVE_USER(state, value) {
      state.token = value.token;
      state.name = value.name;
    }
  }
};
