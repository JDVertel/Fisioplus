<template>
<nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
        <a class="navbar-brand" href="#">Erika Vertel Fisioterapia</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <br>
            <form class="d-flex" role="search">
                <input class="form-control me-2 form-control-sm" type="search" placeholder="Usuario" aria-label="usuario">
                <input class="form-control me-2" type="search" placeholder="Contraseña" aria-label="Contraseña">
                <button class="btn btn-outline-success" type="submit">Login</button>
            </form>
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <router-link to="/"> <a class="nav-link active" aria-current="page" href="#"><img width="18" height="18" src="https://img.icons8.com/ios-filled/50/home.png" alt="home"/>  Home</a></router-link>
                </li>
          
                <li>
                  <router-link to="/profesional"><a class="nav-link" aria-current="page">Profesional</a></router-link>
                </li>
                <li class="nav-item">
                  <router-link to="/dashboard"><a class="nav-link" aria-current="page"><img width="18" height="18" src="https://img.icons8.com/ios/50/settings-3--v1.png" alt="settings-3--v1"/>Admin</a></router-link>
              </li>
            </ul>

        </div>
    </div>
</nav>
</template>

<!-- <li class="nav-item">
    <a class="nav-link-menu" aria-current="page" data-bs-toggle="modal" data-bs-target="#staticBackdrop"> Login</a>
</li>

<li class="nav-item">
    <router-link to="/about"><a class="nav-link-menu" aria-current="page">Acerca de</a></router-link>
</li>

<li class="nav-item">
    <hr class="navbar-divider" />
</li>
<li class="nav-item">
    <router-link to="/profesional"><a class="nav-link-menu" aria-current="page">Profesional</a></router-link>
</li>
<li class="nav-item">
    <router-link to="/dashboard"><a class="nav-link-menu" aria-current="page">Dashboard</a></router-link>
</li> -->
