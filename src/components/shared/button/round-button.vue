<template>
  <md-button @click="dispatchAction()" class="md-icon-button md-raised" :class="buttonColors">
    <md-icon>{{ icon }}</md-icon>
  </md-button>
</template>

<script>

  export default {
    props: {
      icon: {
        required: true,
        type: String
      },
      title: {
        type: String
      },
      color: {
        type: String
      },
      confirmacao: {
        type: Boolean
      }
    },
    methods: {
      dispatchAction() {
        if (this.confirmacao) {
          if (confirm('Confirma Operação?')) {
            this.$emit('buttonActive');
          }
          return;
        }
        this.$emit('buttonActive');
      }
    },
    computed: {
      buttonColors() {
        if (!this.color) {
          return 'md-primary';
        } else {
          return this.color;
        }
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>
