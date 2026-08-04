<script setup lang="ts">

import type {Pokemon} from "@/modules/pokemon/interfaces";

interface Props {
  options: Pokemon[];
  blockSelection: boolean;
  correctAnswer: number;
}

const props = defineProps<Props>();

defineEmits<{
  selectedOption: [id: number]
}>();

</script>

<template>
  <section class="mt-5 flex flex-col">
    <button
      :disabled="blockSelection"
      :class="['capitalize disabled:shadow-none disabled:bg-gray-100', {
        correct: id === correctAnswer && blockSelection,
        incorrect: id !== correctAnswer && blockSelection,
      }]"
      v-for="{name, id} in props.options"
      :key="id"
      @click="$emit('selectedOption', id)">

      {{name}}

    </button>
  </section>
</template>

<style scoped>
button {
  @apply bg-white shadow-md rounded-lg p-3 m-2 cursor-pointer w-40 text-center transition-all hover:bg-gray-100 select-none;
}

.correct {
  @apply bg-blue-500 text-white;
}

.incorrect {
  @apply bg-red-100 opacity-70;
}

</style>
