<template lang="pug">
div.bg-warning.window-height.window-width
  .row.justify-center.items-center
    q-card.bg-white.q-ma-sm.q-pa-xl.shadow-5.maximo-cad.meio-cad
      h3.text-center.flex.flex-center.text-grey-9
        .q-pb-lg Editar os defeitos!
        .row.justify-center
          .col-10.col-md-10.q-mb-sm.q-mr-lg
            q-input(v-model="defect.code" stack-label="Código")
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
// import { ref } from '../plugins/firebase'
// import firebase from 'firebase'
export default {
  // mixins: [validationMixin],
  data () {
    return {
      defect: {
        code: '1',
        username: 'Computador não liga',
        attribute1: 'Verifiquei a tomada',
        attribute2: 'Chegou a fazer barulho',
        attribute3: 'Não faz nada quando apreto o botão'
      }
    }
  },
  // validations: {
  //   user: {
  //     username: {
  //       required
  //     },
  //     email: {
  //       required,
  //       email
  //     },
  //     matriculation: {
  //       required
  //     },
  //     password: {
  //       required
  //     }
  //   },
  //   confirmPassword: {
  //     required
  //   }
  // },
  methods: {
    signUp () {
      // this.$auth.createUserWithEmailAndPassword(this.user.email, this.user.password).then(
      //   (user) => {
      //     // db.ref('users/' + this.uid).set(this.user)
      //     // db.collection('users').doc(this.uid).set(this.user)
      //     ref.push(this.user)
      //     this.$q.dialog({
      //       title: 'Parabéns!',
      //       message: 'Cadastro efetuado com sucesso.'
      //     })
      //     this.cancel()
      //   },
      //   (err) => {
      //     alert('Oops. ' + err.message)
      //   }
      // )
    },

    addUser () {
      // if (this.user.matriculation.length > 5) {
      //   this.user.group = 'aluno'
      // }

      // if (this.$v.user.username.required) {
      //   if (this.$v.user.email.required && this.$v.user.email.email) {
      //     if (this.$v.user.matriculation.required) {
      //       if (this.user.password.length > 5) {
      //         if (this.user.password === this.confirmPassword) {
      //           this.signUp()
      //         } else {
      //           this.$q.dialog({
      //             title: 'Erro',
      //             message: 'Senhas não conferem!'
      //           })
      //           this.user.password = ''
      //           this.confirmPassword = ''
      //         }
      //       } else {
      //         this.$q.dialog({
      //           title: 'Erro',
      //           message: 'Senha precisa conter no mínimo 6 caracteres!'
      //         })
      //       }
      //     } else {
      //       this.$q.dialog({
      //         title: 'Erro',
      //         message: 'Matrícula é obrigatória!'
      //       })
      //     }
      //   } else {
      //     if (!this.$v.user.email.required) {
      //       this.$q.dialog({
      //         title: 'Erro',
      //         message: 'E-mail é obrigatório!'
      //       })
      //     } else if (!this.$v.user.email.email) {
      //       this.$q.dialog({
      //         title: 'Erro',
      //         message: 'E-mail inválido!'
      //       })
      //     }
      //   }
      // } else {
      //   this.$q.dialog({
      //     title: 'Erro',
      //     message: 'Nome é obrigatório!'
      //   })
      // }
      this.$router.push('/main/listDefect')
    },
    cancel () {
      this.$router.push('/main/listDefect')
    }
  }
}
</script>
