import { createRouter, createWebHistory } from "vue-router";

import Home from "../views/Home";
import Creator from "../views/Creator";
import Submit from "../views/Submit";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/creator",
    name: "Creator",
    component: Creator
  },
  {
    path: "/submit/:key",
    name: "Submit",
    component: Submit
  },
  {
    path: "/edit/:key",
    name: "Edit",
    component: Creator
  }
];

export default createRouter({
  history: createWebHistory(),
  routes
});
