<script>
import menu from './menu.vue';
import servicios from './../components/vitrina/servicios.vue';
import rutinas from './../components/vitrina/rutinas.vue';
import productos from './../components/vitrina/productos.vue';

export default {
    components: {
        Menu: menu,
        Servicios: servicios,
        Rutinas: rutinas,
        Productos: productos,
    },
    data() {
        return {

            mostrarservicios: false,
            textoservicios: 'Nuestro equipo altamente calificado proporciona servicios que incluyen fisioterapia deportiva, fisioterapia manual, osteopatía, fisioterapia geriátrica, ortopédica, traumatológica, rehabilitación neurológica, fisioterapia uroginecológica, entre otros. Nos enfocamos en diagnosticar tu condición y lesión para ofrecerte el tratamiento más adecuado, junto con asesoramiento y prescripción de ejercicios personalizados. Nuestro objetivo es ayudarte a recuperarte de lesiones, mejorar tu rendimiento deportivo, prevenir lesiones futuras y mejorar tu calidad de vida. ¡Confía en nosotros para recibir la atención experta y personalizada que necesitas para tu recuperación y bienestar físico!',
            mostrarclases: false,
            textoclases: 'Nuestros entrenadores altamente capacitados trabajarán contigo para crear un plan de entrenamiento personalizado que se adapte a tus necesidades y habilidades individuales. Ya sea que estés buscando perder peso, aumentar la fuerza o mejorar tu flexibilidad, nuestras clases de gimnasia personalizadas te ayudarán a alcanzar tus metas de manera efectiva. Además, nuestras clases se llevan a cabo en un ambiente acogedor y motivador, lo que te permitirá disfrutar de tu entrenamiento mientras trabajas en tu cuerpo y mente. ¡Únete a nosotros y comienza tu viaje hacia una vida más saludable y activa hoy mismo!',
            mostrartienda: false,
            textotienda: 'Nuestro objetivo es ofrecer soluciones de alta calidad para ayudarte a mejorar tu salud, fortalecer tu cuerpo y potenciar tu rendimiento en el ejercicio. Estamos comprometidos a brindarte un servicio excepcional y personalizado que te ayudará a alcanzar tus objetivos de manera efectiva.',
            mostrarMenu: false,
        };
    },
    method: {
       
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
            <button class="nav-link active titulo" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile-tab-pane" type="button" role="tab" aria-controls="profile-tab-pane" aria-selected="false">Servicios</button>
        </li>
        <li class="nav-item" role="presentation">
            <button class="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact-tab-pane" type="button" role="tab" aria-controls="contact-tab-pane" aria-selected="false">Clases</button>
        </li>
        <li class="nav-item" role="presentation">
            <button class="nav-link" id="disabled-tab" data-bs-toggle="tab" data-bs-target="#disabled-tab-pane" type="button" role="tab" aria-controls="disabled-tab-pane" aria-selected="false">Tienda</button>
        </li>
        <li class="nav-item" role="presentation">
            <button class="nav-link " id="home-tab" data-bs-toggle="tab" data-bs-target="#home-tab-pane" type="button" role="tab" aria-controls="home-tab-pane" aria-selected="true">Info</button>
        </li>
    </ul>
    <div class="tab-content" id="myTabContent">
        <div class="tab-pane fade " id="home-tab-pane" role="tabpanel" aria-labelledby="home-tab" tabindex="0">
            <br>
            <div class="container text-center">

                <div class="display-6">¿Quienes Somos?</div>
                <p class="jz">

                    Bienvenidos a <strong>EVReabilitacion</strong>, este centro ha sido creado con el objetivo de brindar atención integral a personas que requieren tratamiento fisioterapeutico.Nuestro equipo de profesionales altamente capacitado está comprometido en ofrecer un ambiente seguro y acogedor para nuestros pacientes, donde puedan recibir la atención que necesitan para recuperar su bienestar físico y emocional. accede a los servicios que ofrecemos, nuestras instalaciones y nuestro enfoque terapéutico. ¡Gracias por acompañarnos!

                </p>

                <br>
                <div class="display-6">Mision</div>
                <p class="jz">
                    <strong>EVreabilitacion</strong>
                    tiene como objetivo ofrecer una visión integral para el tratamiento y recuperacion de lesiones traumáticas, brindando atención especializada y personalizada a cada paciente. Nuestra misión es proporcionar un espacio de recuperación que promueva la salud física y emocional, a través de un equipo multidisciplinario comprometido con la excelencia en el cuidado de la salud. Con un enfoque centrado en el bienestar integral, buscamos ser líderes en la rehabilitación traumatológica, contribuyendo al restablecimiento de la calidad de vida de nuestros pacientes.
                </p>
                <br>

                <div class="display-6">Vision</div>
                <p class=" jz">
                    La visión de <strong>EVreabilitacion</strong> es convertirnos en un referente reconocido a nivel local y nacional por nuestra excelencia en el tratamiento de lesiones traumáticas. Buscamos ser un centro de vanguardia que integre tecnología de punta, investigación y un enfoque humano para proporcionar soluciones efectivas y personalizadas a cada paciente. Aspiramos a ser un espacio de esperanza y transformación, donde cada persona pueda recuperar su movilidad, funcionalidad y bienestar emocional, permitiéndoles reintegrarse plenamente a sus actividades cotidianas.
                </p>
            </div>
            <br>
        </div>

        <div class="tab-pane fade show active" id="profile-tab-pane" role="tabpanel" aria-labelledby="profile-tab" tabindex="0">
            <div class="row mt-3">
                <h1 class="display-6 subtitulos">Nuestros Servicios</h1>

                <p class="jz">Nuestro servicio de fisioterapia ofrece una amplia gama de tratamientos personalizados para abordar tus necesidades específicas de rehabilitación y bienestar físico. </p>
                <div>
                    <p v-if="mostrarservicios" class="jz">{{ textoservicios }}</p>
                    <button class="btn btn-success btn-sm" @click="mostrarservicios = !mostrarservicios">
                        {{ mostrarservicios ? ' Leer menos ' : 'Leer más...' }}
                    </button>
                </div>
            </div>
            <hr>
            <Servicios />
        </div>
        <div class="tab-pane fade" id="contact-tab-pane" role="tabpanel" aria-labelledby="contact-tab" tabindex="0">
            <div class="row mt-3">
                <h1 class="display-6 subtitulos">Clases y Rutinas</h1>

            </div>

            <p class="jz">Ofrecemos un servicio de clases de gimnasia personalizadas y grupales para ayudarte a alcanzar tus objetivos de fitness de manera efectiva y segura. </p>
            <div>
                <p v-if="mostrarclases" class="jz">{{ textoclases }}</p>
                <button class="btn btn-success btn-sm" @click="mostrarclases = !mostrarclases">
                    {{ mostrarclases ? ' Leer menos ' : 'Leer más...' }}
                </button>
            </div>
            <hr>
            <Rutinas />
        </div>
        <div class="tab-pane fade" id="disabled-tab-pane" role="tabpanel" aria-labelledby="disabled-tab" tabindex="0">
            <div class="row mt-3">
                <h1 class="display-6 subtitulos">TiendaOnline</h1>

            </div>

            <p class="jz">Bienvenidos a nuestra tienda online especializada en productos de fisioterapia y gimnasia. </p>
            <div>
                <p v-if="mostrartienda" class="jz">{{ textotienda }}</p>
                <button class="btn btn-success btn-sm" @click="mostrartienda = !mostrartienda">
                    {{ mostrartienda ? ' Leer menos ' : 'Leer más...' }}
                </button>
            </div>
            <!--   <h1 class="display-6">Beneficios de nuestra tienda online</h1>
            <p class="jz">Comodidad: Realiza tus compras desde la comodidad de tu hogar o trabajo, sin necesidad de ir a un centro físico. <br>
                Selección: Encuentra una amplia variedad de productos de fisioterapia y gimnasia de alta calidad en nuestra tienda online. <br>

                Atención al cliente: Nuestro equipo de profesionales está disponible para atender tus preguntas y ayudarte a encontrar los productos que mejor se adapten a tus necesidades.</p> -->
            <hr>
            <p>Productos</p>
            <Productos />
            <br>

            <!-- 

       -->

        </div>

    </div>
</div>
</template>

<style>
.menu-lateral {
    position: fixed !important;
    top: 0 !important;
    left: -200px !important;
    width: 200px !important;
    height: 100% !important;
    background-color: #f1f1f1 !important;
    transition: left 0.3s ease !important;
}

.menu-lateral.menu-abierto {
    left: 0 !important;
}

.menu-lateral ul {
    list-style-type: none;
    padding: 0 !important;
}

.menu-lateral li a {
    display: block !important;
    padding: 10px !important;
    text-decoration: none !important;
    color: #333 !important;
}
</style>
