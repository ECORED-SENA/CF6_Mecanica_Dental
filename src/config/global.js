export default {
  global: {
    componenteFormativo: 'Análisis de la prótesis total',
    descripcionCurso:
      'En la elaboración de prótesis total  es importante  conocer la normatividad que las regula,  los materiales para su fabricación y el uso de las buenas prácticas en la confección de los dispositivos, para poder realizar  su fabricación, garantizando así el cumplimiento de la solicitud  y las necesidades del mercado.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
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
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Normativa nacional para laboratorios de mecánica dental',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Lineamientos para su funcionamiento',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Equipamiento',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Talento humano',
            hash: 't_1_3',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Prótesis',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Principios de la prótesis total',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Evolución de la prótesis total',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Función de la prótesis total',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Tipos de prótesis',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Total y parcialmente edéntulos',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Implantomucosoportadas',
            hash: 't_3_2',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Biomateriales',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '4.1',
            titulo: 'Polímeros',
            hash: 't_4_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.2',
            titulo: 'Manipulación',
            hash: 't_4_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.3',
            titulo: 'Propiedades físicas',
            hash: 't_4_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.4',
            titulo: 'Propiedades químicas',
            hash: 't_4_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.5',
            titulo: 'Propiedades mecánicas',
            hash: 't_4_5',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        icono: 'far fa-file-alt',
        numero: '5',
        titulo: 'Prescripción clínica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema6',
        icono: 'far fa-file-alt',
        numero: '6',
        titulo: 'Elementos de protección personal',
        desarrolloContenidos: true,
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
      tema: 'Normativa nacional para laboratorios de mecánica dental',
      referencia:
        'Resolución 214 de 2022. [Ministerio Salud y Protección Social]. Por la cual se establecen los requisitos sanitarios que deben cumplir los dispositivos médicos sobre medida bucal y los establecimientos que los fabrican, reparan, dispensan y adaptan, y se adoptan las guías de verificación. Febrero 15 de 2022.',
      tipo: 'Capítulos III y IV',
      link:
        'https://www.minsalud.gov.co/Normatividad_Nuevo/Resoluci%C3%B3n%20No.%20214%20de%202022.pdf',
    },
    {
      tema: 'Elementos de protección personal',
      referencia:
        'Navas , E. (2018). Prevención de riesgos laborales, sector sanitario: riesgos específicos del trabajo de protésicos dentales (2a. ed.). Editorial ICB.',
      tipo: 'Módulo 6',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/lc/senavirtual/titulos/111411',
    },
  ],
  glosario: [
    {
      termino: 'Articuladores',
      significado:
        'Instrumentos que simulan la relación existente entre los dientes maxilares y los mandibulares y, permiten reproducir las posiciones y movimientos mandibulares fuera de la boca y sobre la mesa de trabajo.',
    },
    {
      termino: 'ATM',
      significado: 'Articulación temporomandibular.',
    },
    {
      termino: 'Base',
      significado:
        'Parte de la prótesis que contiene los dientes artificiales y que encaja sobre la encía.',
    },
    {
      termino: 'Estructura mecanizada presinterizada',
      significado:
        'Estructura fresada de zirconita no completamente endurecida de la manera indicada.',
    },
    {
      termino: 'Estructura mecanizada sinterizada',
      significado:
        'Estructura fresada que ya presenta la dureza y las características recomendadas.',
    },
    {
      termino: 'Oclusión',
      significado: 'Contacto entre los dientes superiores e inferiores.',
    },
    {
      termino: 'Polímero',
      significado:
        'Es un compuesto químico cuyas moléculas están formadas por cadenas en las que se repite una unidad básica. Esta unidad que se repite se denomina monómero.',
    },
    {
      termino: 'Pulido',
      significado:
        'Procedimiento superficial que consiste en un desgaste por frotación o abrasión para conseguir una prótesis totalmente lisa.',
    },
    {
      termino: 'Rebase',
      significado:
        'Método de reajuste de la prótesis que consiste en reemplazar parte del material de la base, consiguiendo el ajuste sin modificar la posición de los dientes.',
    },
    {
      termino: 'Resina',
      significado:
        'Es un material de reposición del color del diente que se usa para sustituir una sección de la composición del diente.',
    },
    {
      termino: 'Restauración',
      significado:
        'Procedimiento que consiste en reemplazar por medios artificiales los dientes o parte de ellos.',
    },
    {
      termino: 'Termopolimerizable',
      significado:
        'Es uno de los materiales cuyo uso se encuentra más difundido en la actual práctica odontológica, con este se fabrican, usualmente, tanto dientes provisionales como bases para dentaduras parciales o totales.',
    },
  ],
  referencias: [
    {
      referencia:
        'Castillo, R. (2009). Principios biomecánicos en el diseño de prótesis completas. Gaceta Dental.',
      link:
        'https://gacetadental.com/2009/03/principios-biomecnicos-en-el-diseo-de-prtesis-completas-31370/',
    },
    {
      referencia:
        'García, V. (2017). La enseñanza bimodal en la asignatura "Dentaduras parciales removibles" y su incidencia en el rendimiento estudiantil. Universidad Central de Venezuela.',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/lc/senavirtual/titulos/112051',
    },
    {
      referencia:
        'Matiz, J. (2014). Temas de rehabilitación oral: acrílicos dentales. 1. Clínica-laboratorio. ECOE Ediciones.',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/lc/senavirtual/titulos/122433',
    },
    {
      referencia:
        'Navas, E. (2018). Prevención de riesgos laborales, sector sanitario: riesgos específicos del trabajo de protésicos dentales. (2ª. ed.). Editorial ICB.',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/lc/senavirtual/titulos/111411',
    },
    {
      referencia:
        'Phillips, J. (2009). Ciencia de los materiales dentales. (11ª. ed). Interamericana.',
      link: '',
    },
    {
      referencia:
        'Esponda Vila, R. (2019). Anatomía dental. Universidad Nacional Autónoma de México (UNAM).',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/lc/senavirtual/titulos/187393',
    },
    {
      referencia:
        'Toledano, M. (2009). Arte y ciencia de los materiales odontológicos. Lexus.',
      link: '',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Responsable equipo desarrollo curricular',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Daniel L. Toro A.',
        cargo: 'Experto temático',
        centro: 'Centro de Servicios de Salud - Regional Antioquia',
      },
      {
        nombre: 'Paola Alexandra Moya Peralta',
        cargo: 'Diseñadora instruccional',
        centro:
          'Centro de la Industria, la Empresa y los Servicios - Regional Norte de Santander',
      },
      {
        nombre: 'Alix Cecilia Chinchilla Rueda',
        cargo: 'Asesora metodológica',
        centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
      },
      {
        nombre: 'Julia Isabel Roberto',
        cargo: 'Correctora de estilo',
        centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Eulises Orduz',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Marcia Elizabeth Solano Alvarez',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Zuleidy María Ruíz Torres',
        cargo: 'Revisión de guión audiovisual',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Maria Camila Ovalle Ospina',
        cargo: 'Validación de contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
