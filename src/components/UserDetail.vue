<template>
  <div class="component">
    <h3>You may view the User Details here</h3>
    <p>Many Details</p>
    <p>User Name : {{ nama }}</p>
    <!--<p>User Name : {{ switchName() }}</p>-->
    <p>User Age : {{ userAge }}</p>

    <button @click="resetName">Reset Name</button>
    <!--reset name using callback as prop-->
    <button @click="resetFn()">Reset Name with Callback</button>
  </div>
</template>

<script>
  import {eventBus} from '../main';

  export default {
    //props:['nama'],

    //validate props
    props: {
      nama: {
        type: String,
        default: 'Andar'
      },
      resetFn: Function,
      userAge: Number
    },
    methods: {
      switchName() {
        //reverse name value
        return this.nama.split("").reverse().join("");
      },
      resetName() {
        //reset name in child component
        this.nama = 'Andar';
        //pass object to parent component
        this.$emit('nameWasReset', this.nama)
      }
    },
    //hook eventBus
    created() {
      eventBus.$on('ageWasEdited',(data) => {
        this.userAge = data;
      });
    }
  }
</script>

<style scoped>
  div {
    background-color: lightcoral;
  }
</style>
