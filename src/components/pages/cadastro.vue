<template>
  <form class="md-layout md-gutter md-alignment-center" @submit.prevent="cadastrar()">
    <div class="md-layout-item  md-small-size-100 md-xsmall-size-100">
      <md-field>
        <label>Titulo da imagem</label>
        <md-input type="text" id="titulo" v-model.lazy="foto.titulo" autocomplete="off"></md-input>
        <md-icon>announcement</md-icon>
        <span class="md-helper-text">Escreva o título da imagem</span>
      </md-field>

    </div>

    <div class="md-layout-item md-small-size-50 md-xsmall-size-100">
      <md-field>
        <label>URL da imagem</label>
        <md-input v-model.lazy="foto.url"></md-input>
        <md-icon>add_a_photo</md-icon>
        <span class="md-helper-text">Cadastre a url da imagem</span>
      </md-field>
    </div>
    <div class="md-layout-item md-small-size-50 md-xsmall-size-100">
      <img :src="foto.url" :alt="foto.titulo">
    </div>

    <div class="md-layout-item  md-small-size-100 md-xsmall-size-100">

      <md-field>
        <label>Descrição</label>
        <md-textarea v-model="foto.descricao"></md-textarea>
        <md-icon>description</md-icon>
      </md-field>

    </div>
    <div class="md-layout-item  md-small-size-100 md-xsmall-size-100">
      <md-button class="md-raised md-primary" type="submit">Cadastrar</md-button>
      <router-link :to="{name: 'home'}">
        <md-button class="md-raised md-accent">Voltar</md-button>
      </router-link>
    </div>

  </form>
</template>

<script>
  import Foto from '../../domains/foto/foto';
  import FotoService from '../../domains/foto/FotoService';

  export default {

    data() {
      return {
        foto: new Foto()
      }
    },

    methods: {

      cadastrar() {

        this.service
          .cadastra(this.foto)
          .then(() => this.foto = new Foto(), err => console.loog(err));

      }
    },

    created() {
      this.service = new FotoService(this.$resource);
    }

  }
</script>

<style lang="scss" scoped>
  .md-field:last-child {
    margin-bottom: 40px;
  }

  .md-layout-item {
    margin-bottom: 25px;
    &:after {
      width: 100%;
      height: 100%;
      display: block;
      content: " ";
    }
  }
</style>
