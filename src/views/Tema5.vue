<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 5
      h1 Portafolio de productos o servicios
    .row.justify-content-center.align-items-center.mb-5
      .col-xl.mb-4.mb-lg-0
        p El portafolio de productos o servicios reúne la oferta de una organización y facilita su presentación clara. En marketing digital, organiza el contenido, destaca beneficios y orienta publicaciones, ayudando a los usuarios a comprender la oferta y tomar decisiones.
        p.mb-0 A lo largo de este segmento se conocerán los aspectos fundamentales y los criterios elementales para organizar un portafolio.
      .col-xl-auto.col-md-9(data-aos="zoom-in")
        figure
          img(src='@/assets/curso/temas/img138.png', alt="" ).m-auto
    .row.align-items-center.mb-0
      .col-xl-auto(data-aos="fade-right")
        figure.d-none.d-xl-block
          img(src="@/assets/curso/temas/img139.png", alt="" ).m-auto
      .col-xl
        AcordionA(tipo="a" clase-tarjeta="tarjeta acordeonA")(data-aos="fade-left")
          .row(titulo="Concepto de portafolio").ajuste-cajaAcordion
            p.mb-3 El portafolio de productos o servicios organiza y presenta la oferta de una empresa, destacando características y relaciones entre sus productos. En entornos digitales, facilita su difusión en sitios web y redes sociales, permitiendo a los usuarios explorar y conocer la oferta disponible.
          .row(titulo="Clasificación de productos o servicios").ajuste-cajaAcordion
            p.mb-3 Los productos o servicios de un portafolio pueden clasificarse según sus características o público objetivo, facilitando la organización y presentación de la oferta. Esta clasificación permite diferenciar categorías y mejorar la comunicación y creación de contenidos en entornos digitales.
          .row(titulo="Relación entre portafolio y comunicación de marca").ajuste-cajaAcordion
            p.mb-3 El portafolio de productos o servicios orienta la comunicación de la marca, definiendo el contenido que se comparte. En entornos digitales, permite generar publicaciones informativas y promocionales, además de asegurar coherencia al alinear los contenidos con la oferta de la organización.
          .row(titulo="Importancia del portafolio en la comunicación digital").ajuste-cajaAcordion
            p.mb-3 El portafolio de productos o servicios reúne la oferta de una organización y facilita su organización y comunicación en canales digitales. Además, orienta la creación de contenido en redes sociales y permite a los usuarios comprender fácilmente lo que ofrece la marca.
    Separador
    #t_5_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 5.1 Criterios para organizar un portafolio
    .bg-1
      .px-5 
        p.mb-5 A continuación, se presentan los criterios que facilitarán la estructuración de un portafolio de manera clara y efectiva para su comunicación en medios digitales.
        .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
          h5 Tabla 3.
          span Criterios para organizar un portafolio
        .tabla-a(data-aos="zoom-in").mb-0
          table
            thead
              tr
                th.ajuste-border-tabla.texto-left Criterio
                th.ajuste-border-tabla.texto-left Descripción
                th.texto-left Importancia en redes
            tbody
              tr
                td.ajuste-border-tabla.texto-left Claridad
                td.ajuste-border-tabla.texto-left Presentar los productos de forma comprensible
                td.texto-left Facilita la identificación de la oferta
              tr.ajuste-color-tabla
                td.ajuste-border-tabla.texto-left Organización
                td.ajuste-border-tabla.texto-left Agrupar productos por categorías
                td.texto-left Mejora la presentación
              tr
                td.ajuste-border-tabla.texto-left Relevancia
                td.ajuste-border-tabla.texto-left Destacar productos principales
                td.texto-left Atrae la atención del público
              tr.ajuste-color-tabla
                td.ajuste-border-tabla.texto-left Actualización
                td.ajuste-border-tabla.texto-left Mantener información actualizada
                td.texto-left Permite promocionar novedades
        Separador
        #t_5_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 5.2 Aplicación práctica: análisis de un portafolio
    p.mb-5 En el siguiente ejercicio, se aplicarán los conocimientos adquiridos sobre el presente capítulo.
    TabsC.color-acento-contenido.mb-0(data-aos="zoom-in")
      .py-3.py-md-4(titulo="Ejercicio práctico")
        .row.justify-content-center.align-items-center
          .col-xl-5.order-2.order-lg-1
            figure
              img(src='@/assets/curso/temas/img140.png', alt="" ).m-auto
          .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
            h4.txt--purpura.mb-4 Ejercicio práctico
            p Seleccione una marca o emprendimiento y realice el siguiente análisis:
            ol.lista-ol--cuadro.mb-0
              li
                .lista-ol--cuadro__vineta
                  span 1
                | Identifique el producto principal que ofrece la marca.
              li 
                .lista-ol--cuadro__vineta
                  span 2
                | Mencione dos productos o servicios complementarios.
              li 
                .lista-ol--cuadro__vineta
                  span 3
                | Describa cómo la marca presenta su portafolio en redes sociales.
      .py-3.py-md-4(titulo="Ejemplo")
        .row.justify-content-center.align-items-center
          .col-xl-5.order-2.order-lg-1
            figure
              img(src='@/assets/curso/temas/img141.png', alt="" ).m-auto
          .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
            h4.txt--purpura.mb-4 Ejemplo
            p Marca: Emprendimiento de repostería.
            ul.fa-ul.estilo___ul.mb-0
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Producto principal: tortas personalizadas.
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Productos complementarios: #[i cupcakes] y galletas decoradas.
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Presentación en redes: fotografías de productos y videos del proceso de elaboración.
                
</template>

<script>
export default {
  name: 'Tema5',
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
