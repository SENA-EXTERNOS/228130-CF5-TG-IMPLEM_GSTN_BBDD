<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Diseño de bodega de datos

    p.mb-5 El diseño de bodegas de datos comprende una serie de pasos importantes. Es necesario conocer estos pasos, así como la definición del concepto.
    .tarjeta.tarjeta--azul.p-4.mb-5
      SlyderA(tipo="b")
        .row.justify-content-around.align-items-center
          .col-md-6.mb-4.mb-md-0
            p Una bodega de datos es una herramienta comercial que se emplea como una solución informática que agrega de diferentes fuentes datos de entidades, archivos u otros sistemas corporativos, y que los convierte, según sus necesidades, alimentándose en un solo archivo. El objetivo de un almacén de datos es facilitar la toma de decisiones corporativas y centralizar, interpretar y agregar valor a los datos, en beneficio de la empresa. Este sistema proporciona a los usuarios la capacidad de analizarlos de forma accesible e intuitiva. Así, un DW es aquel que ha sido extraído y transformado y que está físicamente separado de la fuente de datos.

          .col-md-4
            figure
              img(src='@/assets/curso/temas/t2/t2-1.svg', alt='')

        .row.justify-content-around.align-items-center
          .col-md-6.mb-4.mb-md-0
            p El desarrollo en el ambiente de la bodega de datos se enfoca en aplicar un proceso de ETL, de tres pasos. El primero es el proceso de extracción, que se encarga de obtener datos únicos y necesarios, que, de una u otra manera, están almacenados en diferentes fuentes a la bodega de datos.

          .col-md-4
            figure
              img(src='@/assets/curso/temas/t2/t2-2.svg', alt='')


        .row.justify-content-around.align-items-center
          .col-md-6.mb-4.mb-md-0
            p El siguiente paso es la transformación, el cual es el más importante y requiere de mucha precaución, debido a que la confiabilidad de los datos debe ser la mejor. En esta etapa se realiza una limpieza o “modificación” de la información para que se pueda cargar en la bodega. Ambos procesos, limpieza y transformación, se realizan porque los datos, al ser extraídos desde diferentes fuentes, frecuentemente tienen diferentes formatos, lo que los hace poco integrales en la bodega de datos.

          .col-md-4
            figure
              img(src='@/assets/curso/temas/t2/t2-3.svg', alt='')

        .row.justify-content-around.align-items-center
          .col-md-6.mb-4.mb-md-0
            p.mb-3 El último paso es la carga, que es el almacenamiento del resultado de los pasos anteriormente mencionados; es decir, los datos que fueron extraídos y seguidamente transformados serán cargados en la bodega de datos para un nuevo proceso dentro de la arquitectura de esta bodega.
            p.mb-0 Los almacenes de datos pueden ser consultados mediante las herramientas de consulta y análisis, como, por ejemplo, cubos multidimensionales, informes o soluciones <i>web</i>.

          .col-md-4
            figure
              img(src='@/assets/curso/temas/t2/t2-4.svg', alt='')


    Separador

    .titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h3 Sistema operativo y red

    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image':`url(${require('@/assets/curso/temas/t2/f5.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Antes de empezar, se debe tener en cuenta que estos requerimientos de sistemas operativos y de red no son algo que está establecido ni mucho menos estandarizado, aunque existe una guía básica que puede dar claridad de esto. Del mismo modo, estos requerimientos dependen de la magnitud del proyecto y de la necesidad de los clientes. Para la construcción de una bodega de datos, se deben cumplir algunos requisitos con las herramientas de #[em software] y #[em hardware]. En el caso del #[em hardware], se requieren uno o más servidores para el almacenamiento de la información y la administración de la base de datos de la organización. Preferiblemente, el servidor debe ser escalable, porque en algunas ocasiones el proyecto de construcción de la bodega presenta un tipo de redimensionamiento a medida que avanza la implementación.



    p.mb-5 Inicialmente, la capacidad de almacenamiento se determina por los requerimientos de información histórica de la empresa y su perspectiva de crecimiento. En el caso del <i>software</i>, sus herramientas son necesarias para la construcción de bodega de datos, las cuales se clasifican en tres categorías básicas:



    .row.justify-content-center.mb-3
      .col-5
        figure
          img(src="@/assets/curso/temas/t2/f6.svg", alt="")
      .col-7
        AcordionA(tipo="b" clase-tarjeta="tarjeta tarjeta--azul")
          .row(titulo="Herramientas de almacenamiento")
            .col-md-12.mb-4.mb-md-0
              p Se encargan de guardar todos los datos requeridos. Existen diferentes opciones, que dependen de la capacidad del sistema, el volumen de los datos y el presupuesto de la compañía.

          .row(titulo="Herramientas de extracción")
            .col-md-12.mb-4.mb-md-0
              p.mb-2 Se enfocan en el proceso ETL de los sistemas que usualmente trabaja la compañía. Algunas son:

              p
                i.fas.fa-circle.text-small.fad.me-2
                | SAP <em>BusinessObjects</em>
              p
                i.fas.fa-circle.text-small.fad.me-2
                | SQL <em>Server Integration Services</em>
              p
                i.fas.fa-circle.text-small.fad.me-2
                | <em>Oracle Data Integrator</em>

              p Los funcionarios técnicos al interior de la compañía, por su conocimiento en bases de datos y sistemas transaccionales, por lo general, emplean estas herramientas.




          .row(titulo="Herramientas para la elaboración de reportes:")
            .col-md-12.mb-4.mb-md-0
              p Son los diferentes programas requeridos para construir la interfaz vista por los usuarios finales. A estos programas se les deben suministrar los recursos necesarios para que puedan visualizar la información requerida de manera detallada y a un nivel gerencial, para que obtengan con ella respuestas a preguntas específicas del negocio. Algunos de estos #[em software] orientados a crear y visualizar reportes son <i>Microsoft Power BI, Looker Studio</i> (antes Google Data Studio), Tableau, entre otros.



    Separador
    .titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h3 OLAP
    .row.justify-content-center.mb-5
      .col-md-3
        figure
          img(src="@/assets/curso/temas/t2/1.svg", alt="")
      .col-md-9
        p El procesamiento analítico en línea (OLAP), se refiere a un método para organizar y consultar datos en una estructura multidimensional. Además, a diferencia de los sistemas de datos relacionales, todas las posibles consultas se calculan de antemano, lo que proporciona al usuario de la empresa, una mayor agilidad y flexibilidad (Abelló et al., s. f.).
        p Los sistemas OLAP constan de ciertas características específicas, que los fabricantes de software intentan cumplir en mayor medida y que se basan en las doce leyes que recalcó Edgar F. Codd en 1993.
    .row.justify-content-center.mb-5
      .col-md-9
        TabsA.color-primario.mb-5
          .tarjeta.color-secundario--borde.p-4(titulo="Características<br> principales")
            p Las características principales de los sistemas OLAP comienzan con integrar una vista conceptual multidimensional, lo que permitirá que se trabaje a partir de métricas de negocio y sus dimensiones. Esto implica al servicio OLAP y a los usuarios aceptar un único esquema lógico de datos.

          .tarjeta.color-secundario--borde.p-4(titulo="Características<br> para resaltar")
            p Por otro lado, la arquitectura cliente/servidor, la dimensionalidad genérica y el rendimiento de informes consistente son características que vale la pena resaltar, debido a que este último no debería degradarse cuando el número de dimensiones del modelo se vaya incrementando.

          .tarjeta.color-secundario--borde.p-4(titulo="Arquitectura <br>cliente/servidor")
            p Asimismo, se debe tener en cuenta que la arquitectura cliente/servidor está basada en sistemas modulares y abiertos, que permitan la interacción y la colaboración. Por su parte, la dimensionalidad genérica se refiere a la capacidad que debe tener el sistema para crear todo tipo de dimensiones y con trabajos que sean proactivos en varias de ellas.

          .tarjeta.color-secundario--borde.p-4(titulo="Soporte multiusuario")
            p Por último, y no menos importante, se debe aclarar que los sistemas OLAP incumben en el permiso de soporte multiusuario; así que conviene tener una manipulación de datos intuitiva, dado que las personas a las que se destinan estos sistemas son usualmente analistas y altos ejecutivos. Por lo tanto, la interacción debe considerarse desde el prisma de la máxima usabilidad de los usuarios.

      .col-md-3
        figure
          img(src='@/assets/curso/temas/t2/f8.png', alt='programador con su laptop')
    Separador
    .titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h3 Característica y entorno técnico del negocio


    .row.justify-content-center.mb-5
      .col-md-6
        figure
          img(src='@/assets/curso/temas/t2/f9.png', alt='programador con su laptop')

      .col-md-6
        p Los almacenes de datos deben ajustarse a ciertas características, enfocadas en la eficiencia del DW. Según Roldán (2015), la primera está relacionada con utilizar solo los datos necesarios, porque hacer esto será más eficiente que extraer cantidad de información incoherente. Por eso no se debe tomar de las fuentes aquellos datos que no sean requeridos ni menos que no se puedan analizar. La segunda, referida en apartados anteriores, consiste en que la extracción de datos desde diferentes fuentes hace que, en ocasiones, la información no esté integrada. Esta situación produce un pequeño inconveniente, debido a que la integración de los datos ayuda a que la información sea consistente tanto en formato como en atributo. En el caso de que los datos no sean consistentes, se debe realizar el paso dos de un proceso de ETL, es decir, la transformación de los datos, con el fin de cumplir oportunamente con la característica. La tercera tiene que ver con la historia, es decir, para realizar posibles análisis de tendencias, se debe tener información en la bodega con datos históricos ―esta es una de las características importantes en este capítulo de diseño de una bodega de datos―. La cuarta característica está relacionada con que no se eliminan ni modifican los datos, sino que se deben realizar dos procesos: la carga de datos y su consulta. En un proyecto real es necesario tener en cuenta criterios de negocio y gestión de proyectos para, por un lado, generar valor en la organización y, por el otro, lograr un proyecto de éxito.


    Separador
    .titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h3 Requerimientos del usuario

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8
        p.mb-4 El análisis de los requisitos consiste en identificar las necesidades específicas de una determinada organización en materia de análisis de la información. Los datos recopilados en esta fase permiten señalar posteriormente los procesos empresariales que deben examinarse y las perspectivas organizacionales sobre las que debe evaluarse el rendimiento de la organización.
        p.mb-4 La lista de requisitos puede ser bastante abrumadora, pero es esencial ponerlos sobre la mesa antes de lanzarse al desarrollo del sistema ETL. Los requerimientos de este sistema son, en su mayoría, limitaciones con las que hay que vivir y a las que hay que adaptarlo. En el marco de estas condiciones, hay oportunidades para tomar sus propias decisiones, ejercer el juicio y aprovechar la creatividad, pero los requisitos dictan los elementos básicos que debe ofrecer el sistema ETL.
        .cajon.color-acento-contenido.p-4.mb-4
          p.mb-0 Normalmente, en esta fase se debe ser previsor y pensar más allá de las necesidades actuales para satisfacer las futuras. Por ejemplo, si los usuarios han expresado su interés por un análisis mensual y se dispone de información más detallada, es necesario determinar si la solución de factorización de los datos puede beneficiarse de información pormenorizada en el futuro o si son suficientes ciertos niveles de amplificación de la misma.

      .col-lg-4.tarjeta.p-3.order-first.order-lg-last( data-aos="fade-left")
        figure
          img(src='@/assets/curso/temas/t2/f10.svg', alt='')



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
