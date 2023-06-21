<template>
  <div class="container" id="agendas">
    <h3 class="display-6">Gestión de las agendas</h3>

    <br />

    <div class="accordion accordion-flush" id="accordionPanelAgendas">
      <div class="accordion-item">
        <h2 class="accordion-header">
          <button
            class="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#panelsStayOpen-collapseOne"
            aria-expanded="true"
            aria-controls="panelsStayOpen-collapseOne"
          >
            Agenda Diaria
          </button>
        </h2>
        <div
          id="panelsStayOpen-collapseOne"
          class="accordion-collapse collapse show"
        >
          <div class="accordion-body">
            <h6 class="display-6">Listado de Citas del Dia</h6>

            <div class="table-responsive">
              <table class="table table-sm">
                <thead>
                  <tr>
                    <th>Fecha</th>
                    <th>Hora</th>
                    <th>Tipo</th>
                    <th>tiempo</th>
                    <th>Nombre</th>
                    <th>Telefono</th>
                    <th>Opciones</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Otto</td>
                    <td>@mdo</td>
                    <td>Mark</td>
                    <td>Mark</td>
                    <td>Mark</td>
                    <td>@mdo</td>
                    <td>
                      <div class="col-4 fechas">
                        <button
                          class="btn btn-primary btn-sm textarea radius"
                          type="submit"
                        >
                          <v-icon name="hi-check" />
                        </button>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>Otto</td>
                    <td>@mdo</td>
                    <td>Mark</td>
                    <td>Mark</td>
                    <td>Mark</td>
                    <td>@mdo</td>
                    <td>
                      <div class="col-4 fechas">
                        <button
                          class="btn btn-primary btn-sm textarea radius"
                          type="submit"
                        >
                          <v-icon name="hi-check" />
                        </button>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>Otto</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    <td>Mark</td>
                    <td>Mark</td>
                    <td>@mdo</td>
                    <td>
                      <div class="col-4 fechas">
                        <button
                          class="btn btn-primary btn-sm textarea radius"
                          type="submit"
                        >
                          <v-icon name="hi-check" />
                        </button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <!--  -->

      <div class="accordion-item">
        <h2 class="accordion-header">
          <button
            class="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#panelsStayOpen-collapseFive"
            aria-expanded="false"
            aria-controls="panelsStayOpen-collapseFive"
          >
            Reservas
          </button>
        </h2>
        <div
          id="panelsStayOpen-collapseFive"
          class="accordion-collapse collapse"
        >
          <div class="accordion-body">
            <div class="container">
              <div class="row">
                <p>Reservar nueva terapia</p>

                <div class="col-6 col-md-3">
                  <p>Seleccione el dia </p>
                  <div class="fechas">
                    <input
                      class="form-control form-control-sm textarea"
                      type="date"
                      aria-label=".form-control-sm example"
                      v-model="fechareserva.dia"
                    />
                  </div>
                </div>
                <div class="col-6 col-md-3">
                  <p>Seleccione Tipo cita</p>
                  <div class="fechas">
                    <input
                      class="form-control form-control-sm textarea"
                      type="time"
                      aria-label=".form-control-sm example"
                      v-model="fechareserva.tipocita"
                    />
                  </div>
                </div>
                <div class="col-6 col-md-3">
                  <p>Seleccione hora </p>
                  <div class="fechas">
                    <input
                      class="form-control form-control-sm textarea"
                      type="time"
                      aria-label=".form-control-sm example"
                      v-model="fechareserva.horacita"
                    />
                  </div>
                </div>
                <div class="col-6 col-md-3">
                  <div class="container" style="padding: 10px 10px 10px 10px">
                    <p>
                      Reservara {{ fechareserva.tipocita }} el dia {{ fechareserva.dia }} a las {{ fechareserva.hora }}                   </p>

                    <button class="btn btn-primary btn-sm textarea">
                      Agendar
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <form>
              <div class="row formulario">
                <!--            <div class="col-4">
                  <select
                    class="form-select form-select-sm textarea"
                    aria-label="Default select example"
                  >
                    <option selected>Plantilla</option>
                    <option value="1">AM Normal</option>
                    <option value="2">PM Normal</option>
                    <option value="3">AM Sabado</option>
                    <option value="4">PM Sabado</option>
                  </select>
                </div> -->
              </div>
              <br />

              <br />
            </form>
          </div>
        </div>
      </div>
      <!--  -->
      <div class="accordion-item">
        <h2 class="accordion-header">
          <button
            class="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#panelsStayOpen-collapseTwo"
            aria-expanded="false"
            aria-controls="panelsStayOpen-collapseTwo"
          >
            Informes
          </button>
        </h2>
        <div
          id="panelsStayOpen-collapseTwo"
          class="accordion-collapse collapse"
        >
          <div class="accordion-body">
            <form>
              <div class="row">
                <div class="col-3 fechas">
                  Fecha Inicial<input
                    class="form-control form-control-sm textarea"
                    type="date"
                    aria-label=".form-control-sm example"
                    v-model="datosinf.f_inicial"
                  />
                </div>
                <div class="col-3 fechas">
                  Fecha Final<input
                    class="form-control form-control-sm textarea"
                    type="date"
                    aria-label=".form-control-sm example"
                    v-model="datosinf.f_final"
                  />
                </div>
                <div class="col-3">
                  <p>Seleccione tipo de Informe</p>
                  <select
                    class="form-select form-select-sm textarea"
                    id="inputGroupSelect01"
                    v-model="datosinf.tipoinf"
                  >
                    <option selected>Seleccione</option>
                    <option value="Ingresos">Ingresos</option>
                  </select>
                </div>
                <div class="col-3 fechas">
                  <br /><button
                    class="btn btn-primary btn-sm textarea"
                    type="submit"
                  >
                    Consultar
                  </button>
                </div>
              </div>
              <br />
            </form>
            <div class="table-responsive">
              <table class="table table-sm">
                <thead>
                  <tr>
                    <th>Fecha</th>
                    <th>Tipo</th>

                    <th>Hora</th>
                    <th>Nombre</th>
                    <th>ingreso</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>@mdo</td>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    <td>@mdo</td>
                  </tr>
                  <tr>
                    <td>@mdo</td>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                    <td>@mdo</td>
                  </tr>
                  <tr>
                    <td>@mdo</td>
                    <td>@mdo</td>
                    <td>@twitter</td>
                    <td>@mdo</td>
                    <td>@mdo</td>
                  </tr>
                </tbody>
              </table>
              <h6>
                Informe de {{ datosinf.tipoinf }} realizado desde el {{ datosinf.f_inicial }} hasta el
                {{ datosinf.f_final }}
              </h6>
              <h6 class="display-6">Total Ingresos $ 1.500.000</h6>
            </div>
          </div>
        </div>
      </div>
      <div class="accordion-item">
        <h2 class="accordion-header">
          <button
            class="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#panelsStayOpen-collapseThree"
            aria-expanded="false"
            aria-controls="panelsStayOpen-collapseThree"
          >
            Agendar
          </button>
        </h2>
        <div
          id="panelsStayOpen-collapseThree"
          class="accordion-collapse collapse"
        >
          <div class="accordion-body">
            <div class="container">
              <div class="row">
                <p>Agendamiento nuevo</p>

                <div class="col-6 col-md-3">
                  <p>Seleccione el nuevo dia a agendar</p>
                  <div class="fechas">
                    <input
                      class="form-control form-control-sm textarea"
                      type="date"
                      aria-label=".form-control-sm example"
                      v-model="fechaAgemdamient.dia"
                    />
                  </div>
                </div>
                <div class="col-6 col-md-3">
                  <p>Seleccione hora de inicio de jornada</p>
                  <div class="fechas">
                    <input
                      class="form-control form-control-sm textarea"
                      type="time"
                      aria-label=".form-control-sm example"
                      v-model="fechaAgemdamient.h_inicial"
                    />
                  </div>
                </div>
                <div class="col-6 col-md-3">
                  <p>Seleccione hora final de jornada</p>
                  <div class="fechas">
                    <input
                      class="form-control form-control-sm textarea"
                      type="time"
                      aria-label=".form-control-sm example"
                      v-model="fechaAgemdamient.h_final"
                    />
                  </div>
                </div>
                <div class="col-6 col-md-3">
                  <div class="container" style="padding: 10px 10px 10px 10px">
                    <p>
                      Se agendara el dia {{ fechaAgemdamient.dia }} desde las
                      {{ fechaAgemdamient.h_inicial }} hasta las
                      {{ fechaAgemdamient.h_final }}
                    </p>

                    <button class="btn btn-primary btn-sm textarea">
                      Agendar
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <form>
              <div class="row formulario">
                <!--            <div class="col-4">
                  <select
                    class="form-select form-select-sm textarea"
                    aria-label="Default select example"
                  >
                    <option selected>Plantilla</option>
                    <option value="1">AM Normal</option>
                    <option value="2">PM Normal</option>
                    <option value="3">AM Sabado</option>
                    <option value="4">PM Sabado</option>
                  </select>
                </div> -->
              </div>
              <br />

              <br />
            </form>
          </div>
        </div>
      </div>

      <div class="accordion-item">
        <h2 class="accordion-header">
          <button
            class="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#panelsStayOpen-collapsefour"
            aria-expanded="false"
            aria-controls="panelsStayOpen-collapsefour"
          >
            Tipos de Citas
          </button>
        </h2>
        <div
          id="panelsStayOpen-collapsefour"
          class="accordion-collapse collapse"
        >
          <div class="accordion-body">
            <!-- 
            <div class="container newplantilla">
              <p><strong>Plantillas de tipos de jornadas</strong></p>
              <p>+Crear una Nueva plantilla</p>
              <div class="row">
                <div class="col-6 ">
                  <div>
                    Hora inicial<input
                      class="form-control form-control-sm textarea"
                      type="time"
                      aria-label=".form-control-sm example"
                    />
                  </div>
                  <div>
                    Hora final<input
                      class="form-control form-control-sm textarea"
                      type="time"
                      aria-label=".form-control-sm example"
                    />
                  </div>
                </div>
                <div class="col-6">
                  <div>
                    Tiempo de cita
                    <input
                      class="form-control form-control-sm"
                      type="number"
                      placeholder="Minutos"
                      aria-label=".form-control-sm example"
                    />
                  </div>
                  <div>
                    Nombre de plantilla
                    <input
                      class="form-control form-control-sm"
                      type="text"
                      placeholder="Ej: AM entre semana"
                      aria-label=".form-control-sm example"
                    />
                  </div>
                  <div>
                 
                  </div>
                </div>
              </div>
              <br>
              <button type="button" class="btn btn-primary btn-sm">
                Guardar Plantilla
              </button>
            </div> -->

            <br />
            <h6 class="display-6">Tipos de Citas del Sistema</h6>
            <br />
            <div class="container newplantilla">
              <p>Agregar nuevo tipo de cita</p>
              <div class="row">
                <div class="col-6">
                  <input
                    class="form-control form-control-sm"
                    type="text"
                    placeholder="Nombre"
                    v-model="newcita.nombre"
                  />
                  <input
                    class="form-control form-control-sm"
                    type="number"
                    placeholder="Duracion (minutos)"
                    v-model="newcita.duracion"
                  />
                </div>

                <div class="col-6">
                  <div>
                    <label for="formFileLg" class="form-label">Color</label>
                    <input
                      class="form-control form-control-sm"
                      type="color"
                      v-model="newcita.color"
                    />
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-4">
                  <input
                    class="form-control form-control-sm"
                    type="number"
                    placeholder="$ costo individual"
                    v-model="newcita.costo1"
                  />
                </div>
                <div class="col-4">
                  <input
                    class="form-control form-control-sm"
                    type="number"
                    placeholder="$ costo Combo"
                    v-model="newcita.costo2"
                  />
                </div>
                <div class="col-4">
                  <button class="btn btn-success btn-sm">+ Agregar Cita</button>
                </div>
              </div>
            </div>
            <br />
            <div class="table-responsive">
              <table class="table table-sm">
                <thead>
                  <tr>
                    <th>Id</th>
                    <th>Nombre</th>
                    <th>Duracion (min)</th>
                    <th>Color Representativo</th>
                    <th>costo Uni</th>
                    <th>Costo Combo</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Otto</td>
                    <td>@mdo</td>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>Mark</td>
                    <td>Otto</td>
                  </tr>
                  <tr>
                    <td>Otto</td>
                    <td>@mdo</td>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>Mark</td>
                    <td>Otto</td>
                  </tr>
                  <tr>
                    <td>Otto</td>
                    <td>@mdo</td>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>Mark</td>
                    <td>Otto</td>
                  </tr>
                </tbody>
              </table>
              <p>Datos de insercion {{ newcita }}</p>
              }
            </div>
          </div>
        </div>
      </div>
      <br />
    </div>
    <v-icon name="fa-home" fill="blue" /><router-link to="/">Home</router-link>
  </div>
</template>

<script setup>
import { ref } from "vue";

let fechaAgemdamient = ref({
  dia: "",
  h_inicial: "",
  h_final: "",
});

let newcita = ref({
  nombre: "",
  duracion: "",
  costo1: "",
  costo2: "",
  color: "",
});

let datosinf = ref({
  f_inical: "",
  f_final: "",
  tipoinf: "Seleccione",
});

let fechareserva =ref({
  tipocita:"",
  horacita:"",
  fechareserva:"",

})
</script>

<style>
#agendas {
  font-size: 0.6rem;
  background: fixed;
  margin-top: 50px !important;
}
.fechas {
  padding: 1px !important;
}
textarea,
select,
input,
button {
  font-size: 0.6rem !important;
}

.newplantilla {
  padding: 5px;
  background-color: rgb(207, 232, 224);
  padding: 20px !important;
}
p {
  margin: 1px 1px 1px !important;
}
.radius {
  border-radius: 50px !important;
}
</style>
