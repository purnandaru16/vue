import Vue from 'vue'
import App from './App.vue'
import Quote from './Quote.vue'
import Forms from './Forms.vue'
import Directive from "./Directive";

export const eventBus = new Vue({
  //centralized eventBus so you can use it everywhere
  methods: {
    changeAge(age){
      this.$emit('ageWasEdited', age);
    }
  }
});

/*Global directive*/
Vue.directive('highlight', {
  bind(el, binding, vnode) {
    //el.style.backgroundColor = 'cyan';
    //el.style.backgroundColor = binding.value;
    var delay = 0;
    if (binding.modifiers['delayed']) {
      delay = 3000;
    }

    setTimeout(() => {
      if (binding.arg === 'background') {
        el.style.backgroundColor = binding.value;
      } else {
        el.style.color = binding.value;
      }
    }, delay);
  }
});

new Vue({
  el: '#app',
  //render: h => h(App)
  render: h => h(Directive)
});

/*new Vue({
  el: '#quote',
  render: h => h(Quote)
});*/

/*new Vue({
  el: '#forms',
  render: h => h(Forms)
});*/
