<script lang="ts">

import {computed, defineComponent, ref} from "vue";
import {useCounter} from "@/composables/useCounter.ts";

export default defineComponent({
  props: {
    value: {
      type: Number,
      required: true
    }
  },
  setup(props) {
    // const counter = ref(props.value);
    // const square = computed(() => counter.value * counter.value);

    const {counter, square} = useCounter(props.value);

    return {
      counter,
      square
    }
  },
});

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
