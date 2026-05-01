<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
  
      #Actividad                
        <Actividad :cuestionario="cuestionario"/>
  
  </template>

<script>
import Actividad from 'ecored-pkg-fliz/plugin/components/actividad/Actividad.vue'
export default {
  name: 'ActividadDidactica',
  components: {
    Actividad,
  },
  data: () => ({
    cuestionario: {
      tema:
        'Usted observa una marca en redes sociales, ¿qué elemento permite identificarla visualmente de forma inmediata?',
      titulo: 'Cuestionario',
      introduccion:
        '<b> Objetivo:</b> Reconocer los elementos de la identidad visual de una marca y su función en la comunicación digital.',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO.',
      preguntas: [
        {
          id: 1,
          texto:
            'Usted observa una marca en redes sociales, ¿qué elemento permite identificarla visualmente de forma inmediata?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Precio',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Logotipo',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Promoción',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Ubicación',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 2,
          texto:
            'Usted analiza una publicación, ¿qué elemento define el estilo del texto utilizado?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Tipografía',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Imagen',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Color',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Producto',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto: '¿Cuál es la función principal de los colores en una marca?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Reducir costos',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Cambiar el producto',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Aumentar ventas directamente',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Transmitir emociones y sensaciones',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto:
            'Usted observa varias publicaciones, ¿qué elemento mantiene coherencia visual en una marca?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Precio',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Estilo visual',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Promoción',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Producto',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto: '¿Cuál de los siguientes es un elemento de identidad visual?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Cliente',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Colores corporativos',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Precio',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Ubicación',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 6,
          texto:
            'Usted analiza una marca, ¿qué elemento representa gráficamente a la empresa?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Slogan',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Precio',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Logotipo',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Cliente',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 7,
          texto: '¿Qué elemento define la apariencia general de una marca?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Producto',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Estilo visual',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Precio',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Promoción',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 8,
          texto: '¿Por qué es importante la identidad visual en una marca?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Reduce costos',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Cambia el producto',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Permite diferenciarse de otras marcas',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Aumenta precios',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 9,
          texto:
            'Usted observa una marca con colores definidos, ¿qué función cumplen estos?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Generar reconocimiento',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Decorar',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Reducir ventas',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Cambiar el producto',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 10,
          texto:
            '¿Qué sucede si una marca cambia constantemente sus elementos visuales?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Mejora su imagen',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Aumenta ventas',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Reduce costos',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Genera confusión',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 11,
          texto:
            '¿Cuál elemento permite mantener coherencia en todas las publicaciones?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Tipografía',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Precio',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Ubicación',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Producto',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 12,
          texto:
            'Usted diseña una publicación, ¿qué elemento debe mantener consistencia con la marca?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Precio',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Colores',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Cliente',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Ubicación',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 13,
          texto: '¿Cuál es el propósito del logotipo?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Vender productos',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Reducir costos',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Representar la marca',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Aumentar clientes',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 14,
          texto:
            '¿Qué elemento visual ayuda a comunicar el estilo de una marca?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Tipografía',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Cliente',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Precio',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Ubicación',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 15,
          texto:
            '¿Qué elemento visual ayuda a comunicar el estilo de una marca?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Identidad visual',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Promoción',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Precio',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Producto',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 16,
          texto: '¿Qué elemento hace parte del diseño gráfico de una marca?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Precio',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Ubicación',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Imagen',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Cliente',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 17,
          texto: '¿Qué ocurre cuando una marca tiene coherencia visual?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Mejora su rendimiento',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Reduce ventas',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Cambia producto',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Genera confusión',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 18,
          texto:
            'Usted observa una publicación bien diseñada, ¿qué elemento influye más en su apariencia?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Precio',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Diseño visual',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Cliente',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Producto',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 19,
          texto: '¿Cuál elemento ayuda a transmitir personalidad de marca?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Colores',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Precio',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Producto',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Ubicación',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 20,
          texto: '¿Qué elemento define la apariencia general de una marca?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Cliente',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Promoción',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Estilo visual',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Precio',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
      ],
      mensaje_final_aprobado: '¡Excelente! Ha superado la actividad.',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
