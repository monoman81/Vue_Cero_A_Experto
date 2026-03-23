<script setup lang="ts">
import Counter from "./components/Counter.vue"
import CounterScript from "@/components/CounterScript.vue"
import CounterScript2 from "@/components/counter-script/CounterScript2.vue";
</script>

<template>
  <h1 class="text-3xl font-bold underline">
    Hello world!
  </h1>
  <hr>
  <Counter :value="8" />
  <CounterScript :value="5" />
  <CounterScript2 :value="1" />
  <CounterScript2 :value="2" />
  <CounterScript2 :value="3" />
</template>

<style scoped>
</style>
