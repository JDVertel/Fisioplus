<template>
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
                desde el primer contacto visual con la persona que asiste
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
                        <div class="mb-1" v-if="tipoAnt != 0">
                            <select v-model="Enfermedad" class="form-select form-select-sm textarea" aria-label="Default select example">
                                <option value="">Seleccione marcha</option>
                                <option v-for="(item, index) in this.data_marcha" :key="index" value="{{index}}">
                                    {{ item.nombre }}
                                </option>
                            </select>
                        </div>

                        <div class="mb-1">
                            <textarea class="form-control form-control-sm textarea" id="exampleFormControlTextarea1" placeholder="Detalle" v-model="DetalleEnfHeredoF" rows="2"></textarea>
                        </div>

                        <button type="button" class="btn btn-primary">
                            + Adicionar
                        </button>
                     
                    </div>
                    <br>
                </div>
                <div class="tab-pane fade" id="nav-profileB" role="tabpanel" aria-labelledby="nav-profile-tab" tabindex="0">
                    <div class="container">
                        <br />

                        <div class="mb-1" v-if="tipoAnt != 0">
                            <select v-model="Enfermedad" class="form-select form-select-sm textarea" aria-label="Default select example">
                                <option value="">Seleccione marcha</option>
                                <option v-for="(item, index) in this.data_movilidad" :key="index" value="{{index}}">
                                    {{ item.nombre }}
                                </option>
                            </select>
                        </div>

                        <div class="mb-1">
                            <textarea class="form-control form-control-sm textarea" id="exampleFormControlTextarea1" placeholder="Detalle" v-model="DetalleEnfHeredoF" rows="2"></textarea>
                        </div>

                        <button type="button" class="btn btn-primary">
                            + Adicionar
                        </button>

                    </div>
                    <br>
                </div>
            </div>

            <div class="card">
                <div class="card-header">
                    Registro
                </div>

                <table class="table table-sm">
                    <thead>
                        <tr>
                            <th scope="col">movilidad/traslados</th>
                            <th scope="col">First</th>

                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>

                            <td>@mdo</td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>Jacob</td>

                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td>@twitter</td>

                        </tr>
                    </tbody>
                </table>

            </div>
        </div>
    </div>
</div>
</template>

<script>
import {
    observacion_marcha
} from "./../../../firebase/bd.js";
import {
    observacion_movilidad
} from "./../../../firebase/bd.js";

export default {

    data: () => ({
        data_marcha: observacion_marcha,
        data_movilidad: observacion_movilidad,

    }),

    methods: {

    }

}
</script>

<style>

</style>
