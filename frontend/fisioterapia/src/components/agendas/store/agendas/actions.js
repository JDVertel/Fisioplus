// acciones asyncronas  que llaman a mutaciones 

/* export const myAction = async({commit})=>{

}  */




import firebase_api from "@/api/firebaseApi";

export const load_Agendas = async () => {
  /* 
  const { data } = await vitrina_api.get('/vitrina.json')
 console.log(data); */
  try {
    const response = await firebase_api.get("/agendas.json");
    if (response.data) {
      const { data } = response;
      console.log(data);
    } else {
      // Manejar el escenario donde no hay datos en la respuesta
      console.log("no hay para la consulta");
    }
  } catch (error) {
    // Manejar el error de la solicitud
    console.log(error);
  }
};