<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Arquitectura de una bodega de datos
    .bloque-texto-a.color-acento-contenido.p-4.p-md-4.mb-5
      .row.m-0.align-items-center.justify-content-between
        .col-lg-4.mb-4.mb-lg-0
          figure
            img(src="@/assets/curso/temas/t1/1.svg", alt="imagen relacionada")
        .col-lg-8
          .contenedor-dashed.p-4
            .bloque-texto-a__texto.p-4
              p.mb-4 La arquitectura general de una bodega de datos, tiene diferentes componentes que hacen parte de los procesos para llevar a la construcción de herramientas analíticas que permitan la toma de decisiones, basadas en la información del negocio.
              ul.lista-ul
                li
                  i.fas.fa-circle.text-small.fad.me-2
                  p.mb-0 El primer componente lo conforman las fuentes de información.

                li
                  i.fas.fa-circle.text-small.fad.me-2
                  p.mb-0 El segundo componente se llevan a cabo todas las operaciones de ETL.
                li
                  i.fas.fa-circle.text-small.fad.me-2
                  p.mb-0 El tercer componente contiene las herramientas de visualización de datos, las cuales consultan los modelos multidimensionales para la generación de tableros de control o #[em dashboards] con la información del negocio.

    p.mb-5 Es importante definir la arquitectura de una bodega de datos. Para ello, se deben analizar las siguientes propiedades esenciales:

    SlyderF.mb-5(columnas="col-lg-6 col-xl-4")
      .tarjeta.config-slyder-f.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/t3/f1.svg' alt='AvatarTop')
        h2.text-center.text-white Separación
        p.text-center.text-white Los procesos de análisis y transacciones deberían ser almacenados de manera independiente, en la medida de lo posible.

      .tarjeta.config-slyder-f.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/t3/f2.svg' alt='AvatarTop')
        h2.text-center.text-white Escalabilidad
        p.text-center.text-white La infraestructura de <i>software</i> y <i>hardware</i> debe ser práctica y sencilla de optimizar, de acuerdo con el volumen de los datos. De igual forma, debe estar definida para una fácil administración y gestión de procesos y estimada por el número de solicitudes de los usuarios que determinan aumentos progresivos con el paso del tiempo.

      .tarjeta.config-slyder-f.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/t3/f3.svg' alt='AvatarTop')
        h2.text-center.text-white Extensibilidad
        p.text-center.text-white La arquitectura debe ser capaz de aceptar nuevas aplicaciones y tecnologías, sin tener que rediseñar todo el sistema.

      .tarjeta.config-slyder-f.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/t3/f4.svg' alt='AvatarTop')
        h2.text-center.text-white Seguridad
        p.text-center.text-white Administrar y verificar los diferentes accesos es una tarea crítica antes de comenzar a realizar el almacenamiento de los datos en un <i>data warehouse</i>.

      .tarjeta.config-slyder-f.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/t3/f5.svg' alt='AvatarTop')
        h2.text-center.text-white Administrable
        p.text-center.text-white La administración de los datos en la bodega debe ser fácil y sencilla.

    .col-md-10.mx-auto.mb-5
      .cajon.color-acento-contenido.p-4.color-cajon
        p Existen dos clasificaciones frecuentemente adoptadas para establecer la arquitectura de una bodega de datos. La primera depende del número de capas que se usa por la arquitectura. La segunda está condicionada por la forma en que cada capa es empleada para crear vistas de la <i>data warehouse</i> y está enfocada en los requerimientos puntuales de una organización o las áreas específicas.
        p.mb-0 A continuación, encontrará una breve explicación de la arquitectura de una, dos o tres capas.

    Separador

    .titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h3 Arquitectura de una capa

    p.mb-5 Un primer elemento de consideración en la arquitectura de una bodega de datos es la arquitectura de una capa. En las siguientes líneas se define y caracteriza.


    .row.justify-content-center.align-items-center.mb-5
      .col-8
        p Referente arquitectura de una capa

        figure.mt-4
          img(src="@/assets/curso/temas/t3/f6.png", alt="")
          figcaption Nota. Reproducida de Arquitectura de una bodega de datos. FAVA y SENA. (s. f.).







    .tarjeta.tarjeta--pasos.p-4
      PasosB.color-acento-contenido

        .row.justify-content-around.align-items-center(titulo="")
          .col-md-6.mb-4.mb-md-0
            p Una arquitectura de una capa es muy poco usada en la práctica. Su objetivo es reducir la cantidad de los datos guardados eliminando datos redundantes. Esto significa que una bodega de datos se implementa como una vista multidimensional de los datos requeridos y procesados por una capa intermedia específica. La debilidad de este tipo de arquitectura está en su falta de capacidad para satisfacer la necesidad de la independización entre los procesos de análisis y el transaccional.

          .col-md-6
            figure
              img(src='@/assets/curso/temas/t3/f7.png', alt='')

        .row.justify-content-around.align-items-center(titulo="")
          .col-md-6.mb-4.mb-md-0
            p Las consultas de análisis se envían a los datos operacionales una vez la capa intermedia los interpreta. De esta forma, las consultas realizadas afectan la carga de trabajo de las transacciones normales.

          .col-md-6
            figure
              img(src='@/assets/curso/temas/t3/f8.png', alt='')

        .row.justify-content-around.align-items-center(titulo="")
          .col-md-6.mb-4.mb-md-0
            p Aunque esta arquitectura puede reunir los requerimientos para integración y exactitud de los datos, no puede agregar más datos que los que vienen de las diferentes fuentes de información iniciales. Por este motivo, un enfoque virtual para el almacenamiento de datos solo puede ser exitoso si los requerimientos de análisis son restringidos y la cantidad de datos a analizar no es muy grande.

          .col-md-6
            figure
              img(src='@/assets/curso/temas/t3/f9.png', alt='')



    Separador
    .titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h3 Arquitectura de dos capas
    p.mb-5 Es un programa que está esperando permanentemente las solicitudes de conexión mediante el protocolo HTTP por parte del cliente. La arquitectura tradicional de cliente/servidor también es conocida como arquitectura de dos capas.
    figure
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/ezqyMHKWkiA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)




    Separador

    .titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h3 Arquitectura de tres capas

    p.mb-5 En este tipo de arquitectura, la tercera capa es la de datos reconciliados o almacén de datos operativos.

      .row.justify-content-center.align-items-center.mb-5
        .col-8
          .titulo-sexto.color-acento-contenido
            p Referente arquitectura de tres capas

          figure.mt-4
            img(src="@/assets/curso/temas/t3/f10.png", alt="")


      .tarjeta.linea-tiempo-dos.p-4.mb-5
        LineaTiempoC.color-primario(text-small)
          .row.justify-content-around.align-items-center(titulo="Paso 1")
            .col-md-6.mb-4.mb-md-0
              p.mb-3 La figura anterior muestra una bodega de datos que no es poblada de sus fuentes de forma directa, pero sí a partir de los datos reconciliados.
              p.mb-0 En esta capa se obtienen los datos operacionales después de realizar las tareas de integración y limpieza de la información de origen. Como resultado, los datos son detallados, coherentes, actuales e integrados.

            .col-md-6
              figure
                img(src='@/assets/curso/temas/t3/f11.png', alt='')


          .row.justify-content-around.align-items-center(titulo="Paso 2")
            .col-md-6.mb-4.mb-md-0
              p La ventaja principal de esta capa de reconciliación de datos es que crea un modelo de base de datos común para toda la empresa.

            .col-md-6
              figure
                img(src='@/assets/curso/temas/t3/f12.png', alt='')

          .row.justify-content-around.align-items-center(titulo="Paso 3")
            .col-md-6.mb-4.mb-md-0
              p Asimismo, se independizan los problemas de extracción de los datos de las fuentes y la integración de los mismos para llenar la bodega.

            .col-md-6
              figure
                img(src='@/assets/curso/temas/t3/f13.png', alt='')

          .row.justify-content-around.align-items-center(titulo="Paso 4")
            .col-md-6.mb-4.mb-md-0
              p A veces esta capa se usa para ejecutar tareas más operativas, como, por ejemplo, la producción de informes diarios, que no pueden ser preparados con las aplicaciones de la empresa. Igualmente crea los flujos adecuados de datos para entregarlos a procesos externos, con el fin de hacer la respectiva limpieza de la información y la integración requerida.

            .col-md-6
              figure
                img(src='@/assets/curso/temas/t3/f14.png', alt='')

          .row.justify-content-around.align-items-center(titulo="Paso 5")
            .col-md-6.mb-4.mb-md-0
              p Sin embargo, estos datos conciliados implican una redundancia de información mayor y de origen operativo.

            .col-md-6
              figure
                img(src='@/assets/curso/temas/t3/f15.png', alt='')



    Separador

    .titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h3 #[em Data marts]

    .row.justify-content-around.align-items-center(titulo="Paso 5")
      .col-md-1
        figure
          img(src='@/assets/curso/temas/t3/f16.svg', alt='')
      .col-md-10.mb-4.mb-md-0
        p Estas tarjetas son una agregación de datos contenidos en un almacén primario. Se refiere a subconjuntos de información necesarios para ciertas dependencias del negocio o de roles o tipos de usuarios.



    .tarjeta.config-slyder.p-4.my-5
      SlyderA(tipo="b")
        .row.justify-content-around.align-items-center
          .col-md-6.mb-4.mb-md-0
            p Los #[em data marts] se generan desde una bodega de datos primaria, y con frecuencia se denominan dependientes. Los #[em data marts] no son estrictamente necesarios, pero sí son útiles para las bodegas de datos de medianas y grandes empresas, por las siguientes razones:

          .col-md-6
            .titulo-sexto.color-acento-contenido(data-aos='fade-right')
              p.mb-0 <i> Referente de arquitectura de tres capas</i>
            figure
              img(src='@/assets/curso/temas/t3/f17.png', alt='')
              figcaption Nota. Reproducida de ETL vs. ELT: ¿Cuál es la diferencia? Fátima, N. (2020, 23 de agosto).

        .row.justify-content-around.align-items-center
          .col-md-6.mb-4.mb-md-0
            p
              i.fas.fa-circle.text-small.fad.me-2
              | Se emplean como piezas de construcción a medida que se va incrementando el uso de las bodegas de datos.
            p
              i.fas.fa-circle.text-small.fad.me-2
              | Contienen los datos necesarios de determinados grupos de usuarios para generar consultas puntuales.
            p
              i.fas.fa-circle.text-small.fad.me-2
              | Ofrecen un rendimiento mejor, ya que son mucho más pequeños que las bodegas de datos primarias.

            p 
              i.fas.fa-circle.text-small.fad.me-2
              | Algunas veces pueden tener una arquitectura diferente de las fuentes de datos que se usan para llenar los <i>data marts.</i>


          .col-md-6
            figure
              img(src='@/assets/curso/temas/t3/f18.png', alt='')


        .row.justify-content-around.align-items-center
          .col-md-6.mb-4.mb-md-0
            p En caso de no existir bodega de datos primaria, el proceso de diseño se simplifica, pero podría implicar riesgos de inconsistencias entre los <i>data marts</i>. Para evitar estos inconvenientes, podría generarse una bodega de datos principal y crear los #[em data marts] como independientes. En comparación con la arquitectura de dos capas expuestas, las funciones de estos almacenes de datos y de la bodega estarían invertidas, lo que implica que esta bodega hace recepción mediante los #[em data marts], con lo cual puede accederse directamente para generar los patrones de entrada tan sencillos como sea posible.

          .col-md-6
            figure
              img(src='@/assets/curso/temas/t3/f19.png', alt='')

        .row.justify-content-around.align-items-center
          .col-md-6.mb-4.mb-md-0
            p.mb-3 Las características de una bodega de datos están definidas por

            p
              i.fas.fa-circle.text-small.fad.me-2
              | Empleo de metadatos. Son datos sobre los datos.
            p
              i.fas.fa-circle.text-small.fad.me-2
              | Procesos ETL, referidos a la manera en que se almacenan los datos.


          .col-md-6
            figure
              img(src='@/assets/curso/temas/t3/f20.png', alt='')



        .row.justify-content-around.align-items-center
          .col-md-6.mb-4.mb-md-0
            p.mb-3 <b>Extracción:</b> como su nombre lo indica, corresponde a la obtención de la información desde las diversas fuentes de datos (CRM, ERP, etc.) a una base de datos intermedia, llamada <i>data staging area</i> (DSA).
            p <b>Transformación:</b> es la etapa donde se homogenizan los datos de las diversas fuentes de datos, se limpian y se transforman de acuerdo con los indicadores que se quieran almacenar.

          .col-md-6
            .titulo-sexto.color-acento-contenido(data-aos='fade-right')
              p.mb-0 <i>Referente de una arquitectura de bodega de datos</i>
            figure
              img(src='@/assets/curso/temas/t3/f21.png', alt='')
              figcaption Nota. Reproducida de Diseño de un data warehouse para medir el desarrollo disciplinar en instituciones académicas. Investigación biotecnológica, 31(72), 161-181. Gorbea, S. y Madera, M. (2017).

        .row.justify-content-around.align-items-center
          .col-md-6.mb-4.mb-md-0
            p.mb-3 <b>Carga:</b> los datos, una vez depurados y transformados, son cargados en el DW a través de los siguientes procedimientos, que, entre otros, dependen del tipo de aplicación que se otorgue a los datos:

            p
              i.fas.fa-circle.text-small.fad.me-2
              | OLAP
            p
              i.fas.fa-circle.text-small.fad.me-2
              | <i>Query and reporting</i>
            p
              i.fas.fa-circle.text-small.fad.me-2
              | <i>Executive information system (EIS)</i>
            p
              i.fas.fa-circle.text-small.fad.me-2
              | <i>Data mining</i> o minería de datos


          .col-md-6
            .titulo-sexto.color-acento-contenido(data-aos='fade-right')
              p.mb-0 <i>Referente de una arquitectura de bodega de datos</i>
            figure
              img(src='@/assets/curso/temas/t3/f21.png', alt='')
              figcaption Nota. Reproducida de Diseño de un data warehouse para medir el desarrollo disciplinar en instituciones académicas. Investigación biotecnológica, 31(72), 161-181. Gorbea, S. y Madera, M. (2017).
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
