<template>
   <div class="page-container">
      <md-app md-mode="reveal">
      <md-app-toolbar class="md-primary">
        <md-button class="md-icon-button" @click="menuVisible = !menuVisible">
          <md-icon>menu</md-icon>
        </md-button>
        <span class="md-title">Menu</span>
      </md-app-toolbar>

      <md-app-drawer :md-active.sync="menuVisible">
        <md-toolbar class="md-transparent" md-elevation="0">Menu</md-toolbar>

        <md-list>
          <md-list-item>
            <md-icon>move_to_inbox</md-icon>
            <a href="/" class="md-list-item-text">Home</a>
          </md-list-item>

          <md-list-item>
            <md-icon>send</md-icon>
            <a href="/cadastro" class="md-list-item-text">Cadastro</a>
          </md-list-item>

        </md-list>
      </md-app-drawer>

      <md-app-content>
        <router-view></router-view>
      </md-app-content>

    </md-app>
  </div>
</template>


<script>

  export default {
  data: () => ({
      menuVisible: false
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

</style>
