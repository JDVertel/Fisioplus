// acciones asyncronas  que llaman a mutaciones

/* export const myAction = async({commit})=>{

}  */

import firebase_api from "@/api/firebaseApi";

export const load_Agendas = async () => {
  try {
    const response = await firebase_api.get("/agendas.json");

    if (response.data) {
      const { data } = response;
      console.log(data);
      const entradas = [];

      for (let id of Object.keys(data)) {
        console.log(id);
      }
    } else {
      // no hay datos
      console.log("no hay para la consulta");
    }
  } catch (error) {
    //  error
    console.log(error);
  }
};
