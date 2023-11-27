<template>
<div class="accordion custom-header " id="accordionPanelsStayOpenExample">
    <div class="accordion-item">
        <h2 class="accordion-header">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapse1" aria-expanded="false" aria-controls="panelsStayOpen-collapse1">
                <v-icon name="fa-user-check" fill="blue" /> Datos de Consulta
            </button>
        </h2>
        <div id="panelsStayOpen-collapse1" class="accordion-collapse collapse">
            <div class="accordion-body">
                <nav>
                    <div class="nav nav-tabs" id="nav-tab" role="tablist">
                        <button class="nav-link active" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profileA" type="button" role="tab" aria-controls="nav-profile" aria-selected="true">
                            Motivo
                        </button>
                        <button class="nav-link" id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#nav-contactA" type="button" role="tab" aria-controls="nav-contact" aria-selected="false">
                            S vitales y M fisicas
                        </button>
                        <button class="nav-link" id="nav-disabled-tab" data-bs-toggle="tab" data-bs-target="#nav-disabledA" type="button" role="tab" aria-controls="nav-disabled" aria-selected="false">
                            Antecedentes
                        </button>

                    </div>
                </nav>
                <!-- !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! -->
                <div class="tab-content" id="nav-tabContent">
                    <div class="tab-pane fade show active" id="nav-profileA" role="tabpanel" aria-labelledby="nav-profile-tab" tabindex="0">
                        <div class="mb-3">
                            <br>
                            <textarea placeholder="Motivo de Consulta" v-model="motivoConsulta" class="form-control textarea" id="text_motivoconsulta" rows="3"></textarea>
                        </div>

                        <div class="mb-3">

                            <textarea placeholder="Diagnostico Medico" v-model="diagnostico" class="form-control textarea" id="text_diagnosticomedico" rows="3"></textarea>
                        </div>

                        <div class="mb-3">

                            <textarea placeholder="Tratamientos Previos" v-model="TratPrevios" class="form-control textarea" id="text_tratamientosprevios" rows="3"></textarea>
                        </div>

                    </div>

                    <div class="tab-pane fade" id="nav-contactA" role="tabpanel" aria-labelledby="nav-contact-tab" tabindex="0">
                        <div class="container">
                            <br />
                            <div class="row">
                                <div class="col-5">
                                    <p>Medidas Fisicas</p>
                                    <div class="container">
                                        <div class="input-group mb-1">
                                            <input type="number" class="form-control form-control-sm textarea" id="text_peso" v-model="peso" placeholder="Peso (kg)" />
                                        </div>
                                        <div class="input-group mb-1">
                                            <input type="number" class="form-control form-control-sm textarea" id="text_talla" v-model="talla" placeholder="Talla (Cm)" />
                                        </div>
                                        <div class="input-group mb-1">
                                            <input type="number" class="form-control form-control-sm textarea" id="text_estatura" v-model="estatura" placeholder="Estatura (Cm)" />
                                        </div>
                                        <div class="input-group mb-1">
                                            <input type="number" class="form-control form-control-sm textarea" id="text_imc" v-model="imc" placeholder="IMC" />
                                        </div>
                                    </div>
                                </div>

                                <div class="col-5">
                                    <p>Signos Vitales</p>
                                    <div class="mb-1">
                                        <input type="number" class="form-control form-control-sm textarea" id="text_temp" v-model="temp" placeholder="Temp (C)" />
                                    </div>
                                    <div class="mb-1">
                                        <input type="number" class="form-control form-control-sm textarea" id="text_fcardiaca" v-model="fcardiaca" placeholder="F.cardiaca" />
                                    </div>
                                    <div class="mb-1">
                                        <input type="number" class="form-control form-control-sm textarea" id="text_frespiratoria" v-model="frespiratoria" placeholder="F.respiraotria" />
                                    </div>
                                    <div class="mb-1">
                                        <input type="number" class="form-control form-control-sm textarea" id="text_tarterial" v-model="tarterial" placeholder="T.Arterial" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="tab-pane fade" id="nav-disabledA" role="tabpanel" aria-labelledby="nav-disabled-tab" tabindex="0">
                        <br />

                        <div class="row">
                            <div class="col-12">
                                <div class="container">
                                    <div class="mb-1">
                                        <select v-on:change="buscarenf(tipoAnt)" v-model="tipoAnt" class="form-select form-select-sm textarea" aria-label="Default select example">
                                            <option value="0">Tipo de antecedente</option>
                                            <option v-for="(ant, index) in this.dataBD" :key="index" :value="ant.id">{{ant.nombre}}</option>

                                        </select>
                                    </div>
                                    <div class="mb-1" v-if="tipoAnt!=0 ">
                                        <select v-model="Enfermedad" class="form-select form-select-sm textarea" aria-label="Default select example">
                                            <option value="">Seleccione enfermedad</option>
                                            <option v-for="(item, index) in  this.enf" :key="index" value="{{index}}">{{item}}</option>

                                        </select>
                                    </div>

                                    <div class="mb-1">
                                        <textarea class="form-control form-control-sm textarea" id="exampleFormControlTextarea1" placeholder="Detalle" v-model="DetalleEnfHeredoF" rows="2"></textarea>
                                    </div>
                                    <button class="btn btn-primary btn-sm textarea" type="submit">
                                        Adicionar
                                    </button>
                                </div>
                            </div>

                            <div class="col-12 ">

                                <div class="container">

                                    <div class="table-responsive">
                                        <table class="table">
                                            <thead>
                                                <tr>
                                                    <th scope="col">Tipo</th>
                                                    <th scope="col">Enfermedad</th>
                                                    <th scope="col">Detalle</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>Mark</td>
                                                    <td>Otto</td>
                                                    <td>@mdo</td>
                                                </tr>
                                                <tr>
                                                    <td>Jacob</td>
                                                    <td>Thornton</td>
                                                    <td>@fat</td>
                                                </tr>
                                                <tr>
                                                    <td colspan="2">Larry the Bird</td>
                                                    <td>@twitter</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    </div>

    <!-- modal -->

    <div class="modal fade" id="Modalhc1" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">

                    <div class="mb-1">

                        <select class="form-select form-select-sm" aria-label="Small select example">
                            <option selected>Open this select menu</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                    </div>
                    <div class="mb-3">

                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="informeacion"></textarea>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary">Save changes</button>
                </div>
            </div>
        </div>
    </div>

    <!-- --------------------------------------------------OBSERVACION  -->
    <div class="accordion-item">
        <h2 class="accordion-header">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapse2" aria-expanded="false" aria-controls="panelsStayOpen-collapse2">
                <v-icon name="io-construct-sharp" fill="red" scale="0.7" />
                Observacion
            </button>
        </h2>
        <div id="panelsStayOpen-collapse2" class="accordion-collapse collapse">
            <div class="accordion-body">
                <!--  -->
                <p>Inventario general y sistematico a nivel corporal, emocional,personal y social desde el primer contactovisual con la persona que asiste</p>
                <br>
                <nav>
                    <div class="nav nav-tabs" id="nav-tab" role="tablist">
                        <button class="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-homeB" type="button" role="tab" aria-controls="nav-home" aria-selected="true">
                            Marcha/Deambulacion
                        </button>
                        <button class="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profileB" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">
                            Movilidad/Traslados
                        </button>
                    </div>
                </nav>
                <div class="tab-content" id="nav-tabContent">
                    <div class="tab-pane fade show active" id="nav-homeB" role="tabpanel" aria-labelledby="nav-home-tab" tabindex="0">

                        <div class="container">
                            <br>

                            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#Modalhc1">+add</button>
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
                    </div>
                    <div class="tab-pane fade" id="nav-profileB" role="tabpanel" aria-labelledby="nav-profile-tab" tabindex="0">
                        <div class="container">
                            <br>

                            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#Modalhc1">+add</button>
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
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!--  Inspeccion Estatica-->
    <div class="accordion-item">
        <h2 class="accordion-header">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapse3" aria-expanded="false" aria-controls="panelsStayOpen-collapse3">
                <v-icon name="io-construct-sharp" fill="red" scale="0.7" />
                Inspeccion Estatica
            </button>
        </h2>
        <div id="panelsStayOpen-collapse3" class="accordion-collapse collapse">
            <div class="accordion-body">
                <p>Evaluacion de la postura:(Comparando con el lado colateral)</p>
            </div>

            <nav>
                <div class="nav nav-tabs" id="nav-tab" role="tablist">
                    <button class="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">Piel</button>
                    <button class="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">Lesiones</button>
                    <button class="nav-link" id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#nav-contact" type="button" role="tab" aria-controls="nav-contact" aria-selected="false">Biotipo</button>
                    <button class="nav-link" id="nav-disabled-tab" data-bs-toggle="tab" data-bs-target="#nav-disabled" type="button" role="tab" aria-controls="nav-disabled" aria-selected="false">Postura</button>
                </div>
            </nav>
            <div class="tab-content" id="nav-tabContent">
                <div class="tab-pane fade show active m-3" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab" tabindex="0">
                    <button type="button" class="btn btn-primary btn-sm">+Add</button>
                    <table class="table table-sm">
                        <thead>
                            <tr>
                                <th scope="col">Tipo</th>
                                <th scope="col">Hallazgo</th>
                                <th scope="col">Especificacion</th>

                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Mark</td>
                                <td>Mark</td>
                                <td>Otto</td>

                            </tr>
                            <tr>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>Mark</td>
                            </tr>
                            <tr>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>Mark</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div class="tab-pane fade  m-3" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab" tabindex="0">
                    <button type="button" class="btn btn-primary btn-sm">+Add</button>
                    <table class="table table-sm">
                        <thead>
                            <tr>
                                <th scope="col">Tipo</th>
                                <th scope="col">Hallazgo</th>
                                <th scope="col">Especificacion</th>

                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Mark</td>
                                <td>Mark</td>
                                <td>Otto</td>

                            </tr>
                            <tr>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>Mark</td>
                            </tr>
                            <tr>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>Mark</td>
                            </tr>
                        </tbody>
                    </table>

                </div>
                <div class="tab-pane fade  m-3" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab" tabindex="0">
                    <button type="button" class="btn btn-primary btn-sm">+Add</button>
                    <table class="table table-sm">
                        <thead>
                            <tr>
                                <th scope="col">Tipo</th>
                                <th scope="col">Hallazgo</th>
                                <th scope="col">Especificacion</th>

                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Mark</td>
                                <td>Mark</td>
                                <td>Otto</td>

                            </tr>
                            <tr>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>Mark</td>
                            </tr>
                            <tr>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>Mark</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div class="tab-pane fade  m-3" id="nav-disabled" role="tabpanel" aria-labelledby="nav-disabled-tab" tabindex="0">
                    <button type="button" class="btn btn-primary btn-sm">+Add</button>
                    <table class="table table-sm">
                        <thead>
                            <tr>
                                <th scope="col">Tipo</th>
                                <th scope="col">Hallazgo</th>
                                <th scope="col">Especificacion</th>

                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Mark</td>
                                <td>Mark</td>
                                <td>Otto</td>

                            </tr>
                            <tr>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>Mark</td>
                            </tr>
                            <tr>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>Mark</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
    <!--  Alineacion corporal -->
    <div class="accordion-item">
        <h2 class="accordion-header">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapse4" aria-expanded="false" aria-controls="panelsStayOpen-collapse4">
                <v-icon name="io-construct-sharp" fill="red" scale="0.7" />
                Evaluacion Postural
            </button>
        </h2>
        <div id="panelsStayOpen-collapse4" class="accordion-collapse collapse">
            <div class="accordion-body">
                <ul class="nav nav-tabs" id="myTab" role="tablist">
                    <li class="nav-item" role="presentation">
                      <button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#vanterior" type="button" role="tab" aria-controls="home-tab-pane" aria-selected="true">V anterior</button>
                    </li>
                    <li class="nav-item" role="presentation">
                      <button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#vlateral" type="button" role="tab" aria-controls="profile-tab-pane" aria-selected="false">V lateral</button>
                    </li>
                    <li class="nav-item" role="presentation">
                      <button class="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#vposterior" type="button" role="tab" aria-controls="contact-tab-pane" aria-selected="false">V posterior</button>
                    </li>
                
                  </ul>
                  <div class="tab-content" id="myTabContent">
                    <div class="tab-pane fade show active" id="vanterior" role="tabpanel" aria-labelledby="home-tab" tabindex="0">


                        <p>Seleccione y agregue hallazgos </p>

                        <select class="form-select form-select-sm" aria-label="Small select example">
                            <option selected>clasificacion</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                        <select class="form-select form-select-sm" aria-label="Small select example">
                            <option selected>especificacion</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
        
                        <div class="mb-3">
                            <label for="exampleFormControlTextarea1" class="form-label">Detalle</label>
                            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                        </div>
                        <div class="row">
                            <button type="button" class="btn btn-primary btn-sm">agregar</button>
                        </div>
        
                        <table class="table tabler-sm">
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
                    <div class="tab-pane fade" id="vlateral" role="tabpanel" aria-labelledby="profile-tab" tabindex="0">

                        <p>Seleccione y agregue hallazgos </p>

                        <select class="form-select form-select-sm" aria-label="Small select example">
                            <option selected>clasificacion</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                        <select class="form-select form-select-sm" aria-label="Small select example">
                            <option selected>especificacion</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
        
                        <div class="mb-3">
                            <label for="exampleFormControlTextarea1" class="form-label">Detalle</label>
                            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                        </div>
                        <div class="row">
                            <button type="button" class="btn btn-primary btn-sm">agregar</button>
                        </div>
        
                        <table class="table tabler-sm">
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
                    <div class="tab-pane fade" id="vposterior" role="tabpanel" aria-labelledby="contact-tab" tabindex="0">
                        <p>Seleccione y agregue hallazgos </p>

                        <select class="form-select form-select-sm" aria-label="Small select example">
                            <option selected>clasificacion</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                        <select class="form-select form-select-sm" aria-label="Small select example">
                            <option selected>especificacion</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
        
                        <div class="mb-3">
                            <label for="exampleFormControlTextarea1" class="form-label">Detalle</label>
                            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                        </div>
                        <div class="row">
                            <button type="button" class="btn btn-primary btn-sm">agregar</button>
                        </div>
        
                        <table class="table tabler-sm">
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
             
                  </div>
     

            </div>
        </div>
    </div>

    <!-- iNSPECCION dINAMICA -->
    <div class="accordion-item">
        <h2 class="accordion-header">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapse5" aria-expanded="false" aria-controls="panelsStayOpen-collapse5">
                <v-icon name="io-construct-sharp" fill="red" scale="0.7" />
                Inspeccion Dinamica
            </button>
        </h2>
        <div id="panelsStayOpen-collapse5" class="accordion-collapse collapse">
            <div class="accordion-body">
            <p>Analisis cualitativo de la Marcha</p>
                <!--  -->
                <nav>
                    <div class="nav nav-tabs" id="nav-tab" role="tablist">
                        <button class="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-homeE" type="button" role="tab" aria-controls="nav-home" aria-selected="true">
                            Fase de Apoyo
                        </button>
                        <button class="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profileE" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">
                           Fase de Balanceo
                        </button>
                        <button class="nav-link" id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#nav-contactE" type="button" role="tab" aria-controls="nav-contact" aria-selected="false">
                           Adaptaciones
                        </button>
                    </div>
                </nav>
                <div class="tab-content" id="nav-tabContent">
                    <div class="tab-pane fade show active" id="nav-homeE" role="tabpanel" aria-labelledby="nav-home-tab" tabindex="0">
                        <p>Seleccione y agregue hallazgos </p>

                        <select class="form-select form-select-sm" aria-label="Small select example">
                            <option selected>clasificacion</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                        <select class="form-select form-select-sm" aria-label="Small select example">
                            <option selected>especificacion</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
        
                        <div class="mb-3">
                            <label for="exampleFormControlTextarea1" class="form-label">Detalle</label>
                            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                        </div>
                        <div class="row">
                            <button type="button" class="btn btn-primary btn-sm">agregar</button>
                        </div>
        
                        <table class="table tabler-sm">
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
                    <div class="tab-pane fade" id="nav-profileE" role="tabpanel" aria-labelledby="nav-profile-tab" tabindex="0">
                        <p>Seleccione y agregue hallazgos </p>

                        <select class="form-select form-select-sm" aria-label="Small select example">
                            <option selected>clasificacion</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                        <select class="form-select form-select-sm" aria-label="Small select example">
                            <option selected>especificacion</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
        
                        <div class="mb-3">
                            <label for="exampleFormControlTextarea1" class="form-label">Detalle</label>
                            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                        </div>
                        <div class="row">
                            <button type="button" class="btn btn-primary btn-sm">agregar</button>
                        </div>
        
                        <table class="table tabler-sm">
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
                    <div class="tab-pane fade" id="nav-contactE" role="tabpanel" aria-labelledby="nav-contact-tab" tabindex="0">
                        <p>Seleccione y agregue hallazgos </p>

                        <select class="form-select form-select-sm" aria-label="Small select example">
                            <option selected>clasificacion</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                        <select class="form-select form-select-sm" aria-label="Small select example">
                            <option selected>Fase</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                        <select class="form-select form-select-sm" aria-label="Small select example">
                            <option selected>especificacion</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                        <div class="mb-3">
                            <label for="exampleFormControlTextarea1" class="form-label">Detalle</label>
                            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                        </div>
                        <div class="row">
                            <button type="button" class="btn btn-primary btn-sm">agregar</button>
                        </div>
        
                        <table class="table tabler-sm">
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
                </div>
            </div>
        </div>
    </div>
    <div class="accordion-item">
        <h2 class="accordion-header">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapse6" aria-expanded="false" aria-controls="panelsStayOpen-collapse6">
                <v-icon name="io-construct-sharp" fill="red" scale="0.7" />
                Sistema muscular
            </button>
        </h2>
        <div id="panelsStayOpen-collapse6" class="accordion-collapse collapse">
            <div class="accordion-body">
                inspección y palpación fuerza muscular evaluación muscular (escala
                Daniels) (cuello-tronco-hombro-codo-muñeca-cadera-dedos de la
                mano-rodilla, tobillos dedos de los pies)

                <!--  -->

                <nav>
                    <div class="nav nav-tabs" id="nav-tab" role="tablist">
                        <button class="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">
                            Home
                        </button>
                        <button class="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">
                            Profile
                        </button>
                        <button class="nav-link" id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#nav-contact" type="button" role="tab" aria-controls="nav-contact" aria-selected="false">
                            Contact
                        </button>
                        <button class="nav-link" id="nav-disabled-tab" data-bs-toggle="tab" data-bs-target="#nav-disabled" type="button" role="tab" aria-controls="nav-disabled" aria-selected="false" disabled>
                            Disabled
                        </button>
                    </div>
                </nav>
                <div class="tab-content" id="nav-tabContent">
                    <div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab" tabindex="0">
                        ...
                    </div>
                    <div class="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab" tabindex="0">
                        ...
                    </div>
                    <div class="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab" tabindex="0">
                        ...
                    </div>
                    <div class="tab-pane fade" id="nav-disabled" role="tabpanel" aria-labelledby="nav-disabled-tab" tabindex="0">
                        ...
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="accordion-item">
        <h2 class="accordion-header">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapse7" aria-expanded="false" aria-controls="panelsStayOpen-collapse7">
                <v-icon name="ai-biorxiv-square" fill="blue" /> Pruebas de Imagen o
                Examenes Complementarios
            </button>
        </h2>
        <div id="panelsStayOpen-collapse7" class="accordion-collapse collapse">
            <div class="accordion-body">
                <nav>
                    <div class="nav nav-tabs" id="nav-tab" role="tablist">
                        <button class="nav-link active" id="nav-b-radiografia" data-bs-toggle="tab" data-bs-target="#nav-radiografia" type="button" role="tab" aria-controls="nav-home" aria-selected="true">
                            Radiografia
                        </button>
                        <button class="nav-link" id="nav-b-ecografia" data-bs-toggle="tab" data-bs-target="#nav-ecografia" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">
                            Ecografia
                        </button>
                        <button class="nav-link" id="nav-b-resonancia" data-bs-toggle="tab" data-bs-target="#nav-resonancia" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">
                            Resonancia
                        </button>
                        <button class="nav-link" id="nav-b-tag" data-bs-toggle="tab" data-bs-target="#nav-tag" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">
                            TAG
                        </button>
                        <button class="nav-link" id="nav-b-otros" data-bs-toggle="tab" data-bs-target="#nav-otros" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">
                            Otros
                        </button>
                    </div>
                </nav>
                <div class="tab-content" id="nav-tabContent">
                    <div class="tab-pane fade show active" id="nav-radiografia" role="tabpanel" aria-labelledby="nav-home-tab" tabindex="0">
                        <div class="mb-3">
                            <label for="exampleFormControlTextarea1" class="form-label">Breve descripcion de la Radiografia</label>
                            <textarea class="form-control textarea" id="exampleFormControlTextarea1" rows="3" v-model="radiografia"></textarea>
                        </div>
                    </div>
                    <div class="tab-pane fade" id="nav-ecografia" role="tabpanel" aria-labelledby="nav-profile-tab" tabindex="0">
                        <div class="mb-3">
                            <label for="exampleFormControlTextarea1" class="form-label">Breve descripcion de la Ecografia</label>
                            <textarea class="form-control textarea" id="exampleFormControlTextarea1" rows="3" v-model="ecografia"></textarea>
                        </div>
                    </div>
                    <div class="tab-pane fade" id="nav-resonancia" role="tabpanel" aria-labelledby="nav-profile-tab" tabindex="0">
                        <div class="mb-3">
                            <label for="exampleFormControlTextarea1" class="form-label">Breve descripcion de la Resonancia</label>
                            <textarea class="form-control textarea" id="exampleFormControlTextarea1" rows="3" v-model="resonancia"></textarea>
                        </div>
                    </div>
                    <div class="tab-pane fade" id="nav-tag" role="tabpanel" aria-labelledby="nav-profile-tab" tabindex="0">
                        <div class="mb-3">
                            <label for="exampleFormControlTextarea1" class="form-label">Breve descripcion del TAG</label>
                            <textarea class="form-control textarea" id="exampleFormControlTextarea1" rows="3" v-model="tag"></textarea>
                        </div>
                    </div>
                    <div class="tab-pane fade" id="nav-otros" role="tabpanel" aria-labelledby="nav-profile-tab" tabindex="0">
                        <div class="mb-3">
                            <label for="exampleFormControlTextarea1" class="form-label">Breve descripcion de Otros</label>
                            <textarea class="form-control textarea" id="exampleFormControlTextarea1" rows="3" v-model="otros"></textarea>
                        </div>
                    </div>
                </div>
                imgdiag
            </div>
        </div>
    </div>
    <div class="accordion-item">
        <h2 class="accordion-header">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapse8" aria-expanded="false" aria-controls="panelsStayOpen-collapse8">
                <v-icon name="io-construct-sharp" fill="red" scale="0.7" />
                Maniobras, Escalas o Tests Exploratorios
            </button>
        </h2>
        <div id="panelsStayOpen-collapse8" class="accordion-collapse collapse">
            <div class="accordion-body">
                <strong>This is the second item's accordion body.</strong> It is
                hidden by default, until the collapse plugin adds the appropriate
                classes that we use to style each element. These classes control the
                overall appearance, as well as the showing and hiding via CSS
                transitions. You can modify any of this with custom CSS or overriding
                our default variables. It's also worth noting that just about any HTML
                can go within the <code>.accordion-body</code>, though the transition
                does limit overflow.
            </div>
        </div>
    </div>
    <div class="accordion-item">
        <h2 class="accordion-header">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapse9" aria-expanded="false" aria-controls="panelsStayOpen-collapse9">
                <v-icon name="io-construct-sharp" fill="red" scale="0.7" />
                Plan Analitico de Atencion Fisioterapeutica
            </button>
        </h2>
        <div id="panelsStayOpen-collapse9" class="accordion-collapse collapse">
            <div class="accordion-body">
                procedimiento actual diagnostico(funcional)fisioterapéutico pronóstico
                de enfermedad objetivos del tratamiento (generales y específicos) plan
                de atención y tratamientos observaciones

                <!--  -->

                <nav>
                    <div class="nav nav-tabs" id="nav-tab" role="tablist">
                        <button class="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">
                            Home
                        </button>
                        <button class="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">
                            Profile
                        </button>
                        <button class="nav-link" id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#nav-contact" type="button" role="tab" aria-controls="nav-contact" aria-selected="false">
                            Contact
                        </button>
                        <button class="nav-link" id="nav-disabled-tab" data-bs-toggle="tab" data-bs-target="#nav-disabled" type="button" role="tab" aria-controls="nav-disabled" aria-selected="false" disabled>
                            Disabled
                        </button>
                    </div>
                </nav>
                <div class="tab-content" id="nav-tabContent">
                    <div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab" tabindex="0">
                        ...
                    </div>
                    <div class="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab" tabindex="0">
                        ...
                    </div>
                    <div class="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab" tabindex="0">
                        ...
                    </div>
                    <div class="tab-pane fade" id="nav-disabled" role="tabpanel" aria-labelledby="nav-disabled-tab" tabindex="0">
                        ...
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="accordion-item">
        <h2 class="accordion-header">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapse10" aria-expanded="false" aria-controls="panelsStayOpen-collapse10">
                <v-icon name="fa-hand-holding-medical" fill="blue" />
                Tratamiento
            </button>
        </h2>
        <div id="panelsStayOpen-collapse10" class="accordion-collapse collapse">
            <div class="accordion-body">
                <div class="mb-3">
                    <label for="exampleFormControlTextarea1" class="form-label">Descripcion</label>
                    <textarea class="form-control textarea" id="exampleFormControlTextarea1" rows="3" v-model="descripcion"></textarea>
                </div>
                tratamiento

            </div>
        </div>

        <div>

        </div>
    </div>

    <div class="accordion-item">
        <h2 class="accordion-header">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapse11" aria-expanded="false" aria-controls="panelsStayOpen-collapse11">
                <v-icon name="fa-hand-holding-medical" fill="blue" />
                Guardar Historia clinica
            </button>
        </h2>
        <div id="panelsStayOpen-collapse11" class="accordion-collapse collapse">
            <div class="accordion-body">

                <button type="button" class="btn btn-primary btn-sm">guardar historia clinica</button>
            </div>
        </div>

        <div>

        </div>
    </div>

</div>
</template>

<script>
import {
    Antecedentes
} from './../firebase/bd'
export default {
    components: {

    },

    data: () => ({

        dataBD: Antecedentes,
        tipoAnt: "",
        Enfermedad: "",
        motivoConsulta: "",
        diagnostico: "",
        TratPrevios: "",
        peso: "",
        talla: "",
        estatura: "",
        imc: "",
        temp: "",
        fcardiaca: "",
        frespiratoria: "",
        tarterial: "",
        ParentescoEnfHeredoF: "",
        DetalleEnfHeredoF: "",
        radiografia: "",
        ecografia: "",
        resonancia: "",
        tag: "",
        otros: "",
        descripcion: "",
        enf: "",
        /*  */

    }),
    methods: {
        buscarenf(id) {
            this.enf = this.dataBD[id].enfermedades;
            console.log(this.enf);
            /*     console.log(id); */
        }

    }

}
</script>
