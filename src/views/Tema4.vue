<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 4
      h1 Público objetivo	
    p.mb-5 En este capítulo se estudiará el concepto, la segmentación, la identificación de productos o servicios, la importancia del público objetivo en la comunicación digital y los criterios para identificarlo.
    .row.align-items-center.mb-5
      .col-xl-auto(data-aos="fade-right")
        figure.d-none.d-xl-block
          img(src="@/assets/curso/temas/img134.png", alt="" ).m-auto
      .col-xl
        AcordionA(tipo="a" clase-tarjeta="tarjeta acordeonA")(data-aos="fade-left")
          .row(titulo="Concepto de público objetivo").ajuste-cajaAcordion
            p.mb-3 El público objetivo es el grupo de personas al que una organización dirige sus productos o mensajes, definido por características como edad, ubicación e intereses. Conocerlo permite segmentar el mercado y crear contenidos más efectivos, aumentando la interacción y participación en entornos digitales.
          .row(titulo="Segmentación del público").ajuste-cajaAcordion
            p.mb-3 La segmentación del público divide el mercado en grupos con características similares para mejorar las estrategias. Puede ser demográfica (edad, género), geográfica (ubicación), psicográfica (intereses y estilo de vida) y conductual (hábitos de consumo e interacción con la marca).
          .row(titulo="Identificación de productos o servicios").ajuste-cajaAcordion
            p.mb-3 La identificación de productos o servicios es clave para comunicar la marca, ya que permite alinearlos con las necesidades del público. En entornos digitales, deben presentarse de forma clara y atractiva, facilitando la organización del contenido y la definición de estrategias de publicación.
    .row.align-items-center.mb-0
      .col-xl
        AcordionA(tipo="a" clase-tarjeta="tarjeta acordeonA")(data-aos="fade-right")
          .row(titulo="Importancia del público objetivo en la comunicación digital").ajuste-cajaAcordion
            p.mb-3 Definir el público objetivo permite orientar la comunicación de forma más efectiva. Conocer sus características e intereses facilita crear contenidos relevantes, elegir los canales adecuados y definir el estilo de comunicación en redes sociales.
          .row(titulo="Criterios para identificar el público objetivo").ajuste-cajaAcordion
            ul.fa-ul.mb-0
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | #[b Edad]: permite adaptar el lenguaje y el tipo de contenido. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | #[b Ubicación]: ayuda a segmentar la comunicación según la región. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | #[b Intereses]: permite crear contenido acorde a las preferencias del público. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | #[b Comportamiento digital]: permite identificar en qué redes sociales interactúan más los usuarios.
      .col-xl-auto(data-aos="fade-left")
        figure.d-none.d-xl-block
          img(src="@/assets/curso/temas/img135.png", alt="" ).m-auto
    Separador
    #t_4_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 4.1 Aplicación práctica
    p.mb-5 En el siguiente ejercicio, se aplicarán los conocimientos adquiridos sobre el presente capítulo.
    TabsC.color-acento-contenido.mb-0(data-aos="zoom-in")
      .py-3.py-md-4(titulo="Ejercicio práctico")
        .row.justify-content-center.align-items-center
          .col-xl-5.order-2.order-lg-1
            figure
              img(src='@/assets/curso/temas/img136.png', alt="" ).m-auto
          .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
            h4.txt--purpura.mb-4 Ejercicio práctico
            p Seleccione una marca que tenga presencia en redes sociales e identifique:
            p.mb-0 ¿Quién es su público objetivo?
            p.mb-0 ¿Qué tipo de contenido publica?
            p ¿Qué red social utiliza con mayor frecuencia?
            p.mb-0 Este análisis permite comprender cómo las marcas adaptan su comunicación a las características de su audiencia.
      .py-3.py-md-4(titulo="Ejemplo")
        .row.justify-content-center.align-items-center
          .col-xl-5.order-2.order-lg-1
            figure
              img(src='@/assets/curso/temas/img137.png', alt="" ).m-auto
          .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
            h4.txt--purpura.mb-4 Ejemplo
            p Marca: Tienda de ropa deportiva.
            ul.fa-ul.estilo___ul.mb-3
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Público objetivo: jóvenes entre 18 y 30 años.
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Ubicación: ciudades principales.
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Intereses: deporte, actividad física, vida saludable.
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Redes sociales principales: Instagram y TikTok.
</template>

<script>
export default {
  name: 'Tema4',
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
