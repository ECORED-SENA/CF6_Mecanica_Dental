<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1(data-aos="fade-right") Biomateriales


    .row.align-items-center
      .col-lg-5(data-aos="fade-right").mb-4.mb-lg-0
        figure
          img.img-t.m-auto(src='@/assets/curso/tema4/img01.png', alt='')
      .col-lg-7
        .cajon.color-primario.bg_color1.p-4.mb-4(data-aos="fade-left")
          p.m-0.ms-4 Un biomaterial dental está creado para estar en contacto con tejidos vivos durante un período de tiempo, con la finalidad de completar el tejido y ayudar a mejorar su funcionamiento sin afectar al resto del organismo.  Los materiales dentales utilizados para confeccionar las prótesis totales deben permitir que al momento de su diseño se tengan en cuenta no solo las condiciones clínicas del modelo para poder reemplazar lo mejor posible la fisiología de cada paciente, si no que los materiales sean biocompatibles, seguros y confortables. Los biomateriales deben tener las siguientes características: 
        ul.lista-ul--color.ms-lg-5(data-aos="fade-left")
          li 
            i.fas.fa-circle.color-fa_circle
            | Biocompatible.
          li 
            i.fas.fa-circle.color-fa_circle
            | No tóxico, ni carcinógeno. 
          li  
            i.fas.fa-circle.color-fa_circle
            | Químicamente estable.
          li 
            i.fas.fa-circle.color-fa_circle
            | Buena resistencia mecánica. 
          li 
            i.fas.fa-circle.color-fa_circle
            | Densidad y peso, forma y tamaño adecuados.
          li  
            i.fas.fa-circle.color-fa_circle
            | Barato, reproducible y fácil de fabricar          

    Separador

    #t_4_1.titulo-segundo.color-acento-contenido(data-aos="zoom-out-right")
        h2 4.1 Polímeros

    p.mb-4 Durante la elaboración de las prótesis totales se requiere trabajar con resinas acrílicas, estas son muy utilizadas en la base de la prótesis o los dientes, los polímeros más utilizados en la elaboración de prótesis total son los termopolimerizables; sin embargo, para la elaboración de las cubetas individuales se utilizan los autopolimerizables, dichos materiales son necesarios para cumplir con los requerimientos indicados por el profesional en la orden de trabajo. Los polímeros son moléculas grandes de cadena larga formadas por la unión química de moléculas más pequeñas, llamadas monómeros. Cuando se unen dos o más tipos diferentes de monómeros, el polímero formado a partir de ellos se denomina copolímero. Los copolímeros se producen para mejorar las propiedades físicas del material. El acto de formar polímeros se llama <b>polimerización.</b>

    .bg_8
      .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade-down")
        .bloque-texto-g__img(
          :style="{'background-image': `url(${require('@/assets/curso/tema4/img02.png')})`}"
        )
        .bloque-texto-g__texto.p-4
          p.mb-0 Los polímeros sintéticos que se utilizan en la odontología protésica se denominan resinas acrílicas porque se derivan del ácido acrílico. La resina acrílica se forma cuando un monómero líquido se mezcla con un polvo de pequeñas perlas de polímero y la mezcla se polimeriza. La resina polimerizada es polimetacrilato de metilo, se compone de numerosas unidades de monómero de metacrilato de metilo (MMA) unidas entre sí para formar un polímero de cadena larga. Las resinas se utilizan para bases de dentaduras postizas, rebases y reparación de prótesis, dentaduras postizas parciales acrílicas provisionales, acondicionadores de tejidos y cubetas de impresión personalizadas. 

      .row.justify-content-center
        .col-lg-7(data-aos="fade-left")
          p También tienen usos para retenedores de ortodoncia y dispositivos de movimiento de dientes removibles, protectores bucales para bruxismo, cubetas de flúor y blanqueamiento, carillas en coronas estéticas y restauraciones provisionales. Las resinas acrílicas especializadas se utilizan en el reemplazo estético de tejidos para recesiones gingivales graves y para la reconstrucción facial debido a traumatismos, cirugía o defectos de nacimiento. Las resinas acrílicas son especialmente útiles porque se les puede dar forma a cualquier contorno y personalizar el color para que coincida con el tono de los dientes, las encías o la piel. Las resinas acrílicas utilizadas en odontología a menudo se modifican mediante la adición de plastificantes, cauchos y rellenos para cambiar sus propiedades físicas.
        .col-lg-3(data-aos="fade-right")
          figure
            img.img-t.m-auto(src='@/assets/curso/tema4/img03.png', alt='')

    Separador

    #t_4_2.titulo-segundo.color-acento-contenido(data-aos="zoom-out-right")
        h2 4.2. Manipulación 

    .row.align-items-center.mb-5(data-aos="fade-right")
      .col-lg-1
        figure
          img.img-t.d-none.d-lg-block(src='@/assets/curso/tema4/img15.svg', alt='')
      .col-lg-11
        p.m-0 En el proceso y manipulación de los materiales dentales es muy importante tener presente las indicaciones de cada casa comercial, en cuanto a las fichas técnicas se trata, ya que los productos que ofrecen tienen indicaciones diferentes de manejo, de proporciones para poder entregar un producto que cumpla con las especificidades necesarias, de la información que se puede encontrar en una ficha técnica se encuentra la siguiente: recomendaciones para la manipulación y polimerización de acrílico de base de dentaduras.

    .row.align-items-center
      .col-lg-4.mb-4.mb-lg-0(data-aos="fade-left")
        figure
          img.img-t.m-auto(src='@/assets/curso/tema4/img04.png', alt='')
      .col-lg-8(data-aos="fade-right")
        p.text-bold La mezcla de la resina acrílica no debe tomar contacto directo con el yeso del modelo por las siguientes razones:
        ul.lista-ul--color.ms-lg-3(data-aos="fade-left")
          li 
            i.fas.fa-circle
            | Porque el monómero puede penetrar dentro del yeso que es poroso y polimerizar en él, quedando la prótesis totalmente pegada y no se podrá separar la resina del yeso.
          li 
            i.fas.fa-circle
            | Porque el yeso contiene agua, que puede pasar a la resina y alterar sus propiedades (resistencia, dureza, rigidez, coloración).
        .cajon.color-acento-contenido.p-4.px-5.mb-4.color2
          p.m-0 Para evitar esto se debe utilizar la “hoja líquida” como separador que contiene básicamente un alginato soluble en agua, un separador de esa composición funciona como si fuera un alginato para impresiones. Al pincelar el líquido sobre el modelo de yeso el alginato de sodio entra en contacto con sal de calcio, produciendo una reacción química que da lugar a la formación de alginato de calcio insoluble, que forma una delgada película o membrana sobre el modelo de yeso actuando como separador, evitando que el agua pase a la mezcla de resina.

    p La composición de las resinas acrílicas termopolimerizables (polímero y monómero) están indicadas para la elaboración de bases para prótesis totales, parciales y removibles, placas estéticas, guías quirúrgicas, placas de bruxismo o placas neuromiorelajantes (NMR) y dientes provisionales. Sus características se pueden observar en la siguiente infografía:

    .bg_9.p-4(data-aos="fade-up-right")
      .row.justify-content-center
        .col-lg-2.col-xl-3.col-xxl-2
          h3.text-center Manipulación resinas acrílicas 
    .bg_10.p-4
      .row.justify-content-center.align-items-center
        .col-lg-4
          .row.justify-content-center.align-items-center
            .col-lg-4
              img.img-t.m-auto(src='@/assets/curso/tema4/img05.svg', alt='')
            .col-lg-7.d-flex.justify-content-md-center
              p Ausencia de sabor y olor.
            .col-lg-1
              .verticalLine.d-none.d-lg-block
        .col-lg-4
          .row.justify-content-center.align-items-center
            .col-lg-4
              img.img-t.m-auto(src='@/assets/curso/tema4/img06.svg', alt='')
            .col-lg-7.d-flex.justify-content-md-center
              p Aspecto natural en color y translucidez.
            .col-lg-1
              .verticalLine.d-none.d-lg-block
        .col-lg-4
          .row.justify-content-center.align-items-center
            .col-lg-4
              img.img-t.m-auto(src='@/assets/curso/tema4/img07.svg', alt='')
            .col-lg-7.d-flex.justify-content-md-center
              p Fácil de trabajar y reparar con exactitud.
    .bg_11.p-4
      .row.justify-content-center.align-items-center
        .col-lg-6
          .row.justify-content-center.align-items-center
            .col-lg-4
              img.img-t.m-auto(src='@/assets/curso/tema4/img08.svg', alt='')
            .col-lg-7.d-flex.justify-content-md-center
              p.m-0 Proporciona las propiedades esenciales y las características necesarias para usarlas en la cavidad bucal. 
        .col-lg-6
          .row.justify-content-center.align-items-center
            .col-lg-1
              .verticalLine1.d-none.d-lg-block
            .col-lg-4
              img.img-t.m-auto(src='@/assets/curso/tema4/img09.svg', alt='')
            .col-lg-7.d-flex.justify-content-md-center
              p.m-0 Muestran suficiente translucidez que confiere la apariencia natural de los tejidos bucales reemplazados.
      .row.justify-content-center.align-items-center
        .col-lg-4
          .row.justify-content-center.align-items-center
            .col-lg-4
              img.img-t.m-auto(src='@/assets/curso/tema4/img10.svg', alt='')
            .col-lg-7.d-flex.justify-content-md-center
              p Resistencia y durabilidad adecuadas al uso.
            .col-lg-1
              .verticalLine1.d-none.d-lg-block
        .col-lg-4
          .row.justify-content-center.align-items-center
            .col-lg-4
              img.img-t.m-auto(src='@/assets/curso/tema4/img11.svg', alt='')
            .col-lg-7.d-flex.justify-content-md-center
              p Estabilidad dimensional en y fuera de los tejidos.
            .col-lg-1
              .verticalLine1.d-none.d-lg-block
        .col-lg-4
          .row.justify-content-center.align-items-center
            .col-lg-4
              img.img-t.m-auto(src='@/assets/curso/tema4/img12.svg', alt='')
            .col-lg-7.d-flex.justify-content-md-center
              p Insolubilidad y baja sorción en fluidos bucales.
    .bg_12.p-4
      .row.justify-content-center.align-items-center
        .col-lg-6
          .row.justify-content-center.align-items-center
            .col-lg-4
              img.img-t.m-auto(src='@/assets/curso/tema4/img13.svg', alt='')
            .col-lg-7.d-flex.justify-content-md-center
              p.m-0 Los acrílicos termopolimerizables tienen la capacidad de ser moldeados en formas complejas con la aplicación de calor y presión.            
        .col-lg-6
          .row.justify-content-center.align-items-center
            .col-lg-1
              .verticalLine2.d-none.d-lg-block
            .col-lg-4
              img.img-t.m-auto(src='@/assets/curso/tema4/img14.svg', alt='')
            .col-lg-7.d-flex.justify-content-md-center
              p.m-0 No presentan cambios de color, ni pigmentación aun cuando son sometidos a temperaturas corporales. 

    Separador

    #t_4_3.titulo-segundo.color-acento-contenido(data-aos="zoom-out-right")
        h2 4.3 Propiedades físicas
    
    .row.justify-content-center.mb-4.mb-lg-0
      .col-lg-7.col-xl-8.col-xxl-7.d-flex.justify-content-md-center
        .row.align-items-center.mb-5(data-aos="fade-right")
          .col-auto
            figure
              img.img-t.d-none.d-lg-block(src='@/assets/curso/tema4/img15.svg', alt='')
          .col-lg-10
            p.m-0 Hacen referencia al conocimiento que como técnicos dentales se debe tener presente en cuanto al comportamiento del material que se utiliza en la elaboración de las prótesis dentales, por ejemplo, su manipulación o manejo. Para las resinas es importante tener claras las siguientes características:

          .titulo-sexto.color-acento-contenido.mt-4.ms-3(data-aos="fade-right")
            p <b>Tabla 1.</b> <em>Propiedades físicas resinas acrílicas</em>
          
          .tabla-a.color-acento-contenido(data-aos="fade-down-right")
            table
              thead
                tr
                  td.text-bold(colspan="3").text-center Parámetro
                  td.text-bold(colspan="2").text-center Requerimiento
                  td.text-bold(colspan="2").text-center Resultado experimental
              tbody
                tr
                  td(colspan="3").text-center Porcentaje de humedad del polímero
                  td(colspan="2").text-center 0.10% - 0.50%
                  td(colspan="2").text-center 0.42%
                tr
                  td(colspan="3").text-center Tiempo de trabajo de la mezcla
                  td(colspan="2").text-center 5’ - 6’ a T = 23°C ± 2
                  td(colspan="2").text-center 5’80’’      
      .col-lg-5.col-xl-4.col-xxl-5(data-aos="fade-right")
        img.img-t.m-auto(src='@/assets/curso/tema4/img16.png', alt='')

    p Las resinas acrílicas deben tener una fuerza y resiliencia adecuada, así como la resistencia necesaria para soportar las fuerzas de la masticación, fuerza de impacto y uso excesivo que se le puede dar en la cavidad oral. El material también debe ser dimensionalmente estable en todos los casos, incluidos los cambios térmicos y variaciones en las cargas.

    Separador

    #t_4_4.titulo-segundo.color-acento-contenido(data-aos="zoom-out-right")
        h2 4.4 Propiedades químicas

    .row.align-items-center.mb-5(data-aos="fade-right")
      .col-lg-1
        figure
          img.img-t.d-none.d-lg-block(src='@/assets/curso/tema4/img16.svg', alt='')
      .col-lg-11
        p.m-0 Desde que el paciente visita al odontólogo es importante tener en cuenta las propiedades químicas de los materiales dentales, porque desde allí, el clínico manifiesta a través de la orden de trabajo qué material dental es biocompatible con el paciente, es claro que la materia cambia de composición y comportamiento, además  como técnicos dentales deben poseer un conocimiento básico acerca de ellos, ya que permitirá en algunas ocasiones asesorar al profesional para seleccionar el material más adecuado. Las estructuras de la cavidad bucal están constantemente expuestas a cambios ya sea por reacciones químicas o fluidos orgánicos, entre otros, lo que puede llegar a perjudicar negativamente las estructuras que la componen.

    .bg_13.p-4.px-5.mb-5
      .row.justify-content-center.align-items-center.align(data-aos="fade-right")
        .col-lg-4.mb-4.mb-lg-0
          figure
            img.img-t.mx-auto(src='@/assets/curso/tema4/img17.png', alt='')
        .col-lg-8
          p Una de las principales propiedades es la absorción de agua que se produce de forma muy lenta, debido a las propiedades polares de moléculas de resina. La solubilidad de los materiales resinosos en el medio oral es despreciable desde el punto de vista clínico. La falta de polimerización de la resina provoca la presencia de monómero residual.      
          p Otros problemas asociados con la sorción de agua es la colonización de microorganismos especialmente por hongos <b><em>cándida albicans</em></b>.    

    p La absorción de agua es un mecanismo que consiste en la difusión de moléculas de agua por parte de las moléculas de resina, durante un tiempo determinado hasta quedar totalmente copadas o saturadas, es decir, al colocar la resina acrílica en un medio líquido absorbe lentamente pequeñas cantidades de agua (Phillips, 2009). En tal punto se produce una deformación dimensional de la resina acrílica, que clínicamente no se considera significativa. Toledano (2009) menciona “este cambio dimensional se ha establecido en torno al 0,23% por cada 1% de incremento en el peso por absorción de agua”. La absorción de agua se considera una característica indeseable de las resinas acrílicas, igualmente, Toledano (2009) indica que “desde el punto de vista clínico se debe evitar el mojado y secado de la base de prótesis acabada, ya que puede producir deformaciones dimensionales irreversibles.

    Separador

    #t_4_5.titulo-segundo.color-acento-contenido(data-aos="zoom-out-right")
        h2 4.5 Propiedades mecánicas

    p Partiendo del conocimiento en el manejo y manipulación de los materiales dentales es también importante apoyarse en la información que proporciona las fichas técnicas que los proveedores facilitan para identificar no solo los tiempos de trabajo o de manipulación, si no también:

    .bg_14.p-4.mb-4
      .row.justify-content-center
        .col-lg-12(data-aos="fade-down")
          figure
            img.img-t.mx-auto(src='@/assets/curso/tema4/img18.svg', alt='')

    .row.align-items-center.mb-5(data-aos="fade-right")
      .col-lg-1
        figure
          img.img-t.d-none.d-lg-block(src='@/assets/curso/tema1/img04.svg', alt='')
      .col-lg-11
        p.m-0 Para mejorar la estabilidad química y las propiedades mecánicas se suelen incorporar al monómero agentes de cadena cruzada, como el <b>dimetilacrilato de etilenglicol</b>. En el polímero o copolímero final se obtiene así una mayor estabilidad en disolventes orgánicos y mayor resistencia a la formación de microfracturas bajo esfuerzos mecánicos. El exceso de agentes de cadena cruzada puede hacer la base protésica más frágil y quebradiza.        



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
