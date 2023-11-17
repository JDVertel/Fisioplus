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
                daros personales 
              </div>
                <div class="card-body">

                    <div class="container">
                        <div class="row">
                            <div class="col-2 retrato" style="margin: 10px">
                                <img src="./../../assets/images/usuario.jpg" class="imagenhc" alt="..." />
                            </div>
                            <div class="col-9">
                                <div class="container" style="margin: 10px">
                                    <h5>
                                        <strong>
                                            <v-icon name="ri-health-book-line" /> Datos
                                            Personales</strong>
                                    </h5>
                                    <div class="row">
                                        <div class="col-6 col-md-3">nombre1</div>
                                        <div class="col-6 col-md-3">nombre2</div>
                                        <div class="col-6 col-md-3">apellido1</div>
                                        <div class="col-6 col-md-3">apellido2</div>
                                        <div class="col-6 col-md-3">sexo</div>
                                        <div class="col-6 col-md-3">EDAD</div>
                                        <div class="col-6 col-md-3">s_tipodoc</div>
                                        <div class="col-6 col-md-3">numdoc</div>
                                        <div class="col-6 col-md-3">tiposangre</div>
                                        <div class="col-6 col-md-3">ecivil</div>
                                        <div class="col-6 col-md-3">escolaridad</div>
                                        <div class="col-6 col-md-3">ocupacion</div>
                                        <div class="col-6 col-md-3">direccion</div>
                                        <div class="col-6 col-md-3">cel</div>
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

                    <div class="tab-pane fade" id="pills_HC" role="tabpanel" aria-labelledby="pills_HC-tab" tabindex="0">
                        <C_Hc />
                        <br />
                        <div class="row">
                            <homeB />
                            <div class="col-6">
                                <button type="button" class="btn btn-primary btn-sm">
                                    Guardar Historia Clinica
                                </button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>    </div>
          </div>
        </div>
        <br />
        <br />
        <br />
    </div>
</div>
</template>

<script>
import C_Hc from "../../components/h_clinica.vue";
import homeB from "./../../components/homebutton.vue";
import Registro from "./../hc/registroForm.vue"

let registrado = 1
</script>
