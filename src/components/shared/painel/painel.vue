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
        <div>
          <round-button class="md-raised md-primary" icon="edit" />
          <round-button class="md-raised md-accent" icon="delete" @click.native="remove" />
          <md-card-expand-trigger>
            <!-- <round-button class="md-raised" :icon="'keyboard_arrow_down'" /> -->
            <md-button class="md-icon-button">
              <md-icon>keyboard_arrow_down</md-icon>
            </md-button>
          </md-card-expand-trigger>
        </div>
      </md-card-actions>
      <md-card-expand-content>
        <md-card-content>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio itaque ea, nostrum odio. Dolores, sed accusantium quasi non, voluptas eius illo quas, saepe voluptate pariatur in deleniti minus sint. Excepturi.
        </md-card-content>
      </md-card-expand-content>
    </md-card-expand>
  </md-card>

</template>

<script>
  import RoundButton from '../button/round-button.vue';
  export default {
    components: {
      'round-button': RoundButton
    },
    props: ['titulo', 'imagem', 'grupo'],
    methods: {
      remove(foto){
        alert("BOTAO REMOVIDO"+ this.titulo);
      }
    }
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
