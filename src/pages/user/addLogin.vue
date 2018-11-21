<template lang="pug">
div.bg-warning.window-height.window-width
  .row.justify-center.items-center
    q-card.bg-white.q-ma-sm.q-pa-xl.shadow-5.maximo-cad.meio-cad
      h3.text-center.flex.flex-center.text-grey-9
        |Faça seu cadastro que entraremos em contato!
        .row.justify-center
          .col-10.col-md-10.q-mb-sm.q-mr-lg
            q-input(v-model="user.code" type="number" stack-label="Código")
          .col-10.col-md-10.q-mb-sm.q-mr-lg
            q-input(v-model="user.username" stack-label="Nome")
          .col-10.col-md-10.q-mb-sm.q-mr-lg
            q-input(v-model="user.lastname" stack-label="Sobrenome")
          .col-10.col-md-10.q-mb-sm.q-mr-lg
            q-input(v-model="user.email" stack-label="E-mail" type="email")
          .col-10.col-md-10.q-mb-sm.q-mr-lg
            q-input(v-model="user.pass" type="password" float-label="Password" stack-label="Senha")
          .col-10.col-md-10.q-mb-sm.q-mr-lg
            q-input( v-model="confirmPassword" type="password" float-label="Password" stack-label="Confirmar Senha")
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
import db from '../../plugins/firebaseInit'
export default {
  // mixins: [validationMixin],
  data () {
    return {
      user: {
        code: '',
        username: '',
        lastname: '',
        pass: '',
        email: '',
        ativation: 'no'
      },
      confirmPassword: ''
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
    addUser () {
      db.collection('users').add({
        code: this.user.code,
        username: this.user.username,
        lastname: this.user.lastname,
        email: this.user.email,
        pass: this.user.pass,
        ativation: this.user.ativation
      })
        .then(docRef => {
          this.$q.dialog({
            title: 'Parabéns!',
            message: 'Cadastro efetuado com sucesso.'
          })
          this.$router.push('/')
        })
        .catch(err => {
          console.log(err)
          this.$q.dialog({
            title: 'Erro!',
            message: 'Erro: ' + err + '.'
          })
        })
    },

    // addUser () {
    //   if (this.user.matriculation.length > 5) {
    //     this.user.group = 'aluno'
    //   }

    //   if (this.$v.user.username.required) {
    //     if (this.$v.user.email.required && this.$v.user.email.email) {
    //       if (this.$v.user.matriculation.required) {
    //         if (this.user.password.length > 5) {
    //           if (this.user.password === this.confirmPassword) {
    //             this.signUp()
    //           } else {
    //             this.$q.dialog({
    //               title: 'Erro',
    //               message: 'Senhas não conferem!'
    //             })
    //             this.user.password = ''
    //             this.confirmPassword = ''
    //           }
    //         } else {
    //           this.$q.dialog({
    //             title: 'Erro',
    //             message: 'Senha precisa conter no mínimo 6 caracteres!'
    //           })
    //         }
    //       } else {
    //         this.$q.dialog({
    //           title: 'Erro',
    //           message: 'Matrícula é obrigatória!'
    //         })
    //       }
    //     } else {
    //       if (!this.$v.user.email.required) {
    //         this.$q.dialog({
    //           title: 'Erro',
    //           message: 'E-mail é obrigatório!'
    //         })
    //       } else if (!this.$v.user.email.email) {
    //         this.$q.dialog({
    //           title: 'Erro',
    //           message: 'E-mail inválido!'
    //         })
    //       }
    //     }
    //   } else {
    //     this.$q.dialog({
    //       title: 'Erro',
    //       message: 'Nome é obrigatório!'
    //     })
    //   }
    // },
    cancel () {
      this.$router.push('/')
    }
  }
}
</script>
