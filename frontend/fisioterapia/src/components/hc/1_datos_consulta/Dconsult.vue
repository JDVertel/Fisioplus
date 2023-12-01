<template>
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
                                   + Adicionar
                                </button>
                            </div>
                        </div>

                        <div class="col-12">
                            <div class="container">
                                <div class="card">
                                    <div class="card-header">
                                        Antecedentes registrados
                                    </div>
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
        <button class="btn btn-warning">Guardar</button>
        </div>
    </div>
</div>
</template>

<script>
import {
    Antecedentes
} from "./../../../firebase/bd.js";

export default {

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
    }),
    methods: {
        buscarenf(id) {
            this.enf = this.dataBD[id].enfermedades;
            console.log(this.enf);
            /*     console.log(id); */
        },
    },

}
</script>

<style>

</style>
