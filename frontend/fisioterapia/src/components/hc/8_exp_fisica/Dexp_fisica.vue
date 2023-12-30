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
                        <textarea class="form-control form-control-sm" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>
                    <div class="row">
                        <button type="button" class="btn btn-primary btn-sm">agregar</button>
                    </div>

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
                                <td> <input type="number" class="form-control form-control-sm" id="exampleFormControlInput1" placeholder="DATA"></td>
                                <td> <input type="number" class="form-control form-control-sm" id="exampleFormControlInput1" placeholder="DATA"></td>
                                <td> <input type="number" class="form-control form-control-sm" id="exampleFormControlInput1" placeholder="DATA"></td>
                            </tr>
                            <tr>
                                <th scope="row">2</th>
                                <td> <input type="number" class="form-control form-control-sm" id="exampleFormControlInput1" placeholder="DATA"></td>
                                <td> <input type="number" class="form-control form-control-sm" id="exampleFormControlInput1" placeholder="DATA"></td>
                                <td> <input type="number" class="form-control form-control-sm" id="exampleFormControlInput1" placeholder="DATA"></td>
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
                   
                            <h5>Valoracion de rangos de movimiento (Miembro Superior)</h5>
                        
                                <div class="col-2">

                                    <table class="table table-sm">
                                        <thead>
                                            <tr>
                                                <th scope="col">RAQUIS CERVICAL</th>
                                                <th scope="col">Izq</th>
                                                <th scope="col">Der</th>

                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <th scope="row">Flexión</th>
                                                <td> <input type="number" class="form-control form-control-sm" id="exampleFormControlInput1" placeholder="DATA"></td>
                                                <td> <input type="number" class="form-control form-control-sm" id="exampleFormControlInput1" placeholder="DATA"></td>

                                            </tr>
                                            <tr>
                                                <th scope="row">Extención </th>
                                                <td> <input type="number" class="form-control form-control-sm" id="exampleFormControlInput1" placeholder="DATA"></td>
                                                <td> <input type="number" class="form-control form-control-sm" id="exampleFormControlInput1" placeholder="DATA"></td>

                                            </tr>
                                            <tr>
                                                <th scope="row">Inclinación lat  der</th>
                                                <td> <input type="number" class="form-control form-control-sm" id="exampleFormControlInput1" placeholder="DATA"></td>
                                                <td> <input type="number" class="form-control form-control-sm" id="exampleFormControlInput1" placeholder="DATA"></td>
                                            </tr>
                                            <tr>
                                                <th scope="row">Inclinación lat  izq</th>
                                                <td> <input type="number" class="form-control form-control-sm" id="exampleFormControlInput1" placeholder="DATA"></td>
                                                <td> <input type="number" class="form-control form-control-sm" id="exampleFormControlInput1" placeholder="DATA"></td>
                                            </tr>
                                            <tr>
                                                <th scope="row">Rotación Izq</th>
                                                <td> <input type="number" class="form-control form-control-sm" id="exampleFormControlInput1" placeholder="DATA"></td>
                                                <td> <input type="number" class="form-control form-control-sm" id="exampleFormControlInput1" placeholder="DATA"></td>
                                            </tr>
                                            <tr>
                                                <th scope="row">Rotación Der</th>
                                                <td> <input type="number" class="form-control form-control-sm" id="exampleFormControlInput1" placeholder="DATA"></td>
                                                <td> <input type="number" class="form-control form-control-sm" id="exampleFormControlInput1" placeholder="DATA"></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div class="col-2">
                                    <table class="table table-sm">
                                        <thead>
                                            <tr>
                                                <th scope="col">RAQUIS DORSOLUMBAR</th>
                                                <th scope="col">Izq</th>
                                                <th scope="col">Der</th>

                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <th scope="row">Flexión</th>
                                                <td> <input type="number" class="form-control form-control-sm" id="exampleFormControlInput1" placeholder="DATA"></td>
                                                <td> <input type="number" class="form-control form-control-sm" id="exampleFormControlInput1" placeholder="DATA"></td>

                                            </tr>
                                            <tr>
                                                <th scope="row">Extención </th>
                                                <td> <input type="number" class="form-control form-control-sm" id="exampleFormControlInput1" placeholder="DATA"></td>
                                                <td> <input type="number" class="form-control form-control-sm" id="exampleFormControlInput1" placeholder="DATA"></td>

                                            </tr>
                                            <tr>
                                                <th scope="row">Inclinación lateral der</th>
                                                <td> <input type="number" class="form-control form-control-sm" id="exampleFormControlInput1" placeholder="DATA"></td>
                                                <td> <input type="number" class="form-control form-control-sm" id="exampleFormControlInput1" placeholder="DATA"></td>
                                            </tr>
                                            <tr>
                                                <th scope="row">Inclinación lateral izq</th>
                                                <td> <input type="number" class="form-control form-control-sm" id="exampleFormControlInput1" placeholder="DATA"></td>
                                                <td> <input type="number" class="form-control form-control-sm" id="exampleFormControlInput1" placeholder="DATA"></td>
                                            </tr>
                                            <tr>
                                                <th scope="row">Rotación Izq</th>
                                                <td> <input type="number" class="form-control form-control-sm" id="exampleFormControlInput1" placeholder="DATA"></td>
                                                <td> <input type="number" class="form-control form-control-sm" id="exampleFormControlInput1" placeholder="DATA"></td>
                                            </tr>
                                            <tr>
                                                <th scope="row">Rotación Der</th>
                                                <td> <input type="number" class="form-control form-control-sm" id="exampleFormControlInput1" placeholder="DATA"></td>
                                                <td> <input type="number" class="form-control form-control-sm" id="exampleFormControlInput1" placeholder="DATA"></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div class="col-2">
                                    <table class="table table-sm">
                                        <thead>
                                            <tr>
                                                <th scope="col">HOMBRO</th>
                                                <th scope="col">Izq</th>
                                                <th scope="col">Der</th>

                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <th scope="row">Flexión</th>
                                                <td> <input type="number" class="form-control form-control-sm" id="exampleFormControlInput1" placeholder="DATA"></td>
                                                <td> <input type="number" class="form-control form-control-sm" id="exampleFormControlInput1" placeholder="DATA"></td>

                                            </tr>
                                            <tr>
                                                <th scope="row">Extención </th>
                                                <td> <input type="number" class="form-control form-control-sm" id="exampleFormControlInput1" placeholder="DATA"></td>
                                                <td> <input type="number" class="form-control form-control-sm" id="exampleFormControlInput1" placeholder="DATA"></td>

                                            </tr>
                                            <tr>
                                                <th scope="row">Abduccion</th>
                                                <td> <input type="number" class="form-control form-control-sm" id="exampleFormControlInput1" placeholder="DATA"></td>
                                                <td> <input type="number" class="form-control form-control-sm" id="exampleFormControlInput1" placeholder="DATA"></td>
                                            </tr>
                                            <tr>
                                                <th scope="row">Aduccion</th>
                                                <td> <input type="number" class="form-control form-control-sm" id="exampleFormControlInput1" placeholder="DATA"></td>
                                                <td> <input type="number" class="form-control form-control-sm" id="exampleFormControlInput1" placeholder="DATA"></td>
                                            </tr>
                                            <tr>
                                                <th scope="row">Rotación Interna</th>
                                                <td> <input type="number" class="form-control form-control-sm" id="exampleFormControlInput1" placeholder="DATA"></td>
                                                <td> <input type="number" class="form-control form-control-sm" id="exampleFormControlInput1" placeholder="DATA"></td>
                                            </tr>
                                            <tr>
                                                <th scope="row">Rotación Externa</th>
                                                <td> <input type="number" class="form-control form-control-sm" id="exampleFormControlInput1" placeholder="DATA"></td>
                                                <td> <input type="number" class="form-control form-control-sm" id="exampleFormControlInput1" placeholder="DATA"></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                        
                       <div class="col-2">
                                    <table class="table table-sm">
                                        <thead>
                                            <tr>
                                                <th scope="col">CODO</th>
                                                <th scope="col">Izq</th>
                                                <th scope="col">Der</th>

                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <th scope="row">Flexión</th>
                                                <td> <input type="number" class="form-control form-control-sm" id="exampleFormControlInput1" placeholder="DATA"></td>
                                                <td> <input type="number" class="form-control form-control-sm" id="exampleFormControlInput1" placeholder="DATA"></td>

                                            </tr>
                                            <tr>
                                                <th scope="row">Extención </th>
                                                <td> <input type="number" class="form-control form-control-sm" id="exampleFormControlInput1" placeholder="DATA"></td>
                                                <td> <input type="number" class="form-control form-control-sm" id="exampleFormControlInput1" placeholder="DATA"></td>

                                            </tr>
                                            <tr>
                                                <th scope="row">Pronación</th>
                                                <td> <input type="number" class="form-control form-control-sm" id="exampleFormControlInput1" placeholder="DATA"></td>
                                                <td> <input type="number" class="form-control form-control-sm" id="exampleFormControlInput1" placeholder="DATA"></td>
                                            </tr>
                                            <tr>
                                                <th scope="row">Supinación</th>
                                                <td> <input type="number" class="form-control form-control-sm" id="exampleFormControlInput1" placeholder="DATA"></td>
                                                <td> <input type="number" class="form-control form-control-sm" id="exampleFormControlInput1" placeholder="DATA"></td>
                                            </tr>
                                          
                                        </tbody>
                                    </table>
                                </div>
                                  <div class="col-2">
                                    <table class="table table-sm">
                                        <thead>
                                            <tr>
                                                <th scope="col">MUÑECA</th>
                                                <th scope="col">Izq</th>
                                                <th scope="col">Der</th>

                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <th scope="row">Flexión</th>
                                                <td> <input type="number" class="form-control form-control-sm" id="exampleFormControlInput1" placeholder="DATA"></td>
                                                <td> <input type="number" class="form-control form-control-sm" id="exampleFormControlInput1" placeholder="DATA"></td>

                                            </tr>
                                            <tr>
                                                <th scope="row">Extención </th>
                                                <td> <input type="number" class="form-control form-control-sm" id="exampleFormControlInput1" placeholder="DATA"></td>
                                                <td> <input type="number" class="form-control form-control-sm" id="exampleFormControlInput1" placeholder="DATA"></td>

                                            </tr>
                                            <tr>
                                                <th scope="row">Desviacion radial</th>
                                                <td> <input type="number" class="form-control form-control-sm" id="exampleFormControlInput1" placeholder="DATA"></td>
                                                <td> <input type="number" class="form-control form-control-sm" id="exampleFormControlInput1" placeholder="DATA"></td>
                                            </tr>
                                            <tr>
                                                <th scope="row">Desviacion cubital</th>
                                                <td> <input type="number" class="form-control form-control-sm" id="exampleFormControlInput1" placeholder="DATA"></td>
                                                <td> <input type="number" class="form-control form-control-sm" id="exampleFormControlInput1" placeholder="DATA"></td>
                                            </tr>
                                           
                                        </tbody>
                                    </table>
                                </div>
                 

                    </div>

                </div>
                <!--  -->
                <div class="tab-pane fade" id="nav-minferior" role="tabpanel" tabindex="0">
                    <div class="row">
                        <div class="col-3">

                        </div>
                        <div class="col-9">

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
