<template>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">

          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>Menu
          </button> 
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <router-link to="/login"
                  ><a class="nav-link-menu" aria-current="page"> Login</a></router-link
                >
              </li>
              <li class="nav-item">
                <router-link to="/about"
                  ><a class="nav-link-menu" aria-current="page"
                    >Acerca de</a
                  ></router-link
                >
              </li>
  
              <li class="nav-item">
                <hr class="navbar-divider" />
              </li>
  
           <!--    <li class="nav-item">
                <a class="navbar-brand">Administracion</a>
              </li> -->
  
              <li class="nav-item">
                <router-link to="/homeAgendas"
                  ><a class="nav-link-menu" aria-current="page"
                    >Agendas</a
                  ></router-link
                >
              </li>
              <li class="nav-item">
                <router-link to="/vitrina"
                  ><a class="nav-link-menu" aria-current="page"
                    >Vitrina</a
                  ></router-link
                >
              </li>
              <li class="nav-item">
                <router-link to="/HC"
                  ><a class="nav-link-menu" aria-current="page"
                    >H Clinica</a
                  ></router-link
                >
              </li>
  
             <!--  <li class="nav-item">
                <router-link to="/about">
                  <a class="nav-link">Informes</a></router-link
                >
              </li> -->
            </ul>
          </div>
        </div>
      </nav>
  
</template>

<script setup>

</script>



<style>

.nav-link-menu{
    color: white !important;
    text-shadow: 1px 1px 2px black !important;
    text-decoration: none !important;
    display: inline-block !important;
    font-size: 0.9rem !important;
    margin: 10PX;
  }


</style>