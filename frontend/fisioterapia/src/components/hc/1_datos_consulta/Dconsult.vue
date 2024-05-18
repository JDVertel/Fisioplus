<template>
<div class="accordion-item">
    <h2 class="accordion-header">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapse1" aria-expanded="false" aria-controls="panelsStayOpen-collapse1">
            Datos de Consulta
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
                    <div>
                        <div class="mb-3">
                            <br />
                            <textarea placeholder="Motivo de Consulta" v-model="motivoConsulta" class="form-control textarea" id="text_motivoconsulta" rows="3"></textarea>
                        </div>

                        <div class="mb-3">
                            <textarea placeholder="Enfermedad actual" v-model="Enfermedad" class="form-control textarea" id="text_diagnosticomedico" rows="3"></textarea>
                        </div>

                        <div class="mb-3">
                            <textarea placeholder="Tratamientos Previos" v-model="TratPrevios" class="form-control textarea" id="text_tratamientosprevios" rows="3"></textarea>
                        </div>

                        <div class="mb-3">
                            <textarea placeholder="Medicamentos Previos" v-model="MedPrevios" class="form-control textarea" id="text_medicamentosprevios" rows="3"></textarea>
                        </div>
                    </div>

                </div>

                <div class="tab-pane fade" id="nav-contactA" role="tabpanel" aria-labelledby="nav-contact-tab" tabindex="0">
                    <div>
                        <br />
                        <div class="row">
                            <div class="col-6">
                                <p>Medidas Fisicas</p>
                                <div>
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

                            <div class="col-6">
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
                            <!-- ----------------------------------------------------------------------------- -->
                            <div >
                                <div class="mb-1">
                                    <select v-model="tipoAnt" class="form-select form-select-sm textarea" v-on:change="buscar_enfermedad(this.tipoAnt, this.dataBD,'enfermedades')" aria-label="Default select example" id="tipoAnt">
                                        <option value="0">--Seleccione--</option>
                                        <option v-for="(ant) in this.dataBD" :key="ant.id" :value="ant.nombre">
                                            {{ ant.nombre }}
                                        </option>
                                    </select>

                                </div>

                                <select v-model="selectenfermedad" class="form-select form-select-sm textarea" id="selectenfermedad" aria-label="Default select example">
                                    <option value="0">--Seleccione enfermedad--</option>
                                    <option v-for="item in this.enf" :key="item.id" :value=item>
                                        {{ item }}
                                    </option>
                                </select>

                                <div class="mb-1">
                                    <textarea class="form-control form-control-sm textarea" id="exampleFormControlTextarea1" placeholder="Detalle" v-model="DetalleEnf" rows="2"></textarea>
                                </div>
                                <button class="btn btn-primary btn-sm textarea" @click="AddAntec(this.tipoAnt, this.selectenfermedad,this.DetalleEnf)">
                                    + Adicionar
                                </button>
                            </div>
                            <!-- ----------------------------------------------------------------------------- -->
                        </div>

                        <div class="col-12 mt-3">

                            <div  v-if="this.NewAntec">
                                <div class="card-header">
                                    Nuevos Antecedentes
                                </div>
                                <div class="table-responsive">
                                    <table class="table table-sm">
                                        <thead class="table-danger">
                                            <tr>
                                                <th>Tipo</th>
                                                <th>Enfermedad</th>
                                                <th>Detalle</th>
                                                <th>Opc</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr v-for="item in this.NewAntec" :key="item.id">
                                                <td>{{item.tipo}}</td>
                                                <td>{{item.enfermedad}}</td>
                                                <td>{{item.detalleenf}}</td>
                                                <td>X</td>
                                            </tr>
                                      
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                            <div class="card-header">
                                Historial de antecedentes
                            </div>
                            <div class="table-responsive">
                                <table class="table table-sm">
                                    <thead class="table-info">
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
            <button class="btn btn-warning mt-3" @click=" guardarInfo()">+ Guardar</button>
        </div>
    </div>
</div>
</template>

<script>
import {
    Antecedentes
} from "./../../../firebase/bd.js";
import {
    BuscarDetalles, BuscarDetallesNombre
} from "./../../backend/rutinas.js";

export default {

    data: () => ({
        dataBD: Antecedentes,
        datas: "",
        tipoAnt: "0",
        selectenfermedad: "0",

        motivoConsulta: "",
        Enfermedad: "",
        TratPrevios: "",
        MedPrevios: "",
        /*  */
        peso: "",
        talla: "",
        estatura: "",
        imc: "",
        temp: "",
        fcardiaca: "",
        frespiratoria: "",
        tarterial: "",
        /*  */

        ArrayDatosConsulta: [],
        ArraySaveConsulta: [],
        enf: [],
        NewAntec: [],
        regAnt: {},

    }),

    methods: {
/*         buscar_enfermedad(ide, array, resultado) {
            this.enf = BuscarDetalles(ide, array, resultado);
        }, */

        buscar_enfermedad(ide, array, resultado) {
            this.enf = BuscarDetallesNombre(ide, array, resultado);
        },


        AddAntec(tipo, enf, detalle) {
            let item = {
                tipo: tipo,
                enfermedad: enf,
                detalleenf: detalle
            }
            this.NewAntec = [...this.NewAntec, item]

        },

        guardarInfo() {
            this.ArraySaveConsulta = [];
            this.ArrayDatosConsulta = [{
                motivoConsulta: this.motivoConsulta,
                Enfermedad: this.Enfermedad,
                TratPrevios: this.TratPrevios,
                MedPrevios: this.MedPrevios,
                peso: this.peso,
                talla: this.talla,
                estatura: this.estatura,
                imc: this.imc,
                temp: this.temp,
                fcardiaca: this.fcardiaca,
                frespiratoria: this.frespiratoria,
                tarterial: this.tarterial,
            }];

            for (let elemento of this.ArrayDatosConsulta) {
                for (let propiedad in elemento) {
                    if (elemento[propiedad] !== '') {
                        let element = {
                            [propiedad]: elemento[propiedad]
                        };
                        this.ArraySaveConsulta = {
                            ...this.ArraySaveConsulta,
                            ...element
                        };

                    }
                }
                console.log(this.ArraySaveConsulta)

            }
        },

    }
}
</script>
