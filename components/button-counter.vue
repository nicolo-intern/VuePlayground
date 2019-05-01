<template>
  <div>
    <h1>button counter tag</h1>
    <button v-on:click="count++"> You clicked me {{count}} times. </button>
    <button v-on:click="testing">Click me to pop up alert box! {{ value }} </button>
  </div>
</template>

<script>
import GameOfThrones from '../pages/gameofthrones.js';
  export default {
    data() {
      return {
        count: 0
      }
    },
    methods: {
      async testing() {
        let value = await GameOfThrones.asyncData();
        console.log(value)
        alert(`${value}`)
      }
    }
  }
</script>
