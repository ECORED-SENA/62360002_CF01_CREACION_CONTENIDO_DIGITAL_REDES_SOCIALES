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
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/62360002_CF1_DU.pdf',
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
      termino: 'Colores corporativos',
      significado:
        'Los colores corporativos, también conocidos como colores de marca o colores institucionales, son los colores que utiliza comúnmente una empresa; por ejemplo, en su logotipo, tipografía, productos, envases, páginas web, materiales o medios publicitarios, e infraestructura.',
    },
    {
      termino: 'Contenido digital',
      significado:
        'El contenido digital abarca todo lo que se crea y comparte en línea para conectar con una audiencia. Incluye publicaciones de blog, videos, actualizaciones en redes sociales y podcasts, consumidos en dispositivos digitales. Es la base del marketing digital, ya que permite a las empresas llegar e interactuar con sus clientes.',
    },
    {
      termino: 'Imagotipo',
      significado:
        'Es un tipo de logo que combina texto y símbolo de forma diferenciada. Ambos elementos pueden funcionar por separado sin perder reconocimiento, lo que brinda flexibilidad en su uso.',
    },
    {
      termino: 'Isologo',
      significado:
        'Es una representación gráfica en la que texto y símbolo están completamente integrados en un único elemento indivisible. No pueden separarse, ya que ambos son esenciales para transmitir la identidad de la marca.',
    },
    {
      termino: 'Isotipo',
      significado:
        'Es la parte simbólica o icónica de una marca que no incluye texto. Se reconoce por sí sola y debe transmitir la identidad de la marca sin necesidad de palabras.',
    },
    {
      termino: 'Logotipo',
      significado:
        'Se refiere exclusivamente a una representación gráfica basada en palabras. Consiste únicamente en tipografía, sin incluir símbolos ni iconos.',
    },
    {
      termino: 'Marca',
      significado:
        'Es la combinación de atributos tangibles e intangibles que generan una percepción sobre un producto, servicio u organización. Es uno de los activos más importantes de una empresa a lo largo del tiempo.',
    },
  ],
  referencias: [
    {
      referencia:
        'Cordova, R. (2021, junio 2). Las 8 funciones de una marca. Merca2.0.',
      link: 'https://www.merca20.com/las-8-funciones-de-una-marca/',
    },
    {
      referencia:
        'CN, R. (2023, abril 6). Colores corporativos: definición y significado psicológico. Crece Negocios.',
      link: 'https://crecenegocios.com/colores-corporativos/',
    },
    {
      referencia:
        'Diaz, M. (2017, junio 26). Cómo usar estratégicamente el color en la identidad corporativa. Fuego Yámana.',
      link:
        'https://www.fuegoyamana.com/usar-el-color-en-la-identidad-corporativa/',
    },
    {
      referencia:
        'García, M. (2024, octubre 23). Tipos de logos y diferencias: logotipo, isotipo, imagotipo e isologo. Brandemia.',
      link:
        'https://brandemia.org/hablemos-con-propiedad-logotipo-isotipo-imagotipo-isologo-imagen-corporativa-identidad',
    },
    {
      referencia:
        'Hygraph. (2025, diciembre 3). Qué es el contenido digital y cómo crearlo eficazmente. Hygraph.',
      link: 'https://hygraph.com/blog/digital-content',
    },
    {
      referencia:
        'Puente, O. (2024). ¿Qué es la identidad de marca? Oliver Puente.',
      link: 'https://oliverpuente.com/branding/que-es-la-identidad-de-marca/',
    },
    {
      referencia:
        'Rodríguez, M. (2023, mayo 10). Maquetación editorial: un elemento clave en la identidad visual. Tectinnova.',
      link:
        'https://textinnova.com/maquetacion-editorial-un-elemento-clave-en-la-identidad-visual/',
    },
    {
      referencia:
        'Símbolo. (s. f.). Diseño de marca: creamos conceptos ganadores y que venden. Símbolo Agencia Digital.',
      link: 'https://www.simbolointeractivo.com/diseno-de-marca/',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo: 'Responsable del ecosistema',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Olga Constanza Bermúdez Jaimes',
          cargo: 'Responsable de línea de producción',
          centro: 'Dirección General',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Joinner Enrique Osorio Martínez',
          cargo: 'Experto temático',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Paola Alexandra Moya',
          cargo: 'Experto temático',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Fredy Fabian Ortíz Segura',
          cargo: 'Diseñador de contenidos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Cielo Damaris Angulo Rodriguez',
          cargo: 'Desarrollador <i>full stack</i>',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Alejandro Delgado Acosta',
          cargo: 'Intérprete lenguaje de señas',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Cristhian Giovanni Gordillo Segura',
          cargo: 'Intérprete lenguaje de señas',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Juan Pablo Rojas Polania',
          cargo: 'Animador y productor audiovisual',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Jose Eduardo Solano Rivero',
          cargo: 'Animador y productor audiovisual',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Carlos Eduardo Garavito Parada',
          cargo: 'Animador y productor audiovisual',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Maria Carolina Tamayo Lopez',
          cargo: 'Locución',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'German Acosta Ramos',
          cargo: 'Locución',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Aixa Natalia Sendoya Fernández',
          cargo: 'Validador de recursos educativos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Ricardo Oliveros Zambrano',
          cargo: 'Validador de recursos educativos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Anyerson Wilfredo Pizo Ossa',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
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
