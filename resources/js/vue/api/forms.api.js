/*
 * -> Create requests service
 */

import request from "./request";

export function fetchList(query) {
  return request({
    url: "/forms",
    method: "get",
    params: {
      page: query
    }
  });
}

export function deleteForm(key) {
  return request({
    url: `/forms/${key}/delete`,
    method: "delete"
  });
}

export function fetchForm(key) {
  return request({
    url: `/forms/${key}`,
    method: "get"
  });
}

export function submitForm(payload) {
  return request({
    url: "/filled/create",
    method: "post",
    data: payload
  });
}
