<template>
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

                    <button class="nav-link active" id="nav-soseo-tab" data-bs-toggle="tab" data-bs-target="#nav-soseo" type="button" role="tab" aria-controls="nav-home" aria-selected="false">
                        S Oseo
                    </button>

                    <button class="nav-link" id="nav-msuperior-tab" data-bs-toggle="tab" data-bs-target="#nav-msuperior" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">
                        VR movimientos(M Superior)
                    </button>

                    <button class="nav-link" id="nav-minferior-tab" data-bs-toggle="tab" data-bs-target="#nav-minferior" type="button" role="tab" aria-controls="nav-contact" aria-selected="true">
                        VR movimientos(M Inferior)
                    </button>

                </div>
            </nav>
            <!--  -->
            <div class="tab-content" id="nav-tabContent">
                <div class="tab-pane fade show active" id="nav-soseo" role="tabpanel" tabindex="0">
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
                <div class="tab-pane fade" id="nav-msuperior" role="tabpanel" tabindex="0">
                    <div class="row">
                        <div class="col-3">
                            <h5>Diligencie los siguiente datos</h5>
                            <table class="table">
                                <thead>
                                    <tr>
                                        <th scope="col">RAQUIS CERVICAL</th>
                                        <th scope="col">Izquierda</th>
                                        <th scope="col">Derecha</th>

                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">Fexion</th>
                                        <td>Mark</td>
                                        <td>Otto</td>

                                    </tr>
                                    <tr>
                                        <th scope="row">Extencion </th>
                                        <td>Jacob</td>
                                        <td>Thornton</td>

                                    </tr>
                                    <tr>
                                        <th scope="row">Inclinacion lateral derecha</th>
                                        <td>Jacob</td>
                                        <td>Thornton</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Inclinacion lateral izquierda</th>
                                        <td>Jacob</td>
                                        <td>Thornton</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Rotacion Izquierda</th>
                                        <td>Jacob</td>
                                        <td>Thornton</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div class="col-9">
                            <div class="row">
                                <div class="col-4">
                                    <table class="table table-bordered ">
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
                                <div class="col-4">
                                    <table class="table table-bordered ">
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
                                <div class="col-4">
                                    <table class="table table-bordered ">
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
                <!--  -->
                <div class="tab-pane fade" id="nav-minferior" role="tabpanel" tabindex="0">
                    <div class="accordion-flush" id="accordionExample">
                        <!-- item -->
                        <div class="accordion-item">
                            <h2 class="accordion-header">
                                <button class="accordion-button collapsed " type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                    Cadera
                                </button>
                            </h2>
                            <div id="collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
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
                                                Flexion
                                            </button>
                                        </li>
                                        <li class="nav-item" role="presentation">
                                            <button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#extencion" type="button" role="tab" aria-controls="profile-tab-pane" aria-selected="false">
                                                extencion
                                            </button>
                                        </li>
                                        <li class="nav-item" role="presentation">
                                            <button class="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#ilderecha" type="button" role="tab" aria-controls="contact-tab-pane" aria-selected="false">
                                                Abduccion
                                            </button>
                                        </li>
                                        <li class="nav-item" role="presentation">
                                            <button class="nav-link" id="disabled-tab" data-bs-toggle="tab" data-bs-target="#ilizquierda" type="button" role="tab" aria-controls="disabled-tab-pane" aria-selected="false">
                                                Aduccion
                                            </button>
                                        </li>
                                        <li class="nav-item" role="presentation">
                                            <button class="nav-link" id="disabled-tab" data-bs-toggle="tab" data-bs-target="#roizquierda" type="button" role="tab" aria-controls="disabled-tab-pane" aria-selected="false">
                                                R izquierda
                                            </button>
                                        </li>
                                        <li class="nav-item" role="presentation">
                                            <button class="nav-link" id="disabled-tab" data-bs-toggle="tab" data-bs-target="#roderecha" type="button" role="tab" aria-controls="disabled-tab-pane" aria-selected="false">
                                                R derecha
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
                                                        <td>Flexion</td>
                                                        <td>40</td>
                                                        <td>45</td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">15/12/2023</th>
                                                        <td>Flexion</td>
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
                                                        <td>Flexion</td>
                                                        <td>40</td>
                                                        <td>45</td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">15/12/2023</th>
                                                        <td>Flexion</td>
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
                                                        <td>Flexion</td>
                                                        <td>40</td>
                                                        <td>45</td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">15/12/2023</th>
                                                        <td>Flexion</td>
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
                                                        <td>Flexion</td>
                                                        <td>40</td>
                                                        <td>45</td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">15/12/2023</th>
                                                        <td>Flexion</td>
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
                                                        <td>Flexion</td>
                                                        <td>40</td>
                                                        <td>45</td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">15/12/2023</th>
                                                        <td>Flexion</td>
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
                                                        <td>Flexion</td>
                                                        <td>40</td>
                                                        <td>45</td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">15/12/2023</th>
                                                        <td>Flexion</td>
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
                                    Rodilla
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
                                                Flexion
                                            </button>
                                        </li>
                                        <li class="nav-item" role="presentation">
                                            <button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#extencion" type="button" role="tab" aria-controls="profile-tab-pane" aria-selected="false">
                                                extencion
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
                                                        <td>Flexion</td>
                                                        <td>40</td>
                                                        <td>45</td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">15/12/2023</th>
                                                        <td>Flexion</td>
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
                                                        <td>Flexion</td>
                                                        <td>40</td>
                                                        <td>45</td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">15/12/2023</th>
                                                        <td>Flexion</td>
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
                                                        <td>Flexion</td>
                                                        <td>40</td>
                                                        <td>45</td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">15/12/2023</th>
                                                        <td>Flexion</td>
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
                                                        <td>Flexion</td>
                                                        <td>40</td>
                                                        <td>45</td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">15/12/2023</th>
                                                        <td>Flexion</td>
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
                                                        <td>Flexion</td>
                                                        <td>40</td>
                                                        <td>45</td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">15/12/2023</th>
                                                        <td>Flexion</td>
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
                                                        <td>Flexion</td>
                                                        <td>40</td>
                                                        <td>45</td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">15/12/2023</th>
                                                        <td>Flexion</td>
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
                                    Tobillo
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
                                                Flexion
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
                                                        <td>Flexion</td>
                                                        <td>40</td>
                                                        <td>45</td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">15/12/2023</th>
                                                        <td>Flexion</td>
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
                                                        <td>Flexion</td>
                                                        <td>40</td>
                                                        <td>45</td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">15/12/2023</th>
                                                        <td>Flexion</td>
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
                                                        <td>Flexion</td>
                                                        <td>40</td>
                                                        <td>45</td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">15/12/2023</th>
                                                        <td>Flexion</td>
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
                                                        <td>Flexion</td>
                                                        <td>40</td>
                                                        <td>45</td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">15/12/2023</th>
                                                        <td>Flexion</td>
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
                                                        <td>Flexion</td>
                                                        <td>40</td>
                                                        <td>45</td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">15/12/2023</th>
                                                        <td>Flexion</td>
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
                                                        <td>Flexion</td>
                                                        <td>40</td>
                                                        <td>45</td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">15/12/2023</th>
                                                        <td>Flexion</td>
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
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse4" aria-expanded="false" aria-controls="collapse4">
                                    Art Sub-Astragalina
                                </button>
                            </h2>
                            <div id="collapse4" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
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
                                                Inversión
                                            </button>
                                        </li>
                                        <li class="nav-item" role="presentation">
                                            <button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#extencion" type="button" role="tab" aria-controls="profile-tab-pane" aria-selected="false">
                                                Eversión
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
                                                        <td>Flexion</td>
                                                        <td>40</td>
                                                        <td>45</td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">15/12/2023</th>
                                                        <td>Flexion</td>
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
                                                        <td>Flexion</td>
                                                        <td>40</td>
                                                        <td>45</td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">15/12/2023</th>
                                                        <td>Flexion</td>
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
                                                        <td>Flexion</td>
                                                        <td>40</td>
                                                        <td>45</td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">15/12/2023</th>
                                                        <td>Flexion</td>
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
                                                        <td>Flexion</td>
                                                        <td>40</td>
                                                        <td>45</td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">15/12/2023</th>
                                                        <td>Flexion</td>
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
                                                        <td>Flexion</td>
                                                        <td>40</td>
                                                        <td>45</td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">15/12/2023</th>
                                                        <td>Flexion</td>
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
                                                        <td>Flexion</td>
                                                        <td>40</td>
                                                        <td>45</td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">15/12/2023</th>
                                                        <td>Flexion</td>
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
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>

</style>
