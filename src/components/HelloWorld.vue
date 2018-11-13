<template>
  <div class="hello">
    {{ $store.state.count }}
    Counter is : {{ evenOrOdd }}
    <button v-on:click="increment()">Add 1</button>
    <button v-on:click="decrement()">Minus 1</button>
  </div>
</template>

<script>
  import {mapGetters, mapActions} from 'vuex'

  export default {
    name: 'HelloWorld',
    computed: mapGetters([
      'evenOrOdd'
    ]),
    methods: mapActions([
      'increment',
      'decrement'
    ])
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


</style>
