<template>
<div class="container mt-3">
    <div class="row">
        <p class="mb-1 display-6 text-center">Buscar Paciente</p>
    </div>
    <div class="container centrado">
        <input type="text" class="form-control-sm textarea" id="search textarea" placeholder="Numero de Documento" />

        <button class="btn btn-primary btn-sm" type="submit">Buscar</button>
    </div>
</div>

<hr />

<!-- **************************************************************************************************** -->
<div id="register" v-if="registrado==0">
    <h6 class="display-6 text-center">Paciente no Encontrado !!!</h6>

    <Registro />

</div>

<!-- **************************************************************************************************** -->
<div class="container-fluid Cont_hc">

    <div class="row">
        <h1 class="display-6">Historia Clinica</h1>
  
    </div>

    <div class="row">
     

            <div class="col-12 col-md-2 retrato">
                <img src="./../../assets/images/usuario.jpg" class="imagenhc" alt="..." />
            </div>
            <div class="col-12 col-md-10">
                <div class="container mt-3" style="padding: 25px;">
                    <h5>
                        <strong>
                          Datos
                            Personales</strong>
                    </h5>
                    <div class="row">
                        <div class="col-12">Nombres:</div>
                        <div class="col-12">Apellidos:</div>
                        <div class="col-6 col-md-3">Sexo:</div>
                        <div class="col-6 col-md-3">Edad:</div>
                        <div class="col-6 col-md-3">TipoDoc:</div>
                        <div class="col-6 col-md-3">Numdoc:</div>
                        <div class="col-6 col-md-3">Tipo Sangre:</div>
                        <div class="col-6 col-md-3">E Civil:</div>
                        <div class="col-6 col-md-3">Escolaridad:</div>
                        <div class="col-6 col-md-3">Ocupacion:</div>
                        <div class="col-6 col-md-3">Direccion:</div>
                        <div class="col-6 col-md-3">Celular:</div>
                    </div>
                </div>
            </div>
      
    </div>

    <C_Hc />

    <br>

</div>

    <v-icon name="fa-home" fill="blue" /><router-link to="/dashboard">Home</router-link>
</template>

<script>
import HCdetallada from "./h_clinica.vue";
import homeB from "./../../views/homebutton.vue";
import Registro from "./registroForm.vue"

export default {
    data: () => ({
        registrado: 1,
    }),

    components: {
        C_Hc: HCdetallada,
        Home: homeB
    }

}
</script>
