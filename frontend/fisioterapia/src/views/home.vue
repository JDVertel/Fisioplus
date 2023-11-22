<script>
import menu from './../components/menu.vue';
import servicios from './../components/servicios.vue';
import rutinas from './../components/rutinas.vue';
import productos from './../components/productos.vue';

export default {
    components: {
        Menu: menu,
        Servicios: servicios,
        Rutinas: rutinas,
        Productos: productos,
    }
}
</script>

<template>
<div class="container">
    <Menu />
    <!-- sesion informacion -->
    <div class="container" align="center">
        <img src="./../assets/images/inicio.jpg" class="imagenvitrina" alt="..." />
    </div>

    <br />

    <ul class="nav nav-tabs" id="myTab" role="tablist">
        <li class="nav-item" role="presentation">
            <button class="nav-link active titulo" id="home-tab" data-bs-toggle="tab" data-bs-target="#home-tab-pane" type="button" role="tab" aria-controls="home-tab-pane" aria-selected="true">HOME</button>
        </li>
        <li class="nav-item" role="presentation">
            <button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile-tab-pane" type="button" role="tab" aria-controls="profile-tab-pane" aria-selected="false">SERVICIOS</button>
        </li>
        <li class="nav-item" role="presentation">
            <button class="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact-tab-pane" type="button" role="tab" aria-controls="contact-tab-pane" aria-selected="false">CLASES</button>
        </li>
        <li class="nav-item" role="presentation">
            <button class="nav-link" id="disabled-tab" data-bs-toggle="tab" data-bs-target="#disabled-tab-pane" type="button" role="tab" aria-controls="disabled-tab-pane" aria-selected="false">TIENDA</button>
        </li>
    </ul>
    <div class="tab-content" id="myTabContent">
        <div class="tab-pane fade show active" id="home-tab-pane" role="tabpanel" aria-labelledby="home-tab" tabindex="0">
            <br>
            <div class="container text-center">

                <div class="display-6">¿Quienes Somos?</div>

                <p class="small jz">
                    Bienvenidos a <strong>EVReabilitacion</strong>, este centro ha sido creado con el objetivo de brindar atención integral a personas que requieren tratamiento fisioterapeutico. Nuestro equipo de profesionales altamente capacitado está comprometido en ofrecer un ambiente seguro y acogedor para nuestros pacientes, donde puedan recibir la atención que necesitan para recuperar su bienestar físico y emocional. accede a los servicios que ofrecemos, nuestras instalaciones y nuestro enfoque terapéutico. ¡Gracias por acompañarnos!

                </p>
                <br>
                <div class="display-6">Mision</div>
                <p class="small jz">
                    <strong>EVreabilitacion</strong>
                    tiene como objetivo ofrecer una visión integral para el tratamiento y recuperacion de lesiones traumáticas, brindando atención especializada y personalizada a cada paciente. Nuestra misión es proporcionar un espacio de recuperación que promueva la salud física y emocional, a través de un equipo multidisciplinario comprometido con la excelencia en el cuidado de la salud. Con un enfoque centrado en el bienestar integral, buscamos ser líderes en la rehabilitación traumatológica, contribuyendo al restablecimiento de la calidad de vida de nuestros pacientes.
                </p>
                <br>
                <div class="display-6">Vision</div>
                <p class="small jz">
                    La visión de <strong>EVreabilitacion</strong> es convertirnos en un referente reconocido a nivel local y nacional por nuestra excelencia en el tratamiento de lesiones traumáticas. Buscamos ser un centro de vanguardia que integre tecnología de punta, investigación y un enfoque humano para proporcionar soluciones efectivas y personalizadas a cada paciente. Aspiramos a ser un espacio de esperanza y transformación, donde cada persona pueda recuperar su movilidad, funcionalidad y bienestar emocional, permitiéndoles reintegrarse plenamente a sus actividades cotidianas.
                </p>
            </div>
        </div>
        <div class="tab-pane fade" id="profile-tab-pane" role="tabpanel" aria-labelledby="profile-tab" tabindex="0">
            <h1 class="display-6 subtitulos"><strong>Nuestros Servicios</strong></h1>
            <Servicios />
        </div>
        <div class="tab-pane fade" id="contact-tab-pane" role="tabpanel" aria-labelledby="contact-tab" tabindex="0">
            <h6 class="display-6 subtitulos"><strong>Clases y Rutinas</strong></h6>
            <Rutinas />
        </div>
        <div class="tab-pane fade" id="disabled-tab-pane" role="tabpanel" aria-labelledby="disabled-tab" tabindex="0">
            <h6 class="display-6 subtitulos"><strong>Productos</strong></h6>
            <Productos />
        </div>
    </div>

    <!-- 

       -->

</div>
</template>
