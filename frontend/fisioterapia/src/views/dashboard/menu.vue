<script>

</script>

<template>
    <h6>datos de vuex strore</h6>
 
<p>acceso directo  rol: {{$store.state.rol}}/  id_usuario:{{$store.state.id_user}} / id_ips:{{$store.state.id_ips}}</p>
<hr>


<div class="container centrado mt-5">
    <h6 class="display-5">Menu FisioterapiApp</h6>
</div>

<div class="container menu">

    <div class="row">
        <div class="col-12 col-md-6">

            <router-link to="/homeAgendas"><a class="nav-link-menu" aria-current="page">
                    <div class="card mb-3" style="max-width: 540px;">
                        <div class="container">
                            <div class="row g-0">
                                <div class="col-2 centrado">
                                    <h1 class="display-1"><svg xmlns="http://www.w3.org/2000/svg" height="0.8em" viewBox="0 0 448 512">
                                            <path d="M128 0c17.7 0 32 14.3 32 32V64H288V32c0-17.7 14.3-32 32-32s32 14.3 32 32V64h48c26.5 0 48 21.5 48 48v48H0V112C0 85.5 21.5 64 48 64H96V32c0-17.7 14.3-32 32-32zM0 192H448V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V192zm64 80v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H80c-8.8 0-16 7.2-16 16zm128 0v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H208c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H336zM64 400v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H80c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H208zm112 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H336c-8.8 0-16 7.2-16 16z" /></svg></h1>
                                </div>
                                <div class="col-8">
                                    <div class="card-body">
                                        <h5 class="card-title">Agendas</h5>
                                        <p class="card-text">Desde este módulo se realizan tareas de  agregar, editar y eliminar citas en la agenda, asi como su parametrizacion.</p>
                                   
                                    </div>
                                </div>
                                <div class="col-2 centrado">
                                    <h1 class="display-1">5</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </a></router-link>
        </div>

        <div class="col-12 col-md-6">
            <router-link to="/hc"><a class="nav-link-menu" aria-current="page">
                    <div class="card mb-3" style="max-width: 540px;">
                        <div class="container">

                            <div class="row g-0">
                                <div class="col-2 centrado">
                                    <h1 class="display-1"><svg xmlns="http://www.w3.org/2000/svg" height="0.8em" viewBox="0 0 448 512">
                                            <path d="M0 96C0 43 43 0 96 0H384h32c17.7 0 32 14.3 32 32V352c0 17.7-14.3 32-32 32v64c17.7 0 32 14.3 32 32s-14.3 32-32 32H384 96c-53 0-96-43-96-96V96zM64 416c0 17.7 14.3 32 32 32H352V384H96c-17.7 0-32 14.3-32 32zM208 112v48H160c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h48v48c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V224h48c8.8 0 16-7.2 16-16V176c0-8.8-7.2-16-16-16H272V112c0-8.8-7.2-16-16-16H224c-8.8 0-16 7.2-16 16z" /></svg></h1>
                                </div>
                                <div class="col-8">
                                    <div class="card-body">
                                         <h5 class="card-title">Historia clinica</h5>
                                        <p class="card-text">permite el Registro digital  de las actividades relacionadas con la atención  de los pacientes</p>
                              
                                    </div>
                                </div>
                                <div class="col-2 centrado">
                                    <div class="display-1">5</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </a></router-link>
        </div>
        <div class="col-12 col-md-6">
            <router-link to="/vitrina"><a class="nav-link-menu" aria-current="page">
                    <div class="card mb-3" style="max-width: 540px;">
                        <div class="container">

                            <div class="row g-0">
                                <div class="col-2 centrado">
                                    <h1 class="display-1"><svg xmlns="http://www.w3.org/2000/svg" height="0.8em" viewBox="0 0 448 512">
                                            <path d="M0 96C0 43 43 0 96 0H384h32c17.7 0 32 14.3 32 32V352c0 17.7-14.3 32-32 32v64c17.7 0 32 14.3 32 32s-14.3 32-32 32H384 96c-53 0-96-43-96-96V96zM64 416c0 17.7 14.3 32 32 32H352V384H96c-17.7 0-32 14.3-32 32zM208 112v48H160c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h48v48c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V224h48c8.8 0 16-7.2 16-16V176c0-8.8-7.2-16-16-16H272V112c0-8.8-7.2-16-16-16H224c-8.8 0-16 7.2-16 16z" /></svg></h1>
                                </div>
                                <div class="col-8">
                                    <div class="card-body">
                                        <h5 class="card-title">Vitrina</h5>
                                        <p class="card-text">Este modulo permite visualizar productos o artículos en línea, con sus respectivos precios y características </p>
                                       
                                    </div>
                                </div>
                                <div class="col-2 centrado">
                                    <h1 class="display-1">9</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </a></router-link>
        </div>
        <div class="col-12 col-md-6">
            <router-link to="/parametros"><a class="nav-link-menu" aria-current="page">
                    <div class="card mb-3" style="max-width: 540px;">
                        <div class="container">

                            <div class="row g-0">
                                <div class="col-2 centrado">
                                    <h1 class="display-1"><svg xmlns="http://www.w3.org/2000/svg" height="0.8em" viewBox="0 0 448 512">
                                            <path d="M0 96C0 43 43 0 96 0H384h32c17.7 0 32 14.3 32 32V352c0 17.7-14.3 32-32 32v64c17.7 0 32 14.3 32 32s-14.3 32-32 32H384 96c-53 0-96-43-96-96V96zM64 416c0 17.7 14.3 32 32 32H352V384H96c-17.7 0-32 14.3-32 32zM208 112v48H160c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h48v48c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V224h48c8.8 0 16-7.2 16-16V176c0-8.8-7.2-16-16-16H272V112c0-8.8-7.2-16-16-16H224c-8.8 0-16 7.2-16 16z" /></svg></h1>
                                </div>
                                <div class="col-8">
                                    <div class="card-body">
                                        <h5 class="card-title">Parametros</h5>
                                        <p class="card-text">Desde aqui se realiza la gestion de los valores y paramtreos  de entrada y salida de los distintos procesos </p>
                            
                                    </div>
                                </div>
                                <div class="col-2 centrado">
                                    <h1 class="display-1">9</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </a></router-link>
        </div>
    </div>
  
    <router-link to="/">Home</router-link>
</div>
</template>
