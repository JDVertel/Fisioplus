/* RUTINA PARA CONSULTAR DATOS DE UN SEGUNDO COMBO DEPENDENTE DE UN PRIMERO */
// (ide: llave del primer combo  - array de la data - propiedad resultado)

export function buscarenf(ide, array, resultado) {
  console.log({ resultado });
  console.log({ array });
  let response = null;
  for (let i = 0; i < array.length; i++) {
    if (array[i].id === ide) {
      let newarray = array[i];
      response = newarray[resultado];
      /*    response = ...newarray[response]; */
    }
  }
  return response;
}
