// modifican el state

/* export const myGetters =(state)=>{

}  */

/* ---------PACIENTES */

export const setStatePaciente=(state, entryDataPaciente)=>{
    state. datapaciente="";
    state.datapaciente=[...state.datapaciente, ...entryDataPaciente];
    state.existepaciente = entryDataPaciente.length;
}




export const SetStatenoregistrado=(state, noreg)=>{
    state.existepaciente=noreg;
}


export const setStateCitas=(state , citas)=>{
    state.dataCitas="";
    state.dataCitas=[...state.dataCitas, ...citas];

}

/* ------PROFESIONALES */

export const setStateProfesionales=(state, entryDataProfesionales)=>{
    state. dataprofesionales="";
    state.dataprofesionales=[...state.dataprofesionales, ...entryDataProfesionales];
    state.existeprofesionales = entryDataProfesionales.length;
}

/* -----------USUARIOS----- */
export const setStateUsuarios=(state, entryDataUsuarios)=>{
    state. datausuarios="";
    state.datausuarios=[...state.datausuarios, ...entryDataUsuarios];
    state.existeusuarios = entryDataUsuarios.length;
}