<template>
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

</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>

</style>