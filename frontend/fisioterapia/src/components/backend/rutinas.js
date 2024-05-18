/* RUTINA PARA CONSULTAR DATOS DE UN SEGUNDO COMBO DEPENDENTE DE UN PRIMERO POR ID */
// (ide: llave del primer combo  - array de la data - propiedad resultado)

export function BuscarDetalles(ide, array, resultado) {
  let response = null;
  for (let i = 0; i < array.length; i++) {
    if (array[i].id === ide) {
      let newarray = array[i];
      response = newarray[resultado];
      console.log(response);
    }
  }
  return response;
}

/* RUTINA PARA CONSULTAR DATOS DE UN SEGUNDO COMBO DEPENDENTE DE UN PRIMERO POR NOMBRER  */
// (nombre  - array de la data - propiedad resultado)



export function BuscarDetallesNombre(name, array, resultado) {
  let response = null;
  for (let i = 0; i < array.length; i++) {
    if (array[i].nombre === name) {
      let newarray = array[i];
      response = newarray[resultado];
      console.log(response);
    }
  }
  return response;
}



/* -----------otra funcion que tambien sirve--------------------------------------------------------- */
/* export function buscar_detalle(id, bd) {
  (this.detalle_rta = bd.filter((el) => el.id == id)[0]),
    console.log(this.detalle_rta.detalle);
}
     */      