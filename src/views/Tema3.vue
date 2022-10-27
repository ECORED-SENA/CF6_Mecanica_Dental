<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1(data-aos="fade-right") Tipos de prótesis

    .bg_6(data-aos="fade-down")
      .row.align-items-center
        .col-lg-5
          img.img-t.mb-4.mb-lg-0(src='@/assets/curso/tema3/img01.png', alt='')
        .col-lg-7.ms-4.ms-lg-0
          p.me-4.pe-3.mb-4 Una prótesis dental es un proceso intraoral (dentro de la boca), que se utiliza para reconstruir problemas intraorales (dientes que faltan, partes de los dientes que faltan y estructuras blandas o duras de la mandíbula y del paladar también).
          ul.lista-ul--color.ms-lg-5
            li 
              i.fas.fa-circle.color-fa_circle
              | Prótesis total convencional. 
            li 
              i.fas.fa-circle.color-fa_circle
              | Prótesis total implantosoportada e implanto retenida (híbrida). 
            li  
              i.fas.fa-circle.color-fa_circle
              | Prótesis total removible sobre implantes (sobredentadura).

    Separador

    #t_3_1.titulo-segundo.color-acento-contenido(data-aos="zoom-out-right")
        h2 3.1 Total y parcialmente edéntulos

    .row.align-items-center.mb-5(data-aos="fade-right")
      .col-lg-1
        figure
          img.img-t.d-none.d-lg-block(src='@/assets/curso/tema1/img04.svg', alt='')
      .col-lg-11
        p.m-0 El paciente edéntulo o desdentado es la persona que perdió parcialmente sus piezas dentarias o la totalidad de estas. Estos pacientes son considerados como enfermos, ya que el edentulismo es una agresión a la integridad del sistema masticatorio, que tiene secuelas estéticas y funcionales adversas y, que pueden variar desde sentimientos de insatisfacción, hasta intensos sentimientos de inferioridad o invalidez.

    .tarjeta--container.row.mb-5    
      .col-md.tarjeta.color-acento-contenido.p-5.mb-4.mb-lg-0.mb-md-0(data-aos="fade-right")
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/tema3/img02.png', alt='Texto que describa la imagen')
          
        h4.text-center Prótesis total convencional
        p Es aquella que no está retenida (sujeta) por implantes, es la prótesis tradicional que aún tiene indicaciones y, bien diagnosticada, diseñada y construida proporciona altos niveles de confortabilidad y satisfacción a los pacientes, por lo que aún está vigente y en ocasiones es la única forma de tratamiento aplicable a los pacientes.    
      
      .col-md.tarjeta.color-primario.text-white.p-5(data-aos="fade-left")
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/tema3/img03.png', alt='Texto que describa la imagen')
          
        h4.text-center Prótesis parcialmente edéntula
        p Se denomina prótesis parcialmente edéntula a aquella que presenta ausencia parcial de los dientes.

    Separador

    #t_3_2.titulo-segundo.color-acento-contenido(data-aos="zoom-out-right")
        h2 3.2 Implantomucosoportadas

    .row.align-items-center.mb-5
      .col-lg-7(data-aos="fade-right")
        p La prótesis completa mucosoportada es una prótesis que está diseñada para los pacientes desdentados totales, en la que se incluyen todas las piezas dentarias. Las prótesis completas suelen colocar 14 piezas por arcada, se omiten siempre los terceros molares o cordales, y a veces según las exigencias de las estructuras bucales, se tiene que reducir el número de piezas a 12, eliminando un premolar o un segundo molar.
        .cajon.color-acento-contenido.p-4.px-5.mb-4.color2
          p.m-0 El soporte de la prótesis se basa en el contacto directo con la mucosa bucal. Al estar la mucosa y la base de la prótesis húmeda se crea una fuerza de fijación que está en relación con la extensión de la prótesis y con la tensión superficial de la saliva, esta fuerza sujeta la prótesis.
        p Una prótesis implantosoportada es aquella que está sujeta a la mandíbula mediante unos implantes dentales. Este tipo de implantes tienen la forma de tornillos y están hechos de titanio. Se colocan junto a los huesos para que se integren de forma natural. Para que la prótesis esté estable, no se mueva y sea cómoda para el paciente es importante que los implantes se coloquen en el lugar adecuado. Este tipo de prótesis tienen la gran ventaja de agarrarse con más fuerza a la mandíbula, aportando así seguridad a la hora de comer o de hablar.
      .col-lg-5(data-aos="fade-left")
        figure
          img.img-t.d-none.d-lg-block(src='@/assets/curso/tema3/img04.png', alt='')

    LineaTiempoD.color-primario.mb-5(data-aos="fade-right")
      .row(numero="1" titulo="Prótesis total implantosoportada e implanto retenida (híbrida)")
        .col-md-12.mb-4.mb-md-0
          p.mt-4.mt-lg-0 Esta prótesis se fija en los implantes mediante unos tornillos que aguantan la estructura de metal que funciona como base para la retención de resina.      
          figure
            img(src='@/assets/curso/tema3/img05.png', alt='Texto que describa la imagen')

      .row(numero="2" titulo="Prótesis total removible sobre implantes (sobredentadura)")
        .col-md-12.mb-4.mb-md-0
          p.mt-4.mt-lg-0 Es una prótesis removible que se apoya en los implantes dentales. Va sujeta a dos soportes que ofrecen una buena retención, ya que se encaja a los implantes fijados en la boca. Son más cómodas que las prótesis removibles convencionales, ya que tienen mayor estabilidad y ausencia de paladar. Está indicada, en casos de pacientes con ausencia de piezas dentales, tanto superiores como inferiores, y será el odontólogo el que determine cuál es el mejor tratamiento, para conseguir una mayor estabilidad y durabilidad a largo plazo.     
          figure
            img(src='@/assets/curso/tema3/img06.svg', alt='Texto que describa la imagen')
          
            

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
