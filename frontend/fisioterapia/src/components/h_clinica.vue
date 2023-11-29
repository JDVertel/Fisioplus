<template>
<div class="accordion custom-header" id="accordionPanelsStayOpenExample">
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
                            <br />
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
                                            <option v-for="(ant, index) in this.dataBD" :key="index" :value="ant.id">
                                                {{ ant.nombre }}
                                            </option>
                                        </select>
                                    </div>
                                    <div class="mb-1" v-if="tipoAnt != 0">
                                        <select v-model="Enfermedad" class="form-select form-select-sm textarea" aria-label="Default select example">
                                            <option value="">Seleccione enfermedad</option>
                                            <option v-for="(item, index) in this.enf" :key="index" value="{{index}}">
                                                {{ item }}
                                            </option>
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

                            <div class="col-12">
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

div.col

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
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
                        Close
                    </button>
                    <button type="button" class="btn btn-primary">Save changes</button>
                </div>
            </div>
        </div>
    </div>

    <!-- --------------------------------------------------OBSERVACION  -->
    <div class="accordion-item">
        <h2 class="accordion-header">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapse2" aria-expanded="false" aria-controls="panelsStayOpen-collapse2">
                <v-icon name="fa-user-check" fill="blue" />
                Observacion
            </button>
        </h2>
        <div id="panelsStayOpen-collapse2" class="accordion-collapse collapse">
            <div class="accordion-body">
                <!--  -->
                <p>
                    Inventario general y sistematico a nivel corporal, emocional,personal y social
                    desde el primer contactovisual con la persona que asiste
                </p>
                <br />
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
                            <br />

                            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#Modalhc1">
                                +add
                            </button>
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
                            <br />

                            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#Modalhc1">
                                +add
                            </button>
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
    <!--  INSPECCION ESTATICA-->
    <div class="accordion-item">
        <h2 class="accordion-header">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapse3" aria-expanded="false" aria-controls="panelsStayOpen-collapse3">
                <v-icon name="fa-user-check" fill="blue" />
                Inspeccion Estatica
            </button>
        </h2>
        <div id="panelsStayOpen-collapse3" class="accordion-collapse collapse">
            <div class="accordion-body">
                <p>Evaluacion de la postura:(Comparando con el lado colateral)</p>
            </div>

            <nav>
                <div class="nav nav-tabs" id="nav-tab" role="tablist">
                    <button class="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">
                        Piel
                    </button>
                    <button class="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">
                        Lesiones
                    </button>
                    <button class="nav-link" id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#nav-contact" type="button" role="tab" aria-controls="nav-contact" aria-selected="false">
                        Biotipo
                    </button>
                    <button class="nav-link" id="nav-disabled-tab" data-bs-toggle="tab" data-bs-target="#nav-disabled" type="button" role="tab" aria-controls="nav-disabled" aria-selected="false">
                        Postura
                    </button>
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
                <div class="tab-pane fade m-3" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab" tabindex="0">
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
                <div class="tab-pane fade m-3" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab" tabindex="0">
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
                <div class="tab-pane fade m-3" id="nav-disabled" role="tabpanel" aria-labelledby="nav-disabled-tab" tabindex="0">
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
    <!--  ALINEACION CORPORAL -->
    <div class="accordion-item">
        <h2 class="accordion-header">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapse4" aria-expanded="false" aria-controls="panelsStayOpen-collapse4">
                <v-icon name="fa-user-check" fill="blue" />
                Evaluacion Postural
            </button>
        </h2>
        <div id="panelsStayOpen-collapse4" class="accordion-collapse collapse">
            <div class="accordion-body">
                <ul class="nav nav-tabs" id="myTab" role="tablist">
                    <li class="nav-item" role="presentation">
                        <button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#vanterior" type="button" role="tab" aria-controls="home-tab-pane" aria-selected="true">
                            V anterior
                        </button>
                    </li>
                    <li class="nav-item" role="presentation">
                        <button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#vlateral" type="button" role="tab" aria-controls="profile-tab-pane" aria-selected="false">
                            V lateral
                        </button>
                    </li>
                    <li class="nav-item" role="presentation">
                        <button class="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#vposterior" type="button" role="tab" aria-controls="contact-tab-pane" aria-selected="false">
                            V posterior
                        </button>
                    </li>
                </ul>
                <div class="tab-content" id="myTabContent">
                    <div class="tab-pane fade show active" id="vanterior" role="tabpanel" aria-labelledby="home-tab" tabindex="0">
                        <p>Seleccione y agregue hallazgos</p>

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
                        <p>Seleccione y agregue hallazgos</p>

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
                        <p>Seleccione y agregue hallazgos</p>

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

    <!-- INSPECCION DINAMICA -->
    <div class="accordion-item">
        <h2 class="accordion-header">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapse5" aria-expanded="false" aria-controls="panelsStayOpen-collapse5">
                <!--  <v-icon name="fa-user-check" fill="blue" /> -->
                <v-icon name="fa-user-check" fill="blue" />
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
                        <button class="nav-link" id="nav-contact-adapt" data-bs-toggle="tab" data-bs-target="#adaptaciones" type="button" role="tab" aria-controls="nav-contact" aria-selected="false">
                            Analisis cuantitativo
                        </button>
                    </div>
                </nav>
                <div class="tab-content" id="nav-tabContent">
                    <div class="tab-pane fade show active" id="nav-homeE" role="tabpanel" aria-labelledby="nav-home-tab" tabindex="0">
                        <p>Seleccione y agregue hallazgos</p>

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
                        <p>Seleccione y agregue hallazgos</p>

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
                    <div class="tab-pane fade" id="nav-contactE" role="tabpanel" aria-labelledby="nav-profile-tab" tabindex="0">
                        <p>Seleccione y agregue hallazgos</p>

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
                    <div class="tab-pane fade" id="adaptaciones" role="tabpanel" aria-labelledby="nav-contact-tab" tabindex="0">
                        <table class="table tabler-sm">
                            <thead>
                                <tr>
                                    <th scope="col">Datos a Evaluar</th>
                                    <th scope="col">Hombres</th>
                                    <th scope="col">Mujeres</th>
                                    <th scope="col">Derecha</th>
                                    <th scope="col">Izquierda</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="col">Longitud del paso</th>
                                    <td>79 cm</td>
                                    <td>66 cm</td>
                                    <td><input class="form-control form-control-sm" type="number" /></td>
                                    <td><input class="form-control form-control-sm" type="number" /></td>
                                </tr>
                                <tr>
                                    <th scope="col">Longitud de la zancada</th>
                                    <td>158 cm</td>
                                    <td>132 cm</td>
                                    <td><input class="form-control form-control-sm" type="number" /></td>
                                    <td><input class="form-control form-control-sm" type="number" /></td>
                                </tr>
                                <tr>
                                    <th scope="col">Anchura de paso</th>
                                    <td>8.1 cm</td>
                                    <td>7.1 cm</td>
                                    <td><input class="form-control form-control-sm" type="number" /></td>
                                    <td><input class="form-control form-control-sm" type="number" /></td>
                                </tr>
                                <tr>
                                    <th scope="col">Pasos por minuto</th>
                                    <td>117pm</td>
                                    <td>117pm</td>
                                    <td><input class="form-control form-control-sm" type="number" /></td>
                                    <td><input class="form-control form-control-sm" type="number" /></td>
                                </tr>
                                <tr>
                                    <th scope="col">Angulos del pie</th>
                                    <td>7-10°</td>
                                    <td>6°</td>
                                    <td><input class="form-control form-control-sm" type="number" /></td>
                                    <td><input class="form-control form-control-sm" type="number" /></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div class="row">
                        <button type="button" class="btn btn-info btn-sm">Guardar</button>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- escala visual del dolor -->
    <div class="accordion-item">
        <h2 class="accordion-header">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapse6" aria-expanded="false" aria-controls="panelsStayOpen-collapse6">
                <v-icon name="io-construct-sharp" fill="yellow" scale="0.7" />
                Escala Visual Analogica del Dolor
            </button>
        </h2>
        <div id="panelsStayOpen-collapse6" class="accordion-collapse collapse">
            <div class="accordion-body">
                <nav>
                    <div class="nav nav-tabs" id="nav-tab" role="tablist">
                        <button class="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-escala" type="button" role="tab" aria-controls="nav-home" aria-selected="true">
                            Escala
                        </button>
                        <button class="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-ubicacion" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">
                            Ubicacion
                        </button>
                        <button class="nav-link" id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#nav-semiologia" type="button" role="tab" aria-controls="nav-contact" aria-selected="false">
                            Semiologia
                        </button>
                    </div>
                </nav>
                <div class="tab-content" id="nav-tabContent">
                    <div class="tab-pane fade show active" id="nav-escala" role="tabpanel" aria-labelledby="nav-home-tab" tabindex="0">
                        <div class="container">
                            <div class="radio-container">
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="esc_0" />0
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="esc_1" />1
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="esc_2" />2
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="esc_3" />3
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="esc_4" />4
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="esc_5" />5
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="esc_6" />6
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="esc_7" />7
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="esc_8" />8
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="esc_9" />9
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="esc_10" />10
                                </div>
                            </div>

                            <div class="table-container">
                                <table class="default">
                                    <tr class="degradado">
                                        <th>&nbsp;</th>
                                        <th>&nbsp;</th>
                                        <th>&nbsp;</th>
                                        <th>&nbsp;</th>
                                        <th>&nbsp;</th>
                                        <th>&nbsp;</th>
                                        <th>&nbsp;</th>
                                        <th>&nbsp;</th>
                                        <th>&nbsp;</th>
                                        <th>&nbsp;</th>

                                        <th></th>
                                        <th></th>
                                    </tr>
                                </table>
                                <div class="row">
                                    <div class="col-2">0 - Sin dolor</div>
                                    <div class="col-2">2 - Poco</div>
                                    <div class="col-2">4 - Moderado</div>
                                    <div class="col-2">6 - Fuerte</div>
                                    <div class="col-2">8 - Muy fuerte</div>
                                    <div class="col-2">10 - Insoportable</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="tab-pane fade" id="nav-ubicacion" role="tabpanel" aria-labelledby="nav-profile-tab" tabindex="0">
                        2

                        <!--!FALTAN IMAGENES Y SELECTORES  -->
                    </div>
                    <div class="tab-pane fade" id="nav-semiologia" role="tabpanel" aria-labelledby="nav-contact-tab" tabindex="0">
                        <br />
                        <p>Detalle el dolor descrito por el Paciente</p>
                        <br />
                        <div class="container">
                            <div class="row mb-3">
                                <textarea class="form-control" id="exampleFormControlTextarea1" rows="2" placeholder="Circunstancias"></textarea>
                            </div>
                            <div class="row mb-3">
                                <textarea class="form-control" id="exampleFormControlTextarea2" rows="2" placeholder="Tipo"></textarea>
                            </div>
                            <div class="row mb-3">
                                <textarea class="form-control" id="exampleFormControlTextarea3" rows="2" placeholder="Antiguedad"></textarea>
                            </div>
                            <div class="row mb-3">
                                <textarea class="form-control" id="exampleFormControlTextarea4" rows="2" placeholder="Localización"></textarea>
                            </div>

                            <div class="row mb-3">
                                <textarea class="form-control" id="exampleFormControlTextarea5" rows="2" placeholder="Irradiación"></textarea>
                            </div>
                            <div class="row mb-3">
                                <textarea class="form-control" id="exampleFormControlTextarea6" rows="2" placeholder="Aumento"></textarea>
                            </div>
                            <div class="row mb-3">
                                <textarea class="form-control" id="exampleFormControlTextarea7" rows="2" placeholder="Atenuación"></textarea>
                            </div>
                            <div class="row mb-3">
                                <textarea class="form-control" id="exampleFormControlTextarea8" rows="2" placeholder="Duración"></textarea>
                            </div>
                            <div class="row mb-3">
                                <textarea class="form-control" id="exampleFormControlTextarea9" rows="2" placeholder="Actividades que le cuesta realizar"></textarea>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- pruebas de imagen complementaria -->
    <div class="accordion-item">
        <h2 class="accordion-header">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapse7" aria-expanded="false" aria-controls="panelsStayOpen-collapse7">
                <v-icon name="ai-biorxiv-square" fill="blue" /> Pruebas de Imagen o Examenes
                Complementarios
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

    <!-- EXPLORACION FISICA -->
    <div class="accordion-item">
        <h2 class="accordion-header d-flex justify-content-between">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapse8" aria-expanded="false" aria-controls="panelsStayOpen-collapse8">
                <v-icon name="io-construct-sharp" fill="red" scale="0.7" />
                Exploracion Fisica
            </button>
            <!--  -->
            <button class="btn btn-outline-primary btn-sm">save</button>

            <!--  -->
        </h2>
        <div id="panelsStayOpen-collapse8" class="accordion-collapse collapse">
            <div class="accordion-body">
                <nav>
                    <div class="nav nav-tabs" id="nav-tab" role="tablist">
                        <button class="nav-link" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-soseo" type="button" role="tab" aria-controls="nav-home" aria-selected="false">
                            S Oseo
                        </button>
                        <button class="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-msuperior" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">
                            VR movimientos(M Superior)
                        </button>
                        <button class="nav-link active" id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#nav-minferior" type="button" role="tab" aria-controls="nav-contact" aria-selected="true">
                            VR movimientos(M Inferior)
                        </button>
                    </div>
                </nav>
                <div class="tab-content" id="nav-tabContent">
                    <div class="tab-pane fade" id="nav-soseo" role="tabpanel" aria-labelledby="nav-home-tab" tabindex="0">
                        <p>Seleccione y agregue hallazgos</p>

                        <select class="form-select form-select-sm" aria-label="Small select example">
                            <option selected>tipo-parametro</option>
                            <!-- !debe mostrar (inspeccion/palpacion) y el parametro en una sola casilla -->
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
                    <div class="tab-pane fade" id="nav-msuperior" role="tabpanel" aria-labelledby="nav-profile-tab" tabindex="0">
                        <div class="accordion accordion-flush" id="accordionFlushExample">
                            <div class="accordion-item">
                                <h2 class="accordion-header">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                        <p class="centrado">Raquis Cervical</p>
                                    </button>
                                </h2>

                                <div id="flush-collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                    <div class="accordion-body">
                                        <!-- ----------------------------------------------------------------------------------------------------------------------------------- -->
                                        <div class="container">
                                            <div class="row">
                                                <div class="col-4">
                                                    <select class="form-select form-select-sm" aria-label="Default select example">
                                                        <option selected>Rango</option>
                                                        <option value="1">One</option>
                                                        <option value="2">Two</option>
                                                        <option value="3">Three</option>
                                                    </select>
                                                </div>
                                                <!-- !al seleccionar un rango debe mostrar la tabla de historial de esos rangos adicionalmente  -->
                                                <div class="col-3">
                                                    <input class="form-control form-control-sm" type="text" placeholder="izquierda" aria-label=".form-control-sm example" />
                                                </div>
                                                <div class="col-3">
                                                    <input class="form-control form-control-sm" type="text" placeholder="derecha" aria-label=".form-control-sm example" />
                                                </div>

                                                <div class="col-2">
                                                    <button type="button" class="btn btn-primary btn-sm">
                                                        +
                                                    </button>
                                                </div>
                                            </div>
                                        </div>

                                        <br />

                                        <p>Historial</p>

                                        <ul class="nav nav-tabs" id="myTab" role="tablist">
                                            <li class="nav-item" role="presentation">
                                                <button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#flexion" type="button" role="tab" aria-controls="home-tab-pane" aria-selected="true">
                                                    Fexion
                                                </button>
                                            </li>
                                            <li class="nav-item" role="presentation">
                                                <button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#extencion" type="button" role="tab" aria-controls="profile-tab-pane" aria-selected="false">
                                                    extencion
                                                </button>
                                            </li>
                                            <li class="nav-item" role="presentation">
                                                <button class="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#ilderecha" type="button" role="tab" aria-controls="contact-tab-pane" aria-selected="false">
                                                    ilderecha
                                                </button>
                                            </li>
                                            <li class="nav-item" role="presentation">
                                                <button class="nav-link" id="disabled-tab" data-bs-toggle="tab" data-bs-target="#ilizquierda" type="button" role="tab" aria-controls="disabled-tab-pane" aria-selected="false">
                                                    ilizquierda
                                                </button>
                                            </li>
                                            <li class="nav-item" role="presentation">
                                                <button class="nav-link" id="disabled-tab" data-bs-toggle="tab" data-bs-target="#roizquierda" type="button" role="tab" aria-controls="disabled-tab-pane" aria-selected="false">
                                                    roizquierda
                                                </button>
                                            </li>
                                            <li class="nav-item" role="presentation">
                                                <button class="nav-link" id="disabled-tab" data-bs-toggle="tab" data-bs-target="#roderecha" type="button" role="tab" aria-controls="disabled-tab-pane" aria-selected="false">
                                                    roderecha
                                                </button>
                                            </li>
                                        </ul>
                                        <div class="tab-content" id="myTabContent">
                                            <div class="tab-pane fade show active" id="flexion" role="tabpanel" aria-labelledby="home-tab" tabindex="0">
                                                <table class="table table-sm">
                                                    <thead>
                                                        <tr>
                                                            <th scope="col">Fecha</th>
                                                            <th scope="col">Rango</th>
                                                            <th scope="col">Derecho</th>
                                                            <th scope="col">izquierdo</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <th scope="row">10/12/2023</th>
                                                            <td>Fexion</td>
                                                            <td>40</td>
                                                            <td>45</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">15/12/2023</th>
                                                            <td>fexion</td>
                                                            <td>42</td>
                                                            <td>45</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">3</th>
                                                            <td colspan="2">Larry the Bird</td>
                                                            <td>@twitter</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                            <div class="tab-pane fade" id="extencion" role="tabpanel" aria-labelledby="profile-tab" tabindex="0">
                                                <table class="table table-sm">
                                                    <thead>
                                                        <tr>
                                                            <th scope="col">Fecha</th>
                                                            <th scope="col">Rango</th>
                                                            <th scope="col">Derecho</th>
                                                            <th scope="col">izquierdo</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <th scope="row">10/12/2023</th>
                                                            <td>Fexion</td>
                                                            <td>40</td>
                                                            <td>45</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">15/12/2023</th>
                                                            <td>fexion</td>
                                                            <td>42</td>
                                                            <td>45</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">3</th>
                                                            <td colspan="2">Larry the Bird</td>
                                                            <td>@twitter</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                            <div class="tab-pane fade" id="ilderecha" role="tabpanel" aria-labelledby="contact-tab" tabindex="0">
                                                <table class="table table-sm">
                                                    <thead>
                                                        <tr>
                                                            <th scope="col">Fecha</th>
                                                            <th scope="col">Rango</th>
                                                            <th scope="col">Derecho</th>
                                                            <th scope="col">izquierdo</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <th scope="row">10/12/2023</th>
                                                            <td>Fexion</td>
                                                            <td>40</td>
                                                            <td>45</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">15/12/2023</th>
                                                            <td>fexion</td>
                                                            <td>42</td>
                                                            <td>45</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">3</th>
                                                            <td colspan="2">Larry the Bird</td>
                                                            <td>@twitter</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                            <div class="tab-pane fade" id="ilizquierda" role="tabpanel" aria-labelledby="disabled-tab" tabindex="0">
                                                <table class="table table-sm">
                                                    <thead>
                                                        <tr>
                                                            <th scope="col">Fecha</th>
                                                            <th scope="col">Rango</th>
                                                            <th scope="col">Derecho</th>
                                                            <th scope="col">izquierdo</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <th scope="row">10/12/2023</th>
                                                            <td>Fexion</td>
                                                            <td>40</td>
                                                            <td>45</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">15/12/2023</th>
                                                            <td>fexion</td>
                                                            <td>42</td>
                                                            <td>45</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">3</th>
                                                            <td colspan="2">Larry the Bird</td>
                                                            <td>@twitter</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                            <div class="tab-pane fade" id="roizquierda" role="tabpanel" aria-labelledby="disabled-tab" tabindex="0">
                                                <table class="table table-sm">
                                                    <thead>
                                                        <tr>
                                                            <th scope="col">Fecha</th>
                                                            <th scope="col">Rango</th>
                                                            <th scope="col">Derecho</th>
                                                            <th scope="col">izquierdo</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <th scope="row">10/12/2023</th>
                                                            <td>Fexion</td>
                                                            <td>40</td>
                                                            <td>45</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">15/12/2023</th>
                                                            <td>fexion</td>
                                                            <td>42</td>
                                                            <td>45</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">3</th>
                                                            <td colspan="2">Larry the Bird</td>
                                                            <td>@twitter</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                            <div class="tab-pane fade" id="roderecha" role="tabpanel" aria-labelledby="disabled-tab" tabindex="0">
                                                <table class="table table-sm">
                                                    <thead>
                                                        <tr>
                                                            <th scope="col">Fecha</th>
                                                            <th scope="col">Rango</th>
                                                            <th scope="col">Derecho</th>
                                                            <th scope="col">izquierdo</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <th scope="row">10/12/2023</th>
                                                            <td>Fexion</td>
                                                            <td>40</td>
                                                            <td>45</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">15/12/2023</th>
                                                            <td>fexion</td>
                                                            <td>42</td>
                                                            <td>45</td>
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
                                        <!-- ----------------------------------------------------------------------------------------------- -->
                                    </div>
                                </div>
                            </div>

                            <div class="accordion-item">
                                <h2 class="accordion-header">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                        Raquis Dorsolumbar
                                    </button>
                                </h2>
                                <div id="flush-collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                    <div class="accordion-body">
                                        <div class="container">
                                            <div class="row">
                                                <div class="col-4">
                                                    <select class="form-select form-select-sm" aria-label="Default select example">
                                                        <option selected>Rango</option>
                                                        <option value="1">One</option>
                                                        <option value="2">Two</option>
                                                        <option value="3">Three</option>
                                                    </select>
                                                </div>
                                                <!-- !al seleccionar un rango debe mostrar la tabla de historial de esos rangos adicionalmente  -->
                                                <div class="col-3">
                                                    <input class="form-control form-control-sm" type="text" placeholder="izquierda" aria-label=".form-control-sm example" />
                                                </div>
                                                <div class="col-3">
                                                    <input class="form-control form-control-sm" type="text" placeholder="derecha" aria-label=".form-control-sm example" />
                                                </div>

                                                <div class="col-2">
                                                    <button type="button" class="btn btn-primary btn-sm">
                                                        +
                                                    </button>
                                                </div>
                                            </div>
                                        </div>

                                        <br />

                                        <p>Historial</p>

                                        <ul class="nav nav-tabs" id="myTab" role="tablist">
                                            <li class="nav-item" role="presentation">
                                                <button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#flexion" type="button" role="tab" aria-controls="home-tab-pane" aria-selected="true">
                                                    Fexion
                                                </button>
                                            </li>
                                            <li class="nav-item" role="presentation">
                                                <button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#extencion" type="button" role="tab" aria-controls="profile-tab-pane" aria-selected="false">
                                                    extencion
                                                </button>
                                            </li>
                                            <li class="nav-item" role="presentation">
                                                <button class="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#ilderecha" type="button" role="tab" aria-controls="contact-tab-pane" aria-selected="false">
                                                    ilderecha
                                                </button>
                                            </li>
                                            <li class="nav-item" role="presentation">
                                                <button class="nav-link" id="disabled-tab" data-bs-toggle="tab" data-bs-target="#ilizquierda" type="button" role="tab" aria-controls="disabled-tab-pane" aria-selected="false">
                                                    ilizquierda
                                                </button>
                                            </li>
                                            <li class="nav-item" role="presentation">
                                                <button class="nav-link" id="disabled-tab" data-bs-toggle="tab" data-bs-target="#roizquierda" type="button" role="tab" aria-controls="disabled-tab-pane" aria-selected="false">
                                                    roizquierda
                                                </button>
                                            </li>
                                            <li class="nav-item" role="presentation">
                                                <button class="nav-link" id="disabled-tab" data-bs-toggle="tab" data-bs-target="#roderecha" type="button" role="tab" aria-controls="disabled-tab-pane" aria-selected="false">
                                                    roderecha
                                                </button>
                                            </li>
                                        </ul>
                                        <div class="tab-content" id="myTabContent">
                                            <div class="tab-pane fade show active" id="flexion" role="tabpanel" aria-labelledby="home-tab" tabindex="0">
                                                <table class="table table-sm">
                                                    <thead>
                                                        <tr>
                                                            <th scope="col">Fecha</th>
                                                            <th scope="col">Rango</th>
                                                            <th scope="col">Derecho</th>
                                                            <th scope="col">izquierdo</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <th scope="row">10/12/2023</th>
                                                            <td>Fexion</td>
                                                            <td>40</td>
                                                            <td>45</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">15/12/2023</th>
                                                            <td>fexion</td>
                                                            <td>42</td>
                                                            <td>45</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">3</th>
                                                            <td colspan="2">Larry the Bird</td>
                                                            <td>@twitter</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                            <div class="tab-pane fade" id="extencion" role="tabpanel" aria-labelledby="profile-tab" tabindex="0">
                                                <table class="table table-sm">
                                                    <thead>
                                                        <tr>
                                                            <th scope="col">Fecha</th>
                                                            <th scope="col">Rango</th>
                                                            <th scope="col">Derecho</th>
                                                            <th scope="col">izquierdo</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <th scope="row">10/12/2023</th>
                                                            <td>Fexion</td>
                                                            <td>40</td>
                                                            <td>45</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">15/12/2023</th>
                                                            <td>fexion</td>
                                                            <td>42</td>
                                                            <td>45</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">3</th>
                                                            <td colspan="2">Larry the Bird</td>
                                                            <td>@twitter</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                            <div class="tab-pane fade" id="ilderecha" role="tabpanel" aria-labelledby="contact-tab" tabindex="0">
                                                <table class="table table-sm">
                                                    <thead>
                                                        <tr>
                                                            <th scope="col">Fecha</th>
                                                            <th scope="col">Rango</th>
                                                            <th scope="col">Derecho</th>
                                                            <th scope="col">izquierdo</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <th scope="row">10/12/2023</th>
                                                            <td>Fexion</td>
                                                            <td>40</td>
                                                            <td>45</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">15/12/2023</th>
                                                            <td>fexion</td>
                                                            <td>42</td>
                                                            <td>45</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">3</th>
                                                            <td colspan="2">Larry the Bird</td>
                                                            <td>@twitter</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                            <div class="tab-pane fade" id="ilizquierda" role="tabpanel" aria-labelledby="disabled-tab" tabindex="0">
                                                <table class="table table-sm">
                                                    <thead>
                                                        <tr>
                                                            <th scope="col">Fecha</th>
                                                            <th scope="col">Rango</th>
                                                            <th scope="col">Derecho</th>
                                                            <th scope="col">izquierdo</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <th scope="row">10/12/2023</th>
                                                            <td>Fexion</td>
                                                            <td>40</td>
                                                            <td>45</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">15/12/2023</th>
                                                            <td>fexion</td>
                                                            <td>42</td>
                                                            <td>45</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">3</th>
                                                            <td colspan="2">Larry the Bird</td>
                                                            <td>@twitter</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                            <div class="tab-pane fade" id="roizquierda" role="tabpanel" aria-labelledby="disabled-tab" tabindex="0">
                                                <table class="table table-sm">
                                                    <thead>
                                                        <tr>
                                                            <th scope="col">Fecha</th>
                                                            <th scope="col">Rango</th>
                                                            <th scope="col">Derecho</th>
                                                            <th scope="col">izquierdo</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <th scope="row">10/12/2023</th>
                                                            <td>Fexion</td>
                                                            <td>40</td>
                                                            <td>45</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">15/12/2023</th>
                                                            <td>fexion</td>
                                                            <td>42</td>
                                                            <td>45</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">3</th>
                                                            <td colspan="2">Larry the Bird</td>
                                                            <td>@twitter</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                            <div class="tab-pane fade" id="roderecha" role="tabpanel" aria-labelledby="disabled-tab" tabindex="0">
                                                <table class="table table-sm">
                                                    <thead>
                                                        <tr>
                                                            <th scope="col">Fecha</th>
                                                            <th scope="col">Rango</th>
                                                            <th scope="col">Derecho</th>
                                                            <th scope="col">izquierdo</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <th scope="row">10/12/2023</th>
                                                            <td>Fexion</td>
                                                            <td>40</td>
                                                            <td>45</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">15/12/2023</th>
                                                            <td>fexion</td>
                                                            <td>42</td>
                                                            <td>45</td>
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
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                        Hombro
                                    </button>
                                </h2>
                                <div id="flush-collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                    <div class="accordion-body">
                                        <div class="container">
                                            <div class="row">
                                                <div class="col-4">
                                                    <select class="form-select form-select-sm" aria-label="Default select example">
                                                        <option selected>Rango</option>
                                                        <option value="1">One</option>
                                                        <option value="2">Two</option>
                                                        <option value="3">Three</option>
                                                    </select>
                                                </div>
                                                <!-- !al seleccionar un rango debe mostrar la tabla de historial de esos rangos adicionalmente  -->
                                                <div class="col-3">
                                                    <input class="form-control form-control-sm" type="text" placeholder="izquierda" aria-label=".form-control-sm example" />
                                                </div>
                                                <div class="col-3">
                                                    <input class="form-control form-control-sm" type="text" placeholder="derecha" aria-label=".form-control-sm example" />
                                                </div>

                                                <div class="col-2">
                                                    <button type="button" class="btn btn-primary btn-sm">
                                                        +
                                                    </button>
                                                </div>
                                            </div>
                                        </div>

                                        <br />

                                        <p>Historial</p>

                                        <ul class="nav nav-tabs" id="myTab" role="tablist">
                                            <li class="nav-item" role="presentation">
                                                <button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#flexion" type="button" role="tab" aria-controls="home-tab-pane" aria-selected="true">
                                                    Fexion
                                                </button>
                                            </li>
                                            <li class="nav-item" role="presentation">
                                                <button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#extencion" type="button" role="tab" aria-controls="profile-tab-pane" aria-selected="false">
                                                    extencion
                                                </button>
                                            </li>
                                            <li class="nav-item" role="presentation">
                                                <button class="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#ilderecha" type="button" role="tab" aria-controls="contact-tab-pane" aria-selected="false">
                                                    ilderecha
                                                </button>
                                            </li>
                                            <li class="nav-item" role="presentation">
                                                <button class="nav-link" id="disabled-tab" data-bs-toggle="tab" data-bs-target="#ilizquierda" type="button" role="tab" aria-controls="disabled-tab-pane" aria-selected="false">
                                                    ilizquierda
                                                </button>
                                            </li>
                                            <li class="nav-item" role="presentation">
                                                <button class="nav-link" id="disabled-tab" data-bs-toggle="tab" data-bs-target="#roizquierda" type="button" role="tab" aria-controls="disabled-tab-pane" aria-selected="false">
                                                    roizquierda
                                                </button>
                                            </li>
                                            <li class="nav-item" role="presentation">
                                                <button class="nav-link" id="disabled-tab" data-bs-toggle="tab" data-bs-target="#roderecha" type="button" role="tab" aria-controls="disabled-tab-pane" aria-selected="false">
                                                    roderecha
                                                </button>
                                            </li>
                                        </ul>
                                        <div class="tab-content" id="myTabContent">
                                            <div class="tab-pane fade show active" id="flexion" role="tabpanel" aria-labelledby="home-tab" tabindex="0">
                                                <table class="table table-sm">
                                                    <thead>
                                                        <tr>
                                                            <th scope="col">Fecha</th>
                                                            <th scope="col">Rango</th>
                                                            <th scope="col">Derecho</th>
                                                            <th scope="col">izquierdo</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <th scope="row">10/12/2023</th>
                                                            <td>Fexion</td>
                                                            <td>40</td>
                                                            <td>45</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">15/12/2023</th>
                                                            <td>fexion</td>
                                                            <td>42</td>
                                                            <td>45</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">3</th>
                                                            <td colspan="2">Larry the Bird</td>
                                                            <td>@twitter</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                            <div class="tab-pane fade" id="extencion" role="tabpanel" aria-labelledby="profile-tab" tabindex="0">
                                                <table class="table table-sm">
                                                    <thead>
                                                        <tr>
                                                            <th scope="col">Fecha</th>
                                                            <th scope="col">Rango</th>
                                                            <th scope="col">Derecho</th>
                                                            <th scope="col">izquierdo</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <th scope="row">10/12/2023</th>
                                                            <td>Fexion</td>
                                                            <td>40</td>
                                                            <td>45</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">15/12/2023</th>
                                                            <td>fexion</td>
                                                            <td>42</td>
                                                            <td>45</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">3</th>
                                                            <td colspan="2">Larry the Bird</td>
                                                            <td>@twitter</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                            <div class="tab-pane fade" id="ilderecha" role="tabpanel" aria-labelledby="contact-tab" tabindex="0">
                                                <table class="table table-sm">
                                                    <thead>
                                                        <tr>
                                                            <th scope="col">Fecha</th>
                                                            <th scope="col">Rango</th>
                                                            <th scope="col">Derecho</th>
                                                            <th scope="col">izquierdo</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <th scope="row">10/12/2023</th>
                                                            <td>Fexion</td>
                                                            <td>40</td>
                                                            <td>45</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">15/12/2023</th>
                                                            <td>fexion</td>
                                                            <td>42</td>
                                                            <td>45</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">3</th>
                                                            <td colspan="2">Larry the Bird</td>
                                                            <td>@twitter</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                            <div class="tab-pane fade" id="ilizquierda" role="tabpanel" aria-labelledby="disabled-tab" tabindex="0">
                                                <table class="table table-sm">
                                                    <thead>
                                                        <tr>
                                                            <th scope="col">Fecha</th>
                                                            <th scope="col">Rango</th>
                                                            <th scope="col">Derecho</th>
                                                            <th scope="col">izquierdo</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <th scope="row">10/12/2023</th>
                                                            <td>Fexion</td>
                                                            <td>40</td>
                                                            <td>45</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">15/12/2023</th>
                                                            <td>fexion</td>
                                                            <td>42</td>
                                                            <td>45</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">3</th>
                                                            <td colspan="2">Larry the Bird</td>
                                                            <td>@twitter</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                            <div class="tab-pane fade" id="roizquierda" role="tabpanel" aria-labelledby="disabled-tab" tabindex="0">
                                                <table class="table table-sm">
                                                    <thead>
                                                        <tr>
                                                            <th scope="col">Fecha</th>
                                                            <th scope="col">Rango</th>
                                                            <th scope="col">Derecho</th>
                                                            <th scope="col">izquierdo</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <th scope="row">10/12/2023</th>
                                                            <td>Fexion</td>
                                                            <td>40</td>
                                                            <td>45</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">15/12/2023</th>
                                                            <td>fexion</td>
                                                            <td>42</td>
                                                            <td>45</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">3</th>
                                                            <td colspan="2">Larry the Bird</td>
                                                            <td>@twitter</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                            <div class="tab-pane fade" id="roderecha" role="tabpanel" aria-labelledby="disabled-tab" tabindex="0">
                                                <table class="table table-sm">
                                                    <thead>
                                                        <tr>
                                                            <th scope="col">Fecha</th>
                                                            <th scope="col">Rango</th>
                                                            <th scope="col">Derecho</th>
                                                            <th scope="col">izquierdo</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <th scope="row">10/12/2023</th>
                                                            <td>Fexion</td>
                                                            <td>40</td>
                                                            <td>45</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">15/12/2023</th>
                                                            <td>fexion</td>
                                                            <td>42</td>
                                                            <td>45</td>
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
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseT4" aria-expanded="false" aria-controls="flush-collapseT4">
                                        Codo
                                    </button>
                                </h2>
                                <div id="flush-collapseT4" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                    <div class="accordion-body">
                                        <div class="container">
                                            <div class="row">
                                                <div class="col-4">
                                                    <select class="form-select form-select-sm" aria-label="Default select example">
                                                        <option selected>Rango</option>
                                                        <option value="1">One</option>
                                                        <option value="2">Two</option>
                                                        <option value="3">Three</option>
                                                    </select>
                                                </div>
                                                <!-- !al seleccionar un rango debe mostrar la tabla de historial de esos rangos adicionalmente  -->
                                                <div class="col-3">
                                                    <input class="form-control form-control-sm" type="text" placeholder="izquierda" aria-label=".form-control-sm example" />
                                                </div>
                                                <div class="col-3">
                                                    <input class="form-control form-control-sm" type="text" placeholder="derecha" aria-label=".form-control-sm example" />
                                                </div>

                                                <div class="col-2">
                                                    <button type="button" class="btn btn-primary btn-sm">
                                                        +
                                                    </button>
                                                </div>
                                            </div>
                                        </div>

                                        <br />

                                        <p>Historial</p>

                                        <ul class="nav nav-tabs" id="myTab" role="tablist">
                                            <li class="nav-item" role="presentation">
                                                <button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#flexion" type="button" role="tab" aria-controls="home-tab-pane" aria-selected="true">
                                                    Fexion
                                                </button>
                                            </li>
                                            <li class="nav-item" role="presentation">
                                                <button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#extencion" type="button" role="tab" aria-controls="profile-tab-pane" aria-selected="false">
                                                    extencion
                                                </button>
                                            </li>
                                            <li class="nav-item" role="presentation">
                                                <button class="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#ilderecha" type="button" role="tab" aria-controls="contact-tab-pane" aria-selected="false">
                                                    ilderecha
                                                </button>
                                            </li>
                                            <li class="nav-item" role="presentation">
                                                <button class="nav-link" id="disabled-tab" data-bs-toggle="tab" data-bs-target="#ilizquierda" type="button" role="tab" aria-controls="disabled-tab-pane" aria-selected="false">
                                                    ilizquierda
                                                </button>
                                            </li>
                                            <li class="nav-item" role="presentation">
                                                <button class="nav-link" id="disabled-tab" data-bs-toggle="tab" data-bs-target="#roizquierda" type="button" role="tab" aria-controls="disabled-tab-pane" aria-selected="false">
                                                    roizquierda
                                                </button>
                                            </li>
                                            <li class="nav-item" role="presentation">
                                                <button class="nav-link" id="disabled-tab" data-bs-toggle="tab" data-bs-target="#roderecha" type="button" role="tab" aria-controls="disabled-tab-pane" aria-selected="false">
                                                    roderecha
                                                </button>
                                            </li>
                                        </ul>
                                        <div class="tab-content" id="myTabContent">
                                            <div class="tab-pane fade show active" id="flexion" role="tabpanel" aria-labelledby="home-tab" tabindex="0">
                                                <table class="table table-sm">
                                                    <thead>
                                                        <tr>
                                                            <th scope="col">Fecha</th>
                                                            <th scope="col">Rango</th>
                                                            <th scope="col">Derecho</th>
                                                            <th scope="col">izquierdo</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <th scope="row">10/12/2023</th>
                                                            <td>Fexion</td>
                                                            <td>40</td>
                                                            <td>45</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">15/12/2023</th>
                                                            <td>fexion</td>
                                                            <td>42</td>
                                                            <td>45</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">3</th>
                                                            <td colspan="2">Larry the Bird</td>
                                                            <td>@twitter</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                            <div class="tab-pane fade" id="extencion" role="tabpanel" aria-labelledby="profile-tab" tabindex="0">
                                                <table class="table table-sm">
                                                    <thead>
                                                        <tr>
                                                            <th scope="col">Fecha</th>
                                                            <th scope="col">Rango</th>
                                                            <th scope="col">Derecho</th>
                                                            <th scope="col">izquierdo</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <th scope="row">10/12/2023</th>
                                                            <td>Fexion</td>
                                                            <td>40</td>
                                                            <td>45</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">15/12/2023</th>
                                                            <td>fexion</td>
                                                            <td>42</td>
                                                            <td>45</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">3</th>
                                                            <td colspan="2">Larry the Bird</td>
                                                            <td>@twitter</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                            <div class="tab-pane fade" id="ilderecha" role="tabpanel" aria-labelledby="contact-tab" tabindex="0">
                                                <table class="table table-sm">
                                                    <thead>
                                                        <tr>
                                                            <th scope="col">Fecha</th>
                                                            <th scope="col">Rango</th>
                                                            <th scope="col">Derecho</th>
                                                            <th scope="col">izquierdo</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <th scope="row">10/12/2023</th>
                                                            <td>Fexion</td>
                                                            <td>40</td>
                                                            <td>45</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">15/12/2023</th>
                                                            <td>fexion</td>
                                                            <td>42</td>
                                                            <td>45</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">3</th>
                                                            <td colspan="2">Larry the Bird</td>
                                                            <td>@twitter</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                            <div class="tab-pane fade" id="ilizquierda" role="tabpanel" aria-labelledby="disabled-tab" tabindex="0">
                                                <table class="table table-sm">
                                                    <thead>
                                                        <tr>
                                                            <th scope="col">Fecha</th>
                                                            <th scope="col">Rango</th>
                                                            <th scope="col">Derecho</th>
                                                            <th scope="col">izquierdo</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <th scope="row">10/12/2023</th>
                                                            <td>Fexion</td>
                                                            <td>40</td>
                                                            <td>45</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">15/12/2023</th>
                                                            <td>fexion</td>
                                                            <td>42</td>
                                                            <td>45</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">3</th>
                                                            <td colspan="2">Larry the Bird</td>
                                                            <td>@twitter</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                            <div class="tab-pane fade" id="roizquierda" role="tabpanel" aria-labelledby="disabled-tab" tabindex="0">
                                                <table class="table table-sm">
                                                    <thead>
                                                        <tr>
                                                            <th scope="col">Fecha</th>
                                                            <th scope="col">Rango</th>
                                                            <th scope="col">Derecho</th>
                                                            <th scope="col">izquierdo</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <th scope="row">10/12/2023</th>
                                                            <td>Fexion</td>
                                                            <td>40</td>
                                                            <td>45</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">15/12/2023</th>
                                                            <td>fexion</td>
                                                            <td>42</td>
                                                            <td>45</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">3</th>
                                                            <td colspan="2">Larry the Bird</td>
                                                            <td>@twitter</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                            <div class="tab-pane fade" id="roderecha" role="tabpanel" aria-labelledby="disabled-tab" tabindex="0">
                                                <table class="table table-sm">
                                                    <thead>
                                                        <tr>
                                                            <th scope="col">Fecha</th>
                                                            <th scope="col">Rango</th>
                                                            <th scope="col">Derecho</th>
                                                            <th scope="col">izquierdo</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <th scope="row">10/12/2023</th>
                                                            <td>Fexion</td>
                                                            <td>40</td>
                                                            <td>45</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">15/12/2023</th>
                                                            <td>fexion</td>
                                                            <td>42</td>
                                                            <td>45</td>
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
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseT5" aria-expanded="false" aria-controls="flush-collapseT5">
                                        Muñeca
                                    </button>
                                </h2>
                                <div id="flush-collapseT5" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                    <div class="accordion-body">
                                        <div class="container">
                                            <div class="row">
                                                <div class="col-4">
                                                    <select class="form-select form-select-sm" aria-label="Default select example">
                                                        <option selected>Rango</option>
                                                        <option value="1">One</option>
                                                        <option value="2">Two</option>
                                                        <option value="3">Three</option>
                                                    </select>
                                                </div>
                                                <!-- !al seleccionar un rango debe mostrar la tabla de historial de esos rangos adicionalmente  -->
                                                <div class="col-3">
                                                    <input class="form-control form-control-sm" type="text" placeholder="izquierda" aria-label=".form-control-sm example" />
                                                </div>
                                                <div class="col-3">
                                                    <input class="form-control form-control-sm" type="text" placeholder="derecha" aria-label=".form-control-sm example" />
                                                </div>

                                                <div class="col-2">
                                                    <button type="button" class="btn btn-primary btn-sm">
                                                        +
                                                    </button>
                                                </div>
                                            </div>
                                        </div>

                                        <br />

                                        <p>Historial</p>

                                        <ul class="nav nav-tabs" id="myTab" role="tablist">
                                            <li class="nav-item" role="presentation">
                                                <button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#flexion" type="button" role="tab" aria-controls="home-tab-pane" aria-selected="true">
                                                    Fexion
                                                </button>
                                            </li>
                                            <li class="nav-item" role="presentation">
                                                <button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#extencion" type="button" role="tab" aria-controls="profile-tab-pane" aria-selected="false">
                                                    extencion
                                                </button>
                                            </li>
                                            <li class="nav-item" role="presentation">
                                                <button class="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#ilderecha" type="button" role="tab" aria-controls="contact-tab-pane" aria-selected="false">
                                                    ilderecha
                                                </button>
                                            </li>
                                            <li class="nav-item" role="presentation">
                                                <button class="nav-link" id="disabled-tab" data-bs-toggle="tab" data-bs-target="#ilizquierda" type="button" role="tab" aria-controls="disabled-tab-pane" aria-selected="false">
                                                    ilizquierda
                                                </button>
                                            </li>
                                            <li class="nav-item" role="presentation">
                                                <button class="nav-link" id="disabled-tab" data-bs-toggle="tab" data-bs-target="#roizquierda" type="button" role="tab" aria-controls="disabled-tab-pane" aria-selected="false">
                                                    roizquierda
                                                </button>
                                            </li>
                                            <li class="nav-item" role="presentation">
                                                <button class="nav-link" id="disabled-tab" data-bs-toggle="tab" data-bs-target="#roderecha" type="button" role="tab" aria-controls="disabled-tab-pane" aria-selected="false">
                                                    roderecha
                                                </button>
                                            </li>
                                        </ul>
                                        <div class="tab-content" id="myTabContent">
                                            <div class="tab-pane fade show active" id="flexion" role="tabpanel" aria-labelledby="home-tab" tabindex="0">
                                                <table class="table table-sm">
                                                    <thead>
                                                        <tr>
                                                            <th scope="col">Fecha</th>
                                                            <th scope="col">Rango</th>
                                                            <th scope="col">Derecho</th>
                                                            <th scope="col">izquierdo</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <th scope="row">10/12/2023</th>
                                                            <td>Fexion</td>
                                                            <td>40</td>
                                                            <td>45</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">15/12/2023</th>
                                                            <td>fexion</td>
                                                            <td>42</td>
                                                            <td>45</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">3</th>
                                                            <td colspan="2">Larry the Bird</td>
                                                            <td>@twitter</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                            <div class="tab-pane fade" id="extencion" role="tabpanel" aria-labelledby="profile-tab" tabindex="0">
                                                <table class="table table-sm">
                                                    <thead>
                                                        <tr>
                                                            <th scope="col">Fecha</th>
                                                            <th scope="col">Rango</th>
                                                            <th scope="col">Derecho</th>
                                                            <th scope="col">izquierdo</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <th scope="row">10/12/2023</th>
                                                            <td>Fexion</td>
                                                            <td>40</td>
                                                            <td>45</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">15/12/2023</th>
                                                            <td>fexion</td>
                                                            <td>42</td>
                                                            <td>45</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">3</th>
                                                            <td colspan="2">Larry the Bird</td>
                                                            <td>@twitter</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                            <div class="tab-pane fade" id="ilderecha" role="tabpanel" aria-labelledby="contact-tab" tabindex="0">
                                                <table class="table table-sm">
                                                    <thead>
                                                        <tr>
                                                            <th scope="col">Fecha</th>
                                                            <th scope="col">Rango</th>
                                                            <th scope="col">Derecho</th>
                                                            <th scope="col">izquierdo</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <th scope="row">10/12/2023</th>
                                                            <td>Fexion</td>
                                                            <td>40</td>
                                                            <td>45</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">15/12/2023</th>
                                                            <td>fexion</td>
                                                            <td>42</td>
                                                            <td>45</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">3</th>
                                                            <td colspan="2">Larry the Bird</td>
                                                            <td>@twitter</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                            <div class="tab-pane fade" id="ilizquierda" role="tabpanel" aria-labelledby="disabled-tab" tabindex="0">
                                                <table class="table table-sm">
                                                    <thead>
                                                        <tr>
                                                            <th scope="col">Fecha</th>
                                                            <th scope="col">Rango</th>
                                                            <th scope="col">Derecho</th>
                                                            <th scope="col">izquierdo</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <th scope="row">10/12/2023</th>
                                                            <td>Fexion</td>
                                                            <td>40</td>
                                                            <td>45</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">15/12/2023</th>
                                                            <td>fexion</td>
                                                            <td>42</td>
                                                            <td>45</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">3</th>
                                                            <td colspan="2">Larry the Bird</td>
                                                            <td>@twitter</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                            <div class="tab-pane fade" id="roizquierda" role="tabpanel" aria-labelledby="disabled-tab" tabindex="0">
                                                <table class="table table-sm">
                                                    <thead>
                                                        <tr>
                                                            <th scope="col">Fecha</th>
                                                            <th scope="col">Rango</th>
                                                            <th scope="col">Derecho</th>
                                                            <th scope="col">izquierdo</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <th scope="row">10/12/2023</th>
                                                            <td>Fexion</td>
                                                            <td>40</td>
                                                            <td>45</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">15/12/2023</th>
                                                            <td>fexion</td>
                                                            <td>42</td>
                                                            <td>45</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">3</th>
                                                            <td colspan="2">Larry the Bird</td>
                                                            <td>@twitter</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                            <div class="tab-pane fade" id="roderecha" role="tabpanel" aria-labelledby="disabled-tab" tabindex="0">
                                                <table class="table table-sm">
                                                    <thead>
                                                        <tr>
                                                            <th scope="col">Fecha</th>
                                                            <th scope="col">Rango</th>
                                                            <th scope="col">Derecho</th>
                                                            <th scope="col">izquierdo</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <th scope="row">10/12/2023</th>
                                                            <td>Fexion</td>
                                                            <td>40</td>
                                                            <td>45</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">15/12/2023</th>
                                                            <td>fexion</td>
                                                            <td>42</td>
                                                            <td>45</td>
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
                    </div>
                    <div class="tab-pane fade show active" id="nav-minferior" role="tabpanel" aria-labelledby="nav-contact-tab" tabindex="0">
                        <div class="accordion" id="accordionExample">
                            <div class="accordion-item">
                                <h2 class="accordion-header">
                                    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                        Accordion Item #1
                                    </button>
                                </h2>
                                <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                                    <div class="accordion-body">
                                        <!-- ----------------------------------------------------------------------------------------------------------------------------------- -->
                                        <div class="container">
                                            <div class="row">
                                                <div class="col-4">
                                                    <select class="form-select form-select-sm" aria-label="Default select example">
                                                        <option selected>Rango</option>
                                                        <option value="1">One</option>
                                                        <option value="2">Two</option>
                                                        <option value="3">Three</option>
                                                    </select>
                                                </div>
                                                <!-- !al seleccionar un rango debe mostrar la tabla de historial de esos rangos adicionalmente  -->
                                                <div class="col-3">
                                                    <input class="form-control form-control-sm" type="text" placeholder="izquierda" aria-label=".form-control-sm example" />
                                                </div>
                                                <div class="col-3">
                                                    <input class="form-control form-control-sm" type="text" placeholder="derecha" aria-label=".form-control-sm example" />
                                                </div>

                                                <div class="col-2">
                                                    <button type="button" class="btn btn-primary btn-sm">
                                                        +
                                                    </button>
                                                </div>
                                            </div>
                                        </div>

                                        <br />

                                        <p>Historial</p>

                                        <ul class="nav nav-tabs" id="myTab" role="tablist">
                                            <li class="nav-item" role="presentation">
                                                <button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#flexion" type="button" role="tab" aria-controls="home-tab-pane" aria-selected="true">
                                                    Fexion
                                                </button>
                                            </li>
                                            <li class="nav-item" role="presentation">
                                                <button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#extencion" type="button" role="tab" aria-controls="profile-tab-pane" aria-selected="false">
                                                    extencion
                                                </button>
                                            </li>
                                            <li class="nav-item" role="presentation">
                                                <button class="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#ilderecha" type="button" role="tab" aria-controls="contact-tab-pane" aria-selected="false">
                                                    ilderecha
                                                </button>
                                            </li>
                                            <li class="nav-item" role="presentation">
                                                <button class="nav-link" id="disabled-tab" data-bs-toggle="tab" data-bs-target="#ilizquierda" type="button" role="tab" aria-controls="disabled-tab-pane" aria-selected="false">
                                                    ilizquierda
                                                </button>
                                            </li>
                                            <li class="nav-item" role="presentation">
                                                <button class="nav-link" id="disabled-tab" data-bs-toggle="tab" data-bs-target="#roizquierda" type="button" role="tab" aria-controls="disabled-tab-pane" aria-selected="false">
                                                    roizquierda
                                                </button>
                                            </li>
                                            <li class="nav-item" role="presentation">
                                                <button class="nav-link" id="disabled-tab" data-bs-toggle="tab" data-bs-target="#roderecha" type="button" role="tab" aria-controls="disabled-tab-pane" aria-selected="false">
                                                    roderecha
                                                </button>
                                            </li>
                                        </ul>
                                        <div class="tab-content" id="myTabContent">
                                            <div class="tab-pane fade show active" id="flexion" role="tabpanel" aria-labelledby="home-tab" tabindex="0">
                                                <table class="table table-sm">
                                                    <thead>
                                                        <tr>
                                                            <th scope="col">Fecha</th>
                                                            <th scope="col">Rango</th>
                                                            <th scope="col">Derecho</th>
                                                            <th scope="col">izquierdo</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <th scope="row">10/12/2023</th>
                                                            <td>Fexion</td>
                                                            <td>40</td>
                                                            <td>45</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">15/12/2023</th>
                                                            <td>fexion</td>
                                                            <td>42</td>
                                                            <td>45</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">3</th>
                                                            <td colspan="2">Larry the Bird</td>
                                                            <td>@twitter</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                            <div class="tab-pane fade" id="extencion" role="tabpanel" aria-labelledby="profile-tab" tabindex="0">
                                                <table class="table table-sm">
                                                    <thead>
                                                        <tr>
                                                            <th scope="col">Fecha</th>
                                                            <th scope="col">Rango</th>
                                                            <th scope="col">Derecho</th>
                                                            <th scope="col">izquierdo</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <th scope="row">10/12/2023</th>
                                                            <td>Fexion</td>
                                                            <td>40</td>
                                                            <td>45</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">15/12/2023</th>
                                                            <td>fexion</td>
                                                            <td>42</td>
                                                            <td>45</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">3</th>
                                                            <td colspan="2">Larry the Bird</td>
                                                            <td>@twitter</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                            <div class="tab-pane fade" id="ilderecha" role="tabpanel" aria-labelledby="contact-tab" tabindex="0">
                                                <table class="table table-sm">
                                                    <thead>
                                                        <tr>
                                                            <th scope="col">Fecha</th>
                                                            <th scope="col">Rango</th>
                                                            <th scope="col">Derecho</th>
                                                            <th scope="col">izquierdo</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <th scope="row">10/12/2023</th>
                                                            <td>Fexion</td>
                                                            <td>40</td>
                                                            <td>45</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">15/12/2023</th>
                                                            <td>fexion</td>
                                                            <td>42</td>
                                                            <td>45</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">3</th>
                                                            <td colspan="2">Larry the Bird</td>
                                                            <td>@twitter</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                            <div class="tab-pane fade" id="ilizquierda" role="tabpanel" aria-labelledby="disabled-tab" tabindex="0">
                                                <table class="table table-sm">
                                                    <thead>
                                                        <tr>
                                                            <th scope="col">Fecha</th>
                                                            <th scope="col">Rango</th>
                                                            <th scope="col">Derecho</th>
                                                            <th scope="col">izquierdo</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <th scope="row">10/12/2023</th>
                                                            <td>Fexion</td>
                                                            <td>40</td>
                                                            <td>45</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">15/12/2023</th>
                                                            <td>fexion</td>
                                                            <td>42</td>
                                                            <td>45</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">3</th>
                                                            <td colspan="2">Larry the Bird</td>
                                                            <td>@twitter</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                            <div class="tab-pane fade" id="roizquierda" role="tabpanel" aria-labelledby="disabled-tab" tabindex="0">
                                                <table class="table table-sm">
                                                    <thead>
                                                        <tr>
                                                            <th scope="col">Fecha</th>
                                                            <th scope="col">Rango</th>
                                                            <th scope="col">Derecho</th>
                                                            <th scope="col">izquierdo</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <th scope="row">10/12/2023</th>
                                                            <td>Fexion</td>
                                                            <td>40</td>
                                                            <td>45</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">15/12/2023</th>
                                                            <td>fexion</td>
                                                            <td>42</td>
                                                            <td>45</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">3</th>
                                                            <td colspan="2">Larry the Bird</td>
                                                            <td>@twitter</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                            <div class="tab-pane fade" id="roderecha" role="tabpanel" aria-labelledby="disabled-tab" tabindex="0">
                                                <table class="table table-sm">
                                                    <thead>
                                                        <tr>
                                                            <th scope="col">Fecha</th>
                                                            <th scope="col">Rango</th>
                                                            <th scope="col">Derecho</th>
                                                            <th scope="col">izquierdo</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <th scope="row">10/12/2023</th>
                                                            <td>Fexion</td>
                                                            <td>40</td>
                                                            <td>45</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">15/12/2023</th>
                                                            <td>fexion</td>
                                                            <td>42</td>
                                                            <td>45</td>
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
                                        <!-- ----------------------------------------------------------------------------------------------- -->
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                        Accordion Item #2
                                    </button>
                                </h2>
                                <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                    <div class="accordion-body">
                                        <!-- ----------------------------------------------------------------------------------------------------------------------------------- -->
                                        <div class="container">
                                            <div class="row">
                                                <div class="col-4">
                                                    <select class="form-select form-select-sm" aria-label="Default select example">
                                                        <option selected>Rango</option>
                                                        <option value="1">One</option>
                                                        <option value="2">Two</option>
                                                        <option value="3">Three</option>
                                                    </select>
                                                </div>
                                                <!-- !al seleccionar un rango debe mostrar la tabla de historial de esos rangos adicionalmente  -->
                                                <div class="col-3">
                                                    <input class="form-control form-control-sm" type="text" placeholder="izquierda" aria-label=".form-control-sm example" />
                                                </div>
                                                <div class="col-3">
                                                    <input class="form-control form-control-sm" type="text" placeholder="derecha" aria-label=".form-control-sm example" />
                                                </div>

                                                <div class="col-2">
                                                    <button type="button" class="btn btn-primary btn-sm">
                                                        +
                                                    </button>
                                                </div>
                                            </div>
                                        </div>

                                        <br />

                                        <p>Historial</p>

                                        <ul class="nav nav-tabs" id="myTab" role="tablist">
                                            <li class="nav-item" role="presentation">
                                                <button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#flexion" type="button" role="tab" aria-controls="home-tab-pane" aria-selected="true">
                                                    Fexion
                                                </button>
                                            </li>
                                            <li class="nav-item" role="presentation">
                                                <button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#extencion" type="button" role="tab" aria-controls="profile-tab-pane" aria-selected="false">
                                                    extencion
                                                </button>
                                            </li>
                                            <li class="nav-item" role="presentation">
                                                <button class="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#ilderecha" type="button" role="tab" aria-controls="contact-tab-pane" aria-selected="false">
                                                    ilderecha
                                                </button>
                                            </li>
                                            <li class="nav-item" role="presentation">
                                                <button class="nav-link" id="disabled-tab" data-bs-toggle="tab" data-bs-target="#ilizquierda" type="button" role="tab" aria-controls="disabled-tab-pane" aria-selected="false">
                                                    ilizquierda
                                                </button>
                                            </li>
                                            <li class="nav-item" role="presentation">
                                                <button class="nav-link" id="disabled-tab" data-bs-toggle="tab" data-bs-target="#roizquierda" type="button" role="tab" aria-controls="disabled-tab-pane" aria-selected="false">
                                                    roizquierda
                                                </button>
                                            </li>
                                            <li class="nav-item" role="presentation">
                                                <button class="nav-link" id="disabled-tab" data-bs-toggle="tab" data-bs-target="#roderecha" type="button" role="tab" aria-controls="disabled-tab-pane" aria-selected="false">
                                                    roderecha
                                                </button>
                                            </li>
                                        </ul>
                                        <div class="tab-content" id="myTabContent">
                                            <div class="tab-pane fade show active" id="flexion" role="tabpanel" aria-labelledby="home-tab" tabindex="0">
                                                <table class="table table-sm">
                                                    <thead>
                                                        <tr>
                                                            <th scope="col">Fecha</th>
                                                            <th scope="col">Rango</th>
                                                            <th scope="col">Derecho</th>
                                                            <th scope="col">izquierdo</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <th scope="row">10/12/2023</th>
                                                            <td>Fexion</td>
                                                            <td>40</td>
                                                            <td>45</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">15/12/2023</th>
                                                            <td>fexion</td>
                                                            <td>42</td>
                                                            <td>45</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">3</th>
                                                            <td colspan="2">Larry the Bird</td>
                                                            <td>@twitter</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                            <div class="tab-pane fade" id="extencion" role="tabpanel" aria-labelledby="profile-tab" tabindex="0">
                                                <table class="table table-sm">
                                                    <thead>
                                                        <tr>
                                                            <th scope="col">Fecha</th>
                                                            <th scope="col">Rango</th>
                                                            <th scope="col">Derecho</th>
                                                            <th scope="col">izquierdo</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <th scope="row">10/12/2023</th>
                                                            <td>Fexion</td>
                                                            <td>40</td>
                                                            <td>45</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">15/12/2023</th>
                                                            <td>fexion</td>
                                                            <td>42</td>
                                                            <td>45</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">3</th>
                                                            <td colspan="2">Larry the Bird</td>
                                                            <td>@twitter</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                            <div class="tab-pane fade" id="ilderecha" role="tabpanel" aria-labelledby="contact-tab" tabindex="0">
                                                <table class="table table-sm">
                                                    <thead>
                                                        <tr>
                                                            <th scope="col">Fecha</th>
                                                            <th scope="col">Rango</th>
                                                            <th scope="col">Derecho</th>
                                                            <th scope="col">izquierdo</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <th scope="row">10/12/2023</th>
                                                            <td>Fexion</td>
                                                            <td>40</td>
                                                            <td>45</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">15/12/2023</th>
                                                            <td>fexion</td>
                                                            <td>42</td>
                                                            <td>45</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">3</th>
                                                            <td colspan="2">Larry the Bird</td>
                                                            <td>@twitter</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                            <div class="tab-pane fade" id="ilizquierda" role="tabpanel" aria-labelledby="disabled-tab" tabindex="0">
                                                <table class="table table-sm">
                                                    <thead>
                                                        <tr>
                                                            <th scope="col">Fecha</th>
                                                            <th scope="col">Rango</th>
                                                            <th scope="col">Derecho</th>
                                                            <th scope="col">izquierdo</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <th scope="row">10/12/2023</th>
                                                            <td>Fexion</td>
                                                            <td>40</td>
                                                            <td>45</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">15/12/2023</th>
                                                            <td>fexion</td>
                                                            <td>42</td>
                                                            <td>45</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">3</th>
                                                            <td colspan="2">Larry the Bird</td>
                                                            <td>@twitter</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                            <div class="tab-pane fade" id="roizquierda" role="tabpanel" aria-labelledby="disabled-tab" tabindex="0">
                                                <table class="table table-sm">
                                                    <thead>
                                                        <tr>
                                                            <th scope="col">Fecha</th>
                                                            <th scope="col">Rango</th>
                                                            <th scope="col">Derecho</th>
                                                            <th scope="col">izquierdo</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <th scope="row">10/12/2023</th>
                                                            <td>Fexion</td>
                                                            <td>40</td>
                                                            <td>45</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">15/12/2023</th>
                                                            <td>fexion</td>
                                                            <td>42</td>
                                                            <td>45</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">3</th>
                                                            <td colspan="2">Larry the Bird</td>
                                                            <td>@twitter</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                            <div class="tab-pane fade" id="roderecha" role="tabpanel" aria-labelledby="disabled-tab" tabindex="0">
                                                <table class="table table-sm">
                                                    <thead>
                                                        <tr>
                                                            <th scope="col">Fecha</th>
                                                            <th scope="col">Rango</th>
                                                            <th scope="col">Derecho</th>
                                                            <th scope="col">izquierdo</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <th scope="row">10/12/2023</th>
                                                            <td>Fexion</td>
                                                            <td>40</td>
                                                            <td>45</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">15/12/2023</th>
                                                            <td>fexion</td>
                                                            <td>42</td>
                                                            <td>45</td>
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
                                        <!-- ----------------------------------------------------------------------------------------------- -->
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                        Accordion Item #3
                                    </button>
                                </h2>
                                <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                    <div class="accordion-body">
                                        <!-- ----------------------------------------------------------------------------------------------------------------------------------- -->
                                        <div class="container">
                                            <div class="row">
                                                <div class="col-4">
                                                    <select class="form-select form-select-sm" aria-label="Default select example">
                                                        <option selected>Rango</option>
                                                        <option value="1">One</option>
                                                        <option value="2">Two</option>
                                                        <option value="3">Three</option>
                                                    </select>
                                                </div>
                                                <!-- !al seleccionar un rango debe mostrar la tabla de historial de esos rangos adicionalmente  -->
                                                <div class="col-3">
                                                    <input class="form-control form-control-sm" type="text" placeholder="izquierda" aria-label=".form-control-sm example" />
                                                </div>
                                                <div class="col-3">
                                                    <input class="form-control form-control-sm" type="text" placeholder="derecha" aria-label=".form-control-sm example" />
                                                </div>

                                                <div class="col-2">
                                                    <button type="button" class="btn btn-primary btn-sm">
                                                        +
                                                    </button>
                                                </div>
                                            </div>
                                        </div>

                                        <br />

                                        <p>Historial</p>

                                        <ul class="nav nav-tabs" id="myTab" role="tablist">
                                            <li class="nav-item" role="presentation">
                                                <button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#flexion" type="button" role="tab" aria-controls="home-tab-pane" aria-selected="true">
                                                    Fexion
                                                </button>
                                            </li>
                                            <li class="nav-item" role="presentation">
                                                <button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#extencion" type="button" role="tab" aria-controls="profile-tab-pane" aria-selected="false">
                                                    extencion
                                                </button>
                                            </li>
                                            <li class="nav-item" role="presentation">
                                                <button class="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#ilderecha" type="button" role="tab" aria-controls="contact-tab-pane" aria-selected="false">
                                                    ilderecha
                                                </button>
                                            </li>
                                            <li class="nav-item" role="presentation">
                                                <button class="nav-link" id="disabled-tab" data-bs-toggle="tab" data-bs-target="#ilizquierda" type="button" role="tab" aria-controls="disabled-tab-pane" aria-selected="false">
                                                    ilizquierda
                                                </button>
                                            </li>
                                            <li class="nav-item" role="presentation">
                                                <button class="nav-link" id="disabled-tab" data-bs-toggle="tab" data-bs-target="#roizquierda" type="button" role="tab" aria-controls="disabled-tab-pane" aria-selected="false">
                                                    roizquierda
                                                </button>
                                            </li>
                                            <li class="nav-item" role="presentation">
                                                <button class="nav-link" id="disabled-tab" data-bs-toggle="tab" data-bs-target="#roderecha" type="button" role="tab" aria-controls="disabled-tab-pane" aria-selected="false">
                                                    roderecha
                                                </button>
                                            </li>
                                        </ul>
                                        <div class="tab-content" id="myTabContent">
                                            <div class="tab-pane fade show active" id="flexion" role="tabpanel" aria-labelledby="home-tab" tabindex="0">
                                                <table class="table table-sm">
                                                    <thead>
                                                        <tr>
                                                            <th scope="col">Fecha</th>
                                                            <th scope="col">Rango</th>
                                                            <th scope="col">Derecho</th>
                                                            <th scope="col">izquierdo</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <th scope="row">10/12/2023</th>
                                                            <td>Fexion</td>
                                                            <td>40</td>
                                                            <td>45</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">15/12/2023</th>
                                                            <td>fexion</td>
                                                            <td>42</td>
                                                            <td>45</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">3</th>
                                                            <td colspan="2">Larry the Bird</td>
                                                            <td>@twitter</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                            <div class="tab-pane fade" id="extencion" role="tabpanel" aria-labelledby="profile-tab" tabindex="0">
                                                <table class="table table-sm">
                                                    <thead>
                                                        <tr>
                                                            <th scope="col">Fecha</th>
                                                            <th scope="col">Rango</th>
                                                            <th scope="col">Derecho</th>
                                                            <th scope="col">izquierdo</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <th scope="row">10/12/2023</th>
                                                            <td>Fexion</td>
                                                            <td>40</td>
                                                            <td>45</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">15/12/2023</th>
                                                            <td>fexion</td>
                                                            <td>42</td>
                                                            <td>45</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">3</th>
                                                            <td colspan="2">Larry the Bird</td>
                                                            <td>@twitter</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                            <div class="tab-pane fade" id="ilderecha" role="tabpanel" aria-labelledby="contact-tab" tabindex="0">
                                                <table class="table table-sm">
                                                    <thead>
                                                        <tr>
                                                            <th scope="col">Fecha</th>
                                                            <th scope="col">Rango</th>
                                                            <th scope="col">Derecho</th>
                                                            <th scope="col">izquierdo</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <th scope="row">10/12/2023</th>
                                                            <td>Fexion</td>
                                                            <td>40</td>
                                                            <td>45</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">15/12/2023</th>
                                                            <td>fexion</td>
                                                            <td>42</td>
                                                            <td>45</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">3</th>
                                                            <td colspan="2">Larry the Bird</td>
                                                            <td>@twitter</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                            <div class="tab-pane fade" id="ilizquierda" role="tabpanel" aria-labelledby="disabled-tab" tabindex="0">
                                                <table class="table table-sm">
                                                    <thead>
                                                        <tr>
                                                            <th scope="col">Fecha</th>
                                                            <th scope="col">Rango</th>
                                                            <th scope="col">Derecho</th>
                                                            <th scope="col">izquierdo</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <th scope="row">10/12/2023</th>
                                                            <td>Fexion</td>
                                                            <td>40</td>
                                                            <td>45</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">15/12/2023</th>
                                                            <td>fexion</td>
                                                            <td>42</td>
                                                            <td>45</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">3</th>
                                                            <td colspan="2">Larry the Bird</td>
                                                            <td>@twitter</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                            <div class="tab-pane fade" id="roizquierda" role="tabpanel" aria-labelledby="disabled-tab" tabindex="0">
                                                <table class="table table-sm">
                                                    <thead>
                                                        <tr>
                                                            <th scope="col">Fecha</th>
                                                            <th scope="col">Rango</th>
                                                            <th scope="col">Derecho</th>
                                                            <th scope="col">izquierdo</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <th scope="row">10/12/2023</th>
                                                            <td>Fexion</td>
                                                            <td>40</td>
                                                            <td>45</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">15/12/2023</th>
                                                            <td>fexion</td>
                                                            <td>42</td>
                                                            <td>45</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">3</th>
                                                            <td colspan="2">Larry the Bird</td>
                                                            <td>@twitter</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                            <div class="tab-pane fade" id="roderecha" role="tabpanel" aria-labelledby="disabled-tab" tabindex="0">
                                                <table class="table table-sm">
                                                    <thead>
                                                        <tr>
                                                            <th scope="col">Fecha</th>
                                                            <th scope="col">Rango</th>
                                                            <th scope="col">Derecho</th>
                                                            <th scope="col">izquierdo</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <th scope="row">10/12/2023</th>
                                                            <td>Fexion</td>
                                                            <td>40</td>
                                                            <td>45</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">15/12/2023</th>
                                                            <td>fexion</td>
                                                            <td>42</td>
                                                            <td>45</td>
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
                                        <!-- ----------------------------------------------------------------------------------------------- -->
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
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
                procedimiento actual diagnostico(funcional)fisioterapéutico pronóstico de
                enfermedad objetivos del tratamiento (generales y específicos) plan de atención
                y tratamientos observaciones

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
                    <textarea class="form-control textarea" id="exampleFormControlTextarea1" rows="3" v-model="descripcion" placeholder="Padecimiento Actual"></textarea>
                </div>

                <div class="mb-3">
                    <textarea class="form-control textarea" id="exampleFormControlTextarea1" rows="3" v-model="descripcion" placeholder="iagnostico fisioterapeutico"></textarea>
                </div>

                <textarea class="form-control textarea" id="exampleFormControlTextarea1" rows="3" v-model="descripcion" placeholder="Diagnostico fisioterapeutico"></textarea>
            </div>

            <div class="mb-3">
                <textarea class="form-control textarea" id="exampleFormControlTextarea1" rows="3" v-model="descripcion" placeholder="Pronostico de la enfermedad"></textarea>
            </div>

        </div>
        <div class="container">
            <div class="row">
                <div class="col-6"> <textarea class="form-control textarea" id="exampleFormControlTextarea1" rows="3" v-model="descripcion" placeholder="Objetivos generales"></textarea></div>
                <div class="col-6"> <textarea class="form-control textarea" id="exampleFormControlTextarea1" rows="3" v-model="descripcion" placeholder="Objetivos especificos"></textarea></div>
            </div>
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
                <button type="button" class="btn btn-primary btn-sm">
                    guardar historia clinica
                </button>
            </div>
        </div>
        <div></div>
    </div>
</div>
</template>

<script>
import {
    Antecedentes
} from "./../firebase/bd";
export default {
    components: {},

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
        },
    },
};
</script>
