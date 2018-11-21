<template lang="pug">
div.bg-warning.marginBg
  .row.justify-center.items-center
    q-card.bg-white.q-ma-sm.q-pa-xl.shadow-5.maximo-cad.meio-cad
      h3.text-center.flex.flex-center.text-grey-9
        |Cadastro de usuário!
        .row.justify-center
          .col-10.col-md-10.q-mb-sm.q-mr-lg
            q-input(v-model="user.username" stack-label="Nome")
          .col-10.col-md-10.q-mb-sm.q-mr-lg
            q-input(v-model="user.lastName" stack-label="Sobrenome")
          .col-10.col-md-10.q-mb-sm.q-mr-lg
            q-input(v-model="user.email" stack-label="E-mail" type="email")
          .col-10.col-md-10.q-mb-sm.q-mr-lg
            q-input(v-model="user.password" type="password" float-label="Password" stack-label="Senha")
          .col-10.col-md-10.q-mb-sm.q-mr-lg
            .q-subheading Ativado
              q-toggle.q-pl-lg(v-model="user.check" color="dark")
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
import db from '../../plugins/firebaseInit'
export default {
  name: 'editUser',
  data () {
    return {
      user: {
        username: 'Diego',
        lastname: 'diego',
        email: '',
        password: '',
        check: false
      }
    }
  },
  created (next) {
    console.log(this.$route.params.idUser)
    db.collection('users').where('code', '==', this.$route.params.idUser).get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        next(vm => {
          vm.code = doc.data().code
          vm.username = doc.data().username
          vm.lastname = doc.data().lastname
          console.log(vm.username)
        })
      })
    })
      .catch(err => {
        console.log(err)
        this.$q.dialog({
          title: 'Erro!',
          message: 'Erro: ' + err + '.'
        })
      })
  },
  // beforeRouteEnter (to, next) {
  //   db.collection('users').where('code', '==', this.$route.params.idUser).get().then((querySnapshot) => {
  //     querySnapshot.forEach((doc) => {
  //       next(vm => {
  //         vm.code = doc.data().code
  //         vm.username = doc.data().username
  //         vm.lastname = doc.data().lastname
  //       })
  //     })
  //   })
  // },
  watch: {
    '$route': 'fetchData'
  },
  methods: {
    addUser () {
      console.log(this.$route.params.idUser)
    },
    fetchData () {
      db.collection('employees').where('employee_id', '==', this.$route.params.employee_id).get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          this.employee_id = doc.data().employee_id
          this.name = doc.data().name
          this.dept = doc.data().dept
          this.position = doc.data().position
        })
      })
    },
    deleteUser () {
      if (confirm('Are you sure?')) {
        db.collection('employees').where('employee_id', '==', this.$route.params.employee_id).get().then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            doc.ref.delete()
            this.$router.push('/')
          })
        })
      }
    },
    cancel () {
      this.$router.push('/main/listUser')
    }
  }
}
</script>
