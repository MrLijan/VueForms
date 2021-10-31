//require('./bootstrap');

import { createApp } from "vue";
import router from "./vue/router";
import store from "./vue/store";

import App from "./vue/App";

createApp(App).use(router).use(store).mount("#app");
