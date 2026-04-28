export default {
  global: {
    Name: 'Identidad visual y marca en redes',
    Description:
      'Este componente formativo desarrolla los fundamentos de la identidad visual de una marca y su aplicación en entornos digitales. Aborda los elementos gráficos que la conforman, la definición del público objetivo, la estructuración del portafolio de productos o servicios y resalta la importancia de mantener una coherencia visual para lograr una comunicación efectiva en redes sociales.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.png'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.png'),
      },
      {
        clases: ['banner-principal-decorativo-4'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-4.png'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Concepto de marca',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Importancia de la marca en el entorno digital',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Funciones de la marca',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'La marca en el <em>marketing</em> digital',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Elementos que componen una marca',
            hash: 't_1_4',
          },
          {
            numero: '1.5',
            titulo: 'Ejemplos de marcas y su identidad',
            hash: 't_1_5',
          },
          {
            numero: '1.6',
            titulo: 'Funcionamiento de la marca en la estrategia digital',
            hash: 't_1_6',
          },
          {
            numero: '1.7',
            titulo: 'Criterios para evaluar la construcción de una marca',
            hash: 't_1_7',
          },
          {
            numero: '1.8',
            titulo: 'Aplicación práctica: análisis de una marca digital',
            hash: 't_1_8',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Identidad visual de la marca',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo:
              'Aplicación práctica: construcción básica de la identidad visual',
            hash: 't_2_1',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Elementos gráficos de la marca	',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Logotipo',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Tipografía',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Diseños',
            hash: 't_3_3',
          },
          {
            numero: '3.4',
            titulo: 'Colores corporativos',
            hash: 't_3_4',
          },
          {
            numero: '3.5',
            titulo: 'Elementos visuales complementarios',
            hash: 't_3_5',
          },
          {
            numero: '3.6',
            titulo: 'Manual de identidad visual',
            hash: 't_3_6',
          },
          {
            numero: '3.7',
            titulo: 'Importancia de la coherencia en los elementos gráficos',
            hash: 't_3_7',
          },
          {
            numero: '3.8',
            titulo: 'Criterios para el uso adecuado de los elementos gráficos',
            hash: 't_3_8',
          },
          {
            numero: '3.9',
            titulo: 'Aplicación práctica',
            hash: 't_3_9',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Público objetivo	',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Aplicación práctica',
            hash: 't_4_1',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Portafolio de productos o servicios',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo: 'Criterios para organizar un portafolio',
            hash: 't_5_1',
          },
          {
            numero: '5.2',
            titulo: 'Aplicación práctica: análisis de un portafolio',
            hash: 't_5_2',
          },
        ],
      },
      {
        nombreRuta: 'tema6',
        numero: '6',
        titulo: 'Canales digitales para la comunicación de marca',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '6.1',
            titulo: 'Criterios para seleccionar canales digitales',
            hash: 't_6_1',
          },
          {
            numero: '6.2',
            titulo: 'Aplicación práctica: selección de canales digitales',
            hash: 't_6_2',
          },
        ],
      },
      {
        nombreRuta: 'tema7',
        numero: '7',
        titulo: 'Importancia de la identidad visual en redes sociales',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '7.1',
            titulo:
              'Criterios para mantener coherencia visual en redes sociales',
            hash: 't_7_1',
          },
          {
            numero: '7.2',
            titulo:
              'Aplicación práctica: análisis de identidad visual en redes sociales',
            hash: 't_7_2',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: '',
      referencia: '',
      tipo: 'Sitio web',
      link: '',
    },
  ],
  glosario: [
    {
      termino: 'Término',
      significado: 'Definición',
    },
  ],
  referencias: [
    {
      referencia: '',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Nombre completo',
          cargo: 'Responsable del ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Nombre completo',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Nombre del rol',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Diseñador de contenidos',
          centro: 'Centro XYZ - Regional XYZ',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Desarrollador <i>full stack</i>',
          centro: 'Centro XYZ - Regional XYZ',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro XYZ - Regional XYZ',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
