<template>
  <q-layout view="lHh Lpr lFf">
    <q-layout-header>
      <q-toolbar
        color="warning"
        :inverted="$q.theme === 'ios'"
      >
        <q-btn
          flat
          dense
          round
          @click="leftDrawerOpen = !leftDrawerOpen"
        >
          <q-icon name="fas fa-bars" />
        </q-btn>
        <q-toolbar-title>
          Quick Help
        </q-toolbar-title>
        <q-icon name="fas fa-sign-out-alt" @click.native="logout" color="white" class="flex right"></q-icon>
      </q-toolbar>
    </q-layout-header>

    <q-layout-drawer
      v-model="leftDrawerOpen"
      :content-class="$q.theme === 'mat' ? 'bg-grey-2' : null"
    >
    <div class="bg-warning">
      <div class="text-white text-bold q-display-1 q-pa-sm flex flex-center">
        Menu
      </div>
    </div>
      <q-list
        no-border
        link
        inset-delimiter
      >
        <q-list-header>Escolha uma das opções:</q-list-header>
        <q-item @click.native="$router.push('/main')">
          <q-item-side icon="fa fa-home" />
          <q-item-main label="Página Inicial"/>
        </q-item>
        <q-collapsible v-if="grupo === 'admin'" icon="far fa-user" label="Usuários">
          <div>
            <q-item @click.native="$router.push('/main/addUser')">
              <q-item-main label="Adicionar"/>
            </q-item>
          </div>
          <div>
            <q-item @click.native="$router.push('/main/listUser')">
              <q-item-main label="Listar"/>
            </q-item>
          </div>
        </q-collapsible>
        <q-collapsible v-if="grupo === 'admin'" icon="fas fa-exclamation-circle" label="Defeitos">
          <div>
            <q-item @click.native="$router.push('/main/addDefect')">
              <q-item-main label="Adicionar"/>
            </q-item>
          </div>
          <div>
            <q-item @click.native="$router.push('/main/listDefect')">
              <q-item-main label="Listar"/>
            </q-item>
          </div>
        </q-collapsible>
        <q-collapsible icon="fas fa-exclamation-triangle" label="Solicitações">
          <div>
            <q-item @click.native="$router.push('/main/addSolicitation')">
              <q-item-main label="Adicionar"/>
            </q-item>
          </div>
          <div>
            <q-item @click.native="$router.push('/main/listSolicitation')">
              <q-item-main label="Listar"/>
            </q-item>
          </div>
        </q-collapsible>
        <center>
          <q-btn @click.native="logout" class="q-ma-md q-pl-xl q-pr-xl bg-red text-white">Sair</q-btn>
        </center>
      </q-list>
    </q-layout-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { openURL } from 'quasar'

export default {
  name: 'MyLayout',
  data () {
    return {
      leftDrawerOpen: this.$q.platform.is.desktop,
      grupo: ''
    }
  },
  created () {
    this.$auth.onAuthStateChanged(currentUser => {
      const user = this.$auth.currentUser.email
      console.log('UID: ' + user)
      if (user === 'diegomp100@gmail.com') {
        this.grupo = 'admin'
      }
    })
  },
  methods: {
    openURL,
    logout () {
      this.$router.push('/')
    }
  }
}
</script>

<style>
</style>
