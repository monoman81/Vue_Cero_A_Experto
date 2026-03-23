<script lang="ts" src="./CounterScript2.ts">
</script>

<template>
  <section>
    <h3>Counter: {{ counter }}</h3>
    <h3>Square: {{ square }}</h3>
    <h4></h4>
    <div>
      <button class="btn" @click="counter++">+1</button>
      <button class="btn" @click="counter--">-1</button>
    </div>
  </section>
</template>

<style scoped>
  .btn {
    @apply p-5 rounded-lg ml-2 bg-blue-300 hover:bg-blue-500 text-zinc-900 transition-colors;
  }
</style>
