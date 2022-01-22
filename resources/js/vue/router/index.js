import { createRouter, createWebHistory } from "vue-router";

import Home from "../views/Home";
import Creator from "../views/Creator";
import Submit from "../views/Submit";
import Login from "../views/auth/Login";
import Register from "../views/auth/Register";

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
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
    props: true
  },
  {
    path: "/register",
    name: "Register",
    component: Register
  }
];

export default createRouter({
  history: createWebHistory(),
  routes
});
