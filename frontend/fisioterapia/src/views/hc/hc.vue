<template>
<div class="container-fluid mt-3">
    <div class="row">
        <p class="mb-1 display-6 text-center">Buscar Paciente</p>
    </div>
    <div class="container">
        <input type="text" class="form-control-sm textarea" id="search textarea" placeholder="Numero de Documento" />

        <button class="btn btn-primary btn-sm" type="submit">Buscar</button>
    </div>
</div>

<hr />

<!-- **************************************************************************************************** -->
<div id="register" v-if="registrado==0">
    <h6 class="display-6 text-center">Paciente no Encontrado !!!</h6>

    <Registro />

</div>

<!-- **************************************************************************************************** -->
<div class="container" v-else>
    <div id="AppHC">
        <div class="container-fluid">
            <h1 class="display-6" style="text-align: center">Historia Clinica</h1>
            <div class="card">
                <div class="card-header">
                    Datos Personales
                </div>
                <div class="card-body">

                    <div class="container">
                        <div class="row">
                            <div class="col-2 retrato">
                                <img src="./../../assets/images/usuario.jpg" class="imagenhc" alt="..." />
                            </div>
                            <div class="col-10">
                                <div class="container" style="margin: 10px">
                                    <h5>
                                        <strong>
                                            <v-icon name="ri-health-book-line" /> Datos
                                            Personales</strong>
                                    </h5>
                                    <div class="row">
                                        <div class="col-12">Nombres:</div>
                                        <div class="col-12">Apellidos:</div>
                                        <div class="col-6 col-md-3">Sexo:</div>
                                        <div class="col-6 col-md-3">Edad:</div>
                                        <div class="col-6 col-md-3">TipoDoc:</div>
                                        <div class="col-6 col-md-3">Numdoc:</div>
                                        <div class="col-6 col-md-3">Tipo Sangre:</div>
                                        <div class="col-6 col-md-3">E Civil:</div>
                                        <div class="col-6 col-md-3">Escolaridad:</div>
                                        <div class="col-6 col-md-3">Ocupacion:</div>
                                        <div class="col-6 col-md-3">Direccion:</div>
                                        <div class="col-6 col-md-3">Celular:</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                <br />
                <hr>
                <div class="container">
                    <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
                        <li class="nav-item" role="presentation">
                            <button class="nav-link active" id="pills_historial" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">
                                Historial
                            </button>
                        </li>
                        <li class="nav-item" role="presentation">
                            <button class="nav-link" id="pills_HC-tab" data-bs-toggle="pill" data-bs-target="#pills_HC" type="button" role="tab" aria-controls="pills_HC" aria-selected="false">
                                Historia Clinica
                            </button>
                        </li>
                    </ul>

                    <div class="tab-content" id="pills-tabContent">
                        <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills_historial" tabindex="0">
                            <div class="table-responsive">
                                <table class="table table-sm">
                                    <thead>
                                        <tr>
                                            <th scope="col">Fecha</th>
                                            <th scope="col">Hallazgos</th>
                                            <th scope="col">Tratamientos</th>
                                            <th scope="col">Observaciones</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Jacob</td>
                                            <td>Mark</td>
                                            <td>Otto</td>
                                            <td>@mdo</td>
                                        </tr>
                                        <tr>
                                            <td>Jacob</td>
                                            <td>Jacob</td>
                                            <td>Thornton</td>
                                            <td>@fat</td>
                                        </tr>
                                        <tr>
                                            <td>Jacob</td>
                                            <td>Jacob</td>
                                            <td>Jacob</td>
                                            <td>@twitter</td>
                                        </tr>
                                    </tbody>
                                </table>
                                <homeB />
                            </div>
                        </div>

                      
                    </div>
                </div>
                <div class="tab-pane fade" id="pills_HC" role="tabpanel" aria-labelledby="pills_HC-tab" tabindex="0">
                    <C_Hc />
                    <br />
                    <div class="row">
                        <homeB />
                      

                    </div>
                </div>
            </div>
        </div>
        <br />
        <br />
        <br />
    </div>
</div>
</template>

<script>
import HC from "../../components/h_clinica.vue";
import homeB from "./../../components/homebutton.vue";
import Registro from "./../hc/registroForm.vue"

let registrado = 1
export default {

    components: {
        C_Hc:HC,
    }

}
</script>
