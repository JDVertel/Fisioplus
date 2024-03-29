import firebase_api from "@/api/firebaseApi";

/*AGENDAS ============================================ */
export const getDatabyParam = async({ commit }, parametros) => {
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

    if (datasalida.length != 0) {
        commit(`${rta}`, datasalida);
    } else {
        console.log("sin datos en la consulta")
        const datasalida = 2;
        commit("noregistrado", datasalida);
    }
};

/* ============================================= */





/* CONFIGURACION======================================= */

export const createEntradaUser = async({ commit }, entradas) => {

    const {
        id_ips,
        estado,
        nombre,
        pass,
        rol,
        doc,
        bd

    } = entradas;
    const DataToSave = {
        id_ips,
        estado,
        doc,
        nombre,
        pass,
        rol
    };

    const Ruta = `/${bd}.json`;
    /*   console.log(Ruta) */
    //servicio
    const { data } = await firebase_api.post(Ruta, DataToSave);
    //agregamos el id al array para subirlo al strore
    DataToSave.id = data.name;
    //se llama a la mutacion y s epasa el array como
    console.log(DataToSave);
    /*     commit("newDataVitrina", DataToSave); */
};

//-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -

export const createEntradaProf = async({ commit }, entradas) => {

    const {
        id_ips,
        estado,
        doc,
        name1,
        name2,
        apell1,
        apell2,
        cel,
        reg_medico,
        tipo,
        correo,
        bd

    } = entradas;
    const DataToSave = {
        id_ips,
        estado,
        doc,
        name1,
        name2,
        apell1,
        apell2,
        cel,
        reg_medico,
        tipo,
        correo,

    };
    console.log("ok", entradas);
    const Ruta = `/${bd}.json`;
    console.log(Ruta)
        //servicio
    const { data } = await firebase_api.post(Ruta, DataToSave);
    //agregamos el id al array para subirlo al strore
    DataToSave.id = data.name;
    //se llama a la mutacion y s epasa el array como
    console.log(DataToSave);
    /*     commit("newDataVitrina", DataToSave); */
};
/* ------------------------------------------------------------------------------------------------ */
export const DeleteItem = async({ commit }, entradas) => {
    const { id, bd } = entradas;
    const Ruta = `/${bd}/${id}.json`;
    console.log(Ruta);
    //servicio
    const { data } = await firebase_api.delete(Ruta);
    /*   commit("DeleteItemVitrina", entradas); */
};