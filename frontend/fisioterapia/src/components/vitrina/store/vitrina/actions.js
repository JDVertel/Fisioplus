import firebase_api from "@/api/firebaseApi";

export const load_Vitrina = async ({ commit }) => {

  const response = await firebase_api.get("/vitrina.json");
  const { data } = response;
  //console.log(data);
  const dataentradas = [];
  for (let id of Object.keys(data)) {
    //  console.log(id);
    dataentradas.push({
      id,
      ...data[id],
    });
  }
 


  commit("setVitrina", dataentradas);
};






















// acciones asyncronas  que llaman a mutaciones

/* export const myAction = async({commit})=>{

}  */
