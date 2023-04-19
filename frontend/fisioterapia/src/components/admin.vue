<template>
   <div class="container-fluid">
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <a class="navbar-brand" href="#"><img src="@/assets/logo.svg" id="icon" alt="User Icon"
            style="width: 25px;" />Menu</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
          aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
           

            <li class="nav-item">
            <h6>Menu Administracion</h6>
            </li>
            <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Agendas
          </a>
          <ul class="dropdown-menu">
            <li><router-link to="/A_parametros"> <a class="nav-link">Praraetros</a></router-link></li>

            <li><a class="dropdown-item" href="#">Parametros</a></li>
            <li><a class="dropdown-item" href="#">programar Agendas</a></li>
            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item" href="#">Reservar</a></li>
          </ul>
        </li>

        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Contenido
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Servicios</a></li>
            <li><a class="dropdown-item" href="#">Otras actividades</a></li>
            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item" href="#">Productos</a></li>
          </ul>
        </li>
            <li class="nav-item">
              <router-link to="/about"> <a class="nav-link">Costos</a></router-link>
            </li>
            <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            HC Fisioterapia
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Consultar</a></li>
            <li><a class="dropdown-item" href="#">Otras actividades</a></li>
            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item" href="#">Productos</a></li>
          </ul>
        </li>
          </ul>
        </div>
      </div>
    </nav>

  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>