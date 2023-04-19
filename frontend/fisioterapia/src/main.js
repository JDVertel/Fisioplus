import "./assets/main.css";
import { createApp } from "vue";

//componentes-rutas
import App from "./App.vue";
import Home from "./components/home.vue";
import About from "./components/about.vue";
import Login from "./components/login.vue";

//bootstrap
import "bootstrap/dist/css/bootstrap.css";
import bootstrap from "bootstrap/dist/js/bootstrap.bundle.js";

//axios
import * as Vue from "vue"; // in Vue 3
import axios from "axios";
import VueAxios from "vue-axios";

//vue-router
import { createRouter, createWebHashHistory } from "vue-router";

//componentes

//definir rutas
const routes = [
  { path: "/", component: Home },
  { path: "/about", component: About },
  { path: "/login", component: Login },
]

//creamos objetos rutas de vue router

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
// 5. Create and mount the root instance.
const app = createApp(App)
app.use(router)
app.mount("#app")
