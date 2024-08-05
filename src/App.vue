<template>
  <h1 class="p-100">Hola mundo en VUE.JS</h1>

  <p>Contador: {{ counter }}</p>

  <button @click="increment" >Incrementa +</button>
</template>

<script setup lang="ts">
import { ref } from 'vue';

 
  const counter = ref<number>(1)

  const increment = () => {
    counter.value ++
  }

</script>

<style>
h1{
  color: red;
}
</style>

