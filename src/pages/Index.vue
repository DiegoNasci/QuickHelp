<template lang="pug">
div
  .row.q-ml-xl.q-mt-lg
    .col-10.col-sm-4.col-md-3.q-mb-sm.q-mr-sm
      q-item(@click.native="$router.push('/main')")
        q-card.bg-dark.shadow-5.window-width.text-white
          q-card-media.q-pa-xl
            |12
          q-card-title.bg-red
            |Prioridade
    .col-10.col-sm-4.col-md-3.q-mb-sm.q-mr-sm
      q-item(@click.native="$router.push('/main')")
        q-card.bg-dark.shadow-5.window-width.text-white
          q-card-media.q-pa-xl
            |12
          q-card-title.bg-green
            |Cafe
    .col-10.col-sm-4.col-md-3.q-mb-sm.q-mr-sm
      q-item(@click.native="$router.push('/main')")
        q-card.bg-dark.shadow-5.window-width.text-white
          q-card-media.q-pa-xl
            |12
          q-card-title.bg-warning
            |Cafe

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
