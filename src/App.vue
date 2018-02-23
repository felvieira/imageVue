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
        </Painel>
      </div>
    </div>
  </div>
</template>


<script>
  //Importar o componente para ser usado
  import Painel from './components/shared/painel/painel.vue';
  export default {
    // Declarar como vc vai querer "chamar" seu componente
    components: {
      'Painel': Painel
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
  @import "~vue-material/dist/theme/engine"; // Import the theme engine
  @include md-register-theme("default", ( primary: md-get-palette-color(blue, A200), // The primary color of your application
  accent: md-get-palette-color(red, A200), // The accent or secondary color
  theme: dark // This can be dark or light
  ));
  @import "~vue-material/dist/theme/all"; // Apply the theme
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
