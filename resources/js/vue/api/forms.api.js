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
