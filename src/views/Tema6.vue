<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 6
      h1 Canales digitales para la comunicación de marca
    .row.justify-content-center.align-items-center.mb-5
      .col-xl.mb-4.mb-lg-0
        .caja-intro.caja-intro-2(data-aos="fade-right")
          p.mb-0 Los canales digitales son plataformas que permiten a las organizaciones comunicarse, promocionar y relacionarse con su público en internet. Facilitan ampliar el alcance, interactuar con usuarios, medir resultados y difundir contenidos, por lo que deben seleccionarse según el público objetivo y los objetivos de comunicación.
      .col-xl-auto.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
        figure
          img(src='@/assets/curso/temas/img142.jpg', alt='').m-auto
      .col-xl
        figure.mb-2(data-aos="fade-left")
          img(src='@/assets/curso/temas/img143.svg', alt='' style="width: 85px")
        p.mb-0 En este apartado se abordarán las redes sociales como canales de comunicación, sus principales características, la selección de canales según el público objetivo, los tipos de contenido digital y su uso estratégico en la comunicación.
    .caja-tema1-2.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/temas/img29.svg" style="max-width: 60px").m-auto
      .col
        h3 Redes sociales como canales de comunicación
    .row.justify-content-center.align-items-center.mb-5
      .col-xl.mb-4.mb-lg-0
        .caja-tema2.caja-tema2-1(data-aos="fade-right")
          p.mb-0 Las redes sociales son canales clave de comunicación digital que permiten a las marcas compartir contenido, interactuar con los usuarios y construir comunidades. Facilitan la comunicación directa, la segmentación del público y la promoción de productos, fortaleciendo la presencia y visibilidad en entornos digitales.
      .col-xl-auto.col-md-9(data-aos="fade-left")
        figure
          img(src='@/assets/curso/temas/img144.png', alt='').m-auto
    .caja-tema1-2.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/temas/img29.svg" style="max-width: 60px").m-auto
      .col
        h3 Características de las principales redes sociales
    p.mb-5 Entre las redes sociales más utilizadas se encuentran las siguientes:
    .row.align-items-center.mb-5
      .col-xl-4(data-aos="fade-right")
        figure.d-none.d-xl-block
          img(src='@/assets/curso/temas/img145.png', alt='' style="max-width: 350px").m-auto
      .col-xl-8(data-aos="fade-left")
        SlyderF(columnas="col-lg-6 col-xl-6")
          .tarjeta.color-acento-botones.fit___card-sinbordes
            .row.justify-content-center.mb-4
              .col-12
                img(src='@/assets/curso/temas/img146.png').m-auto
            h4.mb-3.estilo-text Facebook
            p.mb-0 Es una de las plataformas más utilizadas para compartir contenido informativo, promocional y multimedia. Permite publicar textos, imágenes, videos y enlaces, así como interactuar con los usuarios a través de comentarios y reacciones.
          .tarjeta.color-acento-botones.fit___card-sinbordes
            .row.justify-content-center.mb-4
              .col-12
                img(src='@/assets/curso/temas/img147.png').m-auto
            h4.mb-3.estilo-text Instagram
            p.mb-0 Se caracteriza por su enfoque visual, ya que la mayoría de los contenidos se presentan mediante imágenes y videos. Es una plataforma ideal para compartir contenido visual relacionado con productos, servicios o estilos de vida.
          .tarjeta.color-acento-botones.fit___card-sinbordes
            .row.justify-content-center.mb-4
              .col-12
                img(src='@/assets/curso/temas/img148.png').m-auto
            h4.mb-3.estilo-text TikTok
            p.mb-0 Esta red social se centra principalmente en la creación y difusión de videos cortos. Es muy popular entre los públicos jóvenes y se utiliza principalmente para contenidos creativos, entretenidos o informativos.
          .tarjeta.color-acento-botones.fit___card-sinbordes
            .row.justify-content-center.mb-4
              .col-12
                img(src='@/assets/curso/temas/img149.png').m-auto
            h4.mb-3.estilo-text YouTube
            p.mb-0 Es una plataforma especializada en la publicación de videos. Permite compartir contenidos educativos, promocionales o informativos en formato audiovisual.
          .tarjeta.color-acento-botones.fit___card-sinbordes
            .row.justify-content-center.mb-4
              .col-12
                img(src='@/assets/curso/temas/img150.png').m-auto
            h4.mb-3.estilo-text LinkedIn
            p.mb-0 Es una red social orientada al ámbito profesional. Se utiliza principalmente para compartir contenido relacionado con empresas, empleo, negocios y desarrollo profesional.
    .caja-tema1-2.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/temas/img29.svg" style="max-width: 60px").m-auto
      .col
        h3 Selección de canales según el público objetivo
    .row.justify-content-center.align-items-center.mb-5
      .col-xl-auto.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
        figure
          img(src='@/assets/curso/temas/img151.png', alt='').m-auto
      .col-xl
        .caja-tema2.caja-tema2-2(data-aos="fade-left")
          p.mb-0 La selección de canales digitales debe basarse en el público objetivo y el tipo de contenido. Analizar dónde están los usuarios y qué consumen permite elegir plataformas adecuadas, mejorando la comunicación, el alcance y la interacción con la audiencia.
    .caja-tema1-2.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/temas/img29.svg" style="max-width: 60px").m-auto
      .col
        h3 Tipos de contenido digital para redes sociales
    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/img152.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 En redes sociales, las marcas utilizan diversos tipos de contenido para comunicarse, promocionar y fortalecer su presencia. Su creación debe alinearse con los objetivos, el público objetivo y las características de cada plataforma para generar mayor interacción.
    .row.justify-content-center.mb-5
      .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
        .caja-tema6.h-100
          .row.justify-content-center.mb-3
            .col-12
              figure.mb-4
                img(src='@/assets/curso/temas/img153.png', alt="" ).m-auto
            h4.text-center Contenido informativo
            p.mb-0.text-center Brinda información útil y relevante, educa al público y posiciona la marca como fuente confiable mediante formatos como infografías, consejos o datos de interés. 
      .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
        .caja-tema6.h-100
          .row.justify-content-center.mb-3
            .col-12
              figure.mb-4
                img(src='@/assets/curso/temas/img154.png', alt="" ).m-auto
            h4.text-center Contenido promocional
            p.mb-0.text-center Difunde productos o servicios, resaltando características y beneficios. Se presenta en imágenes, videos o anuncios y debe equilibrarse con otros contenidos. 
      .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
        .caja-tema6.h-100
          .row.justify-content-center.mb-3
            .col-12
              figure.mb-4
                img(src='@/assets/curso/temas/img155.png', alt="" ).m-auto
            h4.text-center Contenido educativo
            p.mb-0.text-center Explica y enseña de forma clara mediante tutoriales, guías o videos, generando alta interacción al aportar valor y aprendizaje.
      .col-xl-3.col-md-9(data-aos="fade-left")
        .caja-tema6.h-100
          .row.justify-content-center.mb-3
            .col-12
              figure.mb-4
                img(src='@/assets/curso/temas/img156.png', alt="" ).m-auto
            h4.text-center Contenido interactivo
            p.mb-0.text-center Busca incentivar la participación de los usuarios en las publicaciones de la marca. Este tipo de contenido invita a los usuarios a comentar, responder preguntas, participar en encuestas y opinar.
    .caja-tema1-2.caja-tema1-3.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/temas/img29.svg" style="max-width: 60px").m-auto
      .col
        h3 Selección de canales digitales en la estrategia de comunicación
    .bloque-texto-g.bloque-texto-g--inverso.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-0(data-aos="zoom-in")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/img157.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Los canales digitales son plataformas que permiten a las marcas comunicarse y difundir información en internet. Su selección debe basarse en el público objetivo, el tipo de contenido y los objetivos de comunicación, enfocando las estrategias en los canales más utilizados por los usuarios.
    Separador
    #t_6_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 6.1 Criterios para seleccionar canales digitales
    .bg-1
      .px-5 
        p.mb-5 En la siguiente tabla se presentan los criterios que permiten seleccionar los canales digitales que mejor se adapten a las necesidades de la marca.
        .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
          h5 Tabla 4.
          span Criterios para seleccionar canales digitales
        .tabla-a(data-aos="zoom-in").mb-0
          table
            thead
              tr
                th.ajuste-border-tabla.texto-left Criterio
                th.ajuste-border-tabla.texto-left Descripción
                th.texto-left Importancia en comunicación digital
            tbody
              tr
                td.ajuste-border-tabla.texto-left Público objetivo
                td.ajuste-border-tabla.texto-left Identificar dónde interactúa la audiencia
                td.texto-left Permite elegir la red social adecuada
              tr.ajuste-color-tabla
                td.ajuste-border-tabla.texto-left Tipo de contenido
                td.ajuste-border-tabla.texto-left Considerar si se compartirán imágenes, videos o textos
                td.texto-left Facilita la adaptación del contenido
              tr
                td.ajuste-border-tabla.texto-left Alcance
                td.ajuste-border-tabla.texto-left Analizar la cantidad de usuarios en la plataforma
                td.texto-left Permite llegar a más personas
              tr.ajuste-color-tabla
                td.ajuste-border-tabla.texto-left Interacción
                td.ajuste-border-tabla.texto-left Evaluar el nivel de participación de los usuarios
                td.texto-left Favorece la comunicación con la audiencia
        Separador
        #t_6_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 6.2 Aplicación práctica: selección de canales digitales
    p.mb-5 En el siguiente ejercicio, se aplicarán los conocimientos adquiridos sobre el presente capítulo.
    TabsC.color-acento-contenido.mb-0(data-aos="zoom-in")
      .py-3.py-md-4(titulo="Actividad de análisis")
        .row.justify-content-center.align-items-center
          .col-xl-5.order-2.order-lg-1
            figure
              img(src='@/assets/curso/temas/img158.png', alt="" ).m-auto
          .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
            h4.txt--purpura.mb-4 Actividad de análisis
            p Seleccione un emprendimiento o marca y realice el siguiente análisis:
            ol.lista-ol--cuadro.mb-0
              li
                .lista-ol--cuadro__vineta
                  span 1
                | Identifique el público objetivo de la marca.
              li 
                .lista-ol--cuadro__vineta
                  span 2
                | Determine qué redes sociales utiliza con mayor frecuencia ese público.
              li 
                .lista-ol--cuadro__vineta
                  span 3
                | Explique qué tipo de contenido podría publicarse en esas plataformas.
      .py-3.py-md-4(titulo="Ejemplo")
        .row.justify-content-center.align-items-center
          .col-xl-5.order-2.order-lg-1
            figure
              img(src='@/assets/curso/temas/img159.png', alt="" ).m-auto
          .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
            h4.txt--purpura.mb-4 Ejemplo
            p Marca: Tienda de ropa deportiva.
            ul.fa-ul.estilo___ul.mb-0
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Público objetivo: jóvenes entre 18 y 30 años.
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Redes sociales principales: Instagram y TikTok.
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Tipo de contenido: videos cortos de productos, promociones y recomendaciones deportivas.
</template>

<script>
export default {
  name: 'Tema6',
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
