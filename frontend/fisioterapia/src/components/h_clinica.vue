<template>
<div class="accordion custom-header" id="accordionPanelsStayOpenExample">
    <!-- consulkta -->
    <D_consulta />
    <!-- --OBSERVACION  -->
    <D_observacion />
    <!--  INSPECCION ESTATICA-->
    <D_inspestatica />
    <!--  EVALUACION POSTURAL -->
    <D_eval_post />
    <!-- INSPECCION DINAMICA -->
    <D_insp_dinam />
    <!-- escala visual del dolor -->
    <D_esc_visual />
    <!-- pruebas de imagen complementaria -->
    <D_imagenes />
    <!-- EXPLORACION FISICA -->
    <D_exp_fisica />
    <!-- Plan Analitico de Atencion Fisioterapeutica  -->
    <D_sis_muscular />
    <!--   Tratamiento -->
    <D_tratamiento />
    <div class="accordion-item">
        <h2 class="accordion-header">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapse11" aria-expanded="false" aria-controls="panelsStayOpen-collapse11">
                <v-icon name="fa-hand-holding-medical" fill="blue" />
                Guardar Historia clinica
            </button>
        </h2>
        <div id="panelsStayOpen-collapse11" class="accordion-collapse collapse">
            <div class="accordion-body">
                <button type="button" class="btn btn-primary btn-sm">
                    guardar historia clinica
                </button>
            </div>
        </div>
        <div></div>
    </div>
</div>
</template>


<script>
import D_consulta from "./hc/1_datos_consulta/Dconsult.vue";
import D_observacion from "./hc/2_observacion/Dobs.vue";
import D_inspestatica from "./hc/3_ins_estatica/Dinspestatica.vue";
import D_eval_post from "./hc/4_eval_postural/Deval_post.vue";
import D_insp_dinam from "./hc/5_insp_dinamica/Dinsp_dinam.vue";
import D_esc_visual from "./hc/6_esc_visual/Desc_visual.vue";
import D_imagenes from "./hc/7_imagenes/Dimagenes.vue";
import D_exp_fisica from "./hc/8_exp_fisica/Dexp_fisica.vue";
import D_sis_muscular from "./hc/9_sistema_muscular/sistema_muscular.vue";
import D_tratamiento from "./hc/10_tratamiento/Dtratamiento.vue";
export default {
    data: () => ({

        /*  */
    }),

    components: {
        D_consulta,
        D_observacion,
        D_inspestatica,
        D_eval_post,
        D_insp_dinam,
        D_esc_visual,
        D_imagenes,
        D_exp_fisica,
        D_sis_muscular,
        D_tratamiento

    }
};
</script>
