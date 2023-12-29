<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 4
      h1 Técnicas de recopilación de información

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8.order-lg-1.order-2
        p(data-aos="fade-right") Dentro del proceso de Ethical Hacking - EH, la primera etapa consiste en recopilar la mayor cantidad de información posible para preparar las pruebas de análisis de vulnerabilidades y Pentest (Pruebas de Penetración a Sistemas). Esta etapa de recopilación de información se denomina Information Gathering, este concepto se sustenta en que es un paso previo que un ciberdelincuente utiliza para recoger la mayor cantidad de datos posibles para preparar con mayor eficacia un ataque a una organización u objetivo. 
        .cajon.color-acento-contenido.p-4(data-aos="fade-right") 
          p.mb-0 El atacante recolecta los datos de su objetivo por medio de fuentes públicas, tales como internet, buscadores, redes sociales y plataformas de acceso público; con la información que va recolectando, arma posibles vectores de ataque, para los cuales utilizará las herramientas técnicas que mejor le faciliten el lograr sus objetivos. 
      .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
        img(src='@/assets/curso/tema4/img01.png' alt="Imagen decorativa")

    p.mb-5(data-aos="fade-right") Ahora, se sugiere estudiar algunos conceptos y elementos clave de las técnicas de recopilación de información, así como identificar los aspectos más importantes y llevar un registro en la libreta personal de apuntes.

    AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta BG10")
      .row.justify-content-center.align-items-center(titulo="Conducta ética en ciberseguridad")
        .col-lg-8.order-lg-1.order-2
          p.mb-0 Afianzamiento ético y moral de las personas para promover el buen comportamiento y cumplimiento de los principios de seguridad de la información. Así, si una persona que se desenvuelve en el sector de las tecnologías de la información y la ciberseguridad debe mantener una conducta ética para la preservación de la seguridad en los sistemas y el entorno, gestionando de manera adecuada vulnerabilidades y amenazas y todo riesgo de ciberseguridad.
        .col-lg-3.col-6.order-lg-2.order-1.mb-lg-0.mb-4
          img(src='@/assets/curso/tema4/img02.png' alt="Imagen decorativa")
      .row.justify-content-center.align-items-center(titulo="Ethical Hacking")
        .col-lg-8.order-lg-1.order-2
          p.mb-0 Proceso de seguridad digital donde personas o equipos de personas, expertos técnicos o profesionales, realizan pruebas de seguridad digital, simulando ataques controlados y previamente planificados a los sistemas y/o activos. Este proceso busca descubrir vulnerabilidades y malas configuraciones en los sistemas y/o tecnologías utilizadas en una empresa, para aplicar correcciones, actualizaciones y controles de seguridad digital.
        .col-lg-3.col-6.order-lg-2.order-1.mb-lg-0.mb-4
          img(src='@/assets/curso/tema4/img03.png' alt="Imagen decorativa")
      .row.justify-content-center.align-items-center(titulo="Pasos del Ethical Hacking")
        .col-lg-8.order-lg-1.order-2
          ul.lista-ul--color
            li(style="margin-bottom: 2px")
              i.fas.fa-check-circle(style="color: #500C75;")
              | Establecimiento de objetivos y alcance.
            li(style="margin-bottom: 2px")
              i.fas.fa-check-circle(style="color: #500C75;")
              p.mb-0 Recopilación o Information Gathering, #[em Footprinting], escaneo y enumeración.
            li(style="margin-bottom: 2px")
              i.fas.fa-check-circle(style="color: #500C75;")
              | Ejecución, obtención de accesos y logro de objetivos planteados con evidencias.
            li(style="margin-bottom: 2px")
              i.fas.fa-check-circle(style="color: #500C75;")
              | Análisis.
            li(style="margin-bottom: 2px")
              i.fas.fa-check-circle(style="color: #500C75;")
              | Documentación o informe técnico completo y detallado.
            li(style="margin-bottom: 2px")
              i.fas.fa-check-circle(style="color: #500C75;")
              | Presentación o resumen ejecutivo.
        .col-lg-3.col-6.order-lg-2.order-1.mb-lg-0.mb-4
          img(src='@/assets/curso/tema4/img04.png' alt="Imagen decorativa")
      .row.justify-content-center.align-items-center(titulo="Vector de ataque, de red y adyacente")
        .col-lg-8.order-lg-1.order-2
          p Son los medios o canales de explotación de vulnerabilidades por parte del atacante. Facilita determinar facilidades para penetrar sistemas y determinar métodos posibles de ataque, sin intervención humana por parte de la víctima. A las vulnerabilidades se les asocia el vector de ataque, los cuales se agrupan en:
          ul.lista-ul--color
            li(style="margin-bottom: 2px")
              i.fas.fa-check-circle(style="color: #500C75;")
              p.mb-0 #[b Vector de red]: un ataque puede explotar una vulnerabilidad de manera remota por medio de servicios basados en Internet.
            li(style="margin-bottom: 2px")
              i.fas.fa-check-circle(style="color: #500C75;")
              p.mb-0 #[b Vector adyacente]: el ataque se puede realizar a la vulnerabilidad desde la misma red adyacente, en una misma red local.
        .col-lg-3.col-6.order-lg-2.order-1.mb-lg-0.mb-4
          img(src='@/assets/curso/tema4/img05.png' alt="Imagen decorativa")
      .row.justify-content-center.align-items-center(titulo="Vector local y vector físico")
        .col-lg-8.order-lg-1.order-2
          ul.lista-ul--color
            li(style="margin-bottom: 2px")
              i.fas.fa-check-circle(style="color: #500C75;")
              p.mb-0 #[b Vector local]: una vulnerabilidad puede ser explotada según las capacidades de lectura, escritura y ejecución en el sistema, se suele requerir de interacción de ingeniería social para engañar al usuario del sistema para que realice acciones maliciosas como abrir un archivo infectado. 
            li(style="margin-bottom: 2px")
              i.fas.fa-check-circle(style="color: #500C75;")
              p.mb-0 #[b Vector físico]: el atacante requiere realizar manipulación física para lograr vulnerar un sistema o componente.
        .col-lg-3.col-6.order-lg-2.order-1.mb-lg-0.mb-4
          img(src='@/assets/curso/tema4/img06.png' alt="Imagen decorativa")
      .row.justify-content-center.align-items-center(titulo="Delito cibernético")
        .col-lg-8.order-lg-1.order-2
          p.mb-0 Forma emergente de delincuencia transnacional de rápido crecimiento. Al crecimiento y expansión del internet los delincuentes han logrado sacarle provecho. Con unos dos mil millones de usuarios mundialmente, el ciberespacio es el lugar ideal para los delincuentes, quienes pueden permanecer anónimos y acceder a todo tipo de información personal que se guarda en línea Naciones Unidas. (2021).

        .col-lg-3.col-6.order-lg-2.order-1.mb-lg-0.mb-4
          img(src='@/assets/curso/tema4/img07.png' alt="Imagen decorativa")

    separador
    #t_4_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 4.1 Tipos de Information Gathering
    
    p(data-aos="fade-right") Los tipos de recolección de información hacen referencia a las distintas técnicas y variados métodos para dicha actividad; tales técnicas y métodos son de suma importancia y requieren ser comprendidas y asimiladas suficientemente con miras a su aplicación.
    p.mb-5(data-aos="fade-right") Ahora, se presenta una serie de tipos de técnicas de recopilación de información, se invita a estudiarlas a conciencia a través de la infografía:

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8.order-lg-1.order-2(data-aos="fade-right")
        TabsA.color-acento-contenido.mb-5
          .tarjeta.BG10.p-4(titulo="<em>Footprinting</em> (huella)")
            .h4 <em>Footprinting</em> (huella)
            p.mb-0 Procedimiento que reúne gran cantidad de información de la víctima u objetivo. El #[em footprinting] es activo cuando se crea en el momento que los datos personales son divulgados de manera consciente y deliberada o cuando hay contacto con el propietario. Es huella pasiva o seudónima cuando se recolecta información sin el propietario, con lo anterior se puede exponer la seguridad del objetivo.
          .tarjeta.BG10.p-4(titulo="Proceso de <em>footprinting</em>")
            .h4 Proceso de <em>footprinting</em>
            ul.lista-ul--color
              li(style="margin-bottom: 2px")
                i.far.fa-check-circle(style="color: #500C75;")
                | Se recolecta información de la organización o de personas (motores de búsqueda, redes sociales, información pública).
              li(style="margin-bottom: 2px")
                i.far.fa-check-circle(style="color: #500C75;")
                p.mb-0 Se recolecta información de la red (#[em hosts] e IP, puertos, #[em software] y aplicaciones en red).
              li(style="margin-bottom: 2px")
                i.far.fa-check-circle(style="color: #500C75;")
                p.mb-0 Se recolecta información de servidores de Internet (DNS, direcciones IP públicas, servicios o puertos públicos, #[em software]/aplicaciones públicas).
          .tarjeta.BG10.p-4(titulo="<em>Scanning</em>")
            .h4 <em>Scanning</em> o exploración
            p.mb-0 Técnicas que se utilizan para reconocer #[em host], puertos y servicios que se encuentran dentro de una red, con el fin de obtener la mayor cantidad de datos que se utilizan en la creación de una visión general de la organización para preparar un ataque a la misma.
          .tarjeta.BG10.p-4(titulo="Proceso de <em>scanning</em>")
            .h4 Proceso de <em>scanning</em>
            p.mb-0 En el proceso de escaneo o de exploración se realiza escaneo de #[em hosts], escaneo de puertos (servicios de red), escaneo de vulnerabilidades.
          .tarjeta.BG10.p-4(titulo="<em>Enumeration</em>")
            .h4 <em>Enumeration</em> o enumeración
            p.mb-0 Consiste en enumerar e identificar los nombres de #[em hosts], usuarios, recursos compartidos, servicios, entre otra información que pueda ser relevante. Esta actividad puede ser realizada paralelamente con el #[em scanning] o exploración.
          .tarjeta.BG10.p-4(titulo="¡Atención!")
            p.mb-0 Las técnicas de recopilación de información deben ser utilizadas de manera responsable, teniendo en cuenta que tiene características particulares para violentar los sistemas de una organización e incluso de las personas y la sociedad en general.
      .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
        img(src='@/assets/curso/tema4/img08.png' alt="Imagen decorativa")

    separador
    #t_4_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 4.2 Características 
    
    p(data-aos="fade-right") Las características de las técnicas de recolección son muy particulares ya que, gracias a ellas justamente, es que se facilita violentar los sistemas de una organización o de las personas y la sociedad.
    p.mb-5(data-aos="fade-right") Las características principales de las técnicas de recopilación de información se describen a continuación:

    .row.justify-content-center.mb-5
      .col-xl-3.col-lg-4.col-sm-6.col-8.mb-xl-0.mb-4(data-aos="fade-right")
        .tarjeta.tarjeta-flip.color-primario.h-100(@mouseover="indicadorTarjetaFlip = false")
          .indicador--hover(v-if="indicadorTarjetaFlip")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/tema4/img09.svg')})`}")
            .tarjeta-flip__contenido.p-xxl-5.p-xl-4.p-md-5.p-4
              h4.text-center Uso de fuentes abiertas o públicas
              p.text-center.mb-5 Obtiene la mayor cantidad de información de fuentes públicas, internet, redes sociales, plataformas, etc., que permiten conocer a una organización o a las personas.
      .col-xl-3.col-lg-4.col-sm-6.col-8.mb-xl-0.mb-4(data-aos="flip-right")
        .tarjeta.tarjeta-flip.color-primario.h-100(@mouseover="indicadorTarjetaFlip = false")
          .indicador--hover(v-if="indicadorTarjetaFlip")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/tema4/img10.svg')})`}")
            .tarjeta-flip__contenido.p-xxl-5.p-xl-4.p-md-5.p-4
              h4.text-center Exploración
              p.text-center.mb-5 Realiza procesos de escaneos técnicos no intrusivos para obtener datos técnicos de #[em hosts], puertos, servicios y vulnerabilidades para una mejor preparación de las pruebas de intrusión.     
      .col-xl-3.col-lg-4.col-sm-6.col-8.mb-xl-0.mb-4(datxlaos="flip-left")
        .tarjeta.tarjeta-flip.color-primario.h-100(@mouseover="indicadorTarjetaFlip = false")
          .indicador--hover(v-if="indicadorTarjetaFlip")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/tema4/img11.svg')})`}")
            .tarjeta-flip__contenido.p-xxl-5.p-xl-4.p-md-5.p-4
              h4.text-center Perfilamiento
              p.text-center.mb-0 Aplica un perfilamiento del objetivo con la información obtenida que permite aplicar habilidades de ingeniería social para obtener más información relevante.
      .col-xl-3.col-lg-4.col-sm-6.col-8.mb-xl-0.mb-4(datxlaos="fade-left")
        .tarjeta.tarjeta-flip.color-primario.h-100(@mouseover="indicadorTarjetaFlip = false")
          .indicador--hover(v-if="indicadorTarjetaFlip")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/tema4/img12.svg')})`}")
            .tarjeta-flip__contenido.p-xxl-5.p-xl-4.p-md-5.p-4
              h4.text-center Mejora planificación de pruebas de intrusión
              p.text-center.mb-0 Con la información obtenida, se logra una comprensión más clara del objetivo, permitiendo una planificación más efectiva para incrementar las probabilidades de éxito en las pruebas de penetración o en la toma de control de acceso del objetivo.

    separador
    #t_4_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 4.3 Aplicación de Information Gathering

    p.mb-5(data-aos="fade-right") La aplicación de las técnicas de recolección de información o Information Gathering, pueden ser desarrolladas de manera planificada dentro de un proceso de Ethical Hacking, siguiendo los principios éticos, profesionales y legales.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-7.order-lg-1.order-2
        .cajon.color-acento-contenido.p-4.mb-4(data-aos="fade-right")
          p.mb-0 “La base para cualquier prueba de penetración exitosa es un reconocimiento sólido. Si no realiza una recopilación de información adecuada, tendrá que agitarse al azar, atacando máquinas que no son vulnerables y omitiendo otras que sí lo son” (Offensive Security, 2021).
        p(data-aos="fade-right") Para la aplicación de las técnicas de recolección de información se pueden utilizar diversas herramientas técnicas, las cuales se listan a continuación:
        .row.justify-content-center
          .col-lg-4
            ul.lista-ul--color
              li(style="margin-bottom: 2px" data-aos="fade-right")
                i.far.fa-check-circle(style="color: #500C75;")
                | FOCA
              li(style="margin-bottom: 2px" data-aos="fade-right")
                i.far.fa-check-circle(style="color: #500C75;")
                | Goofile
              li(style="margin-bottom: 2px" data-aos="fade-right")
                i.far.fa-check-circle(style="color: #500C75;")
                | Maltego
              li(style="margin-bottom: 2px" data-aos="fade-right")
                i.far.fa-check-circle(style="color: #500C75;")
                | Nessus Essentials
          .col-lg-4
            ul.lista-ul--color
              li(style="margin-bottom: 2px" data-aos="flip-up")
                i.far.fa-check-circle(style="color: #500C75;")
                | Nmap / ZenMap
              li(style="margin-bottom: 2px" data-aos="flip-up")
                i.far.fa-check-circle(style="color: #500C75;")
                | NSLookup
              li(style="margin-bottom: 2px" data-aos="flip-up")
                i.far.fa-check-circle(style="color: #500C75;")
                | NTop
              li(style="margin-bottom: 2px" data-aos="flip-up")
                i.far.fa-check-circle(style="color: #500C75;")
                | OpenVas
          .col-lg-4
            ul.lista-ul--color
              li(style="margin-bottom: 2px" data-aos="fade-left")
                i.far.fa-check-circle(style="color: #500C75;")
                | SET Toolkit
              li(style="margin-bottom: 2px" data-aos="fade-left")
                i.far.fa-check-circle(style="color: #500C75;")
                | SPARTA
              li(style="margin-bottom: 2px" data-aos="fade-left")
                i.far.fa-check-circle(style="color: #500C75;")
                | Wireshark
              li(style="margin-bottom: 2px" data-aos="fade-left")
                i.far.fa-check-circle(style="color: #500C75;")
                | Whois Lookup
      .col-lg-5.col-10.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
        img(src='@/assets/curso/tema4/img13.png' alt="Imagen decorativa")
    
    .BGM07.py-4.px-md-5.px-4.mb-5
      .row.justify-content-around.align-items-center
        .col-md-4.col-sm-6.col-8.mb-4.mb-md-0.px-5(data-aos="fade-right")
          img.mx-auto(src="@/assets/curso/tema2/img02.svg")
        .col-lg-6.col-md(data-aos="fade-left")
          .titulo-segundo.color-primario  
            h3 Kali Tools / Tool Documentation
          p Conozca más herramientas y sus descripciones en kali.org Kali Linux Tools Listing.
          a.boton.color-acento-botones.texto-blanco(href="https://tools.kali.org/tools-listing" target="_blank")
            span Ir al link
            i.fas.fa-link

</template>

<script>
export default {
  name: 'Tema4',
  data: () => ({
    indicadorTarjetaFlip: true,
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
