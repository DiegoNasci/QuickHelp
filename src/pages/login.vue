<template lang="pug">
  .row.justify-center.items-center.bg-dark.window-height.window-width
    q-card.bg-yellow-8.q-ma-sm.q-pa-xl.shadow-5
      .row.justify-center.items-center
        div.q-pr-xl.q-pl-xl
          .col-8.col-sm-6
            img(src="statics/images/user.png" style="width: 200px; height: 200px;")
          .col-8.col-sm-6
            center.q-display-1
              |Bem vindo!
        .form.q-pl-lg
          .col-8.col-sm-6.q-pb-md
            q-input(v-model="user.email" stack-label="E-mail")
          .col-8.col-sm-6.q-pb-md
            q-input(v-model="user.password" type="password" float-label="Password" stack-label="Senha")
          .col-8.col-sm-6.flex.flex-center
            .col
              q-btn(label="ENTRAR" @click="login" color="dark")
            .col.q-display-3
              q-item(@click.native="$router.push('/addLogin')")
                q-item-main(label="Não tem conta? cadastre-se" )
</template>
<script>
export default {
  data () {
    return {
      user: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    login () {
      if (this.user.email === 'diegomp100@gmail.com') {
        this.$router.push('/main/1')
      } else if (this.user.email === 'fulano@gmail.com') {
        this.$router.push('/main')
      } else {
        this.$q.dialog({
          title: 'Erro',
          message: 'Erro ao iniciar sessão, email ou senha inválidos!'
        })
      }
    }
  }
}
</script>
<style scoped>
.marginLogin{
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.bg-login{
  background: linear-gradient(to right, rgb(162, 234, 255), rgb(0, 111, 178));
}
</style>
