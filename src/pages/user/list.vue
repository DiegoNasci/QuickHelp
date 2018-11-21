<template lang="pug">
div
  div.q-mt-lg
    .row.justify-between.bd-bottom
      div
        .col-8.col-sm-6.q-ml-md.q-mb-sm
          .q-subheading Usuários>Listar
    .flex.flex-center.q-ml-lg.q-mr-lg
      q-table.inp-col.q-mt-xl.flex.flex-center(:data="users" :columns="columns" row-key="name")
        q-tr(slot="body" slot-scope="props" :props="props" @click.native="$router.push('/main/editUser/' + props.row.code)" class="cursor-pointer")
          q-td(v-for="col in props.cols" :key="col.name" :props="props")
            |{{ col.value }}
</template>
<style scoped>
.bd-bottom{
  border-bottom: 2px solid #6D6D6D;
  margin: 0 20px 0;
}
.inp-col{
  max-width: 1000px;
  min-width: 370px;
}
</style>
<script>
import db from '../../plugins/firebaseInit'
export default {
  data: () => ({
    columns: [
      {
        name: 'code',
        required: true,
        label: 'Cod.',
        align: 'left',
        field: 'code',
        sortable: true,
        classes: 'my-class',
        style: 'width: 500px'
      },
      {
        name: 'username',
        required: true,
        label: 'Nome',
        align: 'left',
        field: 'username',
        sortable: true,
        classes: 'my-class',
        style: 'width: 500px'
      },
      {
        name: 'lastname',
        required: true,
        label: 'Ultimo nome',
        align: 'left',
        field: 'lastname',
        sortable: true,
        classes: 'my-class',
        style: 'width: 500px'
      },
      {
        name: 'email',
        required: true,
        label: 'Email',
        align: 'left',
        field: 'email',
        sortable: true,
        classes: 'my-class',
        style: 'width: 500px'
      },
      {
        name: 'pass',
        required: true,
        label: 'Senha',
        align: 'left',
        field: 'pass',
        sortable: true,
        classes: 'my-class',
        style: 'width: 500px',
        type: 'password'
      }
    ],
    users: []
  }),
  created () {
    db.collection('users').get().then(querySnapshot => {
      querySnapshot.forEach(doc => {
        // console.log(doc.data())
        const data = {
          'id_user': doc.id,
          'code': doc.data().code,
          'username': doc.data().username,
          'lastname': doc.data().lastname,
          'email': doc.data().email,
          'pass': doc.data().pass
        }
        this.users.push(data)
      })
    })
      .catch(err => {
        console.log('Error getting document', err)
      })
  },
  methods: {
    rowClick (row) {
      console.log(row)
      this.$router.params({path: '/main/editUser/' + row.code})
    }
  }
}
</script>
