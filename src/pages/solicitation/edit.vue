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
<style <style scoped>
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
        text: 'Diego',
        ativation: ['1', '', '3']
      }
    }
  },
  methods: {
  //   addUser () {
  //     // let self = this
  //     // let params = {
  //     //   username: self.user.username,
  //     //   password: self.user.password,
  //     //   email: self.user.email
  //     // }

  //     // Parse.Cloud.run('createUser', params).then(
  //     //   result => {
  //     //     this.$q.notify({
  //     //       message: 'Usuário criado com sucesso.',
  //     //       color: 'positive',
  //     //       position: 'bottom-center'
  //     //     })
  //     //     console.log('result.id: ' + result.id)
  //     //     this.user.objectId = result.id
  //     //     this.save()
  //     //   },
  //     //   error => {
  //     //     this.$q.notify({
  //     //       message: `Erro ao salvar.<br/>${error}`,
  //     //       color: 'negative',
  //     //       position: 'bottom-center'
  //     //     })
  //     //   }
  //     // )

  //     this.$router.push('userList')
  //   },
  //   save () {
  //     let self = this
  //     console.log('self.user.userid:' + self.user.objectId)
  //     Parse.Cloud.run('editUser', this.user).then(
  //       result => {
  //         self.listUsers()
  //         self.cleanForm()
  //         this.$q.notify({
  //           message: 'Usuário criado com sucesso.',
  //           color: 'positive',
  //           position: 'bottom-left'
  //         })
  //         // this.$router.push('/login')
  //       },
  //       error => {
  //         this.$q.notify({
  //           message: `Erro ao salvar.<br/>${error}`,
  //           color: 'negative',
  //           position: 'bottom-left'
  //         })
  //       }
  //     )
  //   },
  //   cleanForm () {
  //     this.user.code = ''
  //     this.user.matriculation = ''
  //     this.user.adjutancy = ''
  //     this.user.creation = ''
  //     this.user.username = ''
  //     this.user.email = ''
  //     this.user.password = ''
  //     this.user.check = false
  //   },
  //   listUsers () {
  //     let self = this
  //     self.registros = []
  //     let Parse = this.$parse
  //     let query = new Parse.Query(Parse.User)
  //     query.ascending('username')
  //     query.find({
  //       success: function (results) {
  //         self.registros = results.map(object => object.toJSON())
  //       },
  //       error: function (error) {
  //         this.$q.notify({
  //           message: 'Error: ' + error.code + ' ' + error.message,
  //           color: 'negative',
  //           position: 'bottom-left'
  //         })
  //       }
  //     })
    cancel () {
      this.$router.push('/main/listSolicitation')
    }
  }
}
</script>
