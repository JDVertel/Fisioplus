<template>
       <div class="accordion-item">
        <h2 class="accordion-header">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapse6" aria-expanded="false" aria-controls="panelsStayOpen-collapse6">
                <v-icon name="io-construct-sharp" fill="yellow" scale="0.7" />
                Escala Visual Analogica del Dolor
            </button>
        </h2>
        <div id="panelsStayOpen-collapse6" class="accordion-collapse collapse">
            <div class="accordion-body">
                <nav>
                    <div class="nav nav-tabs" id="nav-tab" role="tablist">
                        <button class="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-escala" type="button" role="tab" aria-controls="nav-home" aria-selected="true">
                            Escala
                        </button>
                        <button class="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-ubicacion" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">
                            Ubicacion
                        </button>
                        <button class="nav-link" id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#nav-semiologia" type="button" role="tab" aria-controls="nav-contact" aria-selected="false">
                            Semiologia
                        </button>
                    </div>
                </nav>
                <div class="tab-content" id="nav-tabContent">
                    <div class="tab-pane fade show active" id="nav-escala" role="tabpanel" aria-labelledby="nav-home-tab" tabindex="0">
                        <div class="container">
                            <div class="radio-container">
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="esc_0" />0
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="esc_1" />1
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="esc_2" />2
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="esc_3" />3
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="esc_4" />4
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="esc_5" />5
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="esc_6" />6
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="esc_7" />7
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="esc_8" />8
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="esc_9" />9
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="esc_10" />10
                                </div>
                            </div>

                            <div class="table-container">
                                <table class="default">
                                    <tr class="degradado">
                                        <th>&nbsp;</th>
                                        <th>&nbsp;</th>
                                        <th>&nbsp;</th>
                                        <th>&nbsp;</th>
                                        <th>&nbsp;</th>
                                        <th>&nbsp;</th>
                                        <th>&nbsp;</th>
                                        <th>&nbsp;</th>
                                        <th>&nbsp;</th>
                                        <th>&nbsp;</th>

                                        <th></th>
                                        <th></th>
                                    </tr>
                                </table>
                                <div class="row">
                                    <div class="col-2">0 - Sin dolor</div>
                                    <div class="col-2">2 - Poco</div>
                                    <div class="col-2">4 - Moderado</div>
                                    <div class="col-2">6 - Fuerte</div>
                                    <div class="col-2">8 - Muy fuerte</div>
                                    <div class="col-2">10 - Insoportable</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="tab-pane fade" id="nav-ubicacion" role="tabpanel" aria-labelledby="nav-profile-tab" tabindex="0">
                        2

                        <!--!FALTAN IMAGENES Y SELECTORES  -->
                    </div>
                    <div class="tab-pane fade" id="nav-semiologia" role="tabpanel" aria-labelledby="nav-contact-tab" tabindex="0">
                        <br />
                        <p>Detalle el dolor descrito por el Paciente</p>
                        <br />
                        <div class="container">
                            <div class="row mb-3">
                                <textarea class="form-control" id="exampleFormControlTextarea1" rows="2" placeholder="Circunstancias"></textarea>
                            </div>
                            <div class="row mb-3">
                                <textarea class="form-control" id="exampleFormControlTextarea2" rows="2" placeholder="Tipo"></textarea>
                            </div>
                            <div class="row mb-3">
                                <textarea class="form-control" id="exampleFormControlTextarea3" rows="2" placeholder="Antiguedad"></textarea>
                            </div>
                            <div class="row mb-3">
                                <textarea class="form-control" id="exampleFormControlTextarea4" rows="2" placeholder="Localización"></textarea>
                            </div>

                            <div class="row mb-3">
                                <textarea class="form-control" id="exampleFormControlTextarea5" rows="2" placeholder="Irradiación"></textarea>
                            </div>
                            <div class="row mb-3">
                                <textarea class="form-control" id="exampleFormControlTextarea6" rows="2" placeholder="Aumento"></textarea>
                            </div>
                            <div class="row mb-3">
                                <textarea class="form-control" id="exampleFormControlTextarea7" rows="2" placeholder="Atenuación"></textarea>
                            </div>
                            <div class="row mb-3">
                                <textarea class="form-control" id="exampleFormControlTextarea8" rows="2" placeholder="Duración"></textarea>
                            </div>
                            <div class="row mb-3">
                                <textarea class="form-control" id="exampleFormControlTextarea9" rows="2" placeholder="Actividades que le cuesta realizar"></textarea>
                            </div>
                        </div>
                    </div>
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