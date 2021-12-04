/*
 * -> Create requests service
 */

import request from "./request";

export function create(payload) {
  return request({
    url: "/filled/create",
    method: "post",
    data: payload
  });
}
