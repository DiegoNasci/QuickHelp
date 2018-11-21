<template lang="pug">
div
  .row.q-ml-xl.q-mt-lg
    .col-10.col-sm-4.col-md-3.q-mb-sm.q-mr-sm
      q-item(@click.native="$router.push('/main/editSolicitation')")
        q-card.bg-dark.shadow-5.window-width.text-white
          q-card-media.q-pa-xl.text-center
            |Computador não liga
    .col-10.col-sm-4.col-md-3.q-mb-sm.q-mr-sm
      q-item(@click.native="$router.push('/main')")
        q-card.bg-dark.shadow-5.window-width.text-white
          q-card-media.q-pa-xl.text-center
            |Impressora não liga
    .col-10.col-sm-4.col-md-3.q-mb-sm.q-mr-sm
      q-item(@click.native="$router.push('/main')")
        q-card.bg-dark.shadow-5.window-width.text-white
          q-card-media.q-pa-xl.text-center
            |Impressora não imprime

</template>

<style>
.cardT{
  min-width: 250px;
}
</style>

<script>
export default {
  name: 'PageIndex'
}
</script>
