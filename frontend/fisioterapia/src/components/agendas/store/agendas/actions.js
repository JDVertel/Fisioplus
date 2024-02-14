import firebase_api from "@/api/firebaseApi";

/* ============================================ */

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
export const getDatabyParam = async ({ commit }, parametros) => {
  const [{ parametro, valor }] = parametros;
  console.log(parametro);
  console.log(valor);
  const response = await firebase_api.get("/profesionales.json", {
    params: {
      orderBy: `"${parametro}"`, // Reemplazar el valor de orderBy por el parámetro correspondiente
      equalTo: '"consulta"',
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
