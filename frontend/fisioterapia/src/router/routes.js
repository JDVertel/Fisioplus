import { createRouter, createWebHistory } from "vue-router";
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

/* 

Aquí te muestro un ejemplo de cómo separar las rutas de una aplicación en Vue utilizando VueRouter. En primer lugar, se debe crear un archivo de rutas en la carpeta src/router con el nombre index.js, en el cual se importa el router y se exporta un arreglo de rutas. Cada ruta debe especificar la ruta, el nombre y el componente correspondiente. Luego, se pueden crear los componentes en la carpeta src/components. Por ejemplo, se puede crear el componente Hola.vue. Para renderizar un enlace, se puede utilizar el elemento a y especificar el atributo to con la ruta correspondiente. También es posible dividir las rutas en diferentes archivos para mantener una estructura de carpetas organizada. A continuación, se muestra un ejemplo de código:
*/

/* 
En este ejemplo, se importa el componente Hola.vue y se especifica una ruta con el nombre home y la ruta /. Luego, se crea el objeto router con las opciones mode, base y routes, y se exporta. En el componente principal (normalmente App.vue) se puede utilizar el componente router-view para renderizar el componente correspondiente a la ruta.
*/
