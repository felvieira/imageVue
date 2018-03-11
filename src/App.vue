<template>
  <div class="page-container">
      <menu-collpase :routes="routes">
          <md-app-content>
            <transition name="page">
              <router-view></router-view>
            </transition>
          </md-app-content>
      </menu-collpase>
  </div>
</template>

<script>
  import { routes } from './routes';
  import Menu from './components/shared/menu/menu.vue';

  export default {

    components: {
      'menu-collpase' : Menu
    },
    data: () => ({
      // se tiver a propriedade menu na rota ele entra no menu
      routes: routes.filter(route => route.menu)
    })
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
  .md-app {
    height: 100vh;
    border: 1px solid rgba(#000, .12);
  }
  .page-enter,
  .page-leave-active {
    opacity: 0;
  }
  .page-enter-active,
  .page-leave-active {
    transition: opacity .4s;
  }
</style>
