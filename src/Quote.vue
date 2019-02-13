<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12">
        <button @click="selectedComponent = 'appQuote'">Quote</button>
        <button @click="selectedComponent = 'appAuthor'">Author</button>
        <button @click="selectedComponent = 'appNew'">New</button>
        <hr>
        <p>{{ selectedComponent }}</p>
        <!--keep-alive prevent component to destroyed when
        change to another event and go back again-->
        <keep-alive>
          <component :is="selectedComponent">
            <p>Default content</p>
          </component>
        </keep-alive>
        <!--<app-quote>
          <h2 slot="title">{{ quoteTitle }}</h2>
          <p>A wonderful quote</p>
        </app-quote>-->
      </div>
    </div>
  </div>
</template>

<script>
  import Kwot from './components/Quotes.vue';
  import Author from './components/Author.vue';
  import New from './components/New.vue';

  export default {
    data(){
      return {
        quoteTitle: 'The Quote',
        selectedComponent: 'appQuote'
      }
    },
    components: {
      appQuote: Kwot,
      appAuthor: Author,
      appNew: New
    }
  }
</script>

<style>
</style>
