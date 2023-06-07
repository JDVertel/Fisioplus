<template>
  <div class="container" id="agendas">
    <h3 class="display-6">Gestion de las agendas</h3>

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
            Activas
          </button>
        </h2>
        <div
          id="panelsStayOpen-collapseOne"
          class="accordion-collapse collapse show"
        >
          <div class="accordion-body">
            <h6>Listado de Agendas disponibles</h6>
            <p>
              Tabla con el listado de los dias de agendas disponibles y la
              cantidad de horas disponibles dividida en jornadas, registros a
              partir de las fechas
            </p>

            |fecha | jornada | tipo_agenda | disponibles | (ver - reservar
            (local-particular))
            <p>
              a futuro el campo tipoagenda podra mostrar hora inicio y hora fin
              parametrizados
            </p>
            <div class="table-responsive">
              <table class="table table-sm">
                <thead>
                  <tr>
                    <th scope="col">Fecha</th>
                    <th scope="col">Jornada</th>
                    <th scope="col">Tipo</th>
                    <th scope="col">Disponibles</th>
                    <th scope="col">Ver/reservar</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Otto</td>
                    <td>@mdo</td>
                    <td>Mark</td>
                    <td>@mdo</td>
                    <td>
                      <div class="col-4 fechas">
                        <button
                          class="btn btn-primary btn-sm textarea"
                          type="submit"
                        >
                          ver
                        </button>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>Otto</td>
                    <td>@mdo</td>
                    <td>Mark</td>
                    <td>@mdo</td>
                    <td>
                      <div class="col-4 fechas">
                        <button
                          class="btn btn-primary btn-sm textarea"
                          type="submit"
                        >
                          ver
                        </button>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>Otto</td>
                    <td>@mdo</td>
                    <td>Mark</td>
                    <td>@mdo</td>
                    <td>
                      <div class="col-4 fechas">
                        <button
                          class="btn btn-primary btn-sm textarea"
                          type="submit"
                        >
                          ver
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
                <div class="col-4 fechas">
                  Fecha Inicial<input
                    class="form-control form-control-sm textarea"
                    type="date"
                    aria-label=".form-control-sm example"
                  />
                </div>
                <div class="col-4 fechas">
                  Fecha Final<input
                    class="form-control form-control-sm textarea"
                    type="date"
                    aria-label=".form-control-sm example"
                  />
                </div>
                <div class="col-4 fechas">
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
                    <th scope="col">Fecha</th>
                    <th scope="col">Tipo</th>
                    <th scope="col">Hora</th>
                    <th scope="col">Nombre</th>
                    <th scope="col">Estado</th>
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
            <p>Opciones para realizar un nuevo agendamiento</p>

            <form>
              <div class="row formulario">
                <div class="col-4 fechas">
                  <input
                    class="form-control form-control-sm textarea"
                    type="date"
                    aria-label=".form-control-sm example"
                  />
                </div>

                <div class="col-4">
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
                </div>
                <div class="col-4">
                  <button class="btn btn-primary btn-sm textarea">
                    Agendar
                  </button>
                </div>
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
            Parametros
          </button>
        </h2>
        <div
          id="panelsStayOpen-collapsefour"
          class="accordion-collapse collapse"
        >
          <div class="accordion-body">
   

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
                    <input
                      class="form-control form-control-sm"
                      type="number"
                      placeholder="Tiempo de consulta"
                      aria-label=".form-control-sm example"
                    />
                  </div>
                  <div>
                    <input
                      class="form-control form-control-sm"
                      type="text"
                      placeholder="Nombre de Plantilla"
                      aria-label=".form-control-sm example"
                    />
                  </div>
                  <div>
                    <button type="button" class="btn btn-primary btn-sm">
                      Guardar Plantilla
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <br />
            <p>Listado de Plantillas del Sistema</p>
            <table class="table table-sm">
              <thead>
                <tr>
                  <th scope="col">Jornada</th>
                  <th scope="col">H inicio</th>
                  <th scope="col">H fin</th>
                  <th scope="col">Tiempo</th>
                  <th scope="col">Nombre</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Otto</td>
                  <td>@mdo</td>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                </tr>
                <tr>
                  <td>Otto</td>
                  <td>@mdo</td>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                </tr>
                <tr>
                  <td>Otto</td>
                  <td>@mdo</td>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <br />
    </div>
    <v-icon name="fa-home" fill="blue" /><router-link to="/">Home</router-link>
  </div>
</template>

<script></script>

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

</style>
