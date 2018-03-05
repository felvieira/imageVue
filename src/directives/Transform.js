import Vue from 'vue';

Vue.directive('transform', {
  bind(el, binding, vnode) {
    let current = 0;
    let increment = 90;
    let animate = false;
    let efeito;

    el.addEventListener('dblclick', function () {
      if (binding.value) {
        increment = binding.value.increment;
        animate = binding.value.animate;
      }

      if (!binding.arg || binding.arg == 'rotate') {

        if (binding.modifiers.reverse) {
          current -= increment;
        } else {
          current += increment;
        }
        efeito = `rotate(${current}deg)`;

      } else if (binding.arg == 'scale') {

        efeito = `scale(${increment})`;
      }

      this.style.transform = efeito;

      if (animate) el.style.transition = 'transform 0.5s';
    })
  }
})
