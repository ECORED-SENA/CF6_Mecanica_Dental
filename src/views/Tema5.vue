<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1(data-aos="fade-right") Prescripción clínica

    .row.align-items-center.mb-5(data-aos="fade-right")
      .col-lg-1
        figure
          img.img-t.d-none.d-lg-block(src='@/assets/curso/tema1/img04.svg', alt='')
      .col-lg-11
        p.m-0 La prescripción deberá estar sustentada en una evaluación previa del paciente, se realizará en idioma español, en forma escrita, sea manuscrita, mecanográfica, en medio electromagnético o computarizada. No podrá contener enmendaduras o tachaduras, siglas, claves, abreviaturas o símbolos, diferentes a los estipulados en Lex - Artis o convenciones internacionales y contendrá la siguiente información: 

    .row.align-items-center.mb-5(data-aos="fade-right")
      .col-lg-4.mb-4.mb-lg-0
        figure
          img.img-t.mx-auto(src='@/assets/curso/tema5/img01.png', alt='')
      .col-lg-8
        ul.lista-ul--color(data-aos="fade-left")
          li 
            i.fas.fa-circle.color-fa_circle
            | Nombre legible del prestador de servicios de salud, dirección, número telefónico o dirección electrónica, número de registro profesional de quien prescribe.
          li 
            i.fas.fa-circle.color-fa_circle
            | Lugar y fecha de la prescripción. 
          li  
            i.fas.fa-circle.color-fa_circle
            | Nombre del paciente y documento de identificación.
          li 
            i.fas.fa-circle.color-fa_circle
            | Número de la historia clínica. 
          li 
            i.fas.fa-circle.color-fa_circle
            | Nombre del dispositivo médico sobre medida prescrito con sus características.
          li  
            i.fas.fa-circle.color-fa_circle
            | Indicaciones que a su juicio considere el prescriptor (consideraciones anatómicas, fisiológicas, etc.). 
          li  
            i.fas.fa-circle.color-fa_circle
            | Vigencia de la prescripción. La prescripción del dispositivo médico sobre medida bucal vence en seis meses. Una vez transcurrido este tiempo y al no haber concluido el trabajo es necesario una nueva valoración del paciente y con fundamento a lo cual se determinará iniciar nuevamente el proceso de fabricación.
          li  
            i.fas.fa-circle.color-fa_circle
            | Firma del odontólogo tratante.

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
