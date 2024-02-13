import firebase_api from "@/api/firebaseApi";

/* ============================================ */

export const loadProfesionales = async ({commit}) => {
  const response = await firebase_api.get("/agendas.json");
  const { data } = response;
  const dataentradas = [];
  for (let id of Object.keys(data)) {
    dataentradas.push({
      id,
      ...data[id],
    });
  }
  commit("setProfesionales", dataentradas);
};



