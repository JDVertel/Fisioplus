<template>
       <div class="accordion-item">
        <h2 class="accordion-header">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapse3" aria-expanded="false" aria-controls="panelsStayOpen-collapse3">
                <v-icon name="fa-user-check" fill="blue" />
                Inspeccion Estatica
            </button>
        </h2>
        <div id="panelsStayOpen-collapse3" class="accordion-collapse collapse">
            <div class="accordion-body">
                <p>Evaluacion de la postura:(Comparando con el lado colateral)</p>
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
                    <button type="button" class="btn btn-primary btn-sm">+Add</button>
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
                <div class="tab-pane fade m-3" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab" tabindex="0">
                    <button type="button" class="btn btn-primary btn-sm">+Add</button>
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
                <div class="tab-pane fade m-3" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab" tabindex="0">
                    <button type="button" class="btn btn-primary btn-sm">+Add</button>
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
                <div class="tab-pane fade m-3" id="nav-disabled" role="tabpanel" aria-labelledby="nav-disabled-tab" tabindex="0">
                    <button type="button" class="btn btn-primary btn-sm">+Add</button>
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
    export default {
        
    }
</script>

<style lang="scss" scoped>

</style>