import Vue from 'vue'
import App from './App.vue'
import Quote from './Quote.vue'
import Forms from './Forms.vue'

export const eventBus = new Vue({
  //centralized eventBus so you can use it everywhere
  methods: {
    changeAge(age){
      this.$emit('ageWasEdited', age);
    }
  }
});

/*new Vue({
  el: '#app',
  render: h => h(App)
});*/

/*new Vue({
  el: '#quote',
  render: h => h(Quote)
});*/

new Vue({
  el: '#forms',
  render: h => h(Forms)
});
