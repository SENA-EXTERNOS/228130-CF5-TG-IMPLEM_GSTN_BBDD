<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Implementación de una bodega de datos

    .row.justify-content-around.align-items-center(titulo="Paso 5")
      .col-2
        figure
          img(src='@/assets/curso/temas/t4/f1.svg', alt='')
      .col-md-9.mb-4.mb-md-0
        p Para llegar a la construcción de una bodega de datos, se necesitan dos tipos de herramientas: <i>hardware</i> y <i>software</i>. Por un lado, la herramienta <i>hardware</i> es un servidor para el almacenamiento y manejo de la base de datos, que debe ser escalable para un redimensionamiento, a medida que se avanza en la implementación.

    .tarjeta.config-slyder.p-4.mb-5
      SlyderA(tipo="b")
        .row.justify-content-around.align-items-center
          .col-md-6.mb-4.mb-md-0
            p La capacidad de almacenamiento debe definirse por los requerimientos y la perspectiva de crecimiento de la organización. En este sentido, es importante:
            ol.lista-ol--cuadro
              li
                .lista-ol--cuadro__vineta
                  span 1
                | Determinar la misión y los objetivos empresariales.

              li
                .lista-ol--cuadro__vineta
                  span 2
                | Determinar la funcionalidad que se quiere para el almacén de datos.

              li
                .lista-ol--cuadro__vineta
                  span 3
                | Determinar los tipos de datos que se necesitan en la bodega para apoyar su funcionalidad.

              li
                .lista-ol--cuadro__vineta
                  span 4
                | Determinar el contenido en función del volumen y el tamaño.

              li
                .lista-ol--cuadro__vineta
                  span 5
                | Determinar el tipo de base de datos, puesto que cada una tiene su particularidad.

              li
                .lista-ol--cuadro__vineta
                  span 6
                | Determinar el diseño físico orientado a producir un buen rendimiento en el procesamiento de consultas.

              li
                .lista-ol--cuadro__vineta
                  span 7
                | Determinar los procesos de administración futuros del &nbsp;<i>data warehouse</i>.

              li
                .lista-ol--cuadro__vineta
                  span 8
                | Revisar de forma periódica para validar la continua respuesta a las necesidades de la organización.


          .col-md-6
            figure
              img(src='@/assets/curso/temas/t4/f1.png', alt='')


        .row.justify-content-around.align-items-center
          .col-md-6.mb-4.mb-md-0
            p Por otro lado, la herramienta <i>software</i> son los programas, aplicaciones o simplemente instrucciones, que permiten realizar un trabajo o facilitan, optimizan y mejoran la tarea. Para su selección, se deben tener en cuenta diversos aspectos, que están divididos en cuatro categorías básicas:


          .col-md-6
            figure
              img(src='@/assets/curso/temas/t4/f2.png', alt='')


        .row.justify-content-around.align-items-center
          .col-md-6.mb-4.mb-md-0
            p <b>Herramientas de almacenamiento:</b> aquellas en las cuales se almacenan los datos. Dependiendo del volumen de la información, del presupuesto y de la capacidad del sistema, se pueden encontrar varias opciones, como son <i>Oracle, SQL Server, MySQL y PostgreSQL.</i>

          .col-md-6
            figure
              img(src='@/assets/curso/temas/t4/f3.png', alt='')

        .row.justify-content-around.align-items-center
          .col-md-6.mb-4.mb-md-0
            p <b>Herramientas de extracción y colección:</b> realizan el proceso de extracción, transformación y carga de información de los sistemas transaccionales a la bodega de datos. Algunas opciones de herramientas son: <i> BusinessObjects DI, Cognos DM, SQL Server IS, Oracle DI, Data Integration Studio.</i>


          .col-md-6
            figure
              img(src='@/assets/curso/temas/t4/f4.png', alt='')



        .row.justify-content-around.align-items-center
          .col-md-6.mb-4.mb-md-0
            p.mb-3 <b>Herramientas para elaboración de reportes:</b> crean las interfaces vistas por el usuario final. Entre las herramientas más importantes, se encuentran: <i>Microsoft Power BI, Tableau, Google Data Studio, entre otros.</i>

          .col-md-6
            figure
              img(src='@/assets/curso/temas/t4/f5.png', alt='')


        .row.justify-content-around.align-items-center
          .col-md-6.mb-4.mb-md-0
            p <b>Herramientas para construcción de cubos multidimensionales:</b> establecen las medidas y las dimensiones que se usan y genera el cubo para la consulta. Algunas opciones para la construcción de cubos multidimensionales son: <i>Microsoft Analysis Services, Oracle Analytic Workspace Manager y Cognos PowerPlay Transformer.</i>

          .col-md-6
            figure
              img(src='@/assets/curso/temas/t4/f6.png', alt='')


    Separador

    .titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h3 Interfases
    .row.justify-content-center.align-items-center
      .col-lg-11
        .bloque-texto-a.color-acento-contenido.p-4.p-md-4.mb-5
          .row.m-0.align-items-center.justify-content-between
            .col-lg-4.mb-4.mb-lg-0.p-0
              figure
                img(src="@/assets/curso/temas/t1/2.png", alt="imagen relacionada")
            .col-lg-8
              .contenedor-dashed.p-4
                .bloque-texto-a__texto.p-4
                  h4.mb-4 ¿Qué es una interfaz?
                  p Cuando se habla de esta palabra, se pueden encontrar muchos derivativos en el campo de la tecnología, tales como interfaz de usuario, interfaz de programación, etc. En el ámbito de la bodega de datos, interfaz es el conjunto de métodos que deben implementarse de forma obligatoria y que contienen una clase, aunque no tienen por qué comportarse del mismo modo.


    p.mb-5 Es necesario contar con cuatro principios básicos para tener una interfaz exitosa. Estos son los siguientes:

    ImagenInfograficaB.color-primario.mb-5
      template(v-slot:imagen)
        figure
          img(src='@/assets/curso/temas/t4/f8.png', alt='')


      div(x="5%" y="25%" tooltip="Ver mas")
        h5.mb-3 Centrarse en el negocio
        p Determinar la viabilidad e identificar los requerimientos del negocio y su valor asociado, en este análisis de los requerimientos se identifican las necesidades específicas que tiene una organización con respecto al análisis de la información. También se debe ser previsor, pensar más allá de la necesidad actual para cubrir la futura, es conveniente hacer un diagnóstico y conceptualización adecuada del mismo, identificar claramente los objetivos y el contenido del proyecto.

      div(x="5%" y="75%" tooltip="Ver mas")
        .h5.mb-3 Construir una infraestructura de información adecuada
        p Diseñar una base única, integrada, fácil de usar, y de un alto  rendimiento donde se reflejen los requerimientos del negocio.

      div(x="96%" y="25%" tooltip="Ver mas")
        .h5.mb-3 Realizar entregas en incrementos significativos
        p Incrementos entregables en plazos, tipo metodología ágil.
      div(x="96%" y="75%" tooltip="Ver mas")
        .h5.mb-3 Ofrecer la solución completa
        p Crear un almacén de datos sólido, un buen diseño, con calidad probada y accesible.

    p.mb-5 Para esta unidad de estudio, se toma como base la metodología Kimball, para realizar paso a paso la interfaz de una bodega de datos del área de ventas de una organización. Es de esta forma, que se deben identificar las siguientes tareas a desarrollar:
    .tarjeta.tarjeta--pasos.p-4.mb-5
      PasosB.color-acento-contenido

        .row.justify-content-around.align-items-center(titulo="")
          .col-md-6.mb-4.mb-md-0
            ol.lista-ol--cuadro
              li
                .lista-ol--cuadro__vineta
                  span 1
                | Establecer el modelo lógico de datos.

              li
                .lista-ol--cuadro__vineta
                  span 2
                | Establecer los procedimientos de conexión entre las fuentes y la bodega de datos.

              li
                .lista-ol--cuadro__vineta
                  span 3
                | Definir el formato de los diferentes datos requeridos.

              li
                .lista-ol--cuadro__vineta
                  span 4
                | Establecer los modelos físicos obtenidos de los modelos lógicos.

              li
                .lista-ol--cuadro__vineta
                  span 5
                | Diseñar los programas y procesos necesarios para los datos y la aplicación.

              li
                .lista-ol--cuadro__vineta
                  span 6
                | Diseñar la bodega de datos.

              li
                .lista-ol--cuadro__vineta
                  span 7
                | Desarrollar los &nbsp;<i>scripts</i>&nbsp; que realicen el proceso ETL para poblar la bodega.

              li
                .lista-ol--cuadro__vineta
                  span 8
                | Hacer el montaje, instalación, puesta en marcha y utilización de la bodega de datos.

          .col-md-6
            figure
              img(src='@/assets/curso/temas/t4/f9.png', alt='')

        .row.justify-content-around.align-items-center(titulo="")
          .col-md-6.mb-4.mb-md-0
            ol.lista-ol--cuadro
              li
                .lista-ol--cuadro__vineta
                  span 9
                | Definir las herramientas de acceso del usuario final.

              li
                .lista-ol--cuadro__vineta
                  span 10
                | Diseñar los cubos multidimensionales.

              li
                .lista-ol--cuadro__vineta
                  span 11
                | Generar los cubos multidimensionales.

              li
                .lista-ol--cuadro__vineta
                  span 12
                | Limitar el tiempo de la implementación creando un programa para cumplir con los tiempos, y realizar el respectivo seguimiento.

              li
                .lista-ol--cuadro__vineta
                  span 13
                | Planificar los tiempos de los recursos que serán usados para llevar a cabo las tareas identificadas.

              li
                .lista-ol--cuadro__vineta
                  span 14
                | Hacer seguimiento en la construcción de la bodega mediante un cronograma para identificar posibles incumplimientos en los tiempos previamente establecidos.


          .col-md-6
            figure
              img(src='@/assets/curso/temas/t4/f10.png', alt='')

        .row.justify-content-around.align-items-center(titulo="")
          .col-md-6.mb-4.mb-md-0
            ol.lista-ol--cuadro
              li
                .lista-ol--cuadro__vineta
                  span 15
                | Evitar los tiempos muertos de los recursos y reconocer las tareas adicionales que puedan afectar en el desarrollo e incluirlas dentro del cronograma con sus respectivos tiempos.

              li
                .lista-ol--cuadro__vineta
                  span 16
                | Delegar la responsabilidad de trabajo a los recursos por medio de los tiempos identificados anteriormente.

              li
                .lista-ol--cuadro__vineta
                  span 17
                | Crear un documento final muy específico donde se visualice el plan del proyecto, que incluya cada uno de los puntos mencionados con anterioridad, y donde el equipo encargado de la construcción de la bodega de datos comprenda el mismo enfoque, tenga conocimiento de las actividades y tiempos y evite malas interpretaciones que se puedan evidenciar y que generen retrasos.


          .col-md-6
            figure
              img(src='@/assets/curso/temas/t4/f11.png', alt='')



    p.mb-5 A continuación, se definen los requerimientos generales (cada organización tiene sus propios requerimientos) de este módulo, para el área de ventas de una organización:

    .tarjeta.linea-tiempo-dos.p-4.mb-5
      LineaTiempoC.color-primario(text-small)
        .row.justify-content-center.align-items-start(titulo="1")
          .col-md-4.mb-4.mb-md-0
            .mt-4
              p
                i.fas.fa-circle.fa-xs.text-small.fad.me-2
                | Procesos que sean medibles.
              p
                i.fas.fa-circle.text-small.fad.me-2
                | Información que esté en una sola bodega de datos.
              p
                i.fas.fa-circle.text-small.fad.me-2
                | Permitir la integración de distintas fuentes de datos.

              p
                i.fas.fa-circle.text-small.fad.me-2
                | Consulta que sea por medio de cubos multidimensionales.

          .col-md-8
            .mt-4
              .titulo-sexto.color-acento-contenido(data-aos='fade-right')
                p.mb-0.text-small <i> Referente de modelo multidimensional</i>
              figure
                img.mb-3(src='@/assets/curso/temas/t4/paso1-1.jpg', alt='')
                figcaption Nota. Reproducida de Diseño de una guía general para construir una bodega de datos del área de ventas de una empresa [Tesis de pregrado, Universidad Libre]. Repositorio Unilibre. Roldán, D. E. (2015).

        .row.justify-content-center.align-items-start(titulo="2")
          .col-md-4.mb-4.mb-md-0
            p.mt-5 Tomando como base el modelo multidimensional propio, se debe diseñar un modelo físico con los nombres de las tablas, campos y tipos de datos:

          .col-md-8
            .mt-4
              .titulo-sexto.color-acento-contenido(data-aos='fade-right')
                p.mb-0.text-small <i>Referente de un modelo físico</i>
              figure
                img.mb-3(src='@/assets/curso/temas/t4/paso1-2.jpg', alt='')
                figcaption Nota. Reproducida de Diseño de una guía general para construir una bodega de datos del área de ventas de una empresa [Tesis de pregrado, Universidad Libre]. Repositorio Unilibre. Roldán, D. E. (2015).

        .row.justify-content-center.align-items-start(titulo="3")
          .col-lg-4.mb-4.mb-md-0
            p.mb-4.mt-5 Se debe contar con un servidor con estas características de <i>software</i>:

          .col-lg-8.col-sm-8

            .titulo-sexto.color-acento-contenido(data-aos='fade-right')
              p.mb-0.text-small <i>Referente de características de un servidor</i>
            figure
              img.mb-3(src='@/assets/curso/temas/t4/f14.svg', alt='', style="max-width: 611px")
              figcaption Nota. Reproducida de Diseño de una guía general para construir una bodega de datos del área de ventas de una empresa [Tesis de pregrado, Universidad Libre]. Repositorio Unilibre. Roldán, D. E. (2015).

        .row.justify-content-center.align-items-start(titulo="4")
          .col-lg-4.mb-4.mb-md-0
            p.mb-4.mt-5 El servidor debe tener las siguientes características de <i>hardware</i>:

          .col-lg-8
            .titulo-sexto.color-acento-contenido(data-aos='fade-right')
              p.mb-0.text-small <i>Referente de un modelo físico</i>
            figure
              img.mb-3(src='@/assets/curso/temas/t4/f15.svg', alt='')
              figcaption Nota. Reproducida de Diseño de una guía general para construir una bodega de datos del área de ventas de una empresa [Tesis de pregrado, Universidad Libre]. Repositorio Unilibre. Roldán, D. E. (2015).

        .row.justify-content-center.align-items-start(titulo="5")

          .col-lg-12
            p.mb-5 Los campos para extraerse de cada fuente corresponden a lo siguiente:

            .row.justify-content-center.align-items-start
              .col-lg-6
                .titulo-sexto.color-acento-contenido(data-aos='fade-right')
                  p.mb-0 <i>Referente de un modelado dimensional</i>
                figure
                  img(src='@/assets/curso/temas/t4/f16.svg', alt='')

              .col-lg-6
                .titulo-sexto.color-acento-contenido(data-aos='fade-right')
                  p.mb-0 <i> Referente de un modelado dimensional</i>
                figure
                  img(src='@/assets/curso/temas/t4/f17.svg', alt='')

    Separador

    .titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h3 Usuarios

    p.mb-5 Cada uno de los usuarios y sus roles son fundamentales para el éxito de una bodega de datos.

    .tarjeta.config-slyder.p-4.mb-5
      SlyderA(tipo="b")
        .row.justify-content-center.align-items-center
          .col-md-6.mb-4.mb-md-0
            h4.mb-4 #[em Project manager]
            p La responsabilidad de un gestor de proyectos es crear, gestionar y comunicar, tanto verbalmente como por escrito, de manera clara los objetivos al equipo. Debe, además, plantear y defender la ejecución acertada de los pasos para realizar un proyecto y cumplir con los objetivos. También debe tener la habilidad de ser receptivo a las necesidades de los miembros del equipo y dedicarse a la finalización con éxito de todas las tareas del proyecto.
          .col-md-4
            figure
              img(src='@/assets/curso/temas/t4/f18.png', alt='')


        .row.justify-content-center.align-items-center
          .col-md-6.mb-4.mb-md-0
            h4.mb-4 #[em Technical leader]
            p Es la persona que recibe los detalles y los problemas del producto y de la interfaz. Su responsabilidad es asegurarse de que todas las asignaciones encajen y conduzcan a una exitosa implementación del almacenamiento de datos. Trabaja de la mano con el líder del proyecto para lograr el éxito en la implementación.

          .col-md-4
            figure
              img(src='@/assets/curso/temas/t4/f19.png', alt='')


        .row.justify-content-center.align-items-center
          .col-md-6.mb-4.mb-md-0
            h4.mb-4 #[em Chief architect]
            p El arquitecto realiza funciones basadas en la convergencia de las necesidades empresariales, la tecnología informática de almacenamiento de datos actual y las normas y directrices internas de la organización. Su papel en el almacén de datos es creativo, porque tiene que hacer una mirada a la forma en que su empresa puede utilizar la tecnología y los productos para cumplir con los objetivos del negocio o para resolver los problemas que allí surjan. Un arquitecto debe examinar una serie de enfoques y arquitecturas diferentes para luego elegir (o recomendar) la más sensata para ese entorno específico.

          .col-md-4
            figure
              img(src='@/assets/curso/temas/t4/f20.png', alt='')

        .row.justify-content-center.align-items-center
          .col-md-6.mb-4.mb-md-0
            h4.mb-4 #[em Data scientist]
            p Como su nombre lo indica, en una empresa el científico de datos permite que se analicen datos o cualquier otro campo relacionado con el <i>big data</i>. En este sentido, facilita la creación de estructuras necesarias en la recolección, análisis y clasificación de los datos para obtener información relevante y, en muchas ocasiones, su visualización. A diferencia del analista, un científico de datos debe saber trabajar con fuentes diferentes y usar la tecnología disponible para el ordenamiento y análisis de las mismas.


          .col-md-4
            figure
              img(src='@/assets/curso/temas/t4/f21.png', alt='')



        .row.justify-content-center.align-items-center
          .col-md-6.mb-4.mb-md-0
            h4.mb-4 #[em Data analyst]
            p.mb-3 El analista de datos es el encargado de unir el departamento de #[em Big Data] con el resto de la organización. Si no existe un departamento de esta categoría, entonces esta persona vincula el proyecto de análisis de datos masivos con el resto de la organización. A diferencia del científico de datos, el analista no debe programar o trabajar con múltiples fuentes a la vez, sino que debe estar capacitado para manejar Excel y SQL, incluso puede ir más allá y trabajar con bases más complejas; igualmente, tiene que estar pendiente de los cambios que se puedan producir y ver cuál es la mejor forma de aplicarlos en el campo de trabajo. Este perfil profesional está en la capacidad de ver más allá de los datos: una tendencia, un patrón, una asociación, incluso puede notar datos que aparecen inconexos entre ellos y encontrar una relación en el contexto general.

          .col-md-4
            figure
              img(src='@/assets/curso/temas/t4/f22.png', alt='')


        .row.justify-content-center.align-items-center
          .col-md-6.mb-4.mb-md-0
            h4.mb-4 #[em Data strategist]
            p El rol del estratega de datos puede ser similar al de un analista de datos, con la diferencia de que el primero da respuesta a la fase final del proceso del <i>Big data</i>. Es la persona que tiene la capacidad analítica y soltura a la hora de entender datos, pero que, sobre todo, tiene mucha creatividad y visión estratégica a partir de la información entregada por el #[em data scientist]. Además, es quien está en contacto directo con el cliente final, lo que le permite percibir las necesidades reales del mercado.

          .col-md-4
            figure
              img(src='@/assets/curso/temas/t4/f23.png', alt='')


        .row.justify-content-center.align-items-center
          .col-md-6.mb-4.mb-md-0
            h4.mb-4 #[em Business analyst requirements]
            p El analista recopila, consolida, organiza y prioriza las necesidades y problemas empresariales que presentan los usuarios. La función de un analista de negocios es utilizar los datos para resolver los problemas empresariales trabajando con el equipo de inteligencia de negocio.
          .col-md-4
            figure
              img(src='@/assets/curso/temas/t4/f24.png', alt='')


        .row.justify-content-center.align-items-center
          .col-md-6.mb-4.mb-md-0
            h4.mb-4 #[em Data modeler and conceptual/logical]
            p Un modelador de datos y diseñador conceptual/lógico es quien organiza una gran cantidad de elementos y crea estructuras de datos que están en sintonía con la forma en que los usuarios accederán a la información y a los tipos de informes y consultas que ejecutarán, tal y como se determinó durante la fase de alcance y las primeras etapas de diseño.

          .col-md-4
            figure
              img(src='@/assets/curso/temas/t4/f25.png', alt='')


        .row.justify-content-center.align-items-center
          .col-md-6.mb-4.mb-md-0
            h4.mb-4 #[em Database administrator and physical database designer]
            p El administrador de bases de datos o diseñador de bases de datos físicas es el encargado de gestionar y mantener la base de datos segura y actualizada. Crea sistemas de respaldo para que la información no se pierda si surgen problemas y crea la forma de organizar las bases de datos para hacerlas más rápidas o fáciles de usar.

          .col-md-4
            figure
              img(src='@/assets/curso/temas/t4/f26.png', alt='')

        .row.justify-content-center.align-items-center
          .col-md-6.mb-4.mb-md-0
            h4.mb-4 #[em Middleware specialist]
            p Este especialista se asegura de que los datos se trasladen de forma eficiente y precisa al entorno del almacén de datos, ya sea mediante herramientas o código personalizado. Además, requiere de las funciones de #[em middleware] de extracción, selección, transformación y otras tareas para convertir los datos de origen en datos listos para el almacén.


          .col-md-4
            figure
              img(src='@/assets/curso/temas/t4/f27.png', alt='')



    Separador

    .titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h3 Fuentes de datos



    .row.justify-content-around.align-items-center.mb-5
      .col-md-6
        figure
          img(src='@/assets/curso/temas/t4/f28.png', alt='')

      .col-md-6.mb-4.mb-md-0
        h3(data-aos="fade-right")
          i.fas.fa-square.fae.me-3
          | ¿Qué es una fuente de datos?
        p.mb-4 Es el lugar donde se obtienen datos e informes, que pueden ser una base de datos, un archivo plano, un archivo XML o cualquier otro formato que un sistema pueda leer. Contiene información detallada y que es utilizada en el proceso empresarial para generar análisis que ayudarán a tomar decisiones futuras. Actúa como agente de reestructuración de los datos de la aplicación para hacerla más fácil de consultar e informar.
        p Sobre la importancia de una fuente de datos, el análisis de esta desempeña un papel fundamental en un proyecto de almacenamiento de información, porque todos los procesos posteriores de extracción y transformación dependen de los datos que contienen estas fuentes, teniendo en cuenta su estructura en cada dato.
    .col-md-10.mx-auto.mb-5
      .cajon.color-acento-botones.p-4.color-cajon-segundo
        p.mb-0 Recuerde explorar los demás recursos que se encuentran disponibles en este componente formativo; para ello, diríjase al menú principal, donde encontrará la síntesis, una actividad didáctica para reforzar los conceptos estudiados, material complementario, entre otros.
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
