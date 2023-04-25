import { createRouter, createWebHistory } from "vue-router";
//aplicacion
import Home from "./../components/home.vue";
import About from "./../components/about.vue";
import Login from "./../components/login.vue";
import Register from "./../components/register.vue";
// agendas
import A_parametros from "./../components/Agendas/a_Params.vue";
import A_programar from "./../components/Agendas/a_Program.vue";
import A_reservas from "./../components/Agendas/a_Reservs.vue";
//contenido web
import servicios from "./../components/contenido/C_Servicios.vue";
import productos from "./../components/contenido/C_Productos.vue";
import actividades from "./../components/contenido/C_Actividades.vue";

const routes = [
  //aplication
  { path: "/", name: 'home',component: Home},
  { path: "/about", component: About, name: "about" },
  { path: "/login", component: Login, name: "login" },
  { path: "/register", component: Register, name: "register" },
  // agendas
  { path: "/A_parametros", component: A_parametros, name: "parametros" },
  { path: "/A_programar", component: A_programar, name: "programar" },
  { path: "/A_reservas", component: A_reservas, name: "reservas" },
  //contenido web
  { path: "/Servicios", component: servicios, name: "servicios" },
  { path: "/productos", component: productos, name: "productos" },
  { path: "/Actividades", component: actividades, name: "actividades" },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
