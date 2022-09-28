<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1(data-aos="fade-right") Normativa nacional para laboratorios de mecánica dental

    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5(data-aos="fade-down")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema1/img01.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Es importante tener claridad que los dispositivos médicos sobre medida bucal como las prótesis totales se elaboran teniendo en cuenta un conjunto de elementos que, al interactuar en la boca, permiten corregir la forma y función del sistema estomatognático; el profesional de odontología los instala y ajusta los dispositivos intraorales, por tal razón, se hace necesario establecer los requisitos sanitarios que deben cumplir los dispositivos médicos sobre medida bucal y los requisitos para la apertura y funcionamiento de los establecimientos ubicados en el territorio nacional, en donde se fabrican, reparan, dispensan y adaptan, con el fin de proteger la vida y la salud de las personas, así como adoptar los instrumentos para su verificación y corregir las impresiones de orden numérico, referencias en el texto y los anexos de la Resolución 214 de 2022, aclarando que la presente norma no genera modificaciones sustanciales respecto de lo regulado en aquella y solo se limita a unificar la norma con los ajustes antes detallados en un solo cuerpo normativo, derogando la citada Resolución, con el objeto de dar seguridad jurídica y garantizar su debida implementación.

    Separador

    #t_1_1.titulo-segundo.color-acento-contenido(data-aos="zoom-out-right")
        h2 1.1. Lineamientos para su funcionamiento 

    .row.align-items-center.mb-5
      .col-lg-8(data-aos="fade-right")
        p.mb-4 Es necesario tener conocimiento de los requisitos fundamentales para la apertura y funcionamiento de los laboratorios en donde se fabrican, reparan, dispensan y adaptan los dispositivos de prótesis total para garantizar la biocompatibilidad con las personas que los usarán, además de proteger la vida y la salud. Los establecimientos que fabrican y reparan dispositivos médicos sobre medida bucal deben cumplir con los siguientes requisitos especiales de organización:
        ul.lista-ul--color.ms-lg-5
          li 
            i.fas.fa-circle
            | Requisitos generales higiénicos, técnicos y locativos. 
          li 
            i.fas.fa-circle
            | Instalaciones. 
          li  
            i.fas.fa-circle
            | Áreas y zonas generales de las instalaciones.
          li 
            i.fas.fa-circle
            | Requisitos de dotación.  
          li 
            i.fas.fa-circle
            | Requisitos del talento humano. 
          li  
            i.fas.fa-circle
            | Requisitos de control de calidad.
          li  
            i.fas.fa-circle
            | Documentación y archivo.
      .col-lg-4(data-aos="fade-left")
        figure
          img.img-t.m-auto(src='@/assets/curso/tema1/img02.png', alt='')

    .bg_1
      p.text-bold.mb-5 El establecimiento deberá cumplir los siguientes requisitos generales, higiénicos, técnicos y locativos que se presentan en el siguiente recurso: 
      .bg_2
        .row.align-items-center
          .col-lg-4.mb-4.mb-lg-0(data-aos="fade-right")
            figure
              img.img-t.m-auto(src='@/assets/curso/tema1/img03.svg', alt='')
          .col-lg-7(data-aos="fade-left")
            ol.lista-ol--cuadro
              li 
                .lista-ol--cuadro__vineta
                  span 1
                | Los establecimientos deben implementar el Sistema de Gestión de Seguridad y Salud en el Trabajo.
              li 
                .lista-ol--cuadro__vineta
                  span 2
                | Mantener los ambientes, equipos, instrumentos, materias primas, componentes, repuestos y dispositivos médicos terminados en condiciones de higiene, orden y aseo.
              li 
                .lista-ol--cuadro__vineta
                  span 3
                | Prevenir el agua estancada, polvo en la atmósfera y garantizar la protección de establecimiento ante factores ambientales y presencia de vectores y plagas.
              li 
                .lista-ol--cuadro__vineta
                  span 4
                | Garantizar el suministro de agua para consumo humano y de sus instalaciones físicas, así como el mantenimiento de la red e instalaciones de energía y gas, e instruir a los trabajadores sobre el uso seguro de estas fuentes para prevenir accidentes al interior del establecimiento.
              li 
                .lista-ol--cuadro__vineta
                  span 5
                | Identificar claramente los equipos utilizados para el control de incendios y disponerlos en lugares contiguos donde exista el riesgo de incendio y, capacitar al personal sobre su manipulación y uso.
              li 
                .lista-ol--cuadro__vineta
                  span 6
                | Capacitar y hacer cumplir al personal las prácticas de higiene y el sistema de gestión de seguridad y salud en el trabajo.
              li 
                .lista-ol--cuadro__vineta
                  span 7
                | Dotar de vestuario de trabajo y elementos de protección a sus empleados, incluyendo el requerido para uso de visitantes y trabajadores temporales, de acuerdo con la actividad que estos desempeñen.
              li 
                .lista-ol--cuadro__vineta
                  span 8
                | Contar con un botiquín de fácil acceso y con todos elementos necesarios para la administración de primeros auxilios.

    Separador

    #t_1_2.titulo-segundo.color-acento-contenido(data-aos="zoom-out-right")
        h2 1.2. Equipamiento 

    .row.align-items-center.mb-5(data-aos="fade-right")
      .col-lg-1
        figure
          img.img-t.d-none.d-lg-block(src='@/assets/curso/tema1/img04.svg', alt='')
      .col-lg-11
        p.m-0 Cabe resaltar que para la elaboración de prótesis total se verificará en los laboratorios el nivel de equipamiento de cada establecimiento que fabrica y repara los dispositivos sobre medida, y que cuente con la tecnología básica o avanzada. Para poder desarrollar el trabajo en el área técnica el protésico dental necesita de la maquinaria adecuada, a continuación se presentan los principales equipos con los que debe contar:
    
    .bg_medida-sly.ms-5.ms-lg-0
      .row(data-aos="fade-up-right")
        .col-lg-12
          .bg_3.p-1.p-lg-5
            SlyderB.color_btn-sly(:datos="datosSlyder") 

    Separador

    #t_1_3.titulo-segundo.color-acento-contenido(data-aos="zoom-out-right")
        h2 1.3. Talento humano 

    .row.justify-content-center.align-items-center
      .col-lg-5(data-aos="fade-right")
        figure
          img.img-t.m-auto(src='@/assets/curso/tema1/img20.png', alt='')
      .col-lg-7(data-aos="fade-left")
        p En cuanto a los requisitos del talento humano, los establecimientos deberán contar con un director y personal técnico, quienes deben hacer uso de los elementos de seguridad y salud en el trabajo, y cumplir con las siguientes funciones: 
        ul.lista-ul--color.ms-lg-5
          li 
            i.fas.fa-circle.color-fa_circle
            | Fabricar férulas, aparatos bucales o prótesis dentales para obtener los resultados         esperados.
          li 
            i.fas.fa-circle.color-fa_circle
            | Mantenimiento y preparación del equipamiento del laboratorio. 
          li  
            i.fas.fa-circle.color-fa_circle
            | Identificar posibles problemas o defectos de las piezas.
          li 
            i.fas.fa-circle.color-fa_circle
            | Comprar, reponer y supervisar el material. 
          li 
            i.fas.fa-circle.color-fa_circle
            | Diseñar las prótesis conforme a las instrucciones de los odontólogos.
          li  
            i.fas.fa-circle.color-fa_circle
            | Gestionar todo lo relacionado con el laboratorio: documentación, tareas administrativas básicas, atención al cliente.

                                      
      
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    mostrarIndicador: true,
    indicadorTarjetaSlide: true,

    datosSlyder: [
      {
        titulo: 'Vibrador de yeso ',
        texto:
          'Vibrador de yeso para eliminar burbujas de aire al realizar el vaciado de impresiones.',
        imagen: require('@/assets/curso/tema1/img08.png'),
      },
      {
        titulo: 'Recortadora de modelos',
        texto:
          'Máquina esencial para que cualquier protésico dental pueda desarrollar su trabajo técnico en el laboratorio de forma fácil y rápida.',
        imagen: require('@/assets/curso/tema1/img09.png'),
      },
      {
        titulo: 'Polimerizadora para las resinas',
        texto:
          'Una polimerizadora es una máquina que se utiliza en el laboratorio de odontología para materiales que requieran procesos de polimerización, como es el caso de las resinas o material de obturación.',
        imagen: require('@/assets/curso/tema1/img10.png'),
      },
      {
        titulo: 'Mufla',
        texto: 'Mufla para acrilar las prótesis.',
        imagen: require('@/assets/curso/tema1/img11.png'),
      },
      {
        titulo: 'Motores rotatorios',
        texto: 'Motores rotatorios para desbastar,  pulir y brillar.',
        imagen: require('@/assets/curso/tema1/img12.png'),
      },
      {
        titulo: 'Termoformadora para las férulas',
        texto:
          'Son máquinas moldeadoras de planchas termoplásticas. Se utilizan en el sector dental para confeccionar férulas, placas base, cubetas individuales, coronas, puentes y aparatos de ortodoncia.',
        imagen: require('@/assets/curso/tema1/img13.png'),
      },
      {
        titulo: 'Arenador',
        texto: 'Arenador para la limpieza de las estructuras.',
        imagen: require('@/assets/curso/tema1/img14.png'),
      },
      {
        titulo: 'Baño electrolítico',
        texto:
          'El baño electrolítico está especialmente diseñado para los laboratorios dentales. Se usa para dar un pulido y un brillo inicial a la prótesis.',
        imagen: require('@/assets/curso/tema1/img15.png'),
      },
      {
        titulo: 'Vaporizador',
        texto:
          'Vaporizador para limpiar ceras y otros materiales del instrumental o de los modelos.',
        imagen: require('@/assets/curso/tema1/img16.png'),
      },
      {
        titulo: 'Fresadora',
        texto:
          'Las fresadoras son máquinas de corte de material asistido por computadora (CAM por sus siglas en inglés), en el cual a través de un lenguaje de programación en la máquina se mecaniza el material mediante una herramienta rotativa de metal que ejecuta movimientos en varios ejes.',
        imagen: require('@/assets/curso/tema1/img17.png'),
      },
      {
        titulo: 'Impresora 3D',
        texto:
          'La impresión 3D dental facilita la creación de guías quirúrgicas, coronas, alineadores, prótesis dentales, adaptando cada solución al paciente con gran precisión.',
        imagen: require('@/assets/curso/tema1/img18.png'),
      },
      {
        titulo: 'Articulador semiajustable',
        texto:
          'El uso de articuladores semiajustables permite tener una visión reproducible de los maxilares fuera de la boca y brinda conocimiento de su comportamiento como la existencia de alguna discrepancia entre la relación céntrica y la oclusión habitual.',
        imagen: require('@/assets/curso/tema1/img19.png'),
      },
    ],
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
