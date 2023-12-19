<template>
<div class="accordion-item">
    <h2 class="accordion-header">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapse9" aria-expanded="false" aria-controls="panelsStayOpen-collapse9">
            <v-icon name="io-construct-sharp" fill="red" scale="0.7" />
            Exploracion Muscular
        </button>
    </h2>
    <div id="panelsStayOpen-collapse9" class="accordion-collapse collapse">
        <div class="accordion-body">
            procedimiento actual diagnostico(funcional)fisioterapéutico pronóstico de
            enfermedad objetivos del tratamiento (generales y específicos) plan de atención
            y tratamientos observaciones

            <!--  -->
            <div class="container">

                <nav>
                    <div class="nav nav-tabs" id="nav-tab" role="tablist">
                        <button class="nav-link active" id="nav-sist-muscular" data-bs-toggle="tab" data-bs-target="#nav-smuscular" type="button" role="tab" aria-controls="nav-home" aria-selected="true">
                            Sistema Muscular
                        </button>
                        <button class="nav-link" id="nav-sist-muscular-general" data-bs-toggle="tab" data-bs-target="#nav-smusculargen" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">
                            Evaluacion muscular general
                        </button>
                        <button class="nav-link" id="nav-sist-muscular-detalle" data-bs-toggle="tab" data-bs-target="#nav-smusculardetall" type="button" role="tab" aria-controls="nav-contact" aria-selected="false">
                            Evaluacion Muscular Detallada
                        </button>

                    </div>
                </nav>
                <div class="tab-content" id="nav-tabContent">
                    <div class="tab-pane fade show active" id="nav-smuscular" role="tabpanel" aria-labelledby="nav-sist-muscular" tabindex="0">
                        <div class="container">
                            <br />
                            <div class="mb-1" v-if="tipoAnt != 0">
                                <select v-model="Enfermedad" class="form-select form-select-sm textarea" aria-label="Default select example">
                                    <option value="">Inspeccion</option>
                                    <option v-for="(item, index) in this.data_marcha" :key="index" value="{{index}}">
                                        {{ item.nombre }}
                                    </option>
                                </select>
                            </div>

                            <div class="mb-1">
                                <textarea class="form-control form-control-sm textarea" id="exampleFormControlTextarea1" placeholder="Detalle" v-model="DetalleEnfHeredoF" rows="2"></textarea>
                            </div>

                            <button type="button" class="btn btn-primary">
                                Adicionar
                            </button>
                            <div class="card">
                                <div class="card-header">
                                    Registro
                                </div>
                                <table class="table table-sm">
                                    <thead>
                                        <tr>
                                            <th scope="col">Inspeccion</th>
                                            <th scope="col">Observaciones</th>

                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th scope="row">1</th>
                                            <td>Mark</td>

                                        </tr>
                                        <tr>
                                            <td>Jacob</td>
                                            <td>Jacob</td>

                                        </tr>
                                        <tr>
                                            <td>Jacob</td>
                                            <td>Jacob</td>

                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                 
                    </div>
                    <div class="tab-pane fade" id="nav-smusculargen" role="tabpanel" aria-labelledby="nav-sist-muscular-general" tabindex="0">
                        <div class="container">
                            <br />
                            <div class="mb-1" v-if="tipoAnt != 0">
                                <select v-model="Enfermedad" class="form-select form-select-sm textarea" aria-label="Default select example">
                                    <option value="">Inspeccion</option>
                                    <option v-for="(item, index) in this.data_marcha" :key="index" value="{{index}}">
                                        {{ item.nombre }}
                                    </option>
                                </select>
                            </div>

                            <div class="mb-1">
                                <textarea class="form-control form-control-sm textarea" id="exampleFormControlTextarea1" placeholder="Detalle" v-model="DetalleEnfHeredoF" rows="2"></textarea>
                            </div>

                            <button type="button" class="btn btn-primary">
                                Adicionar
                            </button>
                            <div class="card">
                                <div class="card-header">
                                    Registro
                                </div>
                                <table class="table table-sm">
                                    <thead>
                                        <tr>
                                            <th scope="col">Inspeccion</th>
                                            <th scope="col">Observaciones</th>

                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th scope="row">1</th>
                                            <td>Mark</td>

                                        </tr>
                                        <tr>
                                            <td>Jacob</td>
                                            <td>Jacob</td>

                                        </tr>
                                        <tr>
                                            <td>Jacob</td>
                                            <td>Jacob</td>

                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div class="tab-pane fade" id="nav-smusculardetall" role="tabpanel" aria-labelledby="nav-sist-muscular-detalle" tabindex="0">
                        <div class="container">
                            <br />
                            <div class="mb-1" v-if="tipoAnt != 0">
                                <select v-model="Enfermedad" class="form-select form-select-sm textarea" aria-label="Default select example">
                                    <option value="">Inspeccion</option>
                                    <option v-for="(item, index) in this.data_marcha" :key="index" value="{{index}}">
                                        {{ item.nombre }}
                                    </option>
                                </select>
                            </div>

                            <div class="mb-1">
                                <textarea class="form-control form-control-sm textarea" id="exampleFormControlTextarea1" placeholder="Detalle" v-model="DetalleEnfHeredoF" rows="2"></textarea>
                            </div>

                            <button type="button" class="btn btn-primary">
                                Adicionar
                            </button>
                            <div class="card">
                                <div class="card-header">
                                    Registro
                                </div>
                                <table class="table table-sm">
                                    <thead>
                                        <tr>
                                            <th scope="col">Inspeccion</th>
                                            <th scope="col">Observaciones</th>

                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th scope="row">1</th>
                                            <td>Mark</td>

                                        </tr>
                                        <tr>
                                            <td>Jacob</td>
                                            <td>Jacob</td>

                                        </tr>
                                        <tr>
                                            <td>Jacob</td>
                                            <td>Jacob</td>

                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <!--  -->

            <!--  -->

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
