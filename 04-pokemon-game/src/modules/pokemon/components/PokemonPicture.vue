<script setup lang="ts">

import {computed} from "vue";

interface Props {
  pokemonId: number,
  showPokemon: boolean
}

const props = withDefaults(defineProps<Props>(), {
  showPokemon: false,
});

const pokemonImage = computed(() => {
  return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${props.pokemonId}.png`;
});

</script>

<template>
  <section>
    <img v-if="!showPokemon" :src="pokemonImage" alt="" class="brightness-0 h-[200px] select-none" />
    <img v-else :src="pokemonImage" alt="" class="fade-in h-[200px] select-none" />
  </section>
</template>

<style scoped>

</style>
