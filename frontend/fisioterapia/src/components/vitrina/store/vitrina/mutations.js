export const setVitrina = ( state, entradas) =>{
    state.entry=""
    state.entry = [ ...state.entry, ...entradas]
    state.cargando = false
    state.cant = entradas.length
}



// modifican el state

/* export const myGetters =(state)=>{

}  */
