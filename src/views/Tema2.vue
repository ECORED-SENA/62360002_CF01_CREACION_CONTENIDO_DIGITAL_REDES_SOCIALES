<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 2
      h1 Identidad visual de la marca
    p.mb-5 Con el fin de profundizar en el concepto de identidad visual de la marca y comprender su importancia en la comunicación digital, se invita a reproducir el siguiente video. En él se explica cómo los elementos gráficos y visuales permiten representar a una organización, fortalecer su reconocimiento y transmitir sus valores en entornos digitales.
    figure(data-aos="zoom-in").mb-5
      .video.mb-1
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption.fit___figcaption-video(data-aos="zoom-in") #[b Video]. Identidad visual de la marca
    p.mb-5 En el siguiente apartado se aborda el concepto de identidad visual, su importancia, los elementos que la componen, su funcionamiento en la comunicación digital y los criterios para la selección de sus elementos.
    .caja-tema1-2.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/temas/img29.svg" style="max-width: 60px").m-auto
      .col
        h3 Concepto de identidad visual
    .row.justify-content-center.align-items-center.mb-5
      .col-xl.mb-4.mb-lg-0
        .caja-tema2(data-aos="fade-right")
          p.mb-0 La identidad visual es el conjunto de elementos gráficos que representan y comunican la imagen de una marca de forma coherente y reconocible. A través de logotipo, colores, tipografía e imágenes, la organización transmite su personalidad, valores y propuesta de valor. Su uso consistente en todos los canales, especialmente digitales, facilita el reconocimiento y la recordación de la marca. Además, una identidad visual bien definida genera confianza, proyecta profesionalismo y permite transmitir emociones y significados. Por ello, su diseño debe responder a los objetivos de la organización y a las características del público, garantizando una comunicación efectiva y una conexión sólida con los usuarios.
      .col-xl-auto.col-md-9(data-aos="fade-left")
        figure
          img(src='@/assets/curso/temas/img51.png', alt='').m-auto
    .caja-tema1-2.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/temas/img29.svg" style="max-width: 60px").m-auto
      .col
        h3 Importancia de la identidad visual
    .bg-carrusel
      .px-5
        .row.align-items-center.mb-5
          .col-xl-4(data-aos="fade-right")
            figure.d-none.d-xl-block
              img(src='@/assets/curso/temas/img52.png', alt='' style="max-width: 350px").m-auto
          .col-xl-8(data-aos="fade-left")
            SlyderF(columnas="col-lg-6 col-xl-6")
              .tarjeta.color-acento-botones.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/temas/img53.svg' style="max-width: 90px").m-auto
                h4.mb-3.estilo-text Comunicación digital
                p.mb-0.text-center Las plataformas digitales permiten a las organizaciones interactuar, promocionar y conectar con sus públicos, donde la identidad visual es clave en la comunicación. 
              .tarjeta.color-acento-botones.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/temas/img54.svg' style="max-width: 90px").m-auto
                h4.mb-3.estilo-text Importancia de lo visual
                p.mb-0.text-center Imágenes, gráficos y videos captan más atención que el texto, por lo que requieren diseño coherente y estratégico. 
              .tarjeta.color-acento-botones.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/temas/img55.svg' style="max-width: 90px").m-auto
                h4.mb-3.estilo-text Reconocimiento de marca
                p.mb-0.text-center El uso consistente de colores, logotipo y tipografía facilita identificar rápidamente los contenidos. 
              .tarjeta.color-acento-botones.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/temas/img56.svg' style="max-width: 90px").m-auto
                h4.mb-3.estilo-text Recordación
                p.mb-0.text-center La repetición de elementos visuales fortalece la memoria y asociación con la marca. 
              .tarjeta.color-acento-botones.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/temas/img57.svg' style="max-width: 90px").m-auto
                h4.mb-3.estilo-text Transmisión de valores
                p.mb-0.text-center El diseño visual comunica personalidad, como innovación, confianza o profesionalismo. 
              .tarjeta.color-acento-botones.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/temas/img58.svg' style="max-width: 90px").m-auto
                h4.mb-3.estilo-text Coherencia y confianza
                p.mb-0.text-center Una línea gráfica uniforme proyecta organización y genera credibilidad. 
              .tarjeta.color-acento-botones.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/temas/img59.svg' style="max-width: 90px").m-auto
                h4.mb-3.estilo-text Interacción y comunidad
                p.mb-0.text-center Un estilo atractivo favorece la participación y creación de comunidades digitales. 
              .tarjeta.color-acento-botones.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/temas/img60.svg' style="max-width: 90px").m-auto
                h4.mb-3.estilo-text Consistencia en formatos
                p.mb-0.text-center Todos los contenidos deben mantener una misma identidad visual.
        .caja-tema1-2.mb-5(data-aos="fade-right")
          .col-lg-auto
            figure
              img(src="@/assets/curso/temas/img29.svg" style="max-width: 60px").m-auto
          .col
            h3 Elementos de la identidad visual
    TabsC.color-acento-contenido.mb-5(data-aos="zoom-in")
      .py-3.py-md-4(titulo="Elementos de la identidad visual")
        .row.justify-content-center.align-items-center
          .col-xl-5.order-2.order-lg-1
            figure
              img(src='@/assets/curso/temas/img61.png', alt="" ).m-auto
          .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
            h4.txt--purpura.mb-4 Elementos de la identidad visual
            ul.fa-ul.estilo___ul.mb-0
              li.mb-0.d-flex
                span.fa-li
                  i.fas.fa-check-circle
                | 
                p.mb-0 #[b Logotipo]: elemento gráfico principal que identifica visualmente a la marca.
              li.mb-0.d-flex
                span.fa-li
                  i.fas.fa-check-circle
                | 
                p.mb-0 #[b Colores corporativos]: paleta de colores que representa a la marca y genera asociaciones visuales y emocionales.
              li.mb-0.d-flex
                span.fa-li
                  i.fas.fa-check-circle
                | 
                p.mb-0 #[b Tipografía]: estilo de letras que define la comunicación escrita y refuerza la personalidad de la marca.
      .py-3.py-md-4(titulo="Elementos de la identidad visual")
        .row.justify-content-center.align-items-center
          .col-xl-5.order-2.order-lg-1
            figure
              img(src='@/assets/curso/temas/img62.png', alt="" ).m-auto
          .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
            h4.txt--purpura.mb-4 Elementos de la identidad visual
            ul.fa-ul.estilo___ul.mb-0
              li.mb-0.d-flex
                span.fa-li
                  i.fas.fa-check-circle
                | 
                p.mb-0 #[b Iconos]: símbolos gráficos que apoyan la comunicación visual y facilitan la comprensión de contenidos.
              li.mb-0.d-flex
                span.fa-li
                  i.fas.fa-check-circle
                | 
                p.mb-0 #[b Imágenes]: recursos visuales (fotografías o ilustraciones) que transmiten el estilo y mensaje de la marca.
              li.mb-0.d-flex
                span.fa-li
                  i.fas.fa-check-circle
                | 
                p.mb-0 #[b Estilo visual]: conjunto de lineamientos que determinan la apariencia general de los elementos gráficos.
    .row.justify-content-center.align-items-center.mb-5
      .col-xl-auto.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
        figure
          img(src='@/assets/curso/temas/img63.png', alt='').m-auto
      .col-xl
        .caja-tema2.color-1(data-aos="fade-left")
          h4 Funcionamiento de la identidad visual 
          p.mb-0 La identidad visual es un sistema gráfico que permite representar una marca de forma coherente y reconocible en distintos medios. En entornos digitales, se aplica en formatos como redes sociales, páginas web, videos y piezas publicitarias, manteniendo lineamientos visuales definidos. Su correcto funcionamiento depende de la integración consistente de elementos como logotipo, colores, tipografía y recursos gráficos, lo que facilita el reconocimiento y fortalece la presencia digital. Además, cumple una función estratégica al transmitir la personalidad y valores de la marca. Por ello, su diseño debe planificarse considerando los objetivos organizacionales y las características del público objetivo.
    .caja-tema1-2.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/temas/img29.svg" style="max-width: 60px").m-auto
      .col
        h3 Criterios para la identidad visual
    .row.align-items-center.mb-0
      .col-xl-4(data-aos="fade-right")
        figure.d-none.d-xl-block
          img(src='@/assets/curso/temas/img64.png', alt='' style="max-width: 350px").m-auto
      .col-xl-8(data-aos="fade-left")
        SlyderF(columnas="col-lg-6 col-xl-6")
          .tarjeta.color-acento-botones.fit___card-sinbordes
            .row.justify-content-center.mb-4
              .col-12
                img(src='@/assets/curso/temas/img65.png').m-auto
            h4.mb-3.estilo-text Logotipo 
            ul.fa-ul.mb-0
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | #[b Criterios]: debe ser simple, reconocible y adaptable. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | #[b Consideraciones]: debe funcionar en diferentes tamaños y formatos. 
          .tarjeta.color-acento-botones.fit___card-sinbordes
            .row.justify-content-center.mb-4
              .col-12
                img(src='@/assets/curso/temas/img66.png').m-auto
            h4.mb-3.estilo-text Colores corporativos 
            ul.fa-ul.mb-0
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | #[b Criterios]: deben representar la personalidad de la marca. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | #[b Consideraciones]: deben mantener coherencia en todos los diseños. 
          .tarjeta.color-acento-botones.fit___card-sinbordes
            .row.justify-content-center.mb-4
              .col-12
                img(src='@/assets/curso/temas/img67.png').m-auto
            h4.mb-3.estilo-text Tipografía 
            ul.fa-ul.mb-0
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | #[b Criterios]: debe ser legible y acorde al estilo de la marca. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | #[b Consideraciones]: se recomienda usar máximo dos tipografías. 
          .tarjeta.color-acento-botones.fit___card-sinbordes
            .row.justify-content-center.mb-4
              .col-12
                img(src='@/assets/curso/temas/img68.png').m-auto
            h4.mb-3.estilo-text Estilo visual 
            ul.fa-ul.mb-0
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | #[b Criterios]: debe reflejar la identidad de la organización. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | #[b Consideraciones]: debe mantenerse constante en las publicaciones.
    Separador
    #t_2_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.1 Aplicación práctica: construcción básica de la identidad visual
    p.mb-5 Mediante el siguiente ejercicio, se aplicarán los conocimientos adquiridos sobre la construcción básica de la identidad visual.
    TabsC.color-acento-contenido.mb-0(data-aos="zoom-in")
      .py-3.py-md-4(titulo="Ejercicio práctico")
        .row.justify-content-center.align-items-center
          .col-xl-5.order-2.order-lg-1
            figure
              img(src='@/assets/curso/temas/img69.png', alt="" ).m-auto
          .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
            h4.txt--purpura.mb-4 Ejercicio práctico
            p Imagine que debe crear la identidad visual para un emprendimiento que desea promocionar sus productos en redes sociales.
            p Realice las siguientes actividades:
            ol.lista-ol--cuadro.mb-0
              li
                .lista-ol--cuadro__vineta
                  span 1
                | Defina el nombre del emprendimiento.
              li 
                .lista-ol--cuadro__vineta
                  span 2
                | Seleccione un tipo de logotipo (tipográfico, isotipo, imagotipo o isologo).
              li 
                .lista-ol--cuadro__vineta
                  span 3
                | Proponga una paleta de colores corporativos (mínimo 2 colores).
              li 
                .lista-ol--cuadro__vineta
                  span 4
                | Seleccione una tipografía principal para las publicaciones.
              li 
                .lista-ol--cuadro__vineta
                  span 5
                | Describa el estilo visual que utilizará en sus contenidos digitales.
      .py-3.py-md-4(titulo="Ejemplo")
        .row.justify-content-center.align-items-center
          .col-xl-5.order-2.order-lg-1
            figure
              img(src='@/assets/curso/temas/img70.png', alt="" ).m-auto
          .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
            h4.txt--purpura.mb-4 Ejemplo
            p Emprendimiento: Café Montaña
            ul.fa-ul.estilo___ul.mb-0
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Logotipo: imagotipo con símbolo de montaña.
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Colores corporativos: verde oscuro y café.
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Tipografía: #[i sans serif] moderna.
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Estilo visual: imágenes naturales relacionadas con café y paisajes.

</template>

<script>
export default {
  name: 'Tema2',
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
