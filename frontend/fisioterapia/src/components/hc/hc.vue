<template>
  <div>
    <div class="container mt-3" id="panelbusqueda" v-if="registrado == 1">

      <p>ID recibido: {{ iduser }}</p>

      <div class="row">
        <h3 class="centrarcontenido">Historia Clinica </h3>
      </div>
      <div class="container centrarcontenido" v-if="this.iduser == ''">
        <div class="row">
          <div class="col-2">
            <p>logo buscar</p>
          </div>
          <div class="col-10">
            <div class="container">
              <h5>Ingrese la identificacion del paciente a consultar</h5>
              <div class="row">
                <div class="col-5">
                  <select class="form-select form-select-sm textarea" id="inputGroupSelect01" v-model="B_tipodoc">
                    <option selected value="">Tipo Doc</option>
                    <option value="CC">CC</option>
                    <option value="TI">TI</option>
                    <option value="CE">CE</option>
                    <option value="PA">PAS</option>
                  </select>
                </div>
                <div class="col-5">
                  <input type="number" class="form-control form-control-sm textarea" id="text_numdoc"
                    placeholder="# Documento" v-model="B_numdoc" />
                </div>
              </div>
              <br>
              <button class="btn btn-success btn-sm" @click=" BTN_Buscar_paciente()"
                :disabled="BuscarP_isButtonDisabled">Buscar</button>
            </div>
          </div>
        </div>
      </div>

    </div>

    <hr />

    <!-- **************************************************************************************************** -->
    <div id="register" v-if="registrado == 0">
      <h6 class="display-6 text-center">Paciente no Encontrado !!!</h6>

      <Registro />
    </div>

    <!-- **************************************************************************************************** -->
    <div class="container-fluid Cont_hc" v-if="this.iduser !== ''">
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
  </div>
</template>

<script>
import HCdetallada from "./h_clinica.vue";

import Registro from "./registroForm.vue";

export default {
  data: () => ({
    registrado: 1,


  }),

  components: {
    C_Hc: HCdetallada,
  },
  created() {
    // Recuperar el parámetro 'id' de la ruta
    this.iduser = this.$route.params.idpaciente || 'cc13862306';
  }
};
</script>
