<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 2
      h1 Fundamentos de SIEM
    
    .row.justify-content-center.mb-5
      .col-xl-10
        .bloque-texto-g.color-acento-contenido.p-3
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema2/img01.jpg')})`}" data-aos="fade-right"
          )
          .bloque-texto-g__texto.p-4(data-aos="fade-left")
            p.mb-0 Un #[b SIEM] (Security Information and Event Management en inglés), es una definición utilizada para aplicaciones que involucran #[b SEM] (Security Event Management - Gestión de Eventos de Seguridad) que recoge, agrega y actúa sobre los eventos de seguridad y #[b SIM] (Security Information Management - Gestión de Información de Seguridad) que correlaciona, normaliza e informa sobre los datos de eventos de seguridad recogidos. Las herramientas SIEM ofrecen un análisis en tiempo real para eventos de seguridad generados en gran medida por la infraestructura de los sistemas de información (Avella, Calderón y Mateus, 2015).

    .BGM07.py-4.px-md-5.px-4.mb-5
      .row.justify-content-around.align-items-center
        .col-md-4.col-sm-6.col-8.mb-4.mb-md-0.px-5(data-aos="fade-right")
          img.mx-auto(src="@/assets/curso/tema2/img02.svg")
        .col-lg-6.col-md(data-aos="fade-left")
          .titulo-segundo.color-primario  
            h3 Fundamentos de SIEM,Security Information and Event Management
          p Entérese, en profundidad, de los fundamentos en SIEM, requeridos para avanzar en este componente formativo, estudiando conscientemente el Anexo_1_FundamentosDeSIEM.
          a.boton.color-acento-botones.texto-blanco(:href="obtenerLink('/downloads/Anexo_1_FundamentosDeSIEM.pdf')" target="_blank" type="application/pdf")
            span Descargar
            i.fas.fa-file-download


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
