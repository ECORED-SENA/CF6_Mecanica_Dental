<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 6
      h1(data-aos="fade-right") Elementos de protección personal

    .bg_16
      .bg_15.ps-5.mb-5(data-aos="fade-down")
        .row.align-items-center
          .col-lg-6.mb-4.mb-lg-0
            p.m-0.mt-5.mt-lg-0.me-4.me-lg-0 Se hace necesario que en un laboratorio dental se tenga en cuenta implementar los requisitos sanitarios que deben cumplir los dispositivos médicos sobre medida bucal, así como adoptar las herramientas o elementos de protección personal, considerando los riesgos que se tienen durante la elaboración de los dispositivos intraorales y el manejo de sustancias químicas, con el objeto de dar seguridad a los técnicos y garantizar su debida implementación.
          .col-lg-6
            img.img-t.m-auto(src='@/assets/curso/tema6/img01.png', alt='')

      .tarjeta--container.row.mb-5.px-lg-3.px-md-0.d-md-none.d-block.d-lg-flex
        .col-md.tarjeta.color-acento-contenido.p-4.mb-4.mb-lg-0.mb-md-0(data-aos="fade-right")
          .row.justify-content-center.mb-4
            .col-6.col-lg-10
              figure
                img(src='@/assets/curso/tema6/img02.svg', alt='Texto que describa la imagen')
            
          h4.text-center Tapabocas
          p Este es el primer elemento que conforma el equipo de protección, se debe adaptar el tapabocas a la cara y así cubrir perfectamente la nariz, boca, mentón y parte superior del cuello.

        .col-md.tarjeta.color-primario.text-white.p-4.mb-4.mb-lg-0.mb-md-0(data-aos="fade-left")
          .row.justify-content-center.mb-4
            .col-6.col-lg-10
              figure
                img(src='@/assets/curso/tema6/img03.svg', alt='Texto que describa la imagen')
            
          h4.text-center Gafas
          p Su función principal es proteger la membrana mucosa del ojo donde existe una alta posibilidad de lesiones, accidentes y que además se encuentra expuesta a los materiales.

        .col-md.tarjeta.color-acento-contenido.p-4.mb-4.mb-lg-0.mb-md-0(data-aos="fade-right")
          .row.justify-content-center.mb-4
            .col-6.col-lg-10
              figure
                img(src='@/assets/curso/tema6/img04.svg', alt='Texto que describa la imagen')
            
          h4.text-center Guantes
          p Son un elemento que permanece durante todo el procedimiento y protege de los químicos con los que se interactúa. 
        
        .col-md.tarjeta.color-primario.text-white.p-4(data-aos="fade-left")
          .row.justify-content-center.mb-4
            .col-6.col-lg-10
              figure
                img(src='@/assets/curso/tema6/img05.svg', alt='Texto que describa la imagen')
            
          h4.text-center Ropa
          p Llevar una túnica se debe usar en la fabricación de prótesis dental para proteger el cuerpo. Usar los zapatos indicados, deben ser cerrados, que protejan los pies de lesiones o del contacto con objetos peligrosos.

      .tarjeta--container.row.mb-5.px-lg-3.px-md-0.d-none.d-md-flex.d-xl-none.d-xxl-none    
        .col-md-6.tarjeta.color-acento-contenido.p-4.mb-4.mb-lg-0.mb-md-4(data-aos="fade-right")
          .row.justify-content-center.mb-4
            .col-6.col-lg-10
              figure
                img(src='@/assets/curso/tema6/img02.svg', alt='Texto que describa la imagen')
            
          h4.text-center Tapabocas
          p Este es el primer elemento que conforma el equipo de protección, se debe adaptar el tapabocas a la cara y así cubrir perfectamente la nariz, boca, mentón y parte superior del cuello.

        .col-md-6.tarjeta.color-primario.text-white.p-4.mb-4.mb-lg-0.mb-md-4.bt_radius1(data-aos="fade-left")
          .row.justify-content-center.mb-4
            .col-6.col-lg-10
              figure
                img(src='@/assets/curso/tema6/img03.svg', alt='Texto que describa la imagen')
            
          h4.text-center Gafas
          p Su función principal es proteger la membrana mucosa del ojo donde existe una alta posibilidad de lesiones, accidentes y que además se encuentra expuesta a los materiales.

        .col-md-6.tarjeta.color-acento-contenido.p-4.mb-4.mb-lg-0.mb-md-0.bt_radius2(data-aos="fade-right")
          .row.justify-content-center.mb-4
            .col-6.col-lg-10
              figure
                img(src='@/assets/curso/tema6/img04.svg', alt='Texto que describa la imagen')
            
          h4.text-center Guantes
          p Son un elemento que permanece durante todo el procedimiento y protege de los químicos con los que se interactúa. 
        
        .col-md-6.tarjeta.color-primario.text-white.p-4(data-aos="fade-left")
          .row.justify-content-center.mb-4
            .col-6.col-lg-10
              figure
                img(src='@/assets/curso/tema6/img05.svg', alt='Texto que describa la imagen')
            
          h4.text-center Ropa
          p Llevar una túnica se debe usar en la fabricación de prótesis dental para proteger el cuerpo. Usar los zapatos indicados, deben ser cerrados, que protejan los pies de lesiones o del contacto con objetos peligrosos.
      

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
