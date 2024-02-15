import firebase_api from "@/api/firebaseApi";

/* ============================================ */
export const getDatabyParam = async ({ commit }, parametros) => {
  console.log(parametros)
  //  bd  -  parametro - valor
  const [{ bd, parametro, valor}] = parametros;
  console.log(parametro);
  console.log(valor);
  console.log(bd);
  const response = await firebase_api.get(`/${bd}.json`, {
    params: {
      orderBy: `"${parametro}"`,
      equalTo: `"${valor}"`,
    },
  });
  const { data } = response;
  const dataentradas = [];
  for (let id of Object.keys(data)) {
    dataentradas.push({
      id,
      ...data[id],
    });
  }
  console.log(dataentradas);
};






export const loadProfesionales = async ({ commit }) => {
  const response = await firebase_api.get("/agendas.json");
  const { data } = response;
  const dataentradas = [];
  for (let id of Object.keys(data)) {
    dataentradas.push({
      id,
      ...data[id],
    });
  }
  console.log(dataentradas);
  /* commit("setProfesionales", dataentradas); */
};

/* ============================================= */
