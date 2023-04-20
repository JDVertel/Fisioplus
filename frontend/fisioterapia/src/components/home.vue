<script setup>

</script>

<template>
  <div class="container-fluid">
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <a class="navbar-brand" href="#"><img src="@/assets/logo.png" id="icon" alt="User Icon"
            style="width: 40px;" />Menu</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
          aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <!--  <li class="nav-item">
                            <a class="nav-link active" aria-current="page">Home</a>
                          </li> -->
            <li class="nav-item">
              <router-link to="/login"> <a class="nav-link">Login</a></router-link>
            </li>
            <li class="nav-item">
              <router-link to="/about"> <a class="nav-link">Acerca de</a></router-link>
            </li>

            <li class="nav-item">
              <hr class="navbar-divider">
            </li>
            <li class="nav-item">
              <h6>Administración</h6>
            </li>
            <li class="nav-item dropdown">

              <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Agendas
              </a>


              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#"><router-link to="/A_parametros"> <a
                        class="nav-link">Parametros</a></router-link></a></li>
                <li><a class="dropdown-item" href="#"><router-link to="/A_parametros"> <a class="nav-link">Programar
                        Agenda</a></router-link></a></li>


                <li>
                  <hr class="dropdown-divider">
                </li>
                <li><a class="dropdown-item" href="#"><router-link to="/A_parametros"> <a class="nav-link">Reservar
                        Cita</a></router-link></a></li>
              </ul>
            </li>

            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Contenido
              </a>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#"><router-link to="/A_parametros"> <a
                        class="nav-link">Servicios</a></router-link></a></li>
                <li><a class="dropdown-item" href="#"><router-link to="/A_parametros"> <a class="nav-link">Otras
                        Actividades</a></router-link></a></li>
                <li>
                  <hr class="dropdown-divider">
                </li>
                <li><a class="dropdown-item" href="#"><router-link to="/A_parametros"> <a
                        class="nav-link">Productos</a></router-link></a></li>
              </ul>
            </li>

            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                HC Fisioterapia
              </a>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#">Consultar</a></li>
                <li><a class="dropdown-item" href="#">Otras actividades</a></li>
                <li>
                  <hr class="dropdown-divider">
                </li>
                <li><a class="dropdown-item" href="#">Productos</a></li>
              </ul>
            </li>
            <li class="nav-item">
              <router-link to="/about"> <a class="nav-link">Informes</a></router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <!-- sesion informacion -->
    <h6>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus cum aspernatur vitae officia, delectus itaque
      molestias magni id possimus praesentium unde repudiandae ipsum voluptas vero deserunt consectetur quaerat illum ut.
      Eveniet quia nobis temporibus veritatis tempora nemo hic vitae, assumenda aperiam aliquid quod facilis ut dicta
      maiores, voluptates dignissimos ipsa. Officia molestias illo voluptatem nisi provident itaque neque rem asperiores?
      Error quibusdam laborum ad soluta consectetur animi quod qui minus nam ratione aliquid perspiciatis tempora debitis
      ipsam porro nihil sapiente laboriosam, molestiae at sint facilis iusto ipsa, aspernatur voluptatibus. Consequatur?
      Facere reiciendis neque obcaecati earum dignissimos placeat repudiandae voluptas nisi? Vero est cum a ullam quia
      architecto vitae optio enim ut unde laborum, amet, commodi laudantium deserunt magnam debitis doloribus.
      Sunt, nam! Ipsum rem, veritatis maxime voluptatibus vel natus impedit ratione quaerat. Nostrum quaerat dolorem
      recusandae pariatur doloribus veritatis nemo vel, reiciendis quidem aperiam ullam, a tenetur ducimus, quibusdam
      architecto?</h6>

<br>
<h1 class="display-6">Nuestros Servicios</h1>

    <!-- sesion servivios  -->
    <div class="container-fluid">
      <div class="row">
        <div class="col-6">
          <div class="card">
            <img src="./../components/images/imagen_fisioterapia.png" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">Terapia Fisica </h5>
              <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional
                content.
                This content is a little bit longer.</p>
            </div>
            <div class="card-footer">
              <small class="text-muted">45min</small>
            </div>
          </div>
        </div>
        <div class="col-6">
          <div class="card">
            <img src="./../components/images/imagen_fisioterapia.png" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">Valoracion</h5>
              <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional
                content.
                This content is a little bit longer.</p>
            </div>
            <div class="card-footer">
              <small class="text-muted">30min</small>
            </div>
          </div>
        </div>
        <div class="col-6">
          <div class="card">
            <img src="./../components/images/imagen_fisioterapia.png" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">Acondicionamiento</h5>
              <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional
                content.
                This content is a little bit longer.</p>
            </div>
            <div class="card-footer">
              <small class="text-muted">45min</small>
            </div>
          </div>
        </div>
   
        <div class="col-6">
          <div class="card">
            <img src="./../components/images/imagen_fisioterapia.png" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">Pole Dance</h5>
              <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional
                content.
                This content is a little bit longer.</p>
            </div>
            <div class="card-footer">
              <small class="text-muted">30min</small>
            </div>
          </div>
        </div>
    </div>
  </div>
<h6 class="display-6">Clases y Rutinas</h6>
  <div class="card text-bg-dark">
  <img src="./../components/images/pole.png" class="card-img" alt="...">
  <div class="card-img-overlay">
    <h5 class="card-title">pole Dance</h5>
    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
    <p class="card-text"><small>Last updated 3 mins ago</small></p>
  </div>
</div>

<h6 class="display-6">Productos</h6>
<div id="carouselExampleCaptions" class="carousel slide">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="./../components/images/imagen_fisioterapia.png" class="d-block w-100" alt="...">
      <div class="carousel-caption d-none d-md-block">
        <h5>First slide label</h5>
        <p>Some representative placeholder content for the first slide.</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src="./../components/images/imagen_fisioterapia.png" class="d-block w-100" alt="...">
      <div class="carousel-caption d-none d-md-block">
        <h5>Second slide label</h5>
        <p>Some representative placeholder content for the second slide.</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src="./../components/images/imagen_fisioterapia.png" class="d-block w-100" alt="...">
      <div class="carousel-caption d-none d-md-block">
        <h5>Third slide label</h5>
        <p>Some representative placeholder content for the third slide.</p>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>


</div></template>

<style scoped>

/* .card {
background: red;
margin: 5px;
} */
.card-title{
  font-size: 0.8rem;

}



.card-text{
  font-size: 0.6rem;
  font-style: oblique;
}
.card-footer{
  font-size:0.7rem;
}
.card-body{
  padding: 5px;
}
  .col-6{
padding: 2px;
}
.display-6{
  font-size: 1.2rem;
}

</style>
