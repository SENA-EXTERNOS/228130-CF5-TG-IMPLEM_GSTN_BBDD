export default {
  global: {
    componenteFormativo: 'Bodegas de datos',
    descripcionCurso:
      'Actualmente, todas las organizaciones generan datos. Los sistemas informáticos crecen continuamente y la disponibilidad 24/7 de la información es clave en la toma de decisiones. Una información dinámica, oportuna y accesible agiliza procesos y produce valor agregado y elecciones acertadas. Así, construir una bodega de datos para su gestión veloz, voluminosa y variada brindará productividad y mejores beneficios al negocio.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/portada/banner-bg.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
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
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Introducción a la bodega de datos',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Definición',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Elementos de una bodega de datos',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Implementación de bodega de datos',
            hash: 't_1_3',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Diseño de bodega de datos',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Sistema operativo y red',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'OLAP',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Característica y entorno técnico del negocio',
            hash: 't_2_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.4',
            titulo: 'Requerimientos del usuario',
            hash: 't_2_4',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Arquitectura de una bodega de datos',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Arquitectura de una capa',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Arquitectura de dos capas',
            hash: 't_3_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.3',
            titulo: 'Arquitectura de tres capas',
            hash: 't_3_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.4',
            titulo: '<i>Data marts</i>',
            hash: 't_3_4',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Implementación de una bodega de datos',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '4.1',
            titulo: 'Interfases',
            hash: 't_4_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.2',
            titulo: 'Usuarios',
            hash: 't_4_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.3',
            titulo: 'Fuentes de datos',
            hash: 't_4_3',
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
      tema: '<i>Data warehouse</i>',
      referencia:
        'Conesa, J. y Curto, J. (2015). ¿Cómo crear un data warehouse? Editorial UOC.',
      tipo: 'Libro',
      link: 'https://www.editorialuoc.cat/como-crear-un-data-warehouse ',
    },
    {
      tema: 'Implementación de una bodega de datos',
      referencia:
        'Conexión ESAN. (2020, 1 de julio). Data warehouse: pasos para construirlo con éxito. ESAN Business.',
      tipo: 'Página web',
      link:
        'https://www.esan.edu.pe/conexion-esan/data-warehouse-pasos-para-construirlo-con-exito',
    },
    {
      tema: 'Ingeniería de <i>software</i>',
      referencia:
        'Echeverri, J., Aristizábal, M., González, L., Urrego, G., Polo, R., et al. (2013). Reflexiones sobre ingeniería de requisitos y pruebas de software. (2013). Corporación Universitaria Remington; Organización LACREST.',
      tipo: 'Libro',
      link:
        'https://www.uniremington.edu.co/wp-content/uploads/2019/01/LACREST-2013-uniremington.pdf ',
    },
    {
      tema: 'Ciencia de datos',
      referencia:
        'García, J., Berlanga, A., Molina, J. M., Patricio M. A., Bustamante A. L. y Padilla, W. R., (2018). Ciencia de datos. Técnicas analíticas y aprendizaje estadístico. Altaria.',
      tipo: 'Libro',
      link: 'https://dialnet.unirioja.es/servlet/libro?codigo=763464 ',
    },
    {
      tema: 'Estructura secuencial',
      referencia: 'GSL Industrias. (2021, 7 de junio). Estructura secuencial.',
      tipo: 'Página web',
      link:
        'https://industriasgsl.com/blogs/automatizacion/que-es-la-estructura-secuencial ',
    },
    {
      tema: 'Programación',
      referencia:
        'Lewis, R. M. (2017). Tutorial fácil de seguir para aprender la programación de Python en menos de una semana.',
      tipo: 'Libro digital',
      link: 'https://bit.ly/3glAJ4w ',
    },
    {
      tema: '<i>Data warehouse</i>',
      referencia:
        'Luna, E. y García, F. (2000). El repositorio de metadatos en un data warehouse. Revista Facultad de Ingeniería, (8), 10-15.',
      tipo: 'Revista',
      link: 'https://www.redalyc.org/pdf/114/11400802.pdf ',
    },
    {
      tema: 'Bases de datos relacionales',
      referencia:
        'Martínez, F. J. y Gallegos, A. (2017). Programación de bases de datos relacionales. DELAU.',
      tipo: 'Libro',
      link: 'https://librerianacional.com/producto/350241 ',
    },
    {
      tema: '<i>Software</i>',
      referencia:
        'Medina, J., Pineda, E. y Téllez, F. R. (2019). Requerimientos de software: prototipado, software heredado y análisis de documentos. Ingeniería y Desarrollo, 37(2), 327-345. ',
      tipo: 'Revista',
      link:
        'https://rcientificas.uninorte.edu.co/index.php/ingenieria/article/view/11452/214421444623 ',
    },
    {
      tema: 'Elementos de una bodega de datos',
      referencia: 'SAP. (s. f.). ¿Qué es un almacén de datos?',
      tipo: 'Página web',
      link:
        'https://www.sap.com/latinamerica/insights/what-is-a-data-warehouse.html ',
    },
    {
      tema: 'Sistema de bases de datos',
      referencia:
        'Silberschatz, A., Korth, H. F. y Sudarshan, S. (2019). Database System Concepts (7.a ed.). McGraw-Hill.',
      tipo: 'Libro',
      link: 'https://www.db-book.com/ ',
    },
    {
      tema: 'Bases de datos',
      referencia:
        'Wanumen, L. F., Rivas, E. y Mosquera, D. J. (2018). Bases de datos en SQL server. Ecoe Ediciones.',
      tipo: 'Libro',
      link:
        'https://www.buscalibre.com.co/libro-bases-de-datos-en-sql-server/9789587715705/p/50093560 ',
    },
  ],
  glosario: [
    {
      termino: '<i>Business intelligence</i> (BI):',
      significado:
        'método que agrupa los datos de una empresa, con el objetivo que se analicen y transformen en información que pueda utilizarse para mejorar los procesos.',
    },
    {
      termino: '<i>Data mart</i>',
      significado:
        'o mercado de datos en español, es un subconjunto de datos orientado a un objeto. Su principal característica es su diseño clásico, que facilita en gran medida su uso (PowerData, 2016).',
    },
    {
      termino: '<i>Data mining</i>',
      significado:
        'o minería de datos, es el proceso técnico que analiza grandes cantidades de información dispersa para darle sentido y convertirla en conocimiento (KeepCoding, 2022a). Es la forma de descubrir información relevante.',
    },
    {
      termino: 'ETL',
      significado: 'extracción, transformación y carga de datos.',
    },
    {
      termino: 'Metadatos',
      significado:
        'son datos sobre los datos, que explican el tipo de información que se contiene en cada campo de las tablas.',
    },
    {
      termino: 'MOLAP',
      significado:
        'Multi-dimensional online analytical processing, en español: procesamiento analítico multidimensional en línea, es una herramienta OLAP cuyo sistema guarda los datos en una matriz multidimensional de almacenamiento y requiere que el procesamiento y la acumulación de información estén contenidos en el cubo OLAP (Evaluando Software, 2022).',
    },
    {
      termino: 'ODS',
      significado:
        'Operational data store, o almacén operacional de datos, es un contenedor de datos activos, diseñado para integrar información de múltiples fuentes (KeepCoding, 2022b).',
    },
    {
      termino: 'OLAP',
      significado:
        'el procesamiento analítico en línea es un conjunto de herramientas de software, que proporciona un marco tridimensional para la toma de decisiones.',
    },
    {
      termino: 'ROLAP',
      significado:
        'Relational online analytical processing, en español: procesamiento analítico en línea relacional, es una herramienta OLAP construida sobre una base de datos relacional. En este sistema tiene importancia la tabla de hechos, donde se almacena la historia de la información relevante para la empresa que requiere ser estudiada (Evaluando Software, 2022).',
    },
    {
      termino: 'SQL',
      significado:
        'El lenguaje de consulta estructurado permite a los usuarios definir la estructura y organización de los datos almacenados y, a su vez, verifica y mantiene su integridad y control de acceso, con lo cual deja definidas las relaciones entre los elementos de datos almacenados (PowerData, 2016).',
    },
  ],
  referencias: [
    {
      referencia:
        'Abelló, A., Curto, J., Rius, À., Serra, M., Samos, J. y Vidal, J. (s. f.). Introducción al Data Warehouse. UOC. ',
      link: 'https://bit.ly/3Ay8Woh ',
    },
    {
      referencia:
        'Bahamón, J. H. (2003). Propuesta de un método para el diseño y modelado de una bodega de datos. Sistemas & Telemática,13-37. ',
      link: 'https://www.icesi.edu.co/contenido/pdfs/sistemas_telematica2.pdf',
    },
    {
      referencia: 'Biscobing, J. (2021). Almacén de datos (data warehouse). ',
      link:
        'https://www.computerweekly.com/es/definicion/Almacen-de-datos-data-warehouse',
    },
    {
      referencia: 'Evaluando Software. (2022, 21 de febrero). ABC del OLAP.',
      link: 'https://www.evaluandosoftware.com/abc-del-olap/',
    },
    {
      referencia:
        'KeepCoding. (2022a, 27 de enero). ¿Qué es el data mining o minado de datos? ',
      link: 'https://keepcoding.io/blog/que-es-el-data-mining/ ',
    },
    {
      referencia:
        'KeepCoding. (2022b, 1 de junio). Glosario de Data Warehouse: 7 conceptos fundamentales. ',
      link:
        'https://keepcoding.io/blog/glosario-data-warehouse-conceptos-fundamentales/ ',
    },
    {
      referencia:
        'Naeem, T. (2020, 3 de febrero). Conceptos de Data Warehouse: enfoque de Kimball vs. Inmon. Astera. ',
      link: 'https://www.astera.com/es/type/blog/data-warehouse-concepts/ ',
    },
    {
      referencia:
        'PowerData. (2016, 9 de abril). Data warehouse concepts: tu glosario de almacén de datos.',
      link:
        'https://blog.powerdata.es/el-valor-de-la-gestion-de-datos/data-warehouse-concepts-tu-glosario-de-almacen-de-datos ',
    },
    {
      referencia:
        'Roldán, D. (2015). Diseño de una guía general para construir una bodega de datos del área de ventas de una empresa [Tesis de pregrado, Universidad Libre]. Repositorio Institucional Unilibre.',
      link: 'https://bit.ly/3UYtKxy ',
    },
    {
      referencia:
        'SAS. (s. f.). Data Warehouse. Qué es y por qué es importante.',
      link:
        'https://www.sas.com/es_pe/insights/data-management/data-warehouse.html',
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
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
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
        nombre: 'Nombre',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
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
