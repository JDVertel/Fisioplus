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

//firebase
/* import { initializeApp } from "firebase/app";
import { getStorage } from 'firebase/storage';
const firebaseConfig = {
  apiKey: "AIzaSyB6b6ESvmM7oX6FE-KChGl5fXMJ3kGwly0",
  authDomain: "fisioapp-f10cc.firebaseapp.com",
  databaseURL: "https://fisioapp-f10cc-default-rtdb.firebaseio.com",
  projectId: "fisioapp-f10cc",
  storageBucket: "fisioapp-f10cc.appspot.com",
  messagingSenderId: "369970954516",
  appId: "1:369970954516:web:e98f614af0182737efc201"
};

const Storeapp = initializeApp(firebaseConfig);
export const storage = getStorage(Storeapp);
 */
const app = createApp(App)
app.use(store);
app.use(router);
app.mount('#app')


