import { createApp } from "vue";
//componentes-rutas
import App from "./App.vue";
import router from "./router/routes";

// store
import store from './store/index.js';

//bootstrap
import "bootstrap/dist/css/bootstrap.css";
import bootstrap from "bootstrap/dist/js/bootstrap.bundle.js";

//axios
import * as Vue from "vue"; // in Vue 3
import axios from "axios";
import VueAxios from "vue-axios";

// iconos

/* import { OhVueIcon, addIcons } from "oh-vue-icons";
import { GiScarecrow ,RiHealthBookLine,FaUserCheck,FaHandHoldingMedical,AiBiorxivSquare,IoConstructSharp, FaHome, HiCheck,BiWhatsapp} from "oh-vue-icons/icons"; 

addIcons(GiScarecrow ,RiHealthBookLine,FaUserCheck,FaHandHoldingMedical,AiBiorxivSquare,IoConstructSharp, FaHome, HiCheck,BiWhatsapp);*/


const app = createApp(App)
/* app.component("v-icon",OhVueIcon); */
app.use(store);
app.use(router);
app.mount('#app')