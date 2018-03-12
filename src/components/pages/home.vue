<template>
  <div>
    <md-field>
      <label>Filtre as imagens aqui!</label>
      <!-- <input type="search" v-on:input="filtro = $event.target.value"> -->
      <md-input type="search" v-model="filtro"></md-input>
    </md-field>
    {{ filtro }}
    <h3 v-show="mensagem">{{ mensagem }}</h3>
    <div class="md-layout md-gutter md-alignment-top-center">
      <div class="md-layout-item" v-for="foto of fotosComFiltro">
        <Painel :titulo=foto.titulo :imagem=foto.url :grupo=foto.grupo>
          <div slot="buttons">
            <router-link :to="{name: 'alterar', params: {id: foto._id} }"><round-button color="md-primary" icon="edit" @buttonActive="edit(foto)" :confirmacao="false" /></router-link>
            <round-button color="md-accent" icon="delete" @buttonActive="remove(foto)" :confirmacao="true" />
            <md-card-expand-trigger>
              <!-- <round-button class="md-raised" :icon="'keyboard_arrow_down'" /> -->
              <md-button class="md-icon-button">
                <md-icon>keyboard_arrow_down</md-icon>
              </md-button>
            </md-card-expand-trigger>
          </div>
          <md-card-expand-content slot="description">
            <md-card-content>
              {{ foto.descricao }}
            </md-card-content>
          </md-card-expand-content>
        </Painel>
      </div>
    </div>
  </div>
</template>

<script>
  //Importar o componente para ser usado
  import Painel from '../shared/painel/painel.vue';
  import RoundButton from '../shared/button/round-button.vue';
  import FotoService from '../../domains/foto/FotoService';

  export default {
    // Declarar como vc vai querer "chamar" seu componente
    components: {
      'Painel': Painel,
      'round-button': RoundButton
    },
    computed: {
      fotosComFiltro() {
        if (this.filtro) {
          // case insensitive
          let arrRegex = new RegExp(this.filtro.trim(), 'i');
          return this.fotos.filter(foto => arrRegex.test(foto.titulo))
        } else {
          return this.fotos;
        }
      }
    },
    methods: {
      remove(foto) {
        this.service.deletar(foto._id)
          .then(() => {
            let indice = this.fotos.indexOf(foto);
            this.fotos.splice(indice, 1);
            this.mensagem = 'Foto removida com sucesso'
          }, err => {
            this.mensagem = err.message;
          });
      },
      edit(foto) {

      },
    },
    data() {
      return {
        fotos: [],
        filtro: '',
        type: null,
        mensagem: ''
      }
    },
    created() {
      this.service = new FotoService(this.$resource);
      this.service.listar()
      // this.fotos é a propriedade do objeto e é armezado no objeto fotos do componente
      .then(fotos => this.fotos = fotos, err => {
       this.mensagem = err.message;
      });
    }
  }
</script>

<style lang="scss">

</style>
