<template lang="pug">
div
  .row.q-mt-lg
    .col-12.col-sm-8.col-md-5.q-mb-sm.q-mr-sm
      q-item(@click.native="$router.push('/main/editSolicitation/')")
        q-card.bg-dark.shadow-5.window-width.text-white
          q-card-media.q-pa-xl
            .col-12.col-md-12.q-mb-lg.text-center
              .q-display-1 Computador não liga!
            .col-12.col-md-12.q-mr-lg
              q-checkbox(color="warning" v-model="solicitation.ativation" val="1" label="Verifiquei a tomada!").q-subheading.q-pr-lg
            .col-12.col-md-12.q-mb-sm.q-mr-lg
              q-checkbox(color="warning" v-model="solicitation.ativation" val="2" label="Chegou a fazer um barulho, mas não da vídeo!").q-subheading
            .col-12.col-md-12.q-mb-sm.q-mr-lg
              q-checkbox(color="warning" v-model="solicitation.ativation" val="3" label="Não faz nada quando aperto o botão power!").q-subheading
          q-card-title.bg-red
            .row.q-body-2
              .col-6
                |Prioridade
              .col-6.text-right
                |12/12/2015 10:00
</template>
<style>
</style>
<script>
export default {
  data () {
    return {
      solicitation: {
        text: 'Diego',
        ativation: ['1', '', '3']
      }
    }
  }
}
</script>
