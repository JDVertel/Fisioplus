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
            <h6>Inspección y Palpación</h6>
            <p>Evaluación por aparatos y sistemas: Comparando con el lado colateral</p>
            <nav>
                <div class="nav nav-tabs" id="nav-tab" role="tablist">

                    <button class="nav-link active" id="nav-soseo-tab" data-bs-toggle="tab" data-bs-target="#nav-soseo" type="button" role="tab" aria-controls="nav-home" aria-selected="false">
                        Sistema Oseo
                    </button>

                    <button class="nav-link" id="nav-msuperior-tab" data-bs-toggle="tab" data-bs-target="#nav-msuperior" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">
                        Valoracion Rangos de Movimientos (M Superior)
                    </button>

                    <button class="nav-link" id="nav-minferior-tab" data-bs-toggle="tab" data-bs-target="#nav-minferior" type="button" role="tab" aria-controls="nav-contact" aria-selected="true">
                        Valoracion Rangos de Movimientos (M Inferior)
                    </button>

                </div>
            </nav>
            <!--  -->
            <div class="tab-content" id="nav-tabContent">
                <div class="tab-pane fade show active" id="nav-soseo" role="tabpanel" tabindex="0">
                    <p>Seleccione y agregue hallazgos</p>

                    <select class="form-select form-select-sm" aria-label="Small select example" v-model="tipoevaluacion" v-on:change="buscardata(this.tipoevaluacion,this.data_exp,'detalle')">
                        <option selected value="0">--seleccione Clase--</option>
                        <option v-for="item in this.data_exp" :key="item.id" :value="item.id">{{item.clase}}</option>
                    </select>

                    <select class="form-select form-select-sm" aria-label="Small select example" v-model="tipomusculo">
                        <option value="0" selected>--Seleccione Tipo musculo--</option>
                        <option v-for="item in this.datosC" :key="item.id">{{item}}</option>

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
                                <th>Sitema</th>
                                <th>Clase</th>
                                <th>Musculo</th>
                                <th>Detalle</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>xxx </td>
                                <td>xxx </td>
                                <td>xxx </td>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td> xxx</td>
                                <td>xxx </td>
                                <td>xxx </td>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>xxx </td>
                                <td>xxx </td>
                                <td>xxx </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div class="tab-pane fade" id="nav-msuperior" role="tabpanel" tabindex="0">
                    <div class="row">

                        <h5>Valoracion de rangos de Mov (Miembro Superior)</h5>

                        <div class="col-6 col-md-2">
                            <h6>RAQUIS CERVICAL</h6>
                            <table class="table table-sm table-success">

                                <thead>
                                    <tr>
                                        <th>Mov</th>
                                        <th>Izq</th>
                                        <th>Der</th>

                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Flexión</td>
                                        <td> <input type="number" class="form-control form-control-sm" id="exampleFormControlInput1" placeholder="DATA"></td>
                                        <td> <input type="number" class="form-control form-control-sm" id="exampleFormControlInput1" placeholder="DATA"></td>

                                    </tr>
                                    <tr>
                                        <td>Extención </td>
                                        <td> <input type="number" class="form-control form-control-sm" id="exampleFormControlInput1" placeholder="DATA"></td>
                                        <td> <input type="number" class="form-control form-control-sm" id="exampleFormControlInput1" placeholder="DATA"></td>

                                    </tr>
                                    <tr>
                                        <td>Inclinación lat der</td>
                                        <td> <input type="number" class="form-control form-control-sm" id="exampleFormControlInput1" placeholder="DATA"></td>
                                        <td> <input type="number" class="form-control form-control-sm" id="exampleFormControlInput1" placeholder="DATA"></td>
                                    </tr>
                                    <tr>
                                        <td>Inclinación lat izq</td>
                                        <td> <input type="number" class="form-control form-control-sm" id="exampleFormControlInput1" placeholder="DATA"></td>
                                        <td> <input type="number" class="form-control form-control-sm" id="exampleFormControlInput1" placeholder="DATA"></td>
                                    </tr>
                                    <tr>
                                        <td>Rotación Izq</td>
                                        <td> <input type="number" class="form-control form-control-sm" id="exampleFormControlInput1" placeholder="DATA"></td>
                                        <td> <input type="number" class="form-control form-control-sm" id="exampleFormControlInput1" placeholder="DATA"></td>
                                    </tr>
                                    <tr>
                                        <td>Rotación Der</td>
                                        <td> <input type="number" class="form-control form-control-sm" id="exampleFormControlInput1" placeholder="DATA"></td>
                                        <td> <input type="number" class="form-control form-control-sm" id="exampleFormControlInput1" placeholder="DATA"></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div class="col-6 col-md-2">
                            <h6>RAQUIS DORSOLUMBAR</h6>
                            <table class="table table-sm table-info">

                                <thead>
                                    <tr>
                                        <th>Mov</th>
                                        <th>Izq</th>
                                        <th>Der</th>

                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Flexión</td>
                                        <td> <input type="number" class="form-control form-control-sm" id="exampleFormControlInput1" placeholder="DATA"></td>
                                        <td> <input type="number" class="form-control form-control-sm" id="exampleFormControlInput1" placeholder="DATA"></td>

                                    </tr>
                                    <tr>
                                        <td>Extención </td>
                                        <td> <input type="number" class="form-control form-control-sm" id="exampleFormControlInput1" placeholder="DATA"></td>
                                        <td> <input type="number" class="form-control form-control-sm" id="exampleFormControlInput1" placeholder="DATA"></td>

                                    </tr>
                                    <tr>
                                        <td>Inclinación lateral der</td>
                                        <td> <input type="number" class="form-control form-control-sm" id="exampleFormControlInput1" placeholder="DATA"></td>
                                        <td> <input type="number" class="form-control form-control-sm" id="exampleFormControlInput1" placeholder="DATA"></td>
                                    </tr>
                                    <tr>
                                        <td>Inclinación lateral izq</td>
                                        <td> <input type="number" class="form-control form-control-sm" id="exampleFormControlInput1" placeholder="DATA"></td>
                                        <td> <input type="number" class="form-control form-control-sm" id="exampleFormControlInput1" placeholder="DATA"></td>
                                    </tr>
                                    <tr>
                                        <td>Rotación Izq</td>
                                        <td> <input type="number" class="form-control form-control-sm" id="exampleFormControlInput1" placeholder="DATA"></td>
                                        <td> <input type="number" class="form-control form-control-sm" id="exampleFormControlInput1" placeholder="DATA"></td>
                                    </tr>
                                    <tr>
                                        <td>Rotación Der</td>
                                        <td> <input type="number" class="form-control form-control-sm" id="exampleFormControlInput1" placeholder="DATA"></td>
                                        <td> <input type="number" class="form-control form-control-sm" id="exampleFormControlInput1" placeholder="DATA"></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div class="col-6 col-md-2">
                            <h6>HOMBRO</h6>
                            <table class="table table-sm table-warning">

                                <thead>
                                    <tr>
                                        <th>Mov</th>
                                        <th>Izq</th>
                                        <th>Der</th>

                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Flexión</td>
                                        <td> <input type="number" class="form-control form-control-sm" id="exampleFormControlInput1" placeholder="DATA"></td>
                                        <td> <input type="number" class="form-control form-control-sm" id="exampleFormControlInput1" placeholder="DATA"></td>

                                    </tr>
                                    <tr>
                                        <td>Extención </td>
                                        <td> <input type="number" class="form-control form-control-sm" id="exampleFormControlInput1" placeholder="DATA"></td>
                                        <td> <input type="number" class="form-control form-control-sm" id="exampleFormControlInput1" placeholder="DATA"></td>

                                    </tr>
                                    <tr>
                                        <td>Abduccion</td>
                                        <td> <input type="number" class="form-control form-control-sm" id="exampleFormControlInput1" placeholder="DATA"></td>
                                        <td> <input type="number" class="form-control form-control-sm" id="exampleFormControlInput1" placeholder="DATA"></td>
                                    </tr>
                                    <tr>
                                        <td>Aduccion</td>
                                        <td> <input type="number" class="form-control form-control-sm" id="exampleFormControlInput1" placeholder="DATA"></td>
                                        <td> <input type="number" class="form-control form-control-sm" id="exampleFormControlInput1" placeholder="DATA"></td>
                                    </tr>
                                    <tr>
                                        <td>Rotación Interna</td>
                                        <td> <input type="number" class="form-control form-control-sm" id="exampleFormControlInput1" placeholder="DATA"></td>
                                        <td> <input type="number" class="form-control form-control-sm" id="exampleFormControlInput1" placeholder="DATA"></td>
                                    </tr>
                                    <tr>
                                        <td>Rotación Externa</td>
                                        <td> <input type="number" class="form-control form-control-sm" id="exampleFormControlInput1" placeholder="DATA"></td>
                                        <td> <input type="number" class="form-control form-control-sm" id="exampleFormControlInput1" placeholder="DATA"></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div class="col-6 col-md-2">
                            <h6>CODO</h6>
                            <table class="table table-sm table-primary">

                                <thead>
                                    <tr>
                                        <th>Mov</th>
                                        <th>Izq</th>
                                        <th>Der</th>

                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Flexión</td>
                                        <td> <input type="number" class="form-control form-control-sm" id="exampleFormControlInput1" placeholder="DATA"></td>
                                        <td> <input type="number" class="form-control form-control-sm" id="exampleFormControlInput1" placeholder="DATA"></td>

                                    </tr>
                                    <tr>
                                        <td>Extención </td>
                                        <td> <input type="number" class="form-control form-control-sm" id="exampleFormControlInput1" placeholder="DATA"></td>
                                        <td> <input type="number" class="form-control form-control-sm" id="exampleFormControlInput1" placeholder="DATA"></td>

                                    </tr>
                                    <tr>
                                        <td>Pronación</td>
                                        <td> <input type="number" class="form-control form-control-sm" id="exampleFormControlInput1" placeholder="DATA"></td>
                                        <td> <input type="number" class="form-control form-control-sm" id="exampleFormControlInput1" placeholder="DATA"></td>
                                    </tr>
                                    <tr>
                                        <td>Supinación</td>
                                        <td> <input type="number" class="form-control form-control-sm" id="exampleFormControlInput1" placeholder="DATA"></td>
                                        <td> <input type="number" class="form-control form-control-sm" id="exampleFormControlInput1" placeholder="DATA"></td>
                                    </tr>

                                </tbody>
                            </table>
                        </div>
                        <div class="col-6 col-md-2">
                            <h6>MUÑECA</h6>
                            <table class="table table-sm table-danger">

                                <thead>
                                    <tr>
                                        <th>Mov</th>
                                        <th>Izq</th>
                                        <th>Der</th>

                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Flexión</td>
                                        <td> <input type="number" class="form-control form-control-sm" id="exampleFormControlInput1" placeholder="DATA"></td>
                                        <td> <input type="number" class="form-control form-control-sm" id="exampleFormControlInput1" placeholder="DATA"></td>

                                    </tr>
                                    <tr>
                                        <td>Extención </td>
                                        <td> <input type="number" class="form-control form-control-sm" id="exampleFormControlInput1" placeholder="DATA"></td>
                                        <td> <input type="number" class="form-control form-control-sm" id="exampleFormControlInput1" placeholder="DATA"></td>

                                    </tr>
                                    <tr>
                                        <td>Desviacion radial</td>
                                        <td> <input type="number" class="form-control form-control-sm" id="exampleFormControlInput1" placeholder="DATA"></td>
                                        <td> <input type="number" class="form-control form-control-sm" id="exampleFormControlInput1" placeholder="DATA"></td>
                                    </tr>
                                    <tr>
                                        <td>Desviacion cubital</td>
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
                    <h5>Valoracion de rangos de Mov (Miembro Inferior)</h5>
                    <div class="row">
                        <div class="col-6 col-md-3">
                            <h6>CADERA</h6>
                            <table class="table table-sm table-secondary">

                                <thead>
                                    <tr>
                                        <th>Mov</th>
                                        <th>Izq</th>
                                        <th>Der</th>

                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Flexión</td>
                                        <td> <input type="number" class="form-control form-control-sm" id="exampleFormControlInput1" placeholder="DATA"></td>
                                        <td> <input type="number" class="form-control form-control-sm" id="exampleFormControlInput1" placeholder="DATA"></td>

                                    </tr>
                                    <tr>
                                        <td>Extención </td>
                                        <td> <input type="number" class="form-control form-control-sm" id="exampleFormControlInput1" placeholder="DATA"></td>
                                        <td> <input type="number" class="form-control form-control-sm" id="exampleFormControlInput1" placeholder="DATA"></td>

                                    </tr>
                                    <tr>
                                        <td>Abducción</td>
                                        <td> <input type="number" class="form-control form-control-sm" id="exampleFormControlInput1" placeholder="DATA"></td>
                                        <td> <input type="number" class="form-control form-control-sm" id="exampleFormControlInput1" placeholder="DATA"></td>
                                    </tr>
                                    <tr>
                                        <td>Aducción</td>
                                        <td> <input type="number" class="form-control form-control-sm" id="exampleFormControlInput1" placeholder="DATA"></td>
                                        <td> <input type="number" class="form-control form-control-sm" id="exampleFormControlInput1" placeholder="DATA"></td>
                                    </tr>

                                    <tr>
                                        <td>R interna</td>
                                        <td> <input type="number" class="form-control form-control-sm" id="exampleFormControlInput1" placeholder="DATA"></td>
                                        <td> <input type="number" class="form-control form-control-sm" id="exampleFormControlInput1" placeholder="DATA"></td>
                                    </tr>
                                    <tr>
                                        <td>R externa</td>
                                        <td> <input type="number" class="form-control form-control-sm" id="exampleFormControlInput1" placeholder="DATA"></td>
                                        <td> <input type="number" class="form-control form-control-sm" id="exampleFormControlInput1" placeholder="DATA"></td>
                                    </tr>

                                </tbody>
                            </table>
                        </div>
                        <div class="col-6 col-md-3">
                            <h6>RODILLA</h6>
                            <table class="table table-sm table-danger">

                                <thead>
                                    <tr>
                                        <th>Mov</th>
                                        <th>Izq</th>
                                        <th>Der</th>

                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Flexión</td>
                                        <td> <input type="number" class="form-control form-control-sm" id="exampleFormControlInput1" placeholder="DATA"></td>
                                        <td> <input type="number" class="form-control form-control-sm" id="exampleFormControlInput1" placeholder="DATA"></td>

                                    </tr>
                                    <tr>
                                        <td>Extención </td>
                                        <td> <input type="number" class="form-control form-control-sm" id="exampleFormControlInput1" placeholder="DATA"></td>
                                        <td> <input type="number" class="form-control form-control-sm" id="exampleFormControlInput1" placeholder="DATA"></td>

                                    </tr>

                                </tbody>
                            </table>
                        </div>
                        <div class="col-6 col-md-3">
                            <h6>TOBILLO</h6>
                            <table class="table table-sm table-warning">

                                <thead>
                                    <tr>
                                        <th>Mov</th>
                                        <th>Izq</th>
                                        <th>Der</th>

                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Flexión plantar</td>
                                        <td> <input type="number" class="form-control form-control-sm" id="exampleFormControlInput1" placeholder="DATA"></td>
                                        <td> <input type="number" class="form-control form-control-sm" id="exampleFormControlInput1" placeholder="DATA"></td>

                                    </tr>
                                    <tr>
                                        <td>Flexión dorsal </td>
                                        <td> <input type="number" class="form-control form-control-sm" id="exampleFormControlInput1" placeholder="DATA"></td>
                                        <td> <input type="number" class="form-control form-control-sm" id="exampleFormControlInput1" placeholder="DATA"></td>

                                    </tr>

                                </tbody>
                            </table>
                        </div>
                        <div class="col-6 col-md-3">
                            <h6>ART.SUBASTRAGALINA</h6>
                            <table class="table table-sm table-success">

                                <thead>
                                    <tr>
                                        <th>Mov</th>
                                        <th>Izq</th>
                                        <th>Der</th>

                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Inversion</td>
                                        <td> <input type="number" class="form-control form-control-sm" id="exampleFormControlInput1" placeholder="DATA"></td>
                                        <td> <input type="number" class="form-control form-control-sm" id="exampleFormControlInput1" placeholder="DATA"></td>

                                    </tr>
                                    <tr>
                                        <td>Eversión </td>
                                        <td> <input type="number" class="form-control form-control-sm" id="exampleFormControlInput1" placeholder="DATA"></td>
                                        <td> <input type="number" class="form-control form-control-sm" id="exampleFormControlInput1" placeholder="DATA"></td>

                                    </tr>

                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

            <hr>
            <div class="container">
                <textarea class="form-control form-control-sm" id="exampleFormControlTextarea1" placeholder="Observaciones" rows="3"></textarea>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import {
    exp_fisica
} from "./../../../firebase/bd.js";
import {
    BuscarDetalles
} from "./../../backend/rutinas.js";
export default {
    data: () => ({
        data_exp: exp_fisica,
        tipoevaluacion: "0",
        tipomusculo: "0",
        datosC: "",

    }),
    methods: {
        buscardata(x, y, z) {
            this.datosC = BuscarDetalles(x, y, z)
        }

    }
}
</script>

<style lang="scss" scoped>

</style>
