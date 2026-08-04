<script setup lang="ts">

import PokemonPicture from "@/modules/pokemon/components/PokemonPicture.vue";
import PokemonOptions from "@/modules/pokemon/components/PokemonOptions.vue";
import {usePokemonGame} from "@/modules/pokemon/composables/usePokemonGame.ts";
import {GameStatus} from "@/modules/pokemon/interfaces";

const {gameStatus, isLoading, randomPokemon, pokemonOptions: options, checkAnswer, getNextRound} = usePokemonGame();

</script>

<template>
  <section v-if="isLoading || randomPokemon.id === null" class="flex flex-col items-center justify-center w-screen h-screen">
    <h1 class="text-3xl">Espere por favor</h1>
    <h3 class="animate-pulse">Cargando Pokemons</h3>
  </section>
  <section v-else class="flex flex-col justify-center items-center w-screen h-screen">
    <h1 class="m-5">Quien es este Pokemon?</h1>
    <div class="h-20">
      <button class="transition-colors bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-md"
        v-if="gameStatus !== GameStatus.PLAYING"
        @click="getNextRound(4)">
        Jugar de Nuevo
      </button>
    </div>

    <!-- Pokemon Picture  -->
    <PokemonPicture :pokemon-id="randomPokemon.id" :show-pokemon="gameStatus !== GameStatus.PLAYING" />

    <!-- Pokemon Options -->
    <PokemonOptions
      :options="options"
      :correct-answer="randomPokemon.id"
      :block-selection="gameStatus !== GameStatus.PLAYING"
      @selected-option="checkAnswer"
    />
  </section>
</template>

<style scoped>

</style>
