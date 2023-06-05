import { createRouter, createWebHistory } from "vue-router";
//aplicacion
import Home from "./../components/home.vue";
import About from "./../components/about.vue";
import Login from "./../components/login.vue";
import Register from "./../components/register.vue";
// agendas
import HomeAgendas from "./../components/agendas/agendashome.vue";
//contenido web
import HomeConfiguracion from "./../components/configuracion/configuracionhome.vue";
//hc
import hc from "./../components/hc/hc.vue";
import uregister from "./../components/hc/uregister.vue";
import SearchHC from "./../components/hc/search_history.vue";

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
