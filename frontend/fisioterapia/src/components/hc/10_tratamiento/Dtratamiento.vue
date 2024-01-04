<template>
    <div class="accordion-item">
        <h2 class="accordion-header">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapse10" aria-expanded="false" aria-controls="panelsStayOpen-collapse10">
                <v-icon name="fa-hand-holding-medical" fill="blue" />
                Tratamiento
            </button>
        </h2>
        <div id="panelsStayOpen-collapse10" class="accordion-collapse collapse">
            <div class="accordion-body">
                <div class="mb-3">
                    <textarea class="form-control textarea" id="exampleFormControlTextarea1" rows="3" v-model="descripcion" placeholder="Padecimiento Actual"></textarea>
                </div>

                <div class="mb-3">
                    <textarea class="form-control textarea" id="exampleFormControlTextarea1" rows="3" v-model="descripcion" placeholder="Diagnostico fisioterapeutico"></textarea>
                </div>

                <textarea class="form-control textarea" id="exampleFormControlTextarea1" rows="3" v-model="descripcion" placeholder="Diagnostico fisioterapeutico"></textarea>
            </div>

            <div class="mb-3">
                <textarea class="form-control textarea" id="exampleFormControlTextarea1" rows="3" v-model="descripcion" placeholder="Pronostico de la enfermedad"></textarea>
            </div>
            <div class="container">
                <div class="row">
                    <div class="col-6"> <textarea class="form-control textarea" id="exampleFormControlTextarea1" rows="3" v-model="descripcion" placeholder="Objetivos generales"></textarea></div>
                    <div class="col-6"> <textarea class="form-control textarea" id="exampleFormControlTextarea1" rows="3" v-model="descripcion" placeholder="Objetivos especificos"></textarea></div>
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