<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 3
      h1 Fundamentos de SOC - #[em Security Operation Center]
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8.order-lg-1.order-2
        p(data-aos="fade-right") Un centro de operaciones de seguridad o SOC, se puede entender como la conformación de un equipo de técnicos, profesionales y especialistas con habilidades en seguridad digital e infraestructura tecnológica que se apoyan en el uso de herramientas #[em hardware] y #[em software] para lograr cumplir con la responsabilidad de detectar, analizar y responder ante eventos, vulnerabilidades e incidentes de ciberseguridad.
        .cajon.color-acento-contenido.p-4(data-aos="fade-right") 
          p.mb-0 El Centro de Operaciones de Seguridad, SOC, se refiere al equipo responsable de garantizar la seguridad de la información. El SOC es una plataforma que permite la supervisión y administración de la seguridad del sistema de información a través de herramientas de recogida, correlación de eventos e intervención remota. El SIEM (#[em Security Information Event Management]) es la principal herramienta del SOC ya que permite gestionar los eventos de un sistema de información (Oracle.com, 2021).
      .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
        img(src='@/assets/curso/tema3/img01.png' alt="Imagen decorativa")
    
    p.mb-5(data-aos="fade-right") A continuación, se detallan algunos conceptos y elementos generales de las etapas de operación de un SOC, que favorecen un correcto funcionamiento:

    TabsB.color-secundario.mb-4(data-aos="zoom-in")
      .row.justify-content-center.p-lg-5.p-4(titulo="Prevención" :icono="require('@/assets/curso/tema3/img02.svg')")
        .col-lg-8.order-lg-1.order-2
          p.mb-0 Con base en la experiencia y adopción de buenas prácticas de ciberseguridad, el SOC debe apropiar medidas de prevención a nivel técnico y de conciencia en la organización. Entre las soluciones preventivas se pueden considerar aplicación de controles de seguridad (#[em Firewalls, AntiMalware], etc.), el monitoreo continuo de la seguridad, el análisis y gestión de las vulnerabilidades técnicas.
        .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4
          img(src='@/assets/curso/tema3/img02.png' alt="Imagen decorativa")
      .row.justify-content-center.p-lg-5.p-4(titulo="Detección" :icono="require('@/assets/curso/tema3/img03.svg')")
        .col-lg-8.order-lg-1.order-2
          p.mb-0 Consiste en el monitoreo constante de los eventos para detectar amenazas, vulnerabilidades, intrusiones y fallos de seguridad, para responder de manera rápida y eficaz. La principal herramienta que apoya esta etapa son las SIEM.
        .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4
          img(src='@/assets/curso/tema3/img03.png' alt="Imagen decorativa")
      .row.justify-content-center.p-lg-5.p-4(titulo="Análisis" :icono="require('@/assets/curso/tema3/img04.svg')")
        .col-lg-8.order-lg-1.order-2
          p.mb-0 En esta etapa se deben analizar los eventos detectados para determinar si corresponden a amenazas reales o si son falsas alertas. Los sistemas SIEM ayudan en el proceso de análisis con su base de datos de conocimientos y experiencias anómalas, registradas previamente, así como en la configuración de las reglas de cumplimiento.
        .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4
          img(src='@/assets/curso/tema3/img04.png' alt="Imagen decorativa")
      .row.justify-content-center.p-lg-5.p-4(titulo="Respuesta" :icono="require('@/assets/curso/tema3/img05.svg')")
        .col-lg-8.order-lg-1.order-2
          p.mb-0 Consiste en las acciones que se toman para responder frente a un evento o incidentes de ciberseguridad; las mismas deben estar planificadas de manera que se apliquen las medidas o controles de forma eficaz.
        .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4
          img(src='@/assets/curso/tema3/img05.png' alt="Imagen decorativa")

    separador
    #t_3_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 3.1 Objetivos de los SOC
    
    p(data-aos="fade-right") El objetivo de un SOC es detectar, analizar y corregir incidentes de ciberseguridad utilizando soluciones tecnológicas y enfoques diferentes. Estos supervisan y analizan la actividad en redes, servidores, terminales, bases de datos, aplicaciones, sitios #[em web] y otros sistemas, en busca de señales débiles o comportamientos anormales que puedan indicar un incidente de seguridad o un compromiso (Oracle.com, 2021).
    p.mb-5(data-aos="fade-right") El SOC debe garantizar que los posibles incidentes de seguridad se identifiquen, analicen, defiendan, investiguen e informen adecuadamente. Los SOC están generalmente compuestos por analistas e ingenieros de seguridad, así como por gerentes que supervisan las operaciones de seguridad (Oracle.com, 2021).

    .row.justify-content-center.mb-5
      .col-lg-5.mb-lg-0.mb-4(data-aos="fade-right")
        .tarjeta.color-acento-contenido.h-100.p-4
          .row.mb-4
            .col-sm-3.col-4
              img(src='@/assets/curso/tema3/img06.svg' alt="Imagen decorativa")
          .h4 ¡Atención!
          p.mb-0 Las capacidades adicionales de algunas SOC pueden incluir el análisis avanzado, el criptoanálisis y la ingeniería inversa del #[em malware] para analizar los incidentes.
      .col-lg-5.mb-lg-0.mb-4(data-aos="fade-left")
        .tarjeta.color-secundario.h-100.p-4
          .row.mb-4
            .col-sm-3.col-4
              img(src='@/assets/curso/tema3/img07.svg' alt="Imagen decorativa")
          .h4.text-white ¡Importante!
          p.text-white.mb-0 Los equipos de SSC trabajan en estrecha colaboración con los equipos de respuesta para garantizar que el problema de seguridad se aborde adecuadamente una vez que se ha descubierto.

    .row.justify-content-end.align-items-center.mb-4
      .col-lg-4.col-6.px-5.img-01.mb-lg-0.mb-4(data-aos="fade-right")
        img(src='@/assets/curso/tema3/img08.png' alt="Imagen decorativa")
      .col-3.d-lg-none.d-flex
      .col-lg-9
        .tarjeta.BG08.py-4.ps-lg-5.ps-4.pe-4
          p.ms-lg-5(data-aos="fade-left") Los objetivos de un centro de operaciones de seguridad (SOC), deben enfocarse en:
          ul.lista-ul--color.ms-lg-5
            li(style="margin-bottom: 2px" data-aos="fade-left")
              i.fas.fa-check-circle(style="color: #500C75;")
              | Reducir riesgos y tiempo de indisponibilidad de aplicaciones y servicios.
            li(style="margin-bottom: 2px" data-aos="fade-left")
              i.fas.fa-check-circle(style="color: #500C75;")
              | Control y prevención de amenazas.
            li(style="margin-bottom: 2px" data-aos="fade-left")
              i.fas.fa-check-circle(style="color: #500C75;")
              | Disminuir la carga de trabajo administrativa del personal de seguridad.
            li(style="margin-bottom: 2px" data-aos="fade-left")
              i.fas.fa-check-circle(style="color: #500C75;")
              | Establecer al personal de seguridad y definición responsabilidades.
            li(style="margin-bottom: 2px" data-aos="fade-left")
              i.fas.fa-check-circle(style="color: #500C75;")
              | Indicar los tiempos de soporte y escalamiento de eventos.
            li(style="margin-bottom: 2px" data-aos="fade-left")
              i.fas.fa-check-circle(style="color: #500C75;")
              | Definir los procesos de auditoría y soportes de cumplimiento.
            li(style="margin-bottom: 2px" data-aos="fade-left")
              i.fas.fa-check-circle(style="color: #500C75;")
              | Responder a incidentes y recuperación.

    separador
    #t_3_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 3.2 Alcance

    p(data-aos="fade-right") El alcance de un SOC puede ser establecido según los requisitos del negocio, y se deben determinar los servicios y aplicaciones a proteger, así como las redes y otros activos de información que se consideren.
    p.mb-5(data-aos="fade-right") A continuación, se describen los aspectos necesarios para definir el alcance de un SOC:

    .row.justify-content-center.mb-4
      .col-lg-6.mb-lg-0.mb-4(data-aos="fade-right")
        ImagenInfografica.color-secundario
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/tema3/img09.svg')
          .tarjeta.BG09.p-3(x="20.4%" y="75%" numero="+")
            p.mb-0 En el marco de cumplimientos legales, contractuales y de las estrategias operacionales que la compañía haya establecido. 
          .tarjeta.BG09.p-3(x="78%" y="75%" numero="+")
            p.mb-0 Se deben considerar los sistemas, servicios y aplicaciones, como los servidores de bases de datos y aplicaciones, que actuarán como fuentes de eventos para el SIEM."
      .col-lg-6.mb-lg-0.mb-4(data-aos="fade-left")
        ImagenInfografica.color-secundario
          template(v-slot:imagen)
            figure(style="width: 95%")
              img(src='@/assets/curso/tema3/img10.svg')
          .tarjeta.BG09.p-3(x="20%" y="77%" numero="+")
            p.mb-0 Es esencial considerar las capacidades del personal disponible y definir responsabilidades alcanzables dentro del contexto, asegurando una asignación adecuada y realista de tareas."
          .tarjeta.BG09.p-3(x="74.5%" y="77%" numero="+")
            p.mb-0 De acuerdo con el presupuesto, recursos y herramientas de ciberseguridad que se destinen para la implementación y operación del SOC se establece el alcance y objetivos que se permitan cumplir.
          


 


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
