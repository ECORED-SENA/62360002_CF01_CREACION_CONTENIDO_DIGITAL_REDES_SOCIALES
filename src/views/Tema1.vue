<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 1
      h1 Concepto de marca
    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/img1.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 La marca es un elemento fundamental en la comunicación y posicionamiento de una organización, ya que permite identificarla y diferenciarla en el mercado mediante un conjunto de elementos visuales y simbólicos que transmiten sus valores, personalidad y propuesta de valor; una marca sólida facilita el reconocimiento, genera confianza y fortalece la relación con los consumidores, y su construcción requiere coherencia en aspectos como el nombre, logotipo, colores y estilo comunicativo, especialmente en entornos digitales donde también se expresa a través del contenido y la interacción, lo que contribuye a destacar frente a la competencia y a crear conexiones significativas con el público.
    #t_1_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.1 Importancia de la marca en el entorno digital
    p.mb-5 Acto seguido, se procederá a analizar la importancia de la marca en el entorno digital:
    .bg-carrusel
      .px-5
        .row.align-items-center
          .col-xl-4(data-aos="fade-right")
            figure.d-none.d-xl-block
              img(src='@/assets/curso/temas/img3.png', alt='' style="max-width: 350px").m-auto
          .col-xl-8(data-aos="fade-left")
            SlyderF(columnas="col-lg-6 col-xl-6")
              .tarjeta.color-acento-botones.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/temas/img4.svg' style="max-width: 90px").m-auto
                h4.mb-3.estilo-text Marca digital
                p.mb-0.text-center La marca es clave en el entorno digital porque permite a las empresas interactuar con los consumidores a través de redes sociales, sitios web y otras plataformas. 
              .tarjeta.color-acento-botones.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/temas/img5.svg' style="max-width: 90px").m-auto
                h4.mb-3.estilo-text Diferenciación
                p.mb-0.text-center Ayuda a diferenciar a una organización en un contexto con alta competencia y gran cantidad de contenido. 
              .tarjeta.color-acento-botones.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/temas/img6.svg' style="max-width: 90px").m-auto
                h4.mb-3.estilo-text Identidad clara
                p.mb-0.text-center Una identidad clara y coherente facilita que los mensajes destaquen y sean reconocidos por los usuarios. 
              .tarjeta.color-acento-botones.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/temas/img7.svg' style="max-width: 90px").m-auto
                h4.mb-3.estilo-text Elementos visuales
                p.mb-0.text-center Elementos como colores, tipografía y estilo visual permiten identificar rápidamente el origen del contenido. 
              .tarjeta.color-acento-botones.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/temas/img8.svg' style="max-width: 90px").m-auto
                h4.mb-3.estilo-text Consistencia
                p.mb-0.text-center La consistencia en la marca fortalece el posicionamiento y hace que los usuarios la recuerden y asocien con ciertos valores. 
              .tarjeta.color-acento-botones.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/temas/img9.svg' style="max-width: 90px").m-auto
                h4.mb-3.estilo-text Comunidad digital
                p.mb-0.text-center Una marca sólida favorece la creación de comunidades digitales y la interacción con los usuarios. 
              .tarjeta.color-acento-botones.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/temas/img10.svg' style="max-width: 90px").m-auto
                h4.mb-3.estilo-text Gestión de marca
                p.mb-0.text-center La gestión adecuada de la marca es esencial en el #[i marketing] digital para fortalecer la presencia y conexión con el público.
        Separador
        #t_1_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 1.2 Funciones de la marca
        p.mb-5 Continuando con el análisis, es importante conocer las funciones que cumple la marca dentro de la estrategia de comunicación y posicionamiento de una organización; estas se son:
    .row.justify-content-center
      .col-lg-10
        PasosA.color-acento-contenido(tipo="n")
          .row.align-items-center
            .col-lg.mb-4.mb-lg-0
              h3 Pregnancia
              p.mb-0 La pregnancia es la capacidad de una marca para ser fácilmente recordada. Se logra mediante una identidad visual clara, simple y coherente, donde elementos como logotipos, colores distintivos y tipografías facilitan su reconocimiento y permanencia en la memoria de los usuarios.
            .col-auto(data-aos="zoom-in")
              figure
                img(src='@/assets/curso/temas/img11.png', alt='' style="width: 300px").m-auto
          .row.align-items-center
            .col-auto.mb-4.mb-lg-0(data-aos="zoom-in")
              figure
                img(src='@/assets/curso/temas/img12.png', alt='' style="width: 300px").m-auto
            .col-lg.fit___pasosA-left
              h3 Estética
              p.mb-0 La función estética de la marca se relaciona con su apariencia visual y diseño gráfico. Una imagen atractiva genera una impresión positiva y conexión emocional. En entornos digitales, un diseño coherente y armonioso en publicaciones, imágenes y videos capta la atención y mejora la percepción de la marca.
          .row.align-items-center
            .col-lg.mb-4.mb-lg-0
              h3 Asociación
              p.mb-0 Permite que los consumidores relacionen la marca con valores, características o experiencias. Estas asociaciones, construidas mediante la comunicación y la interacción, influyen en la percepción del público y en la forma en que se valoran sus productos o servicios.
            .col-auto(data-aos="zoom-in")
              figure
                img(src='@/assets/curso/temas/img13.png', alt='' style="width: 300px").m-auto
          .row.align-items-center
            .col-auto.mb-4.mb-lg-0(data-aos="zoom-in")
              figure
                img(src='@/assets/curso/temas/img14.png', alt='' style="width: 300px").m-auto
            .col-lg.fit___pasosA-left
              h3 Recordación
              p.mb-0 Se refiere a la capacidad de la marca para permanecer en la mente del consumidor. Una presencia constante, coherente y activa en entornos digitales favorece que sea recordada y considerada en decisiones de compra.
          .row.align-items-center
            .col-lg.mb-4.mb-lg-0
              h3 Comunicar
              p.mb-0 La marca transmite la identidad, valores y propuesta de valor de la organización. A través de contenidos y mensajes en medios digitales, expresa quién es, qué ofrece y qué beneficios brinda.
            .col-auto(data-aos="zoom-in")
              figure
                img(src='@/assets/curso/temas/img15.png', alt='' style="width: 300px").m-auto
          .row.align-items-center
            .col-auto.mb-4.mb-lg-0(data-aos="zoom-in")
              figure
                img(src='@/assets/curso/temas/img16.png', alt='' style="width: 300px").m-auto
            .col-lg.fit___pasosA-left
              h3 Designar
              p.mb-0 Consiste en otorgar un nombre y elementos visuales distintivos que identifican y diferencian productos, servicios u organizaciones, facilitando su reconocimiento en el mercado.
          .row.align-items-center
            .col-lg.mb-4.mb-lg-0
              h3 Significar
              p.mb-0 Hace referencia a los significados, emociones y valores que la marca proyecta. Estos se construyen mediante la narrativa, el estilo visual y la interacción con el público.
            .col-auto(data-aos="zoom-in")
              figure
                img(src='@/assets/curso/temas/img17.png', alt='' style="width: 300px").m-auto
          .row.align-items-center
            .col-auto.mb-4.mb-lg-0(data-aos="zoom-in")
              figure
                img(src='@/assets/curso/temas/img18.png', alt='' style="width: 300px").m-auto
            .col-lg.fit___pasosA-left
              h3 Identificar
              p.mb-0 Permite reconocer el origen de productos o contenidos mediante elementos como nombre, logotipo y colores, facilitando la diferenciación en entornos digitales saturados de información.
    Separador
    #t_1_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.3 La marca en el #[i marketing] digital
    .row.justify-content-center.align-items-center.mb-5
      .col-xl-auto.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
        figure
          img(src='@/assets/curso/temas/img19.png', alt='').m-auto
      .col-xl
        .caja-tema1.mb-3(data-aos="fade-left")
          p.mb-0 El #[i marketing] digital es el conjunto de estrategias que utilizan canales digitales para promocionar marcas, generar interacción y fortalecer su posicionamiento. Integra contenido, redes sociales y comunicación coherente, alineados con la identidad de marca y las necesidades del público objetivo.
        p.mb-0 El fortalecimiento de la identidad corporativa es un pilar fundamental en cualquier estrategia de comunicación. En el siguiente pódcast, se profundizará en el concepto de marca aplicado al #[i marketing] digital.
    .row.align-items-center.m-0.mb-0
      .col-xl
        .row.align-items-center.justify-content-center.caja-tema1-1(data-aos="zoom-in")
          .col-auto.mb-4.mb-lg-0
            figure(data-aos="fade-right")
              img(src="@/assets/curso/temas/img20.svg" style="max-width: 220px").m-auto
          .col
            h4.mb-4 Pódcast
            TarjetaAudio.color-acento-contenido.mb-3(
              texto="La marca: eje central del <em>marketing</em> digital"
              :audio="require('@/assets/curso/temas/podcast/podcast.mp3')"
              @audio-hover="mostrarIndicadorTarjetaAudio = false"
            )
      .col-xl-auto.d-none.d-xl-block
        figure(data-aos="fade-left")
          img(src="@/assets/curso/temas/img21.png" ).m-auto
    Separador
    #t_1_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.4 Elementos que componen una marca
    p.mb-5 La marca se compone de elementos verbales, visuales y simbólicos que, de forma integrada, construyen su identidad y facilitan su reconocimiento. Su uso coherente transmite valores y personalidad, fortalece la comunicación con el público y permite diferenciar a la organización en el mercado. Los principales elementos son:
    .row.align-items-center
      .col-xl-4(data-aos="fade-right")
        figure.d-none.d-xl-block
          img(src='@/assets/curso/temas/img22.png', alt='' style="max-width: 350px").m-auto
      .col-xl-8(data-aos="fade-left")
        SlyderF(columnas="col-lg-6 col-xl-6")
          .tarjeta.color-acento-botones.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/temas/img23.svg' style="max-width: 90px").m-auto
            h4.mb-3.estilo-text Nombre de la marca
            p.mb-0.text-center Permite identificar a la organización o producto.
          .tarjeta.color-acento-botones.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/temas/img24.svg' style="max-width: 90px").m-auto
            h4.mb-3.estilo-text Logotipo
            p.mb-0.text-center Representa gráficamente la marca.
          .tarjeta.color-acento-botones.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/temas/img25.svg' style="max-width: 90px").m-auto
            h4.mb-3.estilo-text Eslogan
            p.mb-0.text-center Que comunica de manera breve la propuesta de valor.
          .tarjeta.color-acento-botones.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/temas/img26.svg' style="max-width: 90px").m-auto
            h4.mb-3.estilo-text Colores corporativos
            p.mb-0.text-center Generan asociaciones visuales y emocionales.
          .tarjeta.color-acento-botones.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/temas/img26.svg' style="max-width: 90px").m-auto
            h4.mb-3.estilo-text Tipografía
            p.mb-0.text-center Define el estilo visual de la comunicación escrita.
          .tarjeta.color-acento-botones.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/temas/img26.svg' style="max-width: 90px").m-auto
            h4.mb-3.estilo-text Estilo visual
            p.mb-0.text-center Establece la forma en que se presentan las imágenes y los elementos gráficos.
    Separador
    #t_1_5.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.5 Ejemplos de marcas y su identidad
    p.mb-5 Para comprender la importancia de la marca y su identidad visual, es útil analizar ejemplos de marcas reconocidas. En esta sección se presentan algunos casos representativos.
    .caja-tema1-2.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/temas/img29.svg" style="max-width: 60px").m-auto
      .col
        h3 Nike
    p.mb-5 Nike es una marca deportiva reconocida mundialmente, cuya identidad visual destaca por el “#[i Swoosh]”, símbolo de dinamismo, y por su diseño simple y coherente, fácilmente identificable en diversos medios. A continuación, se presenta la evolución que ha tenido el diseño de la marca a lo largo del tiempo.
    .bg-slider.mb-5
      .px-5
        .tarjeta.tarjeta--gris.p-4(data-aos="zoom-in")
          LineaTiempoC.color-acento-botones(text-small)
            .row.align-items-center(titulo="1971")
              .col-md-6.mb-4.mb-md-0
                h4 1971
                p.mb-0 Nace la marca con el “Swoosh” y una tipografía manuscrita, transmitiendo movimiento y dinamismo.
              .col-md-6
                figure
                  img(src='@/assets/curso/temas/img31.png', alt='' style="max-width: 400px").m-auto
            .row.align-items-center(titulo="1971")
              .col-md-6.mb-4.mb-md-0
                h4 1971
                p.mb-0 Se adopta una tipografía más gruesa y en mayúsculas, logrando una imagen más fuerte y deportiva.
              .col-md-6
                figure
                  img(src='@/assets/curso/temas/img32.png', alt='' style="max-width: 400px").m-auto
            .row.align-items-center(titulo="1985")
              .col-md-6.mb-4.mb-md-0
                h4 1985
                p.mb-0 Se simplifica el diseño con una tipografía más limpia, mejorando el reconocimiento de la marca.
              .col-md-6
                figure
                  img(src='@/assets/curso/temas/img33.png', alt='' style="max-width: 400px").m-auto
            .row.align-items-center(titulo="1995")
              .col-md-6.mb-4.mb-md-0
                h4 1995
                p.mb-0 Se utiliza solo el “#[i Swoosh]”, consolidándolo como símbolo principal altamente reconocible.
              .col-md-6
                figure
                  img(src='@/assets/curso/temas/img34.png', alt='' style="max-width: 400px").m-auto
    .caja-tema1-2.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/temas/img29.svg" style="max-width: 60px").m-auto
      .col
        h3 Coca-Cola
    p.mb-5 Coca-Cola es una marca emblemática con una identidad visual consistente, basada en su logotipo y el color rojo, que transmite tradición y alegría. Esta coherencia ha fortalecido su reconocimiento. Seguidamente, se presenta la evolución de su diseño.
    .bg-slider.mb-5
      .px-5
        .tarjeta.tarjeta--gris.p-4(data-aos="zoom-in")
          LineaTiempoC.color-acento-botones(text-small)
            .row.align-items-center(titulo="1886")
              .col-md-6.mb-4.mb-md-0
                h4 1886
                p.mb-0 Primer logotipo con tipografía simple, sin el estilo distintivo actual.
              .col-md-6
                figure
                  img(src='@/assets/curso/temas/img35.png', alt='' style="max-width: 400px").m-auto
            .row.align-items-center(titulo="1887")
              .col-md-6.mb-4.mb-md-0
                h4 1887
                p.mb-0 Se introduce la tipografía #[i Spencerian], base del diseño icónico de la marca.
              .col-md-6
                figure
                  img(src='@/assets/curso/temas/img36.png', alt='' style="max-width: 400px").m-auto
            .row.align-items-center(titulo="1890")
              .col-md-6.mb-4.mb-md-0
                h4 1890
                p.mb-0 Diseño más decorativo y recargado, de corta duración.
              .col-md-6
                figure
                  img(src='@/assets/curso/temas/img37.png', alt='' style="max-width: 400px").m-auto
            .row.align-items-center(titulo="1941")
              .col-md-6.mb-4.mb-md-0
                h4 1941
                p.mb-0 Se simplifica el logotipo, acercándose a su forma actual.
              .col-md-6
                figure
                  img(src='@/assets/curso/temas/img38.png', alt='' style="max-width: 400px").m-auto
            .row.align-items-center(titulo="2003")
              .col-md-6.mb-4.mb-md-0
                h4 2003
                p.mb-0 Se moderniza con elementos dinámicos, manteniendo su esencia clásica.
              .col-md-6
                figure
                  img(src='@/assets/curso/temas/img39.png', alt='' style="max-width: 400px").m-auto
    .caja-tema1-2.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/temas/img29.svg" style="max-width: 60px").m-auto
      .col
        h3 Apple
    p.mb-5 Apple destaca por su diseño minimalista y una identidad visual simple, representada por su icónico isotipo de la manzana. El uso de colores neutros y líneas limpias refuerza su imagen innovadora. A continuación, se muestra la evolución de su diseño a lo largo del tiempo.
    .bg-slider.mb-5
      .px-5
        .tarjeta.tarjeta--gris.p-4(data-aos="zoom-in")
          LineaTiempoC.color-acento-botones(text-small)
            .row.align-items-center(titulo="1998")
              .col-md-6.mb-4.mb-md-0
                h4 1998
                p.mb-0 Logotipo negro y minimalista que marca una nueva etapa de simplicidad.
              .col-md-6
                figure
                  img(src='@/assets/curso/temas/img40.png', alt='' style="max-width: 400px").m-auto
            .row.align-items-center(titulo="2001")
              .col-md-6.mb-4.mb-md-0
                h4 2001
                p.mb-0 Diseño translúcido y moderno con efecto tridimensional.
              .col-md-6
                figure
                  img(src='@/assets/curso/temas/img41.png', alt='' style="max-width: 400px").m-auto
            .row.align-items-center(titulo="2008")
              .col-md-6.mb-4.mb-md-0
                h4 2008
                p.mb-0 Acabado metálico que transmite calidad y sofisticación.
              .col-md-6
                figure
                  img(src='@/assets/curso/temas/img42.png', alt='' style="max-width: 400px").m-auto
            .row.align-items-center(titulo="Actualidad")
              .col-md-6.mb-4.mb-md-0
                h4 Actualidad
                p.mb-0 Estilo plano y simple, adaptado a entornos digitales.
              .col-md-6
                figure
                  img(src='@/assets/curso/temas/img43.png', alt='' style="max-width: 400px").m-auto
    p.mb-0 El análisis de marcas reconocidas permite comprender cómo los elementos visuales influyen en la construcción de la identidad organizacional. Observar el uso de logotipos, colores y tipografías facilita identificar buenas prácticas, que sirven como referencia para diseñar estrategias de comunicación visual coherentes y efectivas en entornos digitales.
    Separador
    #t_1_6.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.6 Funcionamiento de la marca en la estrategia digital
    p.mb-5 El foco de este acápite se centra en el estudio del funcionamiento de la marca. Esta se clasifica en:
    .bg-slider.mb-0
      .px-5
        .ajuste-slider(data-aos="zoom-in")
          SlyderA(tipo="b")
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Sistema de comunicación
                p.mb-0 La marca integra elementos visuales, mensajes y experiencias que permiten identificar y diferenciar a una organización, actuando como un vínculo entre la empresa y su público.
              .col-xl-6
                figure
                  img(src='@/assets/curso/temas/img44.png', alt='' style="max-width: 500px").m-auto
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Componentes de la marca
                p.mb-0 Se construye a partir de la identidad visual, el contenido digital, el tono de comunicación y la experiencia del usuario en los canales digitales.
              .col-xl-6
                figure
                  img(src='@/assets/curso/temas/img45.png', alt='' style="max-width: 500px").m-auto
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Coherencia comunicativa
                p.mb-0 La consistencia en lo visual, el estilo y el contenido facilita el reconocimiento de la marca en entornos digitales saturados de información.
              .col-xl-6
                figure
                  img(src='@/assets/curso/temas/img46.png', alt='' style="max-width: 500px").m-auto
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Percepción y confianza
                p.mb-0 Una marca bien estructurada transmite profesionalismo, genera confianza y favorece la interacción y preferencia de los usuarios.
              .col-xl-6
                figure
                  img(src='@/assets/curso/temas/img47.png', alt='' style="max-width: 500px").m-auto
    Separador
    #t_1_7.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.7 Criterios para evaluar la construcción de una marca
    .bg-1
      .px-5 
        p.mb-5 La construcción de una marca efectiva implica considerar criterios que influyen en su posicionamiento y reconocimiento. Estos permiten evaluar si comunica adecuadamente la identidad de la organización. Los detalles se precisan en la siguiente tabla.
        .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
          h5 Tabla 1.
          span Criterios para evaluar la construcción de una marca
        .tabla-a(data-aos="zoom-in").mb-5
          table
            thead
              tr
                th.ajuste-border-tabla.texto-left Criterio
                th.ajuste-border-tabla.texto-left Descripción
                th.texto-left Importancia en redes sociales
            tbody
              tr.ajuste-color-tabla
                td.ajuste-border-tabla.texto-left Claridad
                td.ajuste-border-tabla.texto-left La marca debe ser fácil de comprender e identificar
                td.texto-left Facilita el reconocimiento del contenido
              tr
                td.ajuste-border-tabla.texto-left Coherencia
                td.ajuste-border-tabla.texto-left Los elementos visuales deben mantenerse constantes
                td.texto-left Refuerza la identidad visual
              tr.ajuste-color-tabla
                td.ajuste-border-tabla.texto-left Diferenciación
                td.ajuste-border-tabla.texto-left La marca debe distinguirse de la competencia
                td.texto-left Permite destacar en entornos digitales
              tr
                td.ajuste-border-tabla.texto-left Adaptabilidad
                td.ajuste-border-tabla.texto-left Debe funcionar en diferentes formatos digitales
                td.texto-left Permite usar la marca en redes, web y publicidad
              tr.ajuste-color-tabla
                td.ajuste-border-tabla.texto-left Recordación
                td.ajuste-border-tabla.texto-left Debe ser fácil de recordar por los usuarios
                td.texto-left Favorece el posicionamiento
        p.mb-0 Estos criterios permiten evaluar si una marca tiene la capacidad de mantenerse reconocible dentro de los diferentes canales digitales.
    Separador
    #t_1_8.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.8 Aplicación práctica: análisis de una marca digital
    p.mb-5 Para poner en práctica los conocimientos adquiridos, se invita a que se realice la siguiente actividad de análisis sobre marca digital:
    TabsC.color-acento-contenido.mb-0(data-aos="zoom-in")
      .py-3.py-md-4(titulo="Actividad de análisis")
        .row.justify-content-center.align-items-center
          .col-xl-5.order-2.order-lg-1
            figure
              img(src='@/assets/curso/temas/img49.png', alt="" ).m-auto
          .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
            h4.txt--purpura.mb-4 Actividad de análisis
            p Seleccione una marca que tenga presencia en redes sociales y realice el siguiente análisis:
            ol.lista-ol--cuadro.mb-0
              li
                .lista-ol--cuadro__vineta
                  span 1
                | Identifique el nombre de la marca.
              li 
                .lista-ol--cuadro__vineta
                  span 2
                | Observe su logotipo y describa sus características principales.
              li 
                .lista-ol--cuadro__vineta
                  span 3
                | Analice los colores corporativos utilizados en sus publicaciones.
              li 
                .lista-ol--cuadro__vineta
                  span 4
                | Identifique el tipo de contenido que publica en redes sociales.
              li 
                .lista-ol--cuadro__vineta
                  span 5
                | Explique cómo la marca mantiene coherencia visual en sus publicaciones.
      .py-3.py-md-4(titulo="Ejemplo de análisis")
        .row.justify-content-center.align-items-center
          .col-xl-5.order-2.order-lg-1
            figure
              img(src='@/assets/curso/temas/img50.png', alt="" ).m-auto
          .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
            h4.txt--purpura.mb-4 Ejemplo de análisis
            p Marca: Nike
            ul.fa-ul.estilo___ul.mb-0
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Logotipo: isotipo simple (#[i Swoosh]).
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Colores: predominan negro y blanco.
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Estilo visual: minimalista y deportivo.
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Tipo de contenido: contenido motivacional, promocional y deportivo.
  
</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    mostrarIndicadorTarjetaAudio: true,
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
