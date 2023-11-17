import { createRouter, createWebHistory } from "vue-router";
//aplicacion
import Home from "./../views/home.vue";
import About from "./../views/about.vue";
import Menu from "./../views/dashboard/menu.vue";
import Register from "./../views/register_user.vue";
// agendas
import HomeAgendas from "./../views/agendas/agendashome.vue";
//contenido web
import HomeVitrina from "./../views/vitrina/vitrinahome.vue";
//hc
import hc from "./../views/hc/hc.vue";
//dashboard

import dashboard from "./../views/dashboard/menu.vue"
//vitrina
import productos from "./../views/vitrina/productos.vue";
import servicios from "./../views/vitrina/servicios.vue";
import clases from "./../views/vitrina/clases.vue";


const routes = [
  //aplication
  { path: "/", name: "home", component: Home },
  { path: "/about", component: About, name: "about" },
  { path: "/menu", component: Menu, name: "menu" },
  { path: "/register", component: Register, name: "register" },
  // agendas
  { path: "/homeAgendas", component: HomeAgendas, name: "agendas" },
  //contenido web
  {
    path: "/vitrina", component: HomeVitrina, name: "vitrina",
  },
  //hc
  { path: "/hc", component: hc, name: "hc" },
  //dashboard
  { path: "/dashboard", component: dashboard, name: "dashboard" },
  //vitrina
  { path: "/productos", component: productos, name: "productos" },
  { path: "/servicios", component: servicios, name: "servicios" },
  { path: "/clases", component: clases, name: "clases" },

];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
