<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    p.mb-5(data-aos="fade-right") En el proceso de Monitoreo y respuesta de incidentes de seguridad digital, se inició con la exploración de registros en "Monitoreo y Análisis de #[em Logs]". Estos datos se integran en "Fundamentos de SIEM", mientras el "#[em Security Operation Center] (SOC)" establece objetivos claros y alcance definido. Se aplicaron "Técnicas de Recopilación de Información" para análisis detallado y, a través del "Análisis de Vulnerabilidades Técnicas", se identifican debilidades potenciales. Finalmente, la "Gestión de Incidentes de Seguridad Digital", respaldada por estándares y #[em frameworks] gestionan los incidentes en tiempo real para garantizar una seguridad digital integral. A continuación, se presenta un mapa conceptual que resume la información de este proceso.

    .row.justify-content-center
      .col-lg-10.mb-5(data-aos="fade-right")
        figure
          img(src="@/assets/curso/temas/sintesis.svg", alt="Síntesis que resume los temas y subtemas abordados dentro  del componente formativo como es el monitoreo y análisis de logs, al igual que la gestión de incidentes de seguridad digital y lo que en el intervienen.")
      .col-auto(data-aos="fade-left")
        a.anexo.mb-4(:href="obtenerLink('/downloads/sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
