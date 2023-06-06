import { createRouter, createWebHistory } from "vue-router";
//aplicacion
import Home from "./../views/home.vue";
import About from "./../views/about.vue";
import Login from "./../views/login.vue";
import Register from "./../views/register.vue";
// agendas
import HomeAgendas from "./../views/agendas/agendashome.vue";
//contenido web
import HomeConfiguracion from "./../views/configuracion/configuracionhome.vue";
//hc
import hc from "./../views/hc/hc.vue";
import uregister from "./../views/hc/uregister.vue";
import SearchHC from "./../views/hc/search_history.vue";

const routes = [
  //aplication
  { path: "/", name: "home", component: Home },
  { path: "/about", component: About, name: "about" },
  { path: "/login", component: Login, name: "login" },
  { path: "/register", component: Register, name: "register" },
  // agendas
  { path: "/homeAgendas", component: HomeAgendas, name: "agendas" },
  //contenido web
  {
    path: "/Configuracion",
    component: HomeConfiguracion,
    name: "configuracion",
  },
  //hc
  { path: "/uregister", component: uregister, name: "uregister" },
  { path: "/hc", component: hc, name: "hc" },
  { path: "/SearchHC", component: SearchHC, name: "SearchHC" },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
