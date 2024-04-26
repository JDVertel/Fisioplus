<template>
<nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>Menu
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
                <li class="nav-item">
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
                </li>

            </ul>
        </div>
    </div>
</nav>

<!-- Button trigger modal -->

<!-- Modal -->
<div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
            <div class="modal-header">
                <h1 class="modal-title fs-5" id="staticBackdropLabel">Login</h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
        <div class="row">
          <div class="col-6"> <input class="form-control form-control-sm " type="text" placeholder="Usuario" ></div>
             <div class="col-6"> <input class="form-control form-control-sm" type="password" placeholder="Contraseña"></div>
        </div>
    
           
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary " data-bs-dismiss="modal">Cerrar</button>
                <button type="button" class="btn btn-primary">Ingresar</button>
            </div>
        </div>
    </div>
</div>
</template>
