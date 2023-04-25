import { createApp } from "vue";
//componentes-rutas
import App from "./App.vue";
import router from "./router/routes";

//bootstrap
import "bootstrap/dist/css/bootstrap.css";
import bootstrap from "bootstrap/dist/js/bootstrap.bundle.js";

//axios
import * as Vue from "vue"; // in Vue 3
import axios from "axios";
import VueAxios from "vue-axios";

createApp(App).use(router).mount("#app");
