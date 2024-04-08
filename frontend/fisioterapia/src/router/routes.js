import { createRouter, createWebHistory } from "vue-router";
//aplicacion
import Home from "./../views/home.vue";
import About from "./../views/about.vue";
import Menu from "./../views/menu.vue";

// agendas
import Agendas from "./../components/agendas/agendas/index.vue";
//contenido web
import HomeVitrina from "./../components/vitrina/vitrinahome.vue";
//hc
import hc from "./../components/hc/hc.vue";
//dashboard
import login from "./../views/login.vue";
//dashboard

import dashboard from "./../components/dashboard/index.vue";

import parametros from "./../components/parametros/index.vue";
import reservas from "./../components/agendas/reservas/rcitas.vue";
import ventas from "./../components/vitrina/ventas.vue"

const routes = [
  //aplication
  { path: "/", name: "home", component: Home },
  { path: "/about", component: About, name: "about" },
  { path: "/menu", component: Menu, name: "menu" },

  // agendas
  { path: "/agendas", component: Agendas, name: "agendas" },
  //contenido web
  {
    path: "/vitrina",
    component: HomeVitrina,
    name: "vitrina",

  },
  //hc
  { path: "/hc", component: hc, name: "hc" },
  //dashboard
  { path: "/dashboard", component: dashboard, name: "dashboard" },

  {
    path: "/login",
    component: login,
    name: "login",
  },

  //vitrina
  /*  { path: "/productos", component: productos, name: "productos" },
  { path: "/servicios", component: servicios, name: "servicios" },
  { path: "/clases", component: clases, name: "clases" }, */

  //parametros
  { path: "/parametros", component: parametros, name: "parametros" },
  { path: "/reservas/:id_user", component: reservas, name: "reservas" },
  { path: "/ventas", component: ventas, name: "ventas" },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
