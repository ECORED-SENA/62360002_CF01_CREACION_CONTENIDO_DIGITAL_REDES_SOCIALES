<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 3
      h1 Elementos gráficos de la marca	
    p.mb-5 Los elementos gráficos representan la identidad visual de una marca y facilitan su reconocimiento; su uso coherente en medios digitales fortalece el posicionamiento y la comunicación. Incluyen logotipo, colores, tipografía e imágenes, que transmiten valores y proyectan una imagen profesional, los cuales se analizarán en los siguientes apartados.
    #t_3_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 3.1 Logotipo
    .bloque-texto-g.bloque-texto-g--inverso.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/img71.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 El logotipo es el principal elemento de la identidad visual, ya que identifica y diferencia a una marca. Debe ser simple, reconocible y adaptable, transmitir sus valores y facilitar su recordación, especialmente en entornos digitales donde es clave para el reconocimiento.
    .caja-tema1-2.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/temas/img29.svg" style="max-width: 60px").m-auto
      .col
        h3 Tipos de logotipos 
    p.mb-5 Entrando en materia, resulta pertinente profundizar en los tipos de logotipos, los cuales se abordarán a continuación.
    .row.align-items-center.mb-5
      .col-xl-auto(data-aos="fade-right")
        figure.d-none.d-xl-block
          img(src="@/assets/curso/temas/img72.png", alt="" ).m-auto
      .col-xl
        AcordionA(tipo="a" clase-tarjeta="tarjeta acordeonA")(data-aos="fade-left")
          .row(titulo="Logotipo tipográfico (logotipo puro)").ajuste-cajaAcordion
            .col-xl-7.mb-4
              p.mb-0 Este tipo de logotipo está compuesto únicamente por el nombre de la marca representado mediante una tipografía específica. No incluye símbolos o elementos gráficos adicionales. La identidad visual se construye a partir del diseño de las letras, lo que permite que el nombre de la marca sea el elemento principal de reconocimiento.
            .col-xl-5.mb-3
              figure
                img(src='@/assets/curso/temas/img73.png', alt='').m-auto 
          .row(titulo="Isotipo").ajuste-cajaAcordion
            .col-xl-7.mb-4
              p.mb-0 El isotipo corresponde a un símbolo o ícono que representa a la marca sin necesidad de incluir texto. En este caso, la marca puede ser reconocida únicamente a través de su símbolo gráfico. Este tipo de logotipo suele utilizarse cuando la marca ya tiene un alto nivel de reconocimiento.
            .col-xl-5.mb-3
              figure
                img(src='@/assets/curso/temas/img74.png', alt='').m-auto 
          .row(titulo="Imagotipo").ajuste-cajaAcordion
            .col-xl-7.mb-4
              p.mb-0 El imagotipo es la combinación de un símbolo gráfico y el nombre de la marca. A diferencia de otros tipos de logotipos, estos elementos pueden utilizarse de forma conjunta o separada. Esto permite mayor flexibilidad en la comunicación visual de la marca.
            .col-xl-5.mb-3
              figure
                img(src='@/assets/curso/temas/img75.png', alt='').m-auto 
          .row(titulo="Isologo").ajuste-cajaAcordion
            .col-xl-7.mb-4
              p.mb-0 El isologo integra el símbolo gráfico y el texto en una sola unidad visual. En este tipo de logotipo, ambos elementos se encuentran unidos de manera inseparable, por lo que siempre deben utilizarse juntos para mantener la identidad visual de la marca.
            .col-xl-5.mb-3
              figure
                img(src='@/assets/curso/temas/img76.png', alt='').m-auto 
    .caja-tema1-2.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/temas/img29.svg" style="max-width: 60px").m-auto
      .col
        h3 Características de un logotipo efectivo
    p.mb-5 Las características que debe cumplir el logotipo para que la marca sea fácilmente reconocida, recordada y utilizada en diferentes medios de comunicación son:
    .bg-carrusel
      .px-5
        .row.align-items-center.mb-5
          .col-xl-4(data-aos="fade-right")
            figure.d-none.d-xl-block
              img(src='@/assets/curso/temas/img77.png', alt='' style="max-width: 350px").m-auto
          .col-xl-8(data-aos="fade-left")
            SlyderF(columnas="col-lg-6 col-xl-6")
              .tarjeta.color-acento-botones.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/temas/img78.svg' style="max-width: 90px").m-auto
                h4.mb-3.estilo-text Simplicidad
                p.mb-0 Un logotipo debe ser simple y fácil de comprender. Los diseños demasiado complejos pueden dificultar su reconocimiento y su recordación. Un diseño sencillo permite que el logotipo sea identificado rápidamente por los usuarios.
              .tarjeta.color-acento-botones.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/temas/img79.svg' style="max-width: 90px").m-auto
                h4.mb-3.estilo-text Originalidad
                p.mb-0 El logotipo debe ser único y diferenciarse de los diseños utilizados por otras marcas. La originalidad permite que la marca destaque dentro del mercado y evita confusiones con otras organizaciones.
              .tarjeta.color-acento-botones.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/temas/img80.svg' style="max-width: 90px").m-auto
                h4.mb-3.estilo-text Legibilidad
                p.mb-0 Si el logotipo incluye texto, este debe ser claro y fácil de leer. La tipografía utilizada debe permitir que el nombre de la marca sea comprendido sin dificultad en diferentes tamaños y formatos.
              .tarjeta.color-acento-botones.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/temas/img81.svg' style="max-width: 90px").m-auto
                h4.mb-3.estilo-text Adaptabilidad
                p.mb-0 Un logotipo debe poder utilizarse en diferentes formatos y plataformas. Esto incluye su aplicación en redes sociales, páginas web, documentos digitales, materiales impresos y dispositivos móviles. Por esta razón, el diseño debe funcionar correctamente tanto en tamaños grandes como pequeños.
              .tarjeta.color-acento-botones.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/temas/img82.svg' style="max-width: 90px").m-auto
                h4.mb-3.estilo-text Memorable
                p.mb-0 Un logotipo efectivo debe ser fácil de recordar. Cuando un diseño logra permanecer en la memoria de los usuarios, aumenta la probabilidad de que la marca sea reconocida y recordada en el futuro.
              .tarjeta.color-acento-botones.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/temas/img83.svg' style="max-width: 90px").m-auto
                h4.mb-3.estilo-text Coherencia con la identidad de la marca
                p.mb-0 El logotipo debe reflejar la personalidad y los valores de la organización. Los colores, las formas y la tipografía utilizados deben estar alineados con la identidad visual de la marca y con el mensaje que se desea transmitir al público.
              .tarjeta.color-acento-botones.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/temas/img84.svg' style="max-width: 90px").m-auto
                h4.mb-3.estilo-text Vigencia en el tiempo
                p.mb-0 Un buen logotipo debe ser capaz de mantenerse vigente durante largos periodos de tiempo. Aunque algunas marcas realizan ajustes o modernizaciones en su identidad visual, el logotipo debe conservar elementos que permitan mantener el reconocimiento de la marca.
        p.mb-0 Un logotipo efectivo en entornos digitales facilita la asociación de los contenidos con la marca, fortaleciendo su identidad visual y mejorando el reconocimiento de sus publicaciones.
    Separador
    #t_3_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 3.2 Tipografía
    .bg-1
      .px-5 
        p.mb-5 Dentro de este marco, se analizarán los tipos de tipografía y su aplicación en la creación de contenido digital.   
        .row.justify-content-center.mb-5
          .col-xl-4.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
            .caja-tema3.h-100
              .row.justify-content-center.mb-3
                .col-12
                  figure.mb-4
                    img(src='@/assets/curso/temas/img85.png', alt="" ).m-auto
                h4.text-center Concepto de tipografía
                p.mb-0.text-center Es el elemento de la identidad visual que define el estilo de las letras en la comunicación escrita, permitiendo transmitir la personalidad, valores y tono de la marca.
          .col-xl-4.col-md-9(data-aos="fade-left")
            .caja-tema3.h-100
              .row.justify-content-center.mb-3
                .col-12
                  figure.mb-4
                    img(src='@/assets/curso/temas/img86.png', alt="" ).m-auto
                h4.text-center Importancia de la tipografía
                p.mb-0.text-center Garantiza la legibilidad y claridad de los mensajes, refuerza la coherencia visual y contribuye a proyectar una imagen profesional y reconocible en entornos digitales.
        .caja-tema1-2.mb-5(data-aos="fade-right")
          .col-lg-auto
            figure
              img(src="@/assets/curso/temas/img29.svg" style="max-width: 60px").m-auto
          .col
            h3 Tipos de tipografía
    p.mb-5 Existen diversos tipos de tipografía en el diseño gráfico, cada uno con características que influyen en la percepción de los mensajes. Entre los más utilizados se encuentran los siguientes:
    .row.align-items-center.mb-5
      .col-xl-auto(data-aos="fade-right")
        figure.d-none.d-xl-block
          img(src="@/assets/curso/temas/img87.png", alt="" ).m-auto
      .col-xl
        AcordionA(tipo="a" clase-tarjeta="tarjeta acordeonA")(data-aos="fade-left")
          .row(titulo="Tipografía <em>serif</em>").ajuste-cajaAcordion
            .col-xl-7.mb-4
              p.mb-0 Este tipo de tipografía se caracteriza por presentar pequeños remates o terminaciones en los extremos de las letras. Las tipografías #[i serif] suelen asociarse con estilos más tradicionales, elegantes y formales. Son comunes en textos largos o en marcas que buscan transmitir confianza y seriedad.
            .col-xl-5.mb-3
              figure
                img(src='@/assets/curso/temas/img88.png', alt='').m-auto 
          .row(titulo="Tipografía <em>sans serif</em>").ajuste-cajaAcordion
            .col-xl-7.mb-4
              p.mb-0 Este tipo de tipografía se caracteriza por presentar pequeños remates o terminaciones en los extremos de las letras. Las tipografías #[i serif] suelen asociarse con estilos más tradicionales, elegantes y formales. Son comunes en textos largos o en marcas que buscan transmitir confianza y seriedad.
            .col-xl-5.mb-3
              figure
                img(src='@/assets/curso/temas/img89.png', alt='').m-auto 
          .row(titulo="Tipografía <em>script</em>").ajuste-cajaAcordion
            .col-xl-7.mb-4
              p.mb-0 Las tipografías script imitan la escritura a mano y suelen tener un estilo más decorativo o artístico. Este tipo de letra se utiliza generalmente para transmitir creatividad, elegancia o cercanía.
            .col-xl-5.mb-3
              figure
                img(src='@/assets/curso/temas/img90.png', alt='').m-auto 
          .row(titulo="Tipografía <em>display</em>").ajuste-cajaAcordion
            .col-xl-7.mb-4
              p.mb-0 Las tipografías #[i display] se caracterizan por tener diseños llamativos y decorativos. Suelen utilizarse principalmente en títulos, logotipos o piezas gráficas donde se busca captar la atención del público.
            .col-xl-5.mb-3
              figure
                img(src='@/assets/curso/temas/img91.png', alt='').m-auto 
    p.mb-5 La elección del tipo de tipografía depende del estilo de la marca, del mensaje que se desea comunicar y del contexto en el que se utilizará el contenido.
    .caja-tema1-2.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/temas/img29.svg" style="max-width: 60px").m-auto
      .col
        h3 Uso de la tipografía en contenido digital
    p.mb-5 En el entorno digital, la tipografía desempeña un papel fundamental en la forma en que los usuarios perciben y comprenden la información. Los usos más frecuentes son:
    TabsB.color-acento-contenido(data-aos="zoom-in")
      .py-4.py-md-5(titulo="Legibilidad" :icono="require('@/assets/curso/temas/img92.svg')")
        .row.align-items-center
          .col-xl-6.order-1.mb-4.mb-lg-0.p-5
            h4 Legibilidad 
            p.mb-0 Los textos deben ser fáciles de leer en diferentes dispositivos. Se recomienda usar tipografías claras y evitar estilos excesivamente decorativos.
          .col-lg-6.mb-4.mb-md-0.order-2
            figure
              img(src='@/assets/curso/temas/img97.png', alt="" style="max-width: 450px").m-auto
      .py-4.py-md-5(titulo="Coherencia tipográfica" :icono="require('@/assets/curso/temas/img93.svg')")
        .row.align-items-center
          .col-xl-6.order-1.mb-4.mb-lg-0.p-5
            h4 Coherencia tipográfica
            p.mb-0 El uso constante de una o dos tipografías fortalece la identidad visual y facilita el reconocimiento de la marca.
          .col-lg-6.mb-4.mb-md-0.order-2
            figure
              img(src='@/assets/curso/temas/img98.png', alt="" style="max-width: 450px").m-auto
      .py-4.py-md-5(titulo="Jerarquía visual" :icono="require('@/assets/curso/temas/img94.svg')")
        .row.align-items-center
          .col-xl-6.order-1.mb-4.mb-lg-0.p-5
            h4 Jerarquía visual 
            p.mb-0 Diferenciar títulos, subtítulos y párrafos mediante tamaños o estilos permite organizar la información y mejorar la lectura.
          .col-lg-6.mb-4.mb-md-0.order-2
            figure
              img(src='@/assets/curso/temas/img99.png', alt="" style="max-width: 450px").m-auto
      .py-4.py-md-5(titulo="Equilibrio en el diseño" :icono="require('@/assets/curso/temas/img95.svg')")
        .row.align-items-center
          .col-xl-6.order-1.mb-4.mb-lg-0.p-5
            h4 Equilibrio en el diseño 
            p.mb-0 Limitar el uso de tipografías evita confusión y mantiene una estética ordenada y profesional.
          .col-lg-6.mb-4.mb-md-0.order-2
            figure
              img(src='@/assets/curso/temas/img100.png', alt="" style="max-width: 450px").m-auto
      .py-4.py-md-5(titulo="Captación de atención" :icono="require('@/assets/curso/temas/img96.svg')")
        .row.align-items-center
          .col-xl-6.order-1.mb-4.mb-lg-0.p-5
            h4 Captación de atención 
            p.mb-0 Una tipografía adecuada resalta mensajes clave y atrae la atención del público en redes sociales.
          .col-lg-6.mb-4.mb-md-0.order-2
            figure
              img(src='@/assets/curso/temas/img101.png', alt="" style="max-width: 450px").m-auto
    Separador
    #t_3_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 3.3 Diseños
    p.mb-5 Los diseños permiten organizar y presentar la información de forma clara, atractiva y coherente, facilitando la comprensión y captando la atención del público. Dada su importancia, seguidamente se presentan los aspectos más representativos:
    .bg-slider.mb-5
      .px-5
        .ajuste-slider(data-aos="zoom-in")
          SlyderA(tipo="b")
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Diseño en la identidad visual
                p.mb-0 Consiste en combinar elementos como imágenes, tipografía, colores y formas para representar la marca de manera consistente.
              .col-xl-6
                figure
                  img(src='@/assets/curso/temas/img102.png', alt='' style="max-width: 500px").m-auto
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Relevancia en contenido digital
                p.mb-0 En redes sociales, el diseño debe captar la atención rápidamente en un entorno saturado de información.
              .col-xl-6
                figure
                  img(src='@/assets/curso/temas/img103.png', alt='' style="max-width: 500px").m-auto
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Composición y organización
                p.mb-0 Implica estructurar los elementos, equilibrar el diseño, usar adecuadamente el espacio y jerarquizar la información.
              .col-xl-6
                figure
                  img(src='@/assets/curso/temas/img104.png', alt='' style="max-width: 500px").m-auto
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Coherencia visual
                p.mb-0 El uso constante de colores, tipografías y estilos fortalece el reconocimiento de la marca.
              .col-xl-6
                figure
                  img(src='@/assets/curso/temas/img105.png', alt='' style="max-width: 500px").m-auto
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Percepción de la marca
                p.mb-0 Un buen diseño transmite profesionalismo, mientras que uno deficiente puede afectar su imagen.
              .col-xl-6
                figure
                  img(src='@/assets/curso/temas/img106.png', alt='' style="max-width: 500px").m-auto
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Aplicación en formatos digitales
                p.mb-0 Se utiliza en publicaciones, banners, infografías, videos y otros contenidos digitales.
              .col-xl-6
                figure
                  img(src='@/assets/curso/temas/img107.png', alt='' style="max-width: 500px").m-auto
    .caja-tema1-2.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/temas/img29.svg" style="max-width: 60px").m-auto
      .col
        h3 Tipos de diseños gráficos
    p.mb-5 Existen diferentes tipos de diseños gráficos que se utilizan en la comunicación visual de las marca. Los más utilizados son:
    .bg-slider.mb-5
      .px-5
        .ajuste-slider(data-aos="zoom-in")
          SlyderA(tipo="b")
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Diseño para redes sociales
                p.mb-0 Este tipo de diseño se utiliza en publicaciones, historias, banners y contenido visual destinado a plataformas como Instagram, Facebook, TikTok o LinkedIn. Su objetivo es captar la atención de los usuarios y comunicar un mensaje de forma clara y atractiva.
              .col-xl-6
                figure
                  img(src='@/assets/curso/temas/img108.png', alt='' style="max-width: 500px").m-auto
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Diseño publicitario
                p.mb-0 El diseño publicitario se utiliza en campañas promocionales para difundir productos o servicios. Este tipo de diseño suele incluir elementos visuales llamativos, textos breves y llamados a la acción que motivan al público a interactuar con la marca.
              .col-xl-6
                figure
                  img(src='@/assets/curso/temas/img109.png', alt='' style="max-width: 500px").m-auto
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Diseño editorial
                p.mb-0 Este tipo de diseño se utiliza en materiales informativos como revistas digitales, infografías, catálogos o presentaciones. Su objetivo es organizar la información de manera clara y facilitar la lectura del contenido.
              .col-xl-6
                figure
                  img(src='@/assets/curso/temas/img110.png', alt='' style="max-width: 500px").m-auto
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Diseño de identidad visual
                p.mb-0 El diseño de identidad visual se enfoca en la creación de los elementos gráficos que representan a una marca, como el logotipo, los colores corporativos y los estilos visuales utilizados en su comunicación.
              .col-xl-6
                figure
                  img(src='@/assets/curso/temas/img111.png', alt='' style="max-width: 500px").m-auto
    p.mb-5 Cada uno de estos tipos de diseño puede utilizarse dentro de una estrategia de comunicación digital para fortalecer la presencia de una marca en diferentes plataformas.
    .caja-tema1-2.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/temas/img29.svg" style="max-width: 60px").m-auto
      .col
        h3 Principios básicos del diseño gráfico
    p.mb-5 Para crear piezas visuales efectivas, el diseño gráfico debe basarse en ciertos principios que permiten organizar los elementos visuales de manera equilibrada y atractiva. Los principios son:
    .bg-carrusel
      .px-5
        .row.align-items-center.mb-5
          .col-xl-4(data-aos="fade-right")
            figure.d-none.d-xl-block
              img(src='@/assets/curso/temas/img112.png', alt='' style="max-width: 350px").m-auto
          .col-xl-8(data-aos="fade-left")
            SlyderF(columnas="col-lg-6 col-xl-6")
              .tarjeta.color-acento-botones.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/temas/img113.svg' style="max-width: 90px").m-auto
                h4.mb-3.estilo-text Equilibrio
                p.mb-0 El equilibrio se refiere a la distribución visual de los elementos dentro de un diseño. Un diseño equilibrado permite que los elementos se perciban de forma armoniosa.
              .tarjeta.color-acento-botones.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/temas/img114.svg' style="max-width: 90px").m-auto
                h4.mb-3.estilo-text Contraste
                p.mb-0 El contraste consiste en utilizar diferencias visuales entre los elementos, como colores, tamaños o formas, para destacar información importante dentro de un diseño.
              .tarjeta.color-acento-botones.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/temas/img115.svg' style="max-width: 90px").m-auto
                h4.mb-3.estilo-text Jerarquía visual
                p.mb-0 La jerarquía visual permite organizar la información según su nivel de importancia. Los elementos más importantes suelen destacarse mediante tamaños más grandes, colores llamativos o ubicaciones estratégicas dentro del diseño.
              .tarjeta.color-acento-botones.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/temas/img116.svg' style="max-width: 90px").m-auto
                h4.mb-3.estilo-text Alineación
                p.mb-0 La alineación se refiere a la forma en que se organizan los elementos dentro de un diseño. Una correcta alineación permite mantener orden visual y facilita la lectura de la información.
              .tarjeta.color-acento-botones.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/temas/img117.svg' style="max-width: 90px").m-auto
                h4.mb-3.estilo-text Espacio
                p.mb-0 El uso adecuado del espacio ayuda a evitar que los diseños se vean saturados. El espacio entre los elementos permite que el contenido sea más claro y fácil de interpretar.
        p.mb-0 Aplicar estos principios en la creación de contenido digital permite desarrollar piezas visuales más organizadas, atractivas y coherentes con la identidad visual de la marca.
    Separador
    #t_3_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 3.4 Colores corporativos
    p.mb-5 Los colores corporativos representan la identidad visual de una marca y facilitan su reconocimiento. Su uso coherente fortalece la recordación y transmite emociones. Además, permiten organizar la información visual, destacar elementos clave y proyectar una imagen profesional en entornos digitales. A continuación, se presenta la psicología del color y el uso del color en contenido digital.
    .bg-slider.mb-0
      .px-5
        .ajuste-slider(data-aos="zoom-in")
          SlyderA(tipo="b")
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Psicología del color
                p La psicología del color analiza cómo los colores influyen en emociones, percepciones y comportamientos. En diseño y marketing, su uso estratégico permite comunicar mensajes y generar sensaciones específicas en el público. Por ejemplo:
                ul.fa-ul.estilo___ul.mb-0
                  li.mb-0.d-flex
                    span.fa-li
                      i.fas.fa-check-circle
                    | Azul: se relaciona con confianza, seguridad y profesionalismo.
                  li.mb-0.d-flex
                    span.fa-li
                      i.fas.fa-check-circle
                    | Rojo: transmite energía, dinamismo y pasión.
                  li.mb-0.d-flex
                    span.fa-li
                      i.fas.fa-check-circle
                    | Verde: se asocia con naturaleza, salud y equilibrio.
                  li.mb-0.d-flex
                    span.fa-li
                      i.fas.fa-check-circle
                    | Amarillo: comunica optimismo, creatividad y energía.
                  li.mb-0.d-flex
                    span.fa-li
                      i.fas.fa-check-circle
                    | Negro: puede representar elegancia, sofisticación o formalidad.
                  li.mb-0.d-flex
                    span.fa-li
                      i.fas.fa-check-circle
                    | Blanco: suele asociarse con simplicidad, pureza y claridad.
              .col-xl-6
                figure
                  img(src='@/assets/curso/temas/img118.png', alt='' style="max-width: 500px").m-auto
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Uso del color en contenido digital
                p.mb-0 El uso estratégico del color en contenido digital mejora la claridad visual, atrae la atención y facilita la lectura. La aplicación coherente de una paleta corporativa fortalece la identidad de marca y permite reconocer fácilmente sus publicaciones en redes sociales.
              .col-xl-6
                figure
                  img(src='@/assets/curso/temas/img119.png', alt='' style="max-width: 500px").m-auto
    Separador
    #t_3_5.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 3.5 Elementos visuales complementarios
    p.mb-5 Son recursos gráficos que se utilizan para apoyar la comunicación visual de una marca y enriquecer sus piezas de diseño. En esta sección se estudiará el concepto, los íconos, las ilustraciones y las imágenes que se utilizan.
    TabsC.color-acento-contenido.mb-0(data-aos="zoom-in")
      .py-3.py-md-4(titulo="¿Qué es?")
        .row.justify-content-center.align-items-center
          .col-xl-5.order-2.order-lg-1
            figure
              img(src='@/assets/curso/temas/img120.png', alt="" ).m-auto
          .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
            h4.txt--purpura.mb-4 ¿Qué es?
            p.mb-0 Los elementos visuales son recursos gráficos utilizados para apoyar y enriquecer la comunicación de una marca, facilitando la comprensión de los mensajes, mejorando la estética de los contenidos y fortaleciendo su identidad visual en entornos digitales.
      .py-3.py-md-4(titulo="Iconos")
        .row.justify-content-center.align-items-center
          .col-xl-5.order-2.order-lg-1
            figure
              img(src='@/assets/curso/temas/img121.png', alt="" ).m-auto
          .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
            h4.txt--purpura.mb-4 Iconos
            p Los iconos son representaciones gráficas simples que se utilizan para ilustrar conceptos, acciones o ideas de manera visual. Generalmente se caracterizan por su diseño sencillo y por su capacidad de comunicar información de forma rápida y clara.
            p En el diseño de contenido digital, los iconos permiten representar información sin necesidad de utilizar grandes cantidades de texto. Por ejemplo, pueden utilizarse para indicar acciones como descargar, compartir, enviar o reproducir contenido.
            p.mb-0 El uso de iconos también facilita la organización de la información dentro de una pieza gráfica, ya que ayudan a identificar diferentes secciones o categorías de contenido. Cuando se utilizan de forma coherente con la identidad visual de la marca, los iconos contribuyen a mejorar la claridad y la estética del diseño.
      .py-3.py-md-4(titulo="Ilustraciones")
        .row.justify-content-center.align-items-center
          .col-xl-5.order-2.order-lg-1
            figure
              img(src='@/assets/curso/temas/img122.png', alt="" ).m-auto
          .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
            h4.txt--purpura.mb-4 Ilustraciones
            p Las ilustraciones son representaciones gráficas creadas mediante dibujo o diseño digital que se utilizan para complementar o explicar información dentro de una pieza visual. A diferencia de las fotografías, las ilustraciones permiten representar ideas de manera más creativa y conceptual.
            p En la comunicación visual de una marca, las ilustraciones pueden utilizarse para transmitir mensajes de manera más dinámica y atractiva. Este tipo de recurso es especialmente útil en contenidos educativos, infografías o publicaciones que buscan explicar información de forma sencilla.
            p.mb-0 Además, las ilustraciones pueden adaptarse fácilmente al estilo visual de la marca, lo que permite mantener coherencia en los diferentes contenidos digitales que se comparten en redes sociales.
      .py-3.py-md-4(titulo="Imágenes")
        .row.justify-content-center.align-items-center
          .col-xl-5.order-2.order-lg-1
            figure
              img(src='@/assets/curso/temas/img123.png', alt="" ).m-auto
          .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
            h4.txt--purpura.mb-4 Imágenes
            p Las imágenes, especialmente las fotografías, son uno de los recursos visuales más utilizados en la comunicación digital de las marcas. A través de las imágenes, las organizaciones pueden mostrar productos, servicios, situaciones o experiencias relacionadas con su actividad.
            p Las imágenes permiten transmitir información de forma rápida y generar una conexión visual con el público. En redes sociales, el uso de fotografías de buena calidad puede captar la atención de los usuarios y aumentar el interés por el contenido publicado.
            p.mb-0 Para que las imágenes cumplan adecuadamente su función dentro de la comunicación visual de la marca, es importante que mantengan coherencia con la identidad visual de la organización. Esto implica cuidar aspectos como el estilo visual, la iluminación, los colores y la composición de las fotografías.
    Separador
    #t_3_6.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 3.6 Manual de identidad visual
    p.mb-5 El manual de identidad visual es un documento que define normas para el uso correcto de los elementos gráficos de una marca, garantizando coherencia en todos los medios. Además, facilita el trabajo de los equipos y fortalece el reconocimiento y la imagen de la organización. En este apartado se conocerán los elementos que debe incluir.
    .row.align-items-center.mb-5
      .col-xl-4(data-aos="fade-right")
        figure.d-none.d-xl-block
          img(src='@/assets/curso/temas/img124.png', alt='' style="max-width: 350px").m-auto
      .col-xl-8(data-aos="fade-left")
        SlyderF(columnas="col-lg-6 col-xl-6")
          .tarjeta.color-acento-botones.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/temas/img125.svg' style="max-width: 90px").m-auto
            h4.mb-3.estilo-text Uso del logotipo
            p.mb-0 El manual establece la forma correcta de utilizar el logotipo de la marca. Esto incluye aspectos como el tamaño mínimo permitido, las versiones del logotipo (color, blanco y negro, monocromático) y las normas para su ubicación dentro de diferentes piezas gráficas.
          .tarjeta.color-acento-botones.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/temas/img126.svg' style="max-width: 90px").m-auto
            h4.mb-3.estilo-text Colores corporativos
            p.mb-0 En esta sección se especifican los colores oficiales de la marca y sus códigos correspondientes (RGB, CMYK o HEX). Esto permite que los colores se reproduzcan de manera consistente en los diferentes medios de comunicación.
          .tarjeta.color-acento-botones.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/temas/img127.svg' style="max-width: 90px").m-auto
            h4.mb-3.estilo-text Tipografía corporativa
            p.mb-0 El manual también define las tipografías que deben utilizarse en la comunicación de la marca. Estas tipografías pueden aplicarse en títulos, subtítulos, textos informativos o piezas gráficas utilizadas en redes sociales y otros canales digitales.
          .tarjeta.color-acento-botones.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/temas/img128.svg' style="max-width: 90px").m-auto
            h4.mb-3.estilo-text Estilo visual de imágenes
            p.mb-0 Muchas marcas establecen lineamientos sobre el estilo visual que deben tener las fotografías, ilustraciones o gráficos utilizados en su comunicación. Esto permite mantener coherencia en el tipo de imágenes que se utilizan en redes sociales y campañas publicitarias.
          .tarjeta.color-acento-botones.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/temas/img129.svg' style="max-width: 90px").m-auto
            h4.mb-3.estilo-text Usos incorrectos de la marca
            p.mb-0 El manual también incluye ejemplos de aplicaciones incorrectas del logotipo o de los elementos visuales de la marca. Esto ayuda a evitar errores en el uso de la identidad visual y garantiza que la imagen de la organización se mantenga consistente.
    p.mb-0 En el entorno digital, el manual de identidad visual es clave para gestionar la marca, ya que garantiza coherencia en los elementos gráficos. Su correcta aplicación permite mantener una línea visual uniforme, facilitar el reconocimiento y proyectar una imagen profesional.
    Separador
    #t_3_7.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 3.7 Importancia de la coherencia en los elementos gráficos
    .bg-1
      .px-5 
        p.mb-5 A continuación, se detalla la importancia de la coherencia en los elementos gráficos:
        .row.justify-content-center.mb-0
          .col-xl-4.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
            .caja-tema3-1.h-100
              .row.justify-content-center.mb-3
                .col-7
                  figure.mb-4(data-aos="fade-right")
                    img(src='@/assets/curso/temas/img130.svg', alt="" style="max-width: 90px").m-auto
                h4.text-center Importancia en el entorno digital
                p.mb-0.text-center El manual de identidad visual garantiza coherencia en los elementos gráficos, fortaleciendo el reconocimiento de la marca y proyectando una imagen profesional.
          .col-xl-4.col-md-9(data-aos="zoom-in")
            .caja-tema3-1.h-100
              .row.justify-content-center.mb-3
                .col-7
                  figure.mb-4(data-aos="fade-right")
                    img(src='@/assets/curso/temas/img131.svg', alt="" style="max-width: 90px").m-auto
                h4.text-center Aplicación en contenidos
                p.mb-0.text-center Seguir sus lineamientos permite mantener una línea visual uniforme, facilitando la identificación de la marca por parte de los usuarios.
        Separador
        #t_3_8.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 3.8 Criterios para el uso adecuado de los elementos gráficos
    .bg-1
      .px-5 
        p.mb-5 En la siguiente tabla se presentan los criterios para el uso correcto de los elementos gráficos.
        .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
          h5 Tabla 2.
          span Criterios para el uso adecuado de los elementos gráficos
        .tabla-a(data-aos="zoom-in").mb-5
          table
            thead
              tr
                th.ajuste-border-tabla.texto-left Elemento
                th.ajuste-border-tabla.texto-left Recomendación
                th.texto-left Error común
            tbody
              tr
                td.ajuste-border-tabla.texto-left Logotipo
                td.ajuste-border-tabla.texto-left Usar siempre la versión oficial
                td.texto-left Cambiar colores o proporciones
              tr.ajuste-color-tabla
                td.ajuste-border-tabla.texto-left Tipografía
                td.ajuste-border-tabla.texto-left Mantener máximo dos tipos de letra
                td.texto-left Usar demasiadas tipografías
              tr
                td.ajuste-border-tabla.texto-left Colores corporativos
                td.ajuste-border-tabla.texto-left Mantener coherencia en diseños
                td.texto-left Usar colores que no pertenecen a la marca
              tr.ajuste-color-tabla
                td.ajuste-border-tabla.texto-left Imágenes
                td.ajuste-border-tabla.texto-left Utilizar imágenes de buena calidad
                td.texto-left Usar imágenes pixeladas
        p.mb-0 Estos criterios permiten mantener una identidad visual clara y consistente.
        Separador
        #t_3_9.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 3.9 Aplicación práctica
    p.mb-5 En el siguiente ejercicio, se aplicarán los conocimientos adquiridos sobre el presente capítulo.
    TabsC.color-acento-contenido.mb-0(data-aos="zoom-in")
      .py-3.py-md-4(titulo="Ejercicio práctico")
        .row.justify-content-center.align-items-center
          .col-xl-5.order-2.order-lg-1
            figure
              img(src='@/assets/curso/temas/img132.png', alt="" ).m-auto
          .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
            h4.txt--purpura.mb-4 Ejercicio práctico
            p Observe las publicaciones de una marca en redes sociales e identifique:
            ul.fa-ul.estilo___ul.mb-3
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | El logotipo utilizado.
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Los colores corporativos presentes en las publicaciones.
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | El tipo de tipografía utilizada.
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | La coherencia visual entre diferentes publicaciones.
            p.mb-0 Este ejercicio permite analizar cómo los elementos gráficos se aplican en la comunicación digital de una marca.
      .py-3.py-md-4(titulo="Ejemplo")
        .row.justify-content-center.align-items-center
          .col-xl-5.order-2.order-lg-1
            figure
              img(src='@/assets/curso/temas/img133.png', alt="" ).m-auto
          .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
            h4.txt--purpura.mb-4 Ejemplo
            p Marca: Apple
            ul.fa-ul.estilo___ul.mb-3
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Logotipo: isotipo (manzana mordida).
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Colores corporativos: tonos neutros como blanco, negro y gris.
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Tipografía: #[i sans serif] moderna.
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Estilo visual: minimalista y limpio.
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Uso de imágenes: fotografías de productos con fondos simples.
            p.mb-0 Este tipo de análisis permite comprender cómo las marcas aplican sus elementos gráficos dentro de su estrategia de comunicación digital.
            
</template>

<script>
export default {
  name: 'Tema3',
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
