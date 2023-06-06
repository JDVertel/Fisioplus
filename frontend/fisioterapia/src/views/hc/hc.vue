<template>
  <div class="container-fluid mt-3">
    <div class="row">
      <p class="mb-1 display-6 text-center">Buscar Paciente</p>
    </div>
    <div class="container">
      <input
        type="text"
        class="form-control-sm textarea"
        id="search textarea"
        placeholder="Numero de Documento"
      />

      <button class="btn btn-primary btn-sm" type="submit">Buscar</button>
    </div>
  </div>

  <hr />
<div class="container">


  <div id="register">
    <div class="row">
      <h6 class="display-6 text-center">Paciente no Encontrado !!!</h6>
      <p class="text-center">
        Ingrese los datos solicitados para registrar un nuevo paciente
      </p>

      <div class="container-fluid">
        <div class="container">
          <div class="row">
            <div class="col-6">
              <div class="input-group mb-1">
                <input
                  type="text"
                  class="form-control form-control-sm textarea"
                  id="text_peso"
                  placeholder="1 Nombre"
                />
              </div>
            </div>
            <div class="col-6">
              <div class="input-group mb-1">
                <input
                  type="text"
                  class="form-control form-control-sm textarea"
                  id="text_talla"
                  placeholder="2 Nombre"
                />
              </div>
            </div>
            <div class="col-6">
              <div class="input-group mb-1">
                <input
                  type="text"
                  class="form-control form-control-sm textarea"
                  id="text_estatura"
                  placeholder="1 Apellido"
                />
              </div>
            </div>
            <div class="col-6">
              <div class="input-group mb-1">
                <input
                  type="text"
                  class="form-control form-control-sm textarea"
                  id="text_imc"
                  placeholder="2 Apellido"
                />
              </div>
            </div>
            <div class="col-6">
              <select
                class="form-select form-select-sm textarea"
                id="inputGroupSelect01"
              >
                <option selected>Tipo Documento</option>
                <option value="1">CC</option>
                <option value="2">TI</option>
                <option value="3">CE</option>
              </select>
            </div>
            <div class="col-6">
              <div class="input-group mb-1">
                <input
                  type="number"
                  class="form-control form-control-sm textarea"
                  id="text_imc"
                  placeholder="Numero Documento"
                />
              </div>
            </div>
            <div class="col-6">
              <select
                class="form-select form-select-sm textarea"
                aria-label="Default select example"
              >
                <option selected>Sexo</option>
                <option value="1">M</option>
                <option value="2">F</option>
              </select>
            </div>
            <div class="col-6">
              <div class="input-group mb-1">
                <input
                  type="date"
                  class="form-control form-control-sm textarea"
                  id="text_imc"
                  placeholder="Fecha de Nacimiento"
                />
              </div>
            </div>
            <div class="col-6">
              <select
                class="form-select form-select-sm textarea"
                aria-label="Default select example"
              >
                <option selected>Tipo Sangre</option>
                <option value="1">A+</option>
                <option value="2">A-</option>
                <option value="3">B+</option>
                <option value="4">B-</option>
                <option value="5">AB+</option>
                <option value="6">AB-</option>
                <option value="7">O+</option>
                <option value="8">O-</option>
              </select>
            </div>
            <div class="col-6">
              <div class="input-group mb-1">
                <input
                  type="text"
                  class="form-control form-control-sm textarea"
                  id="text_imc"
                  placeholder="E Civil"
                />
              </div>
            </div>
            <div class="col-6">
              <div class="input-group mb-1">
                <input
                  type="text"
                  class="form-control form-control-sm textarea"
                  id="text_imc"
                  placeholder="Escolaridad"
                />
              </div>
            </div>
            <div class="col-6">
              <div class="input-group mb-1">
                <input
                  type="text"
                  class="form-control form-control-sm textarea"
                  id="text_imc"
                  placeholder="Ocupacion"
                />
              </div>
            </div>
            <div class="col-6">
              <div class="input-group mb-1">
                <input
                  type="text"
                  class="form-control form-control-sm textarea"
                  id="text_imc"
                  placeholder="Direccion"
                />
              </div>
            </div>
            <div class="col-6">
              <div class="input-group mb-1">
                <input
                  type="text"
                  class="form-control form-control-sm textarea"
                  id="text_imc"
                  placeholder="Telefono"
                />
              </div>
            </div>
            <div class="col-6">
              <div class="input-group mb-1">
                <input
                  type="number"
                  class="form-control form-control-sm textarea"
                  id="text_imc"
                  placeholder="Celular"
                />
              </div>
            </div>
            <div class="col-6">
              <div class="input-group mb-1">
                <input
                  type="mail"
                  class="form-control form-control-sm textarea"
                  id="text_imc"
                  placeholder="Email"
                />
              </div>
            </div>
          </div>
          <br />
          <div class="row">
            <homeB />
            <div class="col-6">
              <button type="button" class="btn btn-success btn-sm">
                Registrar paciente
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
  <hr />

  <div id="AppHC">
    <div class="container-fluid fondo">
      <h1 class="display-6" style="text-align: center">Historia Clinica</h1>

      <div
        class="container"
        style="border: 1px solid #000; border-radius: 15px"
      >
        <div class="row">
          <div class="col-2 retrato" style="margin: 10px">
            <img
              src="./../../components/images/usuario.jpg"
              class="redondo"
              alt="..."
            />
          </div>
          <div class="col-9">
            <div class="container" style="margin: 10px">
              <h5>
                <strong>
                  <v-icon name="ri-health-book-line" /> Datos Personales</strong
                >
              </h5>
              <div class="row">
                <div class="col-6 col-md-3">NOMBRE1</div>
                <div class="col-6 col-md-3">NOMBRE2</div>
                <div class="col-6 col-md-3">APELLIDO1</div>
                <div class="col-6 col-md-3">APELLIDO2</div>
                <div class="col-6 col-md-3">SEXO</div>
                <div class="col-6 col-md-3">EDAD</div>
                <div class="col-6 col-md-3">TIPO SANGRE</div>
                <div class="col-6 col-md-3">E CIVIL</div>
                <div class="col-6 col-md-3">ESCOLARIDAD</div>
                <div class="col-6 col-md-3">OCUPACION</div>
                <div class="col-6 col-md-3">DOMICILIO</div>
                <div class="col-6 col-md-3">TELEFONO</div>
                <div class="col-6 col-md-3">EMAIL</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <br />

      <!--************************************************************************************************************  -->
      <div class="container">
        <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
          <li class="nav-item" role="presentation">
            <button
              class="nav-link active"
              id="pills_historial"
              data-bs-toggle="pill"
              data-bs-target="#pills-home"
              type="button"
              role="tab"
              aria-controls="pills-home"
              aria-selected="true"
            >
              Historial
            </button>
          </li>
          <li class="nav-item" role="presentation">
            <button
              class="nav-link"
              id="pills_HC-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills_HC"
              type="button"
              role="tab"
              aria-controls="pills_HC"
              aria-selected="false"
            >
              Historia Clinica
            </button>
          </li>
        </ul>

        <div class="tab-content" id="pills-tabContent">
          <div
            class="tab-pane fade show active"
            id="pills-home"
            role="tabpanel"
            aria-labelledby="pills_historial"
            tabindex="0"
          >
            <div class="table-responsive">
              <table class="table table-sm">
                <thead>
                  <tr>
                    <th scope="col">Fecha</th>
                    <th scope="col">Hallazgos</th>
                    <th scope="col">Tratamientos</th>
                    <th scope="col">Observaciones</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Jacob</td>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                  </tr>
                  <tr>
                    <td>Jacob</td>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                  </tr>
                  <tr>
                    <td>Jacob</td>
                    <td>Jacob</td>
                    <td>Jacob</td>
                    <td>@twitter</td>
                  </tr>
                </tbody>
              </table>
              <homeB />
            </div>
          </div>

          <div
            class="tab-pane fade"
            id="pills_HC"
            role="tabpanel"
            aria-labelledby="pills_HC-tab"
            tabindex="0"
          >
            <HCFisio />
            <br />
            <div class="row">
              <homeB />
              <div class="col-6">
                <button type="button" class="btn btn-primary btn-sm">
                  Guardar Historia Clinica
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!--************************************************************************************************************  -->

    <br />

    <br />

    <br />
  </div>
</template>

<script setup>
import HCFisio from "../../components/hclinica.vue";
import homeB from "./../../components/homebutton.vue";
</script>

<style>
#AppHC {
  font-size: 0.6rem;
  background: fixed;
}

.redondo {
  border-radius: 50px 50px 50px 50px;
  width: 70px;
  height: 70px;
}

button.accordion-button.collapsed {
  padding: 2px;
  background-color: rgb(120, 195, 157);
  color: aliceblue;
  font-size: 0.7rem;
  text-shadow: 1px 1px 2px black;
}
button.accordion-button:not(.collapsed) {
  padding: 2px;
  background-color: rgb(75, 198, 242);
  color: rgba(9, 210, 109, 0.68);
  font-size: 0.7rem;
  color: aliceblue;
  text-shadow: 1px 1px 2px black;
}

.retrato {
  display: flex;
  align-content: center;
  justify-content: center;
  align-items: center;
}
.textarea {
  font-size: 0.6rem !important;
}
</style>
