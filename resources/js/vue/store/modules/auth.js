/**
 * Authentication Module
 */
import * as auth from "../../api/auth.api";
import * as ls from "../../helpers/localStorage";

export default {
  namespaced: true,

  state: {
    username: null,
    token: null
  },

  actions: {
    submitRegister(context, payload) {
      return new Promise((resolve, reject) => {
        auth
          .register(payload)
          .then((res) => {
            resolve(res.data);
          })
          .catch((err) => {
            reject(err);
          });
      });
    },

    submitLogin(context, payload) {
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

    submitLogout(context, payload) {
      return new Promise((resolve, reject) => {
        auth
          .logout(payload)
          .then((res) => {
            context.commit("SET_LOGOUT", res.code);
            resolve(res.code);
          })
          .catch((err) => {
            reject(err);
          });
      });
    }
  },

  mutations: {
    SET_ACTIVE_USER(state, value) {
      state.token = value.token;
      state.username = value.name;
      ls.save("token", value.token);
    },

    SET_LOGOUT(state) {
      state.token = null;
      state.username = null;
      ls.remove(token);
    }
  }
};
