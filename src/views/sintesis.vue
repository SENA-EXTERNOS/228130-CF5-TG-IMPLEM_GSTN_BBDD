<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    p En esta unidad de creación de base de datos, el aprendiz afianzó los conceptos sobre bodega de datos, los cuales necesita para su construcción, acorde con las necesidades de cada organización. Igualmente, esta información le permite reconocer las diferentes opciones de arquitectura que se podrían abordar al momento de definir la creación de estas bases, cómo está organizado el departamento y los principales roles en el equipo con que va a realizar la implementación. Esto con el fin de brindar a la organización de saber diferentes entornos por medio de sus datos históricos, de una manera ágil y con la información necesaria, y así ver el comportamiento interno y tener un mejor control para la toma de decisiones en un futuro.
    p.mb-5 Como aspecto final de este tema, se le invita a observar el siguiente mapa, que contempla de manera resumida la temática estudiada en el componente formativo:

    .row.justify-content-center
      .col-lg-10.mb-5
        figure
          img(src="@/assets/curso/temas/sintesis.svg", alt="alt")
      .col-auto
        a.anexo.mb-4(:href="obtenerLink('/downloads/sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
