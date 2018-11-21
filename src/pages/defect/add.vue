<template lang="pug">
div.bg-warning.window-height.window-width
  .row.justify-center.items-center
    q-card.bg-white.q-ma-sm.q-pa-xl.shadow-5.maximo-cad.meio-cad
      h3.text-center.flex.flex-center.text-grey-9
        .q-pb-lg Cadastro de defeitos!
        .row.justify-center
          .col-10.col-md-10.q-mb-sm.q-mr-lg
            q-input(v-model="defect.code" type="number" stack-label="Código")
          .col-10.col-md-10.q-mb-sm.q-mr-lg
            q-input(v-model="defect.username" stack-label="Nome")
          .col-10.col-md-10.q-mb-sm.q-mr-lg
            q-input(v-model="defect.attribute1" stack-label="Atributo 1:")
          .col-10.col-md-10.q-mb-sm.q-mr-lg
            q-input(v-model="defect.attribute2" stack-label="Atributo 2:")
          .col-10.col-md-10.q-mb-sm.q-mr-lg
            q-input(v-model="defect.attribute3" stack-label="Atributo 3:")
      center
        .row.q-mt-lg
          .col
            q-btn(label="Salvar" @click="addUser").bg-dark.text-white
          .col
            q-btn(label="Cancelar" @click="cancel" color="red-6")

</template>
<style <style scoped>
.maximo-cad{
  max-width: 400px;
}
.meio-cad{
  margin-top:10%;
  margin-bottom: 10%
}
</style>
<script>
// import { validationMixin } from 'vuelidate'
// import { email, required } from 'vuelidate/lib/validators'
import db from '../../plugins/firebaseInit'
export default {
  // mixins: [validationMixin],
  data () {
    return {
      defect: {
        code: '',
        username: '',
        attribute1: '',
        attribute2: '',
        attribute3: ''
      }
    }
  },
  methods: {
    addUser () {
      db.collection('defects').add({
        code: this.defect.code,
        username: this.defect.username,
        attribute1: this.defect.attribute1,
        attribute2: this.defect.attribute2,
        attribute3: this.defect.attribute3
      })
        .then(docRef => {
          this.$q.dialog({
            title: 'Parabéns!',
            message: 'Cadastro efetuado com sucesso.'
          })
          this.$router.push('/main/listDefect')
        })
        .catch(err => {
          console.log(err)
          this.$q.dialog({
            title: 'Erro!',
            message: 'Erro: ' + err + '.'
          })
        })
    },
    cancel () {
      this.$router.push('/main')
    }
  }
}
</script>
