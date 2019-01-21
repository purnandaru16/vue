import Vue from 'vue'
import App from './App.vue'

export const eventBus = new Vue({
  //centralized eventBus so you can use it everywhere
  methods: {
    changeAge(age){
      this.$emit('ageWasEdited', age);
    }
  }
});

new Vue({
  el: '#app',
  render: h => h(App)
})
