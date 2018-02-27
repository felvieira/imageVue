<template>
  <md-card>
    <md-card-media>
      <img :src="imagem" :alt="titulo">
    </md-card-media>
    <md-card-header>
      <div class="md-title">{{ titulo }}</div>
      <div class="md-subhead">{{ grupo }}</div>
    </md-card-header>
    <md-card-expand>
      <md-card-actions>
        <slot name="buttons"></slot>
      </md-card-actions>
        <slot name="description"></slot>
    </md-card-expand>
  </md-card>
</template>

<script>

  export default {
    props: ['titulo', 'imagem', 'grupo'],
  }
</script>

<style lang="scss" scoped>
  // Com scoped o css so é aplicado no elemento
  .md-card {
    width: 320px;
    margin: 4px;
    display: inline-block;
    vertical-align: top;
  }

</style>
