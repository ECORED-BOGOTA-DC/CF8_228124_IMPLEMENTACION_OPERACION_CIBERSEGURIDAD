<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 5
      h1 Análisis de vulnerabilidades técnicas
    
    .row.justify-content-center.mb-5
      .col-lg-4.col-8.mb-lg-0.mb-4(data-aos="fade-right")
        img(src='@/assets/curso/tema5/img01.png' alt="Imagen decorativa")
      .col-lg-8(data-aos="fade-left")
        p.mb-0 El análisis o escaneo de vulnerabilidades consiste en el descubrimiento de debilidades o vulnerabilidades de seguridad, en los elementos de una red. El mismo, puede ser realizado con diversas herramientas existentes, y es un proceso que es necesario realizar previamente a una prueba de intrusión, o bien puede ser realizado como parte de un proceso de endurecimiento o #[em hardening].

    .BGM11.py-4.px-md-5.px-4.mb-5
      .row.justify-content-around.align-items-center
        .col-md-4.col-sm-6.col-8.mb-4.mb-md-0.px-5(data-aos="fade-right")
          img.mx-auto(src="@/assets/curso/tema2/img02.svg")
        .col-lg-6.col-md(data-aos="fade-left")
          .titulo-segundo.color-primario  
            h3 Análisis de vulnerabilidades técnicas
          p Profundice en los elementos del análisis de vulnerabilidades técnicas, necesarios para el estudio de este componente formativo. Visite el Anexo_2_AnalisisVulnerabilidadesTecnicas. Procure llevar registro en su libreta personal de apuntes. #[b ¡Adelante!]
          a.boton.color-acento-botones.texto-blanco(:href="obtenerLink('/downloads/Anexo_2_AnalisisVulnerabilidadesTecnicas.pdf')" target="_blank" type="application/pdf")
            span Descargar
            i.fas.fa-file-download

</template>

<script>
export default {
  name: 'Tema5',
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
