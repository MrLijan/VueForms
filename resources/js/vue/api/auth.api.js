/**
 * Authentication API service
 */

import request from "./request";

export function csrf() {
  return request({
    url: "/sanctum/csrf-cookie",
    method: "get"
  });
}

export function register(payload) {
  return request({
    url: "/auth/register",
    method: "post",
    data: payload
  });
}

export function login(payload) {
  return request({
    url: "/auth/login",
    method: "post",
    data: payload
  });
}

export function logout(payload) {
  return request({
    url: "/auth/logout",
    method: "post",
    data: payload
  });
}
