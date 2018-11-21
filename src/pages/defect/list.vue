<template lang="pug">
div
  div.q-mt-lg
    .row.justify-between.bd-bottom
      div
        .col-8.col-sm-6.q-ml-md.q-mb-sm
          .q-subheading Defeitos>Listar
    .flex.flex-center.q-ml-lg.q-mr-lg
      q-table.inp-col.q-mt-xl.flex.flex-center(:data="defects" :columns="columns" row-key="name")
        q-tr(slot="body" slot-scope="props" :props="props"  @click.native="rowClick(props.row)" class="cursor-pointer")
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
        name: 'attribute1',
        required: true,
        label: 'Atributo 1',
        align: 'left',
        field: 'attribute1',
        sortable: true,
        classes: 'my-class',
        style: 'width: 500px'
      },
      {
        name: 'attribute2',
        required: true,
        label: 'Atributo 2',
        align: 'left',
        field: 'attribute2',
        sortable: true,
        classes: 'my-class',
        style: 'width: 500px'
      },
      {
        name: 'attribute3',
        required: true,
        label: 'Atributo 3',
        align: 'left',
        field: 'attribute3',
        sortable: true,
        classes: 'my-class',
        style: 'width: 500px'
      }
    ],
    defects: []
  }),
  created () {
    db.collection('defects').get().then(querySnapshot => {
      querySnapshot.forEach(doc => {
        // console.log(doc.data())
        const data = {
          'id_defect': doc.id,
          'code': doc.data().code,
          'username': doc.data().username,
          'attribute1': doc.data().attribute1,
          'attribute2': doc.data().attribute2,
          'attribute3': doc.data().attribute3
        }
        this.defects.push(data)
      })
    })
      .catch(err => {
        console.log('Error ao buscar os dados: ', err)
      })
  },
  methods: {
    rowClick (row) {
      this.$router.push('editDefect')
    }
  }
}
</script>
