<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    .row.justify-content-center.align-items-center.mb-5
      .col-xl.mb-4.mb-lg-0
        .caja-intro(data-aos="fade-right")
          p.mb-0 En el entorno digital actual, las redes sociales se han consolidado como canales clave de comunicación entre las organizaciones y sus públicos. En este contexto, la creación de contenido digital es una herramienta estratégica para transmitir mensajes claros, atractivos y coherentes con la identidad de marca, favoreciendo su posicionamiento.
      .col-xl-auto.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
        figure
          img(src='@/assets/curso/intro/img1.jpg', alt='').m-auto
      .col-xl
        figure.mb-2(data-aos="fade-left")
          img(src='@/assets/curso/intro/img2.svg', alt='' style="width: 85px")
        p.mb-0 Un elemento esencial en este proceso es la identidad visual, compuesta por aspectos como el logotipo, los colores corporativos, la tipografía y los estilos gráficos, los cuales permiten el reconocimiento de la marca y fortalecen su conexión con el público cuando se aplican de manera consistente.
    .row.justify-content-center.align-items-center
      .col-xl.mb-4.mb-lg-0
        .caja-intro-1.mb-3(data-aos="zoom-in")
          .row.align-items-center
            .col-xl-auto
              figure
                img(src='@/assets/curso/intro/img3.jpg', alt='').m-auto
            .col-xl
              p.mb-0 Asimismo, la identidad visual debe alinearse con el portafolio de productos o servicios y con las características del público objetivo, lo que facilita el diseño de contenidos relevantes y efectivos. Por ello, el análisis y correcta aplicación de estos elementos resulta fundamental en la planificación de estrategias de comunicación digital.
        p.mb-0 Este componente formativo aborda los conceptos clave de la marca y la identidad visual en entornos digitales, destacando su importancia para la coherencia comunicativa y el posicionamiento en redes sociales.
      .col-xl-auto.col-md-9(data-aos="zoom-in")
        figure
          img(src='@/assets/curso/intro/img4.png', alt='').m-auto
</template>

<script>
export default {
  name: 'Introduccion',
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
