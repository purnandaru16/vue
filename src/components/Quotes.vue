<template>
  <div>
    <div class="title">
      <slot name="title"></slot>
      <!--Set the default content if there is no input from outside-->
      <span style="color: #ccc"><slot name="subtitle">The Subtitle</slot></span>
    </div>
    <div>
      <!--unnamed slot will be the deault slot-->
      <slot></slot>
    </div>
  </div>
</template>

<script>
</script>

<style scoped>
  div {
    border: 1px solid #ccc;
    box-shadow: 1px 1px 2px black;
    padding: 30px;
    margin: 30px auto;
    text-align: center;
  }
  h2 {
    color: red;
  }
  .title {
    font-style: italic;
  }
</style>
