<template>
  <div class="container mt-3" id="panelbusqueda" v-if="registrado == 1">

    <h1>paciente</h1>
    <p>ID recibido: {{ iduser }}</p>

    <div class="row">
      <h3 class="centrarcontenido">Historia Clinica </h3>
    </div>
    <div class="container centrado" v-if="this.iduser == ''">
      <input type="text" class="form-control-sm textarea" id="search textarea" placeholder="Numero de Documento" />
      <button class="btn btn-primary btn-sm" type="submit">Buscar</button>
    </div>
  </div>

  <hr />

  <!-- **************************************************************************************************** -->
  <div id="register" v-if="registrado == 0">
    <h6 class="display-6 text-center">Paciente no Encontrado !!!</h6>

    <Registro />
  </div>

  <!-- **************************************************************************************************** -->
  <div class="container-fluid Cont_hc">
    <div class="row">
      <div class="col-3 col-md-2 centrarcontenido">
        <img src="./../../assets/images/usuario.jpg" class="imagenhc" alt="..." />
      </div>

      <div class="col-9 col-md-10">
        <div class="container mt-3" style="padding: 25px">
          <h6>
            <strong> Datos Personales</strong>
          </h6>
          <div class="row">
            <div class="col-12 col-md-3">
              <strong>Nombres:</strong> juan david
            </div>
            <div class="col-12 col-md-3">
              <strong>Apellidos:</strong> vertel holguin
            </div>
            <div class="col-12 col-md-3"><strong>Sexo:</strong> M</div>
            <div class="col-12 col-md-3"><strong>Edad:</strong> 43</div>
            <div class="col-12 col-md-3"><strong>TipoDoc:</strong> CC</div>
            <div class="col-12 col-md-3"><strong>Numdoc:</strong> 13862306</div>
            <div class="col-12 col-md-3"><strong>Tipo Sangre :</strong> A+</div>
            <div class="col-12 col-md-3"><strong>E Civil:</strong> U libre</div>
            <div class="col-12 col-md-3">
              <strong>Escolaridad:</strong> maestria
            </div>
            <div class="col-12 col-md-3">
              <strong>Ocupacion:</strong> ingeniero de sistemas
            </div>
            <div class="col-12 col-md-3">
              <strong>Direccion:</strong> calle 52a # 20-38 torcoroma
            </div>
            <div class="col-12 col-md-3">
              <strong>Celular:</strong> 3145563439
            </div>
          </div>
        </div>
      </div>
    </div>
    <br />
    <C_Hc />

    <br />
  </div>

  <v-icon name="fa-home" fill="blue" /><router-link to="/dashboard">Home</router-link>
</template>

<script>
import HCdetallada from "./h_clinica.vue";

import Registro from "./registroForm.vue";

export default {
  data: () => ({
    registrado: 1,
    iduser: "",
  }),

  components: {
    C_Hc: HCdetallada,
  },
  created() {
    // Recuperar el parámetro 'id' de la ruta
    this.iduser = this.$route.params.idpaciente;
  }
};
</script>
