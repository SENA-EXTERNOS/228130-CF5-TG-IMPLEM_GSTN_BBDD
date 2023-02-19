<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Introducción a la bodega de datos

    p.mb-5 Es importante tener presente que una bodega de datos, básicamente, se trata de una colección de datos, que está orientada a hechos relevantes del negocio; se encuentra de forma integrada y se acepta como una de las características más importantes, el manejo del tiempo como referencia para la toma de decisiones.


    h3(data-aos="fade-right")
      i.fas.fa-square.faa.me-3
      | ¿Qué es una bodega de datos?

    .row.justify-content-center.mb-5
      .col-md-8.order-md-first.order-last
        p.mb-4 También llamado <i>data warehouse</i> (DW), es un sistema de almacenamiento digital de datos que maneja grandes cantidades de información, de diferentes fuentes, con el objetivo de alimentar los procesos de inteligencia de negocios (BI, por sus siglas en inglés), informes, consultas y analíticas (SAP, s. f.). Del mismo modo, el DW se encarga de dar soporte a los diferentes requerimientos de manera que las empresas puedan convertir sus datos en información valiosa y tomar mejores decisiones a partir de estos. En suma, un DW guarda los datos tanto históricos como actuales en una sola ubicación y son la única fuente confiable de información para una organización (SAP, s. f.).
        p Una bodega de datos es una tecnología que acumula información diversa y de manera central de una empresa y que facilita la integración y procesamiento de todos los registros. El DW brinda un valor agregado de gran utilidad para generar consultas e informes y optimiza la toma de decisiones de una organización. Asimismo, este almacén electrónico registra todas las actividades o la vida de una empresa de manera fácil y rápida para su análisis, lo cual contribuye a la toma de decisiones.
      .col-md-4
        figure
          img(src="@/assets/curso/temas/t1/f1.png", alt="programador sentado con un laptop en las piernas")

    TabsC.color-acento-contenido.mb-5
      .py-4.py-md-5(titulo="¿Cuál es su finalidad?")
        .row.justify-content-around.align-items-center
          .col-md-6.tarjeta.fcasiblanco.p-3
            img(src='@/assets/curso/temas/t1/f2.png', alt='')

          .col-md-6.mb-4.mb-md-0
            p
              i.fas.fa-circle.text-small.fab.me-2
              | Almacenar datos de calidad que sean útiles para su uso en los análisis de la empresa.

            p
              i.fas.fa-circle.text-small.fab.me-2
              | Mantener un registro completo de las actividades de la empresa.

            p
              i.fas.fa-circle.text-small.fab.me-2
              | Ayudar al funcionamiento de las aplicaciones que permiten la toma de decisiones.

      .py-4.py-md-5(titulo="Los siguientes son los tipos de datos en un DW")
        .row.justify-content-around.align-items-center
          .col-md-6.tarjeta.fcasiblanco.p-3
            img(src='@/assets/curso/temas/t1/f3.png', alt='')
          .col-md-6.mb-4.mb-md-0
            p <b>Datos de funcionamiento de la empresa:</b> se producen por aplicaciones corporativas, como las que la organización utiliza para satisfacer los pedidos de productos de los clientes o para gestionar las transacciones financieras. Son la materia prima para un almacén de datos.

      .py-4.py-md-5(titulo="Integración de los datos del negocio")
        .row.justify-content-around.align-items-center
          .col-md-6.tarjeta.fcasiblanco.p-3
            img(src='@/assets/curso/temas/t1/f4.png', alt='')

          .col-md-6.mb-4.mb-md-0
            p Se construye para mejorar la calidad y sincronizar dos o más aplicaciones corporativas, como una lista maestra de clientes. Los datos se aprovechan para integrar aplicaciones que no fueron diseñadas para funcionar entre sí.

      .py-4.py-md-5(titulo="Datos de seguimiento del negocio:")
        .row.justify-content-around.align-items-center
          .col-md-6.tarjeta.fcasiblanco.p-3
            img(src='@/assets/curso/temas/t1/f5.png', alt='')
          .col-md-6.mb-4.mb-md-0
            p presentados a los usuarios finales para la elaboración de informes y apoyo a la toma de decisiones, como su cuadro de mando financiero. Los datos se limpian para permitir a los usuarios comprender mejor el progreso y evaluar las relaciones causa-efecto de los datos.

    .bloque-texto-a.color-primario.invert.p-4.p-md-5.mb-5
      .row.m-0.align-items-center.justify-content-between
        .col-lg-8
          .bloque-texto-a__texto.p-4
            p.mb-0 En la historia de la bodega de datos, este concepto surge a finales de los años ochenta, como respuesta a la necesidad de facilitar la consolidación de información en los sistemas de apoyo a la decisión o <i>decision support systems</i> (DSS), con el trabajo de los investigadores de IBM, Barry Devlin y Paul Murphy (Biscobing, 2021). Aunque fue William H. Inmon, conocido como el padre del <i>data warehousing</i>, quien acuñó el término <i>data warehouse</i>, desde las décadas de los setenta y ochenta los datos comenzaron a expandirse y las organizaciones necesitaban una forma fácil de almacenar y acceder a dicha información (SAS, s. f.).
        .col-lg-4.mb-4.mb-lg-0
          figure
            img(src='@/assets/curso/temas/t1/f6.svg', alt='')



    .tarjeta.linea-tiempo.p-4.mb-5
      LineaTiempoC.color-primario(text-small)
        .row.justify-content-around.align-items-center(titulo="Paso 1")
          .col-md-6.mb-4.mb-md-0
            p.mb-3 En 1992, William H. Inmon publicó su libro <i>Building the Data Warehouse (Construcción del almacén de datos)</i>, declarado como principio fundamental de la tecnología de los almacenes de datos (SAS, s. f.). En este último concepto Inmon utiliza un enfoque “descendente”, “donde primero se establece un repositorio centralizado, y luego se crean depósitos de datos – que contienen subconjuntos de datos específicos – dentro de ese repositorio” (SAS, s. f., párr. 2).
            p.mb-0 Por otro lado, a mediados de los noventa, Ralph Kimball, otro experto en tecnología, publicó <i>The Data Warehouse Toolkit (Herramientas para almacenes de datos)</i>. Kimball empleó una táctica un poco diferente sobre los <i>data warehousing</i>, con un enfoque “ascendente”, “donde se integran depósitos de datos <i>data warehouse</i>” (SAS, s. f., párr. 3).

          .col-md-6
            figure
              img(src='@/assets/curso/temas/t1/f8.png', alt='')


        .row.justify-content-around.align-items-center(titulo="Paso 2")
          .col-md-6.mb-4.mb-md-0
            p Cuando se trata del diseño de bodegas de datos (DWH, por sus siglas en inglés), existen dos de los más usados enfoques de almacenamiento: el de Inmon y el de Kimball. Durante años se ha debatido sobre qué metodología es mejor y más efectiva para las empresas; sin embargo, ambas tienen sus ventajas y desventajas (Naeem, 2020).

          .col-md-6
            figure
              img(src='@/assets/curso/temas/t1/f9.png', alt='')

        .row.justify-content-around.align-items-center(titulo="Paso 3")
          .col-md-6.mb-4.mb-md-0
            p <b>1. Metodología Inmon:</b> cuenta “con un esquema que parte de la construcción del modelo de datos corporativos, elaborado al más alto nivel de abstracción, para luego derivar la estructura del modelo de datos, para el diseño de la bodega” (Bahamón, 2003, p. 15).

          .col-md-6
            .titulo-sexto.color-acento-contenido(data-aos='fade-right')
              p.mb-0 <i>Referente de la metodología de Inmon</i>
            figure
              img(src='@/assets/curso/temas/t1/f10.svg', alt='')

        .row.justify-content-around.align-items-center(titulo="Paso 4")
          .col-md-6.mb-4.mb-md-0
            p <b>2. Metodología Kimball:</b> cuenta “con un esquema centrado en la identificación de los procesos de la empresa, como elemento clave para la definición de la estructura de variables y dimensiones” (Bahamón, 2003, p. 15).

          .col-md-6
            .titulo-sexto.color-acento-contenido(data-aos='fade-right')
              p.mb-0 <i>Referente de la metodología de Kimball</i>
            figure
              img(src='@/assets/curso/temas/t1/f11.svg', alt='')

        .row.justify-content-around.align-items-center(titulo="Paso 5")
          .col-md-6.mb-4.mb-md-0
            p El almacén de datos proporciona la plataforma para implementar, gestionar y entregar estos activos de datos clave. Por tanto, es el proceso de creación de una solución a la gestión de los datos por medio de una arquitectura que permita el procesamiento analítico y de la información, a pesar de las barreras de plataforma, aplicación, organización, entre otras.

          .col-md-6
            figure
              img(src='@/assets/curso/temas/t1/f12.png', alt='')

        .row.justify-content-around.align-items-center(titulo="Paso 6")
          .col-md-6.mb-4.mb-md-0
            h3.mb-2 Tipos de almacenes de datos (DWH)
            p.mb-2 Existen tres tipos principales de DWH, que se utilizan especialmente en sistemas empresariales:
            p.mb-2 <b>1.	Almacén de datos empresariales (EDW):</b> es centralizado y suministra un enfoque integral para establecer y presentar datos.
            p.mb-2 <b>2.	Almacén de datos operativos (ODS):</b> es adecuado y puede respaldar los informes de una empresa cuando el procesamiento de transacciones en línea (OLTP, por sus siglas en inglés) o el DWH no lo puedan hacer.
            p.mb-2 <b>3.	Mercado de datos:</b> diseñado para datos en los departamentos de ventas, finanzas y cadena de suministro.

          .col-md-6
            figure
              img(src='@/assets/curso/temas/t1/f13.png', alt='')

        .row.justify-content-around.align-items-center(titulo="Paso 7")
          .col-md-6.mb-4.mb-md-0
            p.mb-3 Las bodegas de datos se basan en un modelo multidimensional. <b>¿Qué es una base de datos multidimensional?</b>
            p Es una matriz de dimensiones que permite guardar y recuperar eficientemente un gran volumen de datos, relacionados, vistos y analizados desde diferentes perspectivas. Ofrecen, además, una mejor comprensión y consulta de la información por medio de análisis complejos.

          .col-md-6
            figure
              img(src='@/assets/curso/temas/t1/f14.png', alt='')

        .row.justify-content-around.align-items-center(titulo="Paso 8")
          .col-md-6.mb-4.mb-md-0
            h3.mb-2 ¿Qué es un modelado dimensional?
            p Es una matriz que contiene todos los datos de una forma sencilla, estándar y accesible. Se compone de una tabla de hechos y varias tablas de dimensión.

          .col-md-6
            .titulo-sexto.color-acento-contenido(data-aos='fade-right')
              p.mb-0 <i>Referente de un modelado dimensional</i>
            figure
              img(src='@/assets/curso/temas/t1/f7.svg', alt='')

    Separador

    .titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h3 Elementos de una bodega de datos

    p.mb-4 Un almacén de datos se compone de muchos elementos diferentes y cada uno se implementa de varias maneras. Estos incluyen la información ilustrada por la siguiente infografía:

    ImagenInfografica.fab.mb-5
      template(v-slot:imagen)
        figure
          img(src='@/assets/curso/temas/t1/f15.svg', alt='')

      .tarjeta.fac.p-3(x="2%" y="48%" numero="")
        p <b>La amplitud:</b> el número de temas y focos diferentes.

      .tarjeta.fac.p-3(x="17%" y="76%" numero="")
        p El número de fuentes que proporcionarán datos brutos.

      .tarjeta.fac.p-3(x="30%" y="48%" numero="")
        p Los medios por los que se trasladan los datos desde las aplicaciones de origen y que se cargan en el almacén de datos.

      .tarjeta.fac.p-3(x="45%" y="76%" numero="")
        p Las reglas de negocio aplicadas a los datos en en bruto para producir activos de datos de alta  calidad.

      .tarjeta.fac.p-3(x="58%" y="48%" numero="")
        p Las bases de datos de destino, en las que se almacenan los activos de datos.

      .tarjeta.fac.p-3(x="72%" y="76%" numero="")
        p Los activos de datos, los elementos, el nivel de detalle de cada elemento y la cantidad de historial.

      .tarjeta.fac.p-3(x="87%" y="48%" numero="")
        p La complejidad arquitectónica general del entorno.



    p.mb-5 Entre los elementos que existen en la arquitectura de una bodega de datos, se presentan a continuación seis de ellos:

    .row.justify-content-center.mb-3
      .col-5
        figure
          img(src="@/assets/curso/temas/t1/f16.svg", alt="")
      .col-7
        AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta-acordeon")
          .row(titulo="Datos internos")
            p Es la información almacenada directamente por la empresa; por lo tanto, difícilmente, la competencia la tendrá.

          .row(titulo="Datos externos")
            p Es la información que no depende de la empresa, pero que ayuda de forma valiosa. Se puede obtener ya sea de forma cedida o comprada.

          .row(titulo="ETL")
            p conocido así por sus siglas en inglés (<i>extract, transform and load</i>), busca canalizar los datos que se almacenan en bruto para que luego sean transformados y, finalmente, listos y a disposición.

          .row(titulo="Informes")
            p Son documentos que recogen información de hechos verificados y analizados y que tienen como fin comunicar.

          .row(titulo="Análisis OLAP")
            p Es un concepto y una tecnología para la BI, que permite ejecutar un análisis multidimensional de los datos de una forma rápida e interactiva. Igualmente, ayuda a obtener información resumida de grandes bases de datos u OLTP, con la finalidad de tener análisis previamente calculados, que aceleren la búsqueda de mucha información. El OLAP se emplea principalmente en informes de negocios para las ventas, en <i>marketing</i>, en informes de dirección, en minería de datos y áreas similares.

          .row(titulo="<i>Data mining</i>")
            p También conocido en español como #[em minería de datos], son aquellos procesos y técnicas a través de los cuales se pueden explorar y comprender las grandes bases de datos y sacarles provecho, con el propósito de encontrar patrones que permitan entender qué pasó, qué está pasando y así predecir lo que pasará en el futuro.

          .row(titulo="Características")
            p.mb-3 Un sistema de almacén de datos tiene las siguientes características:
            p
              i.fas.fa-circle.text-small.fab.me-2
              | Proporciona la centralización de los activos de datos corporativos.

            p
              i.fas.fa-circle.text-small.fab.me-2
              | Está contenido en un entorno bien gestionado.

            p
              i.fas.fa-circle.text-small.fab.me-2
              | Tiene definidos procesos consistentes y repetibles para la carga de datos desde aplicaciones corporativas.

            p
              i.fas.fa-circle.text-small.fab.me-2
              | Está construido sobre una arquitectura abierta y escalable, que puede manejar la futura expansión de los datos.

            p
              i.fas.fa-circle.text-small.fab.me-2
              | Proporciona herramientas que permiten a sus usuarios procesar eficazmente.


    p.mb-5 Un <i>data warehouse</i> se compone de <i>data marts</i> y de cubos de información. Ambos se explican de la siguiente manera:


    LineaTiempoD.color-acento-contenido.mb-5
      .row(numero="1" titulo="<i>Data marts</i>")
        .col-md-6.mb-4.mb-md-0
          p Son almacenadores más pequeños y menos potentes, que contienen subconjuntos de datos. Puede haber uno por cada área o unidad.

        .col-md-6
          .titulo-sexto.color-acento-contenido(data-aos='fade-right')
            p.mb-0 <i>Referente de una data marts</i>
          figure
            img(src='@/assets/curso/temas/t1/f17.png', alt='')
            figcaption Nota. Reproducida de Advantages and Disadvantages of a Data Mart. Mbnehaddou.

      .row.justify-content-around.align-items-center(numero="2" titulo="Cubos de información")
        .col-md-6.mb-4.mb-md-0
          p Son bases de datos multidimensionales, que trascienden el esquema bidimensional de las hojas de cálculo. Su interconectividad se facilita gracias al uso de #[em middleware] o #[em software] de conexión.

        .col-md-6
          .titulo-sexto.color-acento-contenido(data-aos='fade-right')
            p.mb-0 <i>Referente de cubos de información</i>
          figure
            img(src='@/assets/curso/temas/t1/f18.png', alt='')
            figcaption Nota. Reproducida de Tratamiento de los datos: OLTP, OLAP, Data Warehouse.



    Separador
    .titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h3 Implementación de bodega de datos

    .bloque-texto-a.color-acento-contenido.p-4.p-md-5.mb-5
      .row.m-0.align-items-center.justify-content-between
        .col-lg-4.mb-4.mb-lg-0
          figure
            img(src="@/assets/curso/temas/t1/f19.png", alt="imagen relacionada")
        .col-lg-8
          .bloque-texto-a__texto.p-4
            p.mb-5 El diseño y la metodología de una bodega de datos debe ser ejecutado de acuerdo con los requerimientos definidos de cada empresa y el modelo de BI que se esté manejando. Además, se deben tener en cuenta los procesos de ETL, que crean el modelo de cómo se aloja la información en el almacén de datos, para que cada usuario tenga acceso a la información correcta.
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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
