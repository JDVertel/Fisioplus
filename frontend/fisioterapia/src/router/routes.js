import Vue from 'vue'
import VueRouter from 'vue-router'
import Hola from '@/components/Hola.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Hola
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router


/* 

Aquí te muestro un ejemplo de cómo separar las rutas de una aplicación en Vue utilizando VueRouter. En primer lugar, se debe crear un archivo de rutas en la carpeta src/router con el nombre index.js, en el cual se importa el router y se exporta un arreglo de rutas. Cada ruta debe especificar la ruta, el nombre y el componente correspondiente. Luego, se pueden crear los componentes en la carpeta src/components. Por ejemplo, se puede crear el componente Hola.vue. Para renderizar un enlace, se puede utilizar el elemento a y especificar el atributo to con la ruta correspondiente. También es posible dividir las rutas en diferentes archivos para mantener una estructura de carpetas organizada. A continuación, se muestra un ejemplo de código:
*/

/* 
En este ejemplo, se importa el componente Hola.vue y se especifica una ruta con el nombre home y la ruta /. Luego, se crea el objeto router con las opciones mode, base y routes, y se exporta. En el componente principal (normalmente App.vue) se puede utilizar el componente router-view para renderizar el componente correspondiente a la ruta.
*/