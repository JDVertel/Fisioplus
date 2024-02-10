import firebase_api from "@/api/firebaseApi";
import { updateDataVitrina } from "./mutations";
/* ============================================================= */
export const load_Vitrina = async ({ commit }) => {
  const response = await firebase_api.get("/vitrina.json");
  const { data } = response;
  const dataentradas = [];
  for (let id of Object.keys(data)) {
    dataentradas.push({
      id,
      ...data[id],
    });
  }
  commit("setVitrina", dataentradas);
};

/* ============================================================= */

export const updateVitrina = async ({ commit }, entradas) => {
  console.log("variable entradas ", entradas);
  const { id_ips, tipo, nombre, desc, precio, cant, publicado } = entradas;
  const dataToSave = { id_ips, tipo, nombre, desc, precio, cant, publicado };
  const ruta = `/vitrina/${entradas.id}.json`;
  //servicio
  const response = await firebase_api.put(ruta, dataToSave);
  commit("updateDataVitrina", { ...entradas });
};
/* ============================================================= */

export const createEntradaVitrina = async ({ commit }, entradas) => {
  const {
    id_ips = "1",
    tipo = "producto",
    nombre,
    desc,
    precio,
    cant,
    publicado = true,
  } = entradas;
  const DataToSave = { id_ips, tipo, nombre, desc, precio, cant, publicado };
  console.log("ok", DataToSave);
  const Ruta = `/vitrina.json`;
  //servicio
   const response = await firebase_api.post(Ruta, DataToSave);
   commit("newDataVitrina",DataToSave)
};

/* ================================================================= */

export const DeleteItemVitrina= async({commit},entradas)=>{


    const Ruta = `/vitrina/${entradas}.json`;
    //servicio
    const response = await firebase_api.delete(Ruta);

    commit("DeleteItemVitrina",entradas)

}



















// acciones asyncronas  que llaman a mutaciones

/* export const myAction = async({commit})=>{

}  */
