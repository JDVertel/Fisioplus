<template>
  <div class="container" id="agendas">
    <br />
    <h3 >Gestion de las agendas</h3>

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
          class="accordion-collapse collapse"
        >
          <div class="accordion-body">
            <h6>Listado de Agendas disponibles</h6>
            <p>
              tabla con el listado de los dias de agendas disponibles y la
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
                  <td> <div class="col-4 fechas"><button class="btn btn-primary btn-sm textarea" type="submit">ver</button></div></td>
            
                </tr>
                <tr>
                  <td>Otto</td>
                  <td>@mdo</td>
                  <td>Mark</td>
                  <td>@mdo</td>
                  <td> <div class="col-4 fechas"><button class="btn btn-primary btn-sm textarea" type="submit">ver</button></div></td>
            
                </tr>
                <tr>
                  <td>Otto</td>
                  <td>@mdo</td>
                  <td>Mark</td>
                  <td>@mdo</td>
                  <td> <div class="col-4 fechas"><button class="btn btn-primary btn-sm textarea" type="submit">ver</button></div></td>
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
    <div class="col-4 fechas">Fecha Inicial<input class="form-control form-control-sm textarea" type="date"  aria-label=".form-control-sm example"></div>
    <div class="col-4 fechas">Fecha Final<input class="form-control form-control-sm textarea" type="date"  aria-label=".form-control-sm example"></div>
    <div class="col-4 fechas"> <br><button class="btn btn-primary btn-sm textarea" type="submit">Consultar</button></div>
  </div>
<br>
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
            <p>Opciones para agendar una nueva agenda</p>
            <p>campos</p>
            |fecha|jornada|tipo_agenda|

            <table class="table table-sm">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">First</th>
                  <th scope="col">Last</th>
                  <th scope="col">Handle</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>@fat</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td colspan="2">Larry the Bird</td>
                  <td>@twitter</td>
                </tr>
              </tbody>
            </table>
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
            <p>Plantillas de tipos de jornadas </p>
        

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
    <router-link to="/">Home</router-link>
  </div>
</template>

<script>

</script>

<style>
#agendas{
  font-size: 0.6rem;
  background: fixed;
}
.fechas{
  padding: 1px !important;

}
.textarea{
font-size: 0.6rem !important;
}
</style>

