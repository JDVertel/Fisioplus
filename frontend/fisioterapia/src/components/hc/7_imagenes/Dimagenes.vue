<template>
    <div class="accordion-item">
        <h2 class="accordion-header">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapse7" aria-expanded="false" aria-controls="panelsStayOpen-collapse7">
                <v-icon name="ai-biorxiv-square" fill="blue" /> Pruebas de Imagen o Examenes
                Complementarios
            </button>
        </h2>
        <div id="panelsStayOpen-collapse7" class="accordion-collapse collapse">
            <div class="accordion-body">
                <nav>
                    <div class="nav nav-tabs" id="nav-tab" role="tablist">
                        <button class="nav-link active" id="nav-b-radiografia" data-bs-toggle="tab" data-bs-target="#nav-radiografia" type="button" role="tab" aria-controls="nav-home" aria-selected="true">
                            Radiografia
                        </button>
                        <button class="nav-link" id="nav-b-ecografia" data-bs-toggle="tab" data-bs-target="#nav-ecografia" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">
                            Ecografia
                        </button>
                        <button class="nav-link" id="nav-b-resonancia" data-bs-toggle="tab" data-bs-target="#nav-resonancia" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">
                            Resonancia
                        </button>
                        <button class="nav-link" id="nav-b-tag" data-bs-toggle="tab" data-bs-target="#nav-tag" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">
                            TAG
                        </button>
                        <button class="nav-link" id="nav-b-otros" data-bs-toggle="tab" data-bs-target="#nav-otros" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">
                            Otros
                        </button>
                    </div>
                </nav>
                <div class="tab-content" id="nav-tabContent">
                    <div class="tab-pane fade show active" id="nav-radiografia" role="tabpanel" aria-labelledby="nav-home-tab" tabindex="0">
                        <div class="mb-3">
                            <label for="exampleFormControlTextarea1" class="form-label">Breve descripcion de la Radiografia</label>
                            <textarea class="form-control textarea" id="exampleFormControlTextarea1" rows="3" v-model="radiografia"></textarea>
                        </div>
                    </div>
                    <div class="tab-pane fade" id="nav-ecografia" role="tabpanel" aria-labelledby="nav-profile-tab" tabindex="0">
                        <div class="mb-3">
                            <label for="exampleFormControlTextarea1" class="form-label">Breve descripcion de la Ecografia</label>
                            <textarea class="form-control textarea" id="exampleFormControlTextarea1" rows="3" v-model="ecografia"></textarea>
                        </div>
                    </div>
                    <div class="tab-pane fade" id="nav-resonancia" role="tabpanel" aria-labelledby="nav-profile-tab" tabindex="0">
                        <div class="mb-3">
                            <label for="exampleFormControlTextarea1" class="form-label">Breve descripcion de la Resonancia</label>
                            <textarea class="form-control textarea" id="exampleFormControlTextarea1" rows="3" v-model="resonancia"></textarea>
                        </div>
                    </div>
                    <div class="tab-pane fade" id="nav-tag" role="tabpanel" aria-labelledby="nav-profile-tab" tabindex="0">
                        <div class="mb-3">
                            <label for="exampleFormControlTextarea1" class="form-label">Breve descripcion del TAG</label>
                            <textarea class="form-control textarea" id="exampleFormControlTextarea1" rows="3" v-model="tag"></textarea>
                        </div>
                    </div>
                    <div class="tab-pane fade" id="nav-otros" role="tabpanel" aria-labelledby="nav-profile-tab" tabindex="0">
                        <div class="mb-3">
                            <label for="exampleFormControlTextarea1" class="form-label">Breve descripcion de Otros</label>
                            <textarea class="form-control textarea" id="exampleFormControlTextarea1" rows="3" v-model="otros"></textarea>
                        </div>
                    </div>
                </div>
                imgdiag
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