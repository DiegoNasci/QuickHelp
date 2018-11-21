<template lang="pug">
div.bg-warning.marginBg.text-white
  .row.justify-center.items-center
    q-card.bg-dark.q-ma-sm.q-pa-xl.shadow-5.maximo-cad.meio-cad
      .row
        .col-12.col-md-12.q-mb-lg.text-center
          .q-display-2 Computador não liga!
      .row
        .col-12.col-md-12
          .q-subheading.text-left.q-mb-sm Marque as alternativas:
        .col-12.col-md-12.q-mr-lg
          q-checkbox(color="warning" v-model="solicitation.ativation" val="1" label="Verifiquei a tomada!").q-subheading.q-pr-lg
        .col-12.col-md-12.q-mb-sm.q-mr-lg
          q-checkbox(color="warning" v-model="solicitation.ativation" val="2" label="Chegou a fazer um barulho, mas não da vídeo!").q-subheading
        .col-12.col-md-12.q-mb-sm.q-mr-lg
          q-checkbox(color="warning" v-model="solicitation.ativation" val="3" label="Não faz nada quando aperto o botão power!").q-subheading
        .col-12.col-md-12.q-mt-md
          .q-subheading.text-left.q-mb-sm Observação:
          q-input(v-model="solicitation.text" type="textarea" :max-height="100" rows="7").bg-white.round-borders
      center
        .row.q-mt-lg
          .col
            q-btn(label="Salvar" @click="addUser").bg-warning
          .col
            q-btn(label="Cancelar" @click="cancel" color="red-6")

</template>
<style scoped>
.maximo-cad{
  max-width: 400px;
}
.marginBg{
  width: 100%;
  height: 900px;
  overflow: hidden;
}
.meio-cad{
  margin-top:10%;
  margin-bottom: 10%
}
</style>
<script>

// import Parse from 'parse'

export default {
  data () {
    return {
      solicitation: {
        text: '',
        ativation: ['', '', '']
      }
    }
  },
  methods: {
    addUser () {
      this.$router.push('listSolicitation')
    },
    cancel () {
      this.$router.push('listSolicitation')
    }
  }
}
</script>
