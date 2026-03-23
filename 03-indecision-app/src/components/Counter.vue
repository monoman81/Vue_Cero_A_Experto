<script setup lang="ts">
// const props = defineProps({
//   value: {
//     type: Number,
//     required: true
//   }
// });

// const counter = ref(props.value);
// const square = computed(() => {
//   return counter.value * counter.value;
// });

interface Props {
  value: number
}

const props = defineProps<Props>();

import {useCounter} from "@/composables/useCounter.ts";

const {counter, square} = useCounter(props.value);

</script>

<template>
  <section>
    <h3>Counter: {{ counter }}</h3>
    <h3>Square: {{ square }}</h3>
    <h4></h4>
    <div>
      <button @click="counter++">+1</button>
      <button @click="counter--">-1</button>
    </div>
  </section>
</template>

<style scoped>
</style>
