<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .bloque-texto-a.color-acento-contenido.p-4.p-md-5.mb-5 
      .row.m-0.align-items-center.justify-content-between
        .col-lg-4.mb-4.mb-lg-0
          figure
            img(src="@/assets/curso/temas/introduccion/f1.png", alt="imagen relacionada")
        .col-lg-8
          .bloque-texto-a__texto.p-4
            p.mb-5 Apreciado aprendiz, reciba una cordial bienvenida al componente formativo Bodegas de datos. Aquí usted contará con orientación permanente para el desarrollo de este programa. Además, tendrá la oportunidad de aprender y aplicar las técnicas para diseñar y construir una bodega de datos, saber qué tipo de problemas puede resolver con estos procedimientos y así aplicarlos en un caso específico.
            p.mb-0 <b>¡Muchos éxitos en este proceso de aprendizaje!</b>

    figure
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
