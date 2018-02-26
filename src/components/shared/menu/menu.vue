<template>
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
          <md-list-item v-for="route in routes">
            <md-icon>{{ route.icon }}</md-icon>
            <!-- Com if ternario -->
            <!-- <router-link :to="route.path ? route.path : '/'" class="md-list-item-text">{{ route.title }}</router-link> -->
            <router-link :to="route.path || '/'" class="md-list-item-text">{{ route.title }}</router-link>
          </md-list-item>
        </md-list>
      </md-app-drawer>
      <slot></slot>
   </md-app>
</template>


<script>

  export default {

    // sem validação
    // props: ['routes'],
    props: {
      routes: {
        type: Array,
        required: true
      }
    },
    data: () => ({
      menuVisible: false,

    })

  }

</script>

<style lang="scss">

</style>
