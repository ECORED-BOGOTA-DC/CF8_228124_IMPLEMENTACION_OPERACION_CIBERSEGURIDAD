<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 6
      h1 Gestión de incidentes de seguridad digital
    
    .row.justify-content-center.mb-5
      .col-lg-4.col-8.mb-lg-0.mb-4(data-aos="fade-right")
        img(src='@/assets/curso/tema6/img01.png' alt="Imagen decorativa")
      .col-lg-8
        p(data-aos="fade-left") La gestión de incidentes de seguridad digital consiste en un proceso continuo con una serie de actividades para el manejo adecuado de incidentes de seguridad digital; dichas actividades se enfocan en identificar y responder ante vulnerabilidades, eventos e incidentes de seguridad digital que se presenten en el desarrollo de operaciones tecnológicas y actividades de los usuarios en el uso de los sistemas de información.
        p(data-aos="fade-left") Este proceso abarca preparación, detección, análisis y recuperación, garantizando la confidencialidad, integridad y disponibilidad de los servicios tecnológicos en situaciones de seguridad.
        p.mb-0(data-aos="fade-left") Se invita a conocer los conceptos y elementos clave de la gestión de incidentes de seguridad, visualizando el recurso que se presenta a continuación. 

    .BG08.p-4.mb-5(data-aos="zoom-in")
      SlyderA(tipo="b")
        .row.justify-content-center.px-4
          .col-lg-6.order-lg-1.order-2
            .h4 Equipo de respuesta a incidentes
            p.mb-0 Equipo con miembros debidamente capacitados y confiables que se encarga de manejar, apropiadamente, los incidentes durante su ciclo de vida. Se conocen como #[b equipo de respuesta a incidentes de seguridad de la información ISIRT], del inglés Information Security Incident Response Team. Su función básica está orientada a detectar y responder frente a incidentes de seguridad de la información o seguridad digital, para proteger y recuperar los sistemas de información; aplicaciones, programas en red, servidores, entre otras.
          .col-lg-6.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            img(src='@/assets/curso/tema6/img02.png' alt="Imagen decorativa")
        .row.justify-content-center.px-4
          .col-lg-6.order-lg-1.order-2
            .h4 Usuarios
            p.mb-0 Son las personas, procesos de una organización u organizaciones que hacen uso de servicios tecnológicos supervisados y monitoreados por un equipo de respuestas a incidentes.
          .col-lg-6.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            img(src='@/assets/curso/tema6/img03.png' alt="Imagen decorativa")
        .row.justify-content-center.px-4
          .col-lg-6.order-lg-1.order-2
            .h4 Evento de seguridad digital
            p.mb-0 Suceso que indica una posible violación de la seguridad digital o falla de los controles, lo que supone un potencial incidente de seguridad digital. Los eventos de seguridad digital, detectados y tratados a tiempo, minimizan el riesgo de impacto adverso en las organizaciones.
          .col-lg-6.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            img(src='@/assets/curso/tema6/img04.png' alt="Imagen decorativa")
        .row.justify-content-center.px-4
          .col-lg-6.order-lg-1.order-2
            .h4 Incidente de seguridad digital
            p.mb-0 Son uno o una serie de eventos de seguridad digital relacionados e identificados, que pueden afectar los componentes y servicios tecnológicos de una organización, impactando de manera adversa las operaciones de negocio.
          .col-lg-6.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            img(src='@/assets/curso/tema6/img05.png' alt="Imagen decorativa")
        .row.justify-content-center.px-4
          .col-lg-6.order-lg-1.order-2
            .h4 Reporte de incidentes de seguridad digital
            p.mb-0 Actividades de notificación de sucesos que representan posibilidad de ocurrencia de vulnerabilidades o incidentes, presentes o futuros, que pueden ser realizadas por los usuarios de los sistemas de información en una organización. Generalmente, los reportes de incidentes de seguridad los realizan los usuarios a los puntos de contacto o equipos de seguridad, según como se haya estructurado en la organización.
          .col-lg-6.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            img(src='@/assets/curso/tema6/img06.png' alt="Imagen decorativa")
        .row.justify-content-center.px-4
          .col-lg-6.order-lg-1.order-2
            .h4 Manejo de incidentes
            p.mb-0 Actividades para informar, evaluar, responder y tratar incidentes de seguridad y aprender de ellos. El manejo de incidentes depende de la capacidad del equipo de respuestas, las herramientas de seguridad como los SIEM y los demás recursos que se tengan disponibles en la organización.
          .col-lg-6.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            img(src='@/assets/curso/tema6/img07.png' alt="Imagen decorativa")
        .row.justify-content-center.px-4
          .col-lg-6.order-lg-1.order-2
            .h4 Respuesta a incidentes
            p.mb-0 Acciones que se aplican para mitigar o resolver un incidente de seguridad; pueden enfocarse en #[b proteger] para evitar impactos adversos mayores, y en #[b restaurar] para recuperar elementos impactados y lograr volver a las operaciones normales de un sistema de información, incluyendo sus datos e información.
          .col-lg-6.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            img(src='@/assets/curso/tema6/img08.png' alt="Imagen decorativa")
        .row.justify-content-center.px-4
          .col-lg-6.order-lg-1.order-2
            .h4 Punto de contacto - PoC
            p.mb-0 Es un rol, dentro de una organización, que actúa como referente para la gestión de incidentes; desempeña actividades de comunicación entre los usuarios de los sistemas de información y los equipos de respuesta a incidentes, para las gestiones adecuadas de los mismos. El PoC puede ser parte de un equipo de respuestas a incidentes (ISIRT).
          .col-lg-6.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            img(src='@/assets/curso/tema6/img09.png' alt="Imagen decorativa")
        .row.justify-content-center.px-4
          .col-lg-6.order-lg-1.order-2
            .h4 Investigación de seguridad digital
            p.mb-0 Desarrollo de actividades de revisión, examen e indagación para el análisis e interpretación de uno o una serie de sucesos para ayudar a comprender un incidente de seguridad digital.
          .col-lg-6.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            img(src='@/assets/curso/tema6/img10.png' alt="Imagen decorativa")
            
    separador
    #t_6_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 6.1 Estándares y #[em frameworks]
    
    p.mb-5(data-aos="fade-right") Los estándares y marcos de referencia (#[em frameworks]) de gestión de incidentes de seguridad son las referencias base para adoptar, estructurar, modelar y documentar un proceso adecuado de gestión de incidentes de seguridad digital.

    .BGM07.py-4.px-md-5.px-4.mb-5
      .row.justify-content-around.align-items-center
        .col-md-4.col-sm-6.col-8.mb-4.mb-md-0.px-5(data-aos="fade-right")
          img.mx-auto(src="@/assets/curso/tema2/img02.svg")
        .col-lg-6.col-md(data-aos="fade-left")
          .titulo-segundo.color-primario  
            h3 Estándares y #[em frameworks] para la gestión de incidentes de seguridad digital
          p Para profundizar en el conocimiento, asimilación e importancia de tales estándares, para la gestión de incidentes de seguridad, haga atento estudio del Anexo_3_EstandaresYFrameworks.
          a.boton.color-acento-botones.texto-blanco(:href="obtenerLink('/downloads/Anexo_3_EstandaresYFrameworks.pdf')" target="_blank" type="application/pdf")
            span Descargar
            i.fas.fa-file-download
    
    separador
    #t_6_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 6.2 Características de la gestión de incidentes de seguridad
    
    p(data-aos="fade-right") La gestión de incidentes de seguridad digital tiene particularidades o características que la convierten en un aspecto clave dentro de la ciberseguridad.
    p(data-aos="fade-right") La preparación, monitoreo de las funcionalidades tecnológicas y controles de ciberseguridad, comunicación, análisis y respuesta ante incidentes, hacen que la gestión de incidentes de seguridad digital sea necesaria de incorporar en los modelos de seguridad de la información, sistemas de gestión de la seguridad de la información y en la aplicación y operación de la ciberseguridad.
    p.mb-5(data-aos="fade-right") Las siguientes características de la gestión de incidentes de seguridad digital, aportan gran valor a la ciberseguridad:
    
    SlyderB.mb-5(:datos="datosSlyder" data-aos="zoom-in")

    separador
    #t_6_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 6.3 Aplicación de la gestión de incidentes de seguridad
    
    p(data-aos="fade-right") La gestión de incidentes de seguridad digital puede ser aplicada en varios contextos, entendiendo que la misma puede ser parte interiorizada de un área tecnológica en una organización, o bien un servicio ofrecido por una empresa dedicada a la ciberseguridad. Puede aplicarse la gestión de incidentes de seguridad digital, como los servicios propios dentro la organización o como un servicio para terceros (clientes).
    p.mb-5(data-aos="fade-right") La gestión de incidentes de seguridad digital puede ser aplicada, principalmente, en algunos de los siguientes escenarios, ya sea como servicios propios o para terceros:

    .BG12.px-lg-0.px-4.pt-4
      .row.justify-content-center
        .col-lg-6.mb-5(data-aos="zoom-in")
          ImagenInfografica.color-acento-botones
            template(v-slot:imagen)
              figure
                img(src='@/assets/curso/tema6/img17.svg')
            .tarjeta.color-acento-contenido.p-3(x="29%" y="14%" numero="+")
              .h4 Data Center
              p.mb-0 Centros de datos conformados por equipos de infraestructura tecnológica y responsables de la ciberseguridad de los sistemas, servicios y elementos de la red.
            .tarjeta.color-acento-contenido.p-3(x="85%" y="30%" numero="+")
              .h4 SOC, Security Operation Center
              p.mb-0 Centros de operación de seguridad que son responsables de la ciberseguridad de los sistemas, servicios y elementos de la red.
            .tarjeta.color-acento-contenido.p-3(x="28%" y="65%" numero="+")
              .h4 Departamentos de sistemas
              p.mb-0 Áreas de tecnología responsables de la ciberseguridad de los sistemas, servicios y elementos de la red.
            .tarjeta.color-acento-contenido.p-3(x="88%" y="60%" numero="+")
              .h4 NOC, Network Operation Center
              p.mb-0 Centros de operación de redes de datos encargados de la ciberseguridad de los sistemas, servicios y elementos de la red.
        .col-lg-8.mb-5(data-aos="flip-up")
          .tarjeta.color-primario.p-4.text-white
            .h4 ¡Muy importante!
            p.mb-0 La aplicación de las buenas prácticas de la gestión de incidentes de seguridad digital debe estar enfocada en detectar, informar, evaluar, responder, tratar, aprender y concientizar sobre los eventos, incidentes y vulnerabilidades de seguridad digital, para tener mayor comprensión sobre las amenazas y riesgos de ciberseguridad de las partes interesadas de una organización.
            

</template>

<script>
export default {
  name: 'Tema6',
  data: () => ({
    datosSlyder: [
      {
        titulo: 'Preparación',
        texto:
          'Permite que la planificación de implementación, de controles de seguridad y no se enfoque únicamente, en la protección simplificada, sino también en la prevención de incidentes de seguridad, de tal forma que se incorporen soluciones de seguridad o configuraciones especiales que permitan el monitoreo y control de la ciberseguridad.',
        imagen: require('@/assets/curso/tema6/img11.jpg'),
      },
      {
        titulo: 'Monitoreo',
        texto:
          'Aporta una visión constante de los eventos en los dispositivos, servicios y demás elementos de la red, logrando una monitorización constante de los sucesos anómalos, favoreciendo una mejor respuesta y control de los incidentes de ciberseguridad.',
        imagen: require('@/assets/curso/tema6/img12.jpg'),
      },
      {
        titulo: 'Comunicación',
        texto:
          'Incorpora la comunicación como estrategia para las actividades de alertas y respuestas tempranas ante incidentes, de tal manera que los usuarios de los sistemas, servicios y elementos de la red puedan reportar y ser informados sobre el estado de la ciberseguridad.',
        imagen: require('@/assets/curso/tema6/img13.jpg'),
      },
      {
        titulo: 'Análisis',
        texto:
          'Se adquiere una capacidad analítica sobre los eventos, incidentes y vulnerabilidades de ciberseguridad, que sirve para entender el comportamiento de amenazas y los riesgos generados, con lo cual los equipos dan respuesta a incidentes y pueden tomar acciones para el aislamiento y contención de amenazas, lograr la protección de los activos de información.',
        imagen: require('@/assets/curso/tema6/img14.jpg'),
      },
      {
        titulo: 'Respuesta',
        texto:
          'Logra que los equipos den respuesta a incidentes, adquieran un lineamiento sistémico para responder ante eventos, incidentes y vulnerabilidades de ciberseguridad y contrarrestar (contener y erradicar) las amenazas.',
        imagen: require('@/assets/curso/tema6/img15.jpg'),
      },
      {
        titulo: 'Conocimiento',
        texto:
          'Aporta a la ciberseguridad una base de conocimiento de las lecciones aprendidas de los sucesos adversos, logrando así mejorar los conocimientos y habilidades en relación con los eventos, incidentes y vulnerabilidades para una mejor gestión de incidentes de seguridad digital.',
        imagen: require('@/assets/curso/tema6/img16.jpg'),
      },
    ],
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
