import "./assets/main.css";
import { createApp } from "vue";
//bootstrap
import "bootstrap/dist/css/bootstrap.css";
import bootstrap from "bootstrap/dist/js/bootstrap.bundle.js";

//axios
import * as Vue from "vue"; // in Vue 3
import axios from "axios";
import VueAxios from "vue-axios";

//vue-router
import { createRouter, createWebHashHistory } from "vue-router";


/* ************************************************************************************** */
//componentes-rutas
import App from "./App.vue";
import Home from "./components/home.vue";
import About from "./components/about.vue";
import Login from "./components/login.vue";
import Register from "./components/Usuarios/register.vue"

// agendas
import A_parametros from "./components/Agendas/a_Params.vue"
import A_programar from "./components/Agendas/a_Program.vue"
import A_reservas from "./components/Agendas/a_Reservs.vue"
//contenido web
import servicios from "./components/contenido/C_Servicios.vue"
import productos from "./components/contenido/C_Productos.vue"
import actividades from "./components/contenido/C_Actividades.vue"



//definir rutas
const routes = [
  { path: "/", component: Home },
  { path: "/about", component: About },
  { path: "/login", component: Login },
  { path: "/register", component: Register },
  // agendas
  { path: "/A_parametros", component: A_parametros },
  { path: "/A_programar", component: A_programar },
  { path: "/A_reservas", component: A_reservas },
//contenido web
{ path: "/Servicios", component: servicios },
{ path: "/productos", component: productos },
{ path: "/Actividades", component: actividades },
]


/* ************************************************************************************** */
//creamos objetos rutas de vue router

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
/* ************************************************************************************** */
const app = createApp(App)
app.use(router)
app.mount("#app")
