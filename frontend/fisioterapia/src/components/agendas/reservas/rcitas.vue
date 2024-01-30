<template>
    <br>
<div>
    <div class="container">
        <h6 class="display-6">Realizar una reserva </h6>
        <h6>Buscar o crear un usuario</h6>

        <div class="row">

            <div class="col-2">
                <select class="form-select form-select-sm textarea" id="inputGroupSelect01">
                    <option selected>Tipo Documento</option>
                    <option value="cc">CC</option>
                    <option value="ti">TI</option>
                    <option value="ce">CE</option>
                </select>
            </div>
            <div class="col-6">
                <div class="row">
                    <div class="col-6">
                        <input type="number" class="form-control form-control-sm textarea" id="text_numdoc" placeholder="Numero Documento" />

                    </div>
                    <div class="col-6">
                        <button class="btn btn-success btn-sm" style="margin-right:4px">Buscar</button>
                    </div>

                </div>
            </div>

            <div class="col-4 text-center">

                <button class="btn btn-warning btn-sm">+ Registrar Nuevo</button>
            </div>
        </div>

    </div>

    <!--     <div class="container">
        <p>
            Paciente no encontrado, ingrese los siguientes datos para
            registarlo y poder realizar una reserva
        </p>
        <div class="row">
            <div class="col-6">
                <div class="input-group mb-1">
                    <input type="text" class="form-control form-control-sm textarea" id="text_1nombre" placeholder="1 Nombre" />
                </div>
            </div>
            <div class="col-6">
                <div class="input-group mb-1">
                    <input type="text" class="form-control form-control-sm textarea" id="text_2nombre" placeholder="2 Nombre" />
                </div>
            </div>
            <div class="col-6">
                <div class="input-group mb-1">
                    <input type="text" class="form-control form-control-sm textarea" id="text_1apelli" placeholder="1 Apellido" />
                </div>
            </div>
            <div class="col-6">
                <div class="input-group mb-1">
                    <input type="text" class="form-control form-control-sm textarea" id="text_2apell" placeholder="2 Apellido" />
                </div>
            </div>
            <div class="col-6">
                <div class="input-group mb-1">
                    <input type="number" class="form-control form-control-sm textarea" id="text_tel" placeholder="Telefono" />
                </div>
            </div>
            <div class="col-6">
                <div class="input-group mb-1">
                    <input type="text" class="form-control form-control-sm textarea" id="text_direccion" placeholder="Direccion" />
                </div>
            </div>
        </div>
        <button class="btn btn-success btn-sm">
            Registrar cliente
        </button>
    </div> -->
    <div class="container">
        datos de id_usuario

        <hr>
        <div class="row">
            
            <h6 class="display-6">Seleccione tipo y fecha de consulta </h6>
            <div class="col-4">
          
                    <select class="form-select form-select-sm textarea" id="inputGroupSelect01">
                        <option selected>Tipo de Reserva</option>
                        <option value="cc">Terapia</option>
                        <option value="ti">Consulta</option>
                        <option value="ti">Clase</option>

                    </select>
                    
                        <select class="form-select form-select-sm textarea" id="inputGroupSelect01">
                            <option selected>Profesional</option>
                            <option value="cc">Erika</option>
                            <option value="ti">Ramon</option>
                            <option value="ti">Juliana</option>

                        </select>
       
                    <select class="form-select form-select-sm textarea" id="inputGroupSelect01">
                        <option selected>Seleccione el dia</option>
                        <option value="cc">CC</option>
                        <option value="ti">TI</option>

                    </select>

            

                    <input class="form-control form-control-sm" type="time" placeholder="hora" aria-label=".form-control-sm example">

                    <button type="button " class="btn btn-success btn-sm">Reservar</button>
                </div>
      
            <div class="col-8">
                <div class="container">
                    <h6 class="display-6">Agenda del tipo y dia seleccionado</h6>
      <table class="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">First</th>
          <th scope="col">Last</th>
          <th scope="col">Handle</th>
        </tr>
      </thead>
      <tbody class="table-group-divider">
        <tr>
          <th scope="row">1</th>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td colspan="2">Larry the Bird</td>
          <td>@twitter</td>
        </tr>
      </tbody>
    </table>
                </div>
  
            </div>

        </div>

        <div class="row">

        </div>
    </div>
    <router-link to="/dashboard">Home</router-link>
</div>
</template>

<script>
export default {

}
</script>

<style lang="">

</style>
