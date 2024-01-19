<template>
<div class="accordion-item">
    <h2 class="accordion-header">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapse4" aria-expanded="false" aria-controls="panelsStayOpen-collapse4">

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
                    <!-- 1 -->
                    <select v-on:change="buscar_detalle(v_anterior, this.data_v_anterior)" v-model="v_anterior" class="form-select form-select-sm" aria-label="Small select example">
                        <option value="0" selected>--Seleccione clasificacion--</option>
                        <option v-for="(item, index) in this.data_v_anterior" :key="index" :value="item.id">{{ item.organo}}</option>

                    </select>
                    <!-- 2 -->
                    <select class="form-select form-select-sm" aria-label="Small select example" v-model="v_anterior_org">
                        <option value="0" selected>--Seleccione especificacion--</option>
                        <option v-for="(item, index) in this.detalle_rta.detalle" :key="index" value="{{item}}">{{ item}}</option>

                    </select>

                    <div class="mb-3">
                        <label for="exampleFormControlTextarea1" class="form-label">Detalle</label>
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>

                    <button type="button" class="btn btn-primary btn-sm">+ Agregar</button>

                </div>
                <div class="tab-pane fade" id="vlateral" role="tabpanel" aria-labelledby="profile-tab" tabindex="0">
                    <p>Seleccione y agregue hallazgos</p>
                    <!-- 1 -->
                    <select class="form-select form-select-sm" aria-label="Small select example" v-on:change="buscar_detalle(v_lateral, this.data_v_lateral)" v-model="v_lateral">
                        <option value="0" selected>-- Seleccione clasificacion--</option>
                        <option v-for="(item, index) in this.data_v_lateral" :key="index" :value="item.id">{{ item.organo}}</option>
                    </select>
                    <!-- 2 -->
                    <select class="form-select form-select-sm" aria-label="Small select example" v-model="v_lateral_org">
                        <option value="0" selected>--Seleccione la especificacion--</option>
                        <option v-for="(it, index) in this.detalle_rta.detalle" :key="index" value="{{it}}">{{ it}}</option>

                    </select>

                    <div class="mb-3">
                        <label for="exampleFormControlTextarea1" class="form-label">Detalle</label>
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>

                    <button type="button" class="btn btn-primary btn-sm">+ Agregar</button>

                </div>
                <div class="tab-pane fade" id="vposterior" role="tabpanel" aria-labelledby="contact-tab" tabindex="0">
                    <p>Seleccione y agregue hallazgos</p>

                      <!-- 1 -->
                    <select class="form-select form-select-sm" aria-label="Small select example" v-on:change="buscar_detalle(v_posterior, this.data_v_posterior)" v-model="v_posterior">
                        <option value="0" selected>-- Seleccione clasificacion--</option>
                        <option v-for="(item, index) in this.data_v_posterior" :key="index" :value="item.id">{{ item.organo}}</option>
                    </select>
                    <!-- 2 -->
                    <select class="form-select form-select-sm" aria-label="Small select example" v-model="v_posterior_org">
                        <option value="0" selected>--Seleccione la especificacion--</option>
                        <option v-for="(it, index) in this.detalle_rta.detalle" :key="index" value="{{it}}">{{ it}}</option>

                    </select>

                    <div class="mb-3">
                        <label for="exampleFormControlTextarea1" class="form-label">Detalle</label>
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>

                    <button type="button" class="btn btn-primary btn-sm">+ Agregar</button>

                </div>
            </div>
            <br>
            <div class="card">
                <div class="card-header">
                    Registro
                </div>
                <div class="card-body">
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
</template>

<script>
import {
    eval_postural
} from "./../../../firebase/bd.js";
export default {

    data: () => ({
        data_v_anterior: eval_postural.filter((el) => el.clase == "vista anterior"),

        data_v_lateral: eval_postural.filter((el) => el.clase == "vista lateral"),

        data_v_posterior: eval_postural.filter((el) => el.clase == "vista posterior"),

        /*  */
        detalle_rta: "",
        v_anterior: "0",
        v_anterior_org: "0",
        v_lateral: "0",
        v_lateral_org: "0",
           v_posterior: "0",
        v_posterior_org: "0",

    }),
    methods: {
        buscar_detalle(id, bd) {
            this.detalle_rta = bd.filter((el) => el.id == id)[0],
                console.log(this.detalle_rta.detalle);

        },
    }

}
</script>

<style >

</style>
