<template>
    <div class="md-layout md-gutter">
      <div class="md-layout-item" v-for="foto of fotos">
        <Painel :titulo=foto.titulo :imagem=foto.url :grupo=foto.grupo>
        </Painel>
      </div>
  </div>
</template>


<script>
//Importar o componente para ser usado
import Painel from './components/shared/painel/painel.vue';

  export default {
    // Declarar como vc vai querer "chamar" seu componente
    components: {
      'Painel' : Painel
    },

    name: 'app',

    data() {
      return {
        msg: 'Welcome to Your Vue.js App',
        fotos: [

        ]
      }
    },

    created(){
      let promise = this.$http.get('http://localhost:3000/v1/fotos');
      promise.then(res => res.json())
      // this.fotos é a propriedade do objeto e é armezado no objeto fotos do componente
      .then(fotos => this.fotos = fotos, err => console.log(err));
    }

  }
</script>

<style lang="scss">
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }

</style>
