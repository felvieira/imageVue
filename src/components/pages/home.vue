<template>
  <div>
    <md-field>
      <label>Filtre as imagens aqui!</label>
      <!-- <input type="search" v-on:input="filtro = $event.target.value"> -->
      <md-input type="search" v-model="filtro" v-on:input="filtro = $event.target.value"></md-input>
    </md-field>
    {{ filtro }}
    <div class="md-layout md-gutter md-alignment-top-center">
      <div class="md-layout-item" v-for="foto of fotosComFiltro">
        <Painel :titulo=foto.titulo :imagem=foto.url :grupo=foto.grupo>
          <div slot="buttons">
            <round-button color="md-primary" icon="edit" @buttonActive="edit(foto)" :confirmacao="true" />
            <round-button color="md-accent" icon="delete" @buttonActive="remove(foto)" :confirmacao="false" />
            <md-card-expand-trigger>
              <!-- <round-button class="md-raised" :icon="'keyboard_arrow_down'" /> -->
              <md-button class="md-icon-button">
                <md-icon>keyboard_arrow_down</md-icon>
              </md-button>
            </md-card-expand-trigger>
          </div>
          <md-card-expand-content slot="description">
            <md-card-content>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio itaque ea, nostrum odio. Dolores, sed accusantium quasi non, voluptas eius illo quas, saepe voluptate pariatur in deleniti minus sint. Excepturi.
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
        alert("BOTAO REMOVIDO" + foto.titulo);
      },
      edit(foto) {
        alert("BOTAO EDITADO" + foto.titulo);
      },
    },
    data() {
      return {
        fotos: [],
        filtro: '',
        type: null,
      }
    },
    created() {
      let promise = this.$http.get('http://localhost:3000/v1/fotos');
      promise.then(res => res.json())
        // this.fotos é a propriedade do objeto e é armezado no objeto fotos do componente
        .then(fotos => this.fotos = fotos, err => console.log(err));
    }
  }
</script>

<style lang="scss">

</style>
