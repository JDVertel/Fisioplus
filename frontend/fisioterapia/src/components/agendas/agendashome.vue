<template>
  <div class="container">
    <br />
    <h3>--gestion de las agendas</h3>

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
            <p>
              informe de agendas 2 campos seleccion y un boton que llama a la
              funcion
            </p>
            <p>|f inicial | f final | Boton</p>
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
            Programar
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
            <p>parametrizacion</p>
            <p>crear un tipo de cita formulario con los siguientes inputs</p>
            <p>
              |jornada|hora inicio|hora fin|tiempo consulta| nombre de la
              consulta
            </p>
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


</style>

