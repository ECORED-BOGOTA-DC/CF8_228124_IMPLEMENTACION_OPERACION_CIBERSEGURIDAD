<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 1
      h1 Monitoreo y análisis de #[em logs]
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8.order-lg-1.order-2
        p(data-aos="fade-right") Consiste en realizar una revisión periódica de los controles de seguridad digital y de los sistemas informáticos, con base en los registros de eventos de los mismos. Dicho análisis, puede ser aplicado según se requiera de manera manual o automatizada.
        p(data-aos="fade-right") Los monitoreos pueden automatizarse por medio de herramientas de #[em software] facilitando el análisis y toma de decisión. 
        p.mb-0(data-aos="fade-right") Para comprender mejor la actividad de monitoreo y análisis de #[em logs], le presentamos a continuación, una descripción de conceptos y detalles importantes:
      .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
        img(src='@/assets/curso/tema1/img01.png' alt="Imagen decorativa")
    
    .row.justify-content-center.mb-5
      .col-lg-6(data-aos="zoom-in")
        ImagenInfografica.color-primario
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/tema1/img02.svg')

          .tarjeta.BG02.p-3(x="75.5%" y="21.5%" numero="+")
            p.mb-0 Consiste en un archivo plano de texto o base de datos en el cual se encuentran, cronológicamente, los eventos, sucesos y cambios que han ocurrido en un sistema informático, tales como aplicaciones, servidores, servicios de red, entre otros.
          .tarjeta.BG02.p-3(x="89%" y="74%" numero="+")
            p.mb-0 En archivos planos de texto o en bases de datos de los sistemas. Pueden ser leídos manual o automáticamente por administradores y/o auditores de sistemas, mediante herramientas especializadas como los correlacionadores, que leen #[em logs] de diversos dispositivos; también pueden relacionarlos y generar alarmas con base en las bases de conocimiento y parámetros de configuraciones previas.
          .tarjeta.BG02.p-3(x="43%" y="95%" numero="+")
            p.mb-0 Un #[em log] o registro, en cierto modo, es una huella o rastro que deja el usuario al interactuar con un sistema, elemento de red, servicio o aplicación. De tal forma que los #[em logs] son vitales como evidencia digital en el desarrollo de investigaciones dentro de una organización.
          .tarjeta.BG02.p-3(x="11%" y="59%" numero="+")
            p.mb-0 Es la recolección de datos de #[em logs] o registros, contrastarlos con bases de conocimiento (lógicas, experiencias, referencias, etc.), logrando generar salidas de datos para realizar análisis, monitorización e informes.
          .tarjeta.BG02.p-3(x="35%" y="19%" numero="+")
            p.mb-0 Consiste en la sistematización de la información de los #[em logs] de diversos dispositivos de una red, sujetos de monitoreo; de tal manera que se puedan correlacionar, analizar y entender los eventos que se están presentando en tiempo real, ayudando a la toma de acciones de respuesta o mitigación de fallos y amenazas.

    separador
    #t_1_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.1 Tipos de #[em logs]
    
    p(data-aos="fade-right") Existen diversos tipos de #[em logs] y estos son sujetos de monitoreo y análisis, por tanto, es de suma importancia lograr un entendimiento suficiente de los mismos. Los tipos de #[em logs] más frecuentes son, por un lado, los #[em logs] de sistemas operativo y red y, por otro, los #[em logs] de servicios y aplicaciones. 
    p.mb-5(data-aos="fade-right") A continuación, se presentan elementos de suma importancia sobre los tipos de #[em logs], que se deben conocer:

    .row.justify-content-center.mb-4
      .col-auto(data-aos="fade-right")
        .BGR03.px-5.py-3
          .h3.text-center.text-white.mb-0 Tipos de #[em logs]
    
    .row.justify-content-around.mb-4
      .col-lg-5.mb-lg-0.mb-4
        div(data-aos="fade-right")
          .tarjeta-avatar.mb-4
            img(src='@/assets/curso/tema1/img03.svg' alt='Imagen decorativa')
            .tarjeta.BG04
              .row.justify-content-center
                .tarjeta.color-secundario.py-2(style="padding-top: 10px !important")
                  .h4.text-center.text-white.mb-0 De sistemas operativos y red
                .p-4
                  p.mb-0 #[em Logs] de #[em hosts], sistemas operativos, Windows, GNU/Linux y #[em Routers]    
        AcordionA(tipo="b" clase-tarjeta="tarjeta BG05" data-aos="fade-right")
          div.px-2(titulo="<em>Host</em>")
            p Son puntos de conexión final en una red, tales como computadores, tabletas y dispositivos móviles, los mismos generan diversos #[em logs] que se describen a continuación.
            .tarjeta.tarjeta--blanca.p-4
              .h5.mb-0 #[em Logs] de consola, #[em logs] de sistemas (Syslog), #[em job log, operlog, hard-copy log].
          div.px-2(titulo="Windows")
            p La información sobre registros en Windows se presenta en los registros de eventos, que son sucesos que se almacenan en un registro de eventos en el equipo y se pueden observar en el visor de eventos de Windows. Incluyen eventos relacionados con el sistema, aplicaciones, seguridad y configuración.
            .tarjeta.tarjeta--blanca.p-4
              .h5.mb-0 Errores, advertencias e información.
          div.px-2(titulo="GNU/Linux")
            p Es un sistema operativo #[em Open Source], que puede recopilar #[em logs] de acuerdo con el acceso de los usuarios, características del sistema, fallo en los intentos de conexión y utilización de recursos. Esto suministra ventajas de seguridad, porque puede descubrir usos indebidos rápidamente en sus registros, pero su desventaja es su gran volumen de registros complicando la gestión de información de los #[em logs].
            .tarjeta.tarjeta--blanca.p-4
              .h5.mb-0 El nombre y localización del fichero puede variar de acuerdo con variantes y versiones de GNU/Linux.
          div.px-2(titulo="<em>Routers</em>")
            p Los #[em routers] y #[em switches] registran eventos relacionados con la conectividad y acceso a redes. Estos registros, principalmente para seguridad, contienen detalles como direcciones IP, servicios, nombres de #[em hosts] y fechas de conexión, priorizando seguridad sobre funciones de red.
            .tarjeta.tarjeta--blanca.p-4
              .h5.mb-0 Este tipo de detalles de estos #[em logs], son relevantes para la correlación de eventos dentro de un sistema SIEM.
      .col-lg-5
        div(data-aos="fade-left")
          .tarjeta-avatar.mb-4
            img(src='@/assets/curso/tema1/img04.svg' alt='Imagen decorativa')
            .tarjeta.BG04
              .row.justify-content-center
                .tarjeta.color-secundario.py-2(style="padding-top: 10px !important")
                  .h4.text-center.text-white.mb-0 De servicios o aplicaciones
                .p-4
                  p.mb-0 Serie de servicios y aplicaciones. Se deben conocer los servicios que prestan y los ficheros que aportan información de seguridad.
        AcordionA(tipo="b" clase-tarjeta="tarjeta BG05" data-aos="fade-left")
          div.px-2(titulo="De seguridad")
            p Son datos importantes que se deben investigar y cruzar entre ellos para obtener la mayor información posible, como el tráfico de red, y evitar vulnerabilidades y amenazas.
            .tarjeta.tarjeta--blanca.p-4
              ul.lista-ul--color
                li(style="margin-bottom: 2px")
                  i.fas.fa-chevron-circle-right(style="color: #FFB206;")
                  .h5.mb-0 Next Generation Firewall.
                li(style="margin-bottom: 2px")
                  i.fas.fa-chevron-circle-right(style="color: #FFB206;")
                  .h5.mb-0 #[em Antimalware].
                li(style="margin-bottom: 2px")
                  i.fas.fa-chevron-circle-right(style="color: #FFB206;")
                  .h5.mb-0 Sistema de detección de intrusiones (IDS).
                li(style="margin-bottom: 2px")
                  i.fas.fa-chevron-circle-right(style="color: #FFB206;")
                  .h5.mb-0 Proxies.
          div.px-2(titulo="Servicio de correo")
            p Los #[em logs] que se presentan en los servicios de correo aportan información sobre el origen y destino de los mensajes, como: dirección del remitente y destinatario, IP del remitente y destinatario, fecha e ID del mensaje.
            .tarjeta.tarjeta--blanca.p-4
              .h5.mb-0 Esta es información que se utiliza para el filtrado y/o reporte de Spam o correos maliciosos.
          div.px-2(titulo="Servidores de aplicaciones")
            p Son servidores que soportan herramientas #[em software] y proporcionan servicios y aplicaciones en la red pública (en Internet) o privada (dentro de la empresa). Los mismos generan una serie de #[em logs] basados en su sistema operativo.
            .tarjeta.tarjeta--blanca.p-4
              .h5.mb-0 Según servicios y aplicaciones que proporciona, dichos #[em logs] son muy útiles para un SIEM y, especialmente, para los procesos de auditoría de sistemas.
          div.px-2(titulo="Sistemas de monitorización")
            p Es un programa que tiene como finalidad la comprobación del correcto estado, funcionamiento y disponibilidad de los sistemas, redes y servicios.
            .tarjeta.tarjeta--blanca.p-4
              .h5.mb-0 Nagios, Patrol y Tivoli son los sistemas más conocidos.
          div.px-2(titulo="Otros servicios")
            p Servicios que deben ser considerados en el momento de la recopilación y análisis de #[em log], lo que dependerá de los sistemas de información de cada empresa.
            .tarjeta.tarjeta--blanca.p-4
              ul.lista-ul--color
                li(style="margin-bottom: 2px")
                  i.fas.fa-chevron-circle-right(style="color: #FFB206;")
                  .h5.mb-0 Servidores web.
                li(style="margin-bottom: 2px")
                  i.fas.fa-chevron-circle-right(style="color: #FFB206;")
                  .h5.mb-0 Base de datos.
                li(style="margin-bottom: 2px")
                  i.fas.fa-chevron-circle-right(style="color: #FFB206;")
                  .h5.mb-0 Servidor de archivos.
                li(style="margin-bottom: 2px")
                  i.fas.fa-chevron-circle-right(style="color: #FFB206;")
                  .h5.mb-0 Servidor FTP.

    separador
    #t_1_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.2 Características del monitoreo y análisis de #[em logs]
    
    p(data-aos="fade-right") El monitoreo y análisis de #[em logs] puede darse de manera automatizada o manual. Actualmente, se automatizan en la mayoría de casos para facilitar el análisis y la toma de acciones ante eventos, logrando de manera rápida el control de eventos, amenazas, vulnerabilidades e incidentes adversos.
    p.mb-5(data-aos="fade-right") Las siguientes son las características del monitoreo y análisis de #[em logs], en relación con la recopilación, correlación y almacenamiento de información:

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8.order-lg-1.order-2(data-aos="fade-right")
        AcordionA(tipo="a" clase-tarjeta="tarjeta BG06" data-aos="zoom-in")
          .row(titulo="Manual")
            p.mb-0 Este tipo de monitoreo y análisis de #[em logs] se realiza especialmente en actividades de auditoría de sistemas y análisis forenses.
          .row(titulo="Automatizada")
            p.mb-0 Es comúnmente utilizado en procesos de monitoreo de seguridad digital en tiempo real, desarrollando actividades de recolección, correlación y almacenamiento de #[em logs], dando como resultado información rápida para el análisis, reportes e informes que ayuden a identificar fallas, amenazas y demás eventos adversos de manera rápida.
          .row(titulo="<em>Logs</em> de conexiones de origen y destino")
            p.mb-0 Son los registros de conexiones de origen y destino en la red, donde se detalla el nombre del host, IP, puertos, protocolos, tiempos y fecha de conexión.
          .row(titulo="<em>Logs</em> de acceso")
            p.mb-0 Son los registros de acceso en sistemas, servicios y aplicaciones, en los cuales se describe el nombre de usuario, IP de origen, fecha y hora de acceso, intentos de accesos válidos y fallidos.
          .row(titulo="<em>Logs</em> de cambios")
            p.mb-0 Son los registros de cambios en sistemas, servicios y aplicaciones, además del nombre de usuario, cambios en la configuración (incluidos roles y contraseñas de accesos), archivos modificados, fecha y hora del cambio.
      .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
        img(src='@/assets/curso/tema1/img05.svg' alt="Imagen decorativa")

    


      
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
