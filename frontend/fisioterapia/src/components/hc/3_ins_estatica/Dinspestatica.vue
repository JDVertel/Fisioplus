<template>
<div class="accordion-item">
    <h2 class="accordion-header">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapse3" aria-expanded="false" aria-controls="panelsStayOpen-collapse3">
            <v-icon name="fa-user-check" fill="blue" />Inspeccion Estatica

        </button>
    </h2>
    <div id="panelsStayOpen-collapse3" class="accordion-collapse collapse">
        <div class="accordion-body">
            <p>Evaluacion de la postura:(Comparando con el lado colateral)</p>
        </div>
        <div class="container">
            <img id="imagen_postura" src="./../../../assets/images/insp_estatica/imagen_postura.png" alt="">
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
                <div class="container">
                    <div class="mb-1" v-if="tipoAnt != 0">
                        <select v-model="Enfermedad" class="form-select form-select-sm textarea" aria-label="Default select example">
                            <option value="">Seleccione evaluacion de piel</option>
                            <option v-for="(item, index) in this.data_ie_piel" :key="index" value="{{index}}">
                                {{ item.nombre }}
                            </option>
                        </select>
                    </div>
                    <div class="mb-1">
                        <textarea class="form-control form-control-sm textarea" id="exampleFormControlTextarea1" placeholder="Detalle" v-model="DetalleEnfHeredoF" rows="2"></textarea>
                    </div>
                    <button type="button" class="btn btn-primary btn-sm">+ Adicionar</button>
                </div>

            </div>



            <div class="container">
                <div class="tab-pane fade m-3" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab" tabindex="0">
                    <div class="mb-1" v-if="tipoAnt != 0">
                        <select v-model="Enfermedad" class="form-select form-select-sm textarea" aria-label="Default select example">
                            <option value="">Seleccione evaluacion de lesiones</option>
                            <option v-for="(item, index) in this.data_ie_lesiones" :key="index" value="{{index}}">
                                {{ item.nombre }}
                            </option>
                        </select>
                    </div>

                    <div class="mb-1">
                        <textarea class="form-control form-control-sm textarea" id="exampleFormControlTextarea1" placeholder="Detalle" v-model="DetalleEnfHeredoF" rows="2"></textarea>
                    </div>
                    <button type="button" class="btn btn-primary btn-sm">+ Adicionar</button>

                </div>
            </div>



            <div class="tab-pane fade m-3" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab" tabindex="0">
                <div class="container">
                    <div class="mb-1" v-if="tipoAnt != 0">
                        <select v-model="Enfermedad" class="form-select form-select-sm textarea" aria-label="Default select example">
                            <option value="">Seleccione biotipo</option>
                            <option v-for="(item, index) in this.data_ie_biotipo" :key="index" value="{{index}}">
                                {{ item.nombre }}
                            </option>
                        </select>
                    </div>

                    <div class="mb-1">
                        <textarea class="form-control form-control-sm textarea" id="exampleFormControlTextarea1" placeholder="Detalle" v-model="DetalleEnfHeredoF" rows="2"></textarea>
                    </div>
                    <button type="button" class="btn btn-primary btn-sm">+ Adicionar</button>
                </div>

            </div>


            
            <div class="tab-pane fade m-3" id="nav-disabled" role="tabpanel" aria-labelledby="nav-disabled-tab" tabindex="0">
                <div class="container">
                    <div class="mb-1" v-if="tipoAnt != 0">
                        <select v-model="Enfermedad" class="form-select form-select-sm textarea" aria-label="Default select example">
                            <option value="">Seleccione postura</option>
                            <option v-for="(item, index) in this.data_ie_postura" :key="index" value="{{index}}">
                                {{ item.nombre }}
                            </option>
                        </select>
                    </div>

                    <div class="mb-1">
                        <textarea class="form-control form-control-sm textarea" id="exampleFormControlTextarea1" placeholder="Detalle" v-model="DetalleEnfHeredoF" rows="2"></textarea>
                    </div>
                    <button type="button" class="btn btn-primary btn-sm">+ Adicionar</button>
                </div>

            </div>
        </div>

        <div class="container">

            <div class="card">
                <div class="card-header">
                    Registro
                </div>
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
</template>

<script>
import {
    insp_estatica
} from "./../../../firebase/bd.js";

export default {
    data: () => ({

        data_ie_piel: insp_estatica.filter((el) => el.clas == "piel"),
        data_ie_lesiones: insp_estatica.filter((el) => el.clas == "lesiones"),
        data_ie_biotipo: insp_estatica.filter((el) => el.clas == "biotipo"),
        data_ie_postura: insp_estatica.filter((el) => el.clas == "postura"),

    })
}
</script>

<style >

</style>
