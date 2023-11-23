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

                <p class="jz">
                    Bienvenidos a <strong>EVReabilitacion</strong>, este centro ha sido creado con el objetivo de brindar atención integral a personas que requieren tratamiento fisioterapeutico. Nuestro equipo de profesionales altamente capacitado está comprometido en ofrecer un ambiente seguro y acogedor para nuestros pacientes, donde puedan recibir la atención que necesitan para recuperar su bienestar físico y emocional. accede a los servicios que ofrecemos, nuestras instalaciones y nuestro enfoque terapéutico. ¡Gracias por acompañarnos!

                </p>

                <br>
                <div class="display-6">Mision</div>
                <p class="jz">
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
            <div class="row mt-3">
                <h1 class="display-6 subtitulos">Nuestros Servicios</h1>
        
                <p class="jz">Nuestro servicio de fisioterapia ofrece una amplia gama de tratamientos personalizados para abordar tus necesidades específicas de rehabilitación y bienestar físico. Nuestro equipo altamente calificado proporciona servicios que incluyen fisioterapia deportiva, fisioterapia manual, osteopatía, fisioterapia geriátrica, ortopédica, traumatológica, rehabilitación neurológica, fisioterapia uroginecológica, entre otros. Nos enfocamos en diagnosticar tu condición y lesión para ofrecerte el tratamiento más adecuado, junto con asesoramiento y prescripción de ejercicios personalizados. Nuestro objetivo es ayudarte a recuperarte de lesiones, mejorar tu rendimiento deportivo, prevenir lesiones futuras y mejorar tu calidad de vida. ¡Confía en nosotros para recibir la atención experta y personalizada que necesitas para tu recuperación y bienestar físico! </p>
            </div>
            <br>
            <Servicios />
        </div>
        <div class="tab-pane fade" id="contact-tab-pane" role="tabpanel" aria-labelledby="contact-tab" tabindex="0">
            <div class="row mt-3">
                <h1 class="display-6 subtitulos">Clases y Rutinas</h1>
             
            </div>
         
            <p class="jz">Ofrecemos un servicio de clases de gimnasia personalizadas y grupales para ayudarte a alcanzar tus objetivos de fitness de manera efectiva y segura. Nuestros entrenadores altamente capacitados trabajarán contigo para crear un plan de entrenamiento personalizado que se adapte a tus necesidades y habilidades individuales. Ya sea que estés buscando perder peso, aumentar la fuerza o mejorar tu flexibilidad, nuestras clases de gimnasia personalizadas te ayudarán a alcanzar tus metas de manera efectiva. Además, nuestras clases se llevan a cabo en un ambiente acogedor y motivador, lo que te permitirá disfrutar de tu entrenamiento mientras trabajas en tu cuerpo y mente. ¡Únete a nosotros y comienza tu viaje hacia una vida más saludable y activa hoy mismo! </p>
            <br>
            <Rutinas />
        </div>
        <div class="tab-pane fade" id="disabled-tab-pane" role="tabpanel" aria-labelledby="disabled-tab" tabindex="0">
            <div class="row mt-3">
                <h1 class="display-6 subtitulos">TiendaOnline</h1>
         
            </div>
           
            <p class="jz">Bienvenidos a nuestra tienda online especializada en productos de fisioterapia y gimnasia. Nuestro objetivo es ofrecer soluciones de alta calidad para ayudarte a mejorar tu salud, fortalecer tu cuerpo y potenciar tu rendimiento en el ejercicio. Estamos comprometidos a brindarte un servicio excepcional y personalizado que te ayudará a alcanzar tus objetivos de manera efectiva.</p>
           
            <h1 class="display-6">Beneficios de nuestra tienda online</h1>
            <p class="jz">Comodidad: Realiza tus compras desde la comodidad de tu hogar o trabajo, sin necesidad de ir a un centro físico. <br>
                Selección: Encuentra una amplia variedad de productos de fisioterapia y gimnasia de alta calidad en nuestra tienda online. <br>
              
                Atención al cliente: Nuestro equipo de profesionales está disponible para atender tus preguntas y ayudarte a encontrar los productos que mejor se adapten a tus necesidades.</p>
                <hr>
                <p>Productos</p>
            <Productos />
            <br>
        </div>
    </div>

    <!-- 

       -->

</div>
</template>
