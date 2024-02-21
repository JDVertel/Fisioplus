import firebase_api from "@/api/firebaseApi";

/* ============================================ */
export const getDatabyParam = async ({ commit }, parametros) => {
  console.log(parametros);
  //  bd  -  parametro - valor- rta
  const [{ bd, parametro, valor, rta }] = parametros;
  console.log(bd);
  console.log(parametro);
  console.log(valor);
  console.log(rta);

  const response = await firebase_api.get(`/${bd}.json`, {
    params: {
      orderBy: `"${parametro}"`,
      equalTo: `"${valor}"`,
    },
  });
  const { data } = response;
  const datasalida = [];
  for (let id of Object.keys(data)) {
    datasalida.push({
      id,
      ...data[id],
    });
  }
console.log(datasalida)

  if (datasalida.length!=0) {
    commit(`${rta}`, datasalida);
  } else {
    console.log("sin datos en la consulta")
   const  datasalida = 2;
    commit("noregistrado", datasalida);
  }
};

/* ============================================= */

/* ============================================= */

/* export const loadProfesionales = async ({ commit }) => {
  const response = await firebase_api.get("/profesionales.json");
  const { data } = response;
  const dataentradas = [];
  for (let id of Object.keys(data)) {
    dataentradas.push({
      id,
      ...data[id],
    });
  }
  console.log(dataentradas);
  commit("setProfesionales", dataentradas);
}; */

/* ============================================= */

/* 
if (dataentradas.length){
  console.log("encontrado")
  
  this.existepaciente=1;
  }
  else{
    console.log("no hay datos");
    this.existepaciente=2;
  } */
