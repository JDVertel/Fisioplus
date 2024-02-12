<template>
<br>
<div>
    <div class="container">
        <table class="table table-sm">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">First</th>
                <th scope="col">Last</th>
                <th scope="col">Handle</th>
              </tr>
            </thead>
            <tbody>
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
    <div class="container">
        <h6 class="display-6">Realizar una reserva </h6>
        <h6>Buscar o crear un usuario</h6>

        <div class="row">
            <div class="col-3">
                <select class="form-select form-select-sm textarea" id="inputGroupSelect01" v-model="B_tipodoc">
                    <option selected value="">Tipo</option>
                    <option value="cc">CC</option>
                    <option value="ti">TI</option>
                    <option value="ce">CE</option>
                    <option value="pa">PASAPORTE</option>
                </select>
            </div>
            <div class="col-4">
                <input type="number" class="form-control form-control-sm textarea" id="text_numdoc" placeholder="Numero Documento" v-model="B_numdoc" />
            </div>
            <div class="col-3 ">
                <button class="btn btn-success btn-sm" @click="Buscarpaciente">Buscar</button>
            </div>

            <div class="col-2 text-center">
                <button class="btn btn-warning btn-sm">+</button>
            </div>
        </div>
    </div>

    <!--  aqui comoponente de registro de usuario -->
    <div v-if="this.existepaciente==false">
        <registroPaciente />
    </div>
    <br>
    <div class="container">

        <div class="card">
            <div class="card-header">
                Datos del usuario
            </div>
            <table class="table table-sm">
                <thead>
                    <tr>
                        <th>Documento</th>
                        <th>Nombre</th>
                        <th>Reservas</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>fecha1</td>
                    </tr>
                </tbody>
            </table>
        </div>

        <hr>
        <div class="container">
            <div class="row">

                <h6 class="display-6">Seleccione tipo y fecha de consulta </h6>
                <div class="row">
                    <div class="col-6 col-md-3"> <select class="form-select form-select-sm textarea" id="inputGroupSelect01">
                            <option selected>Tipo de Reserva</option>
                            <option value="cc">Terapia</option>
                            <option value="ti">Consulta</option>
                            <option value="ti">Clase</option>
                        </select></div>
                        <div class="col-6 col-md-3">
                    <select class="form-select form-select-sm textarea" id="inputGroupSelect01">
                        <option selected>Profesional</option>
                        <option value="cc">Erika</option>
                        <option value="ti">Ramon</option>
                        <option value="ti">Juliana</option>
                    </select></div>
                    <div class="col-6 col-md-3">
                    <select class="form-select form-select-sm textarea" id="inputGroupSelect01">
                        <option selected>Dia de reserva</option>
                        <option value="cc">Terapia</option>
                        <option value="ti">Consulta</option>
                        <option value="ti">Clase</option>
                    </select></div>
                    <div class="col-6 col-md-3">
                    <input class="form-control form-control-sm" type="time" placeholder="hora" aria-label=".form-control-sm example">
                </div>
                    <button type="button " class="btn btn-success btn-sm">Reservar</button>
                </div>
                <br>
                <div class="container">
                    <h6 class="display-6">Agenda del tipo y dia seleccionado</h6>
                    <table class="table table-sm">
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
 
    </div>
    <router-link to="/dashboard">Home</router-link>
</div>
</template>

<script>
import registroPaciente from '@/components/usuarios/registro.vue'
export default {

    data: () => ({

        B_tipodoc: "",
        B_numdoc: "",
        //Auth
        existepaciente: true,
        id_registrado: "",
    }),
    components: {
        registroPaciente,
    },
    methods: {
        Buscarpaciente() {
            const id = this.B_tipodoc + this.B_numdoc;
            console.log("paciente buscado", id)
        }
    }
}
</script>

<style lang="">

</style>
