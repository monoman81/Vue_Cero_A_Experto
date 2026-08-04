import {computed, onMounted, ref} from "vue";
import {GameStatus, type Pokemon, type PokemonListResponse} from "@/modules/pokemon/interfaces";
import {pokemonApi} from "@/modules/pokemon/api/pokemonApi";
import confetti from 'canvas-confetti';

export const usePokemonGame = () => {

  const gameStatus = ref<GameStatus>(GameStatus.PLAYING);
  const pokemons = ref<Pokemon[]>([]);
  const pokemonOptions = ref<Pokemon[]>([]);
  const isLoading = computed(() => pokemons.value.length === 0);
  const randomPokemon = computed(() => pokemonOptions.value[Math.floor(Math.random() * pokemonOptions.value.length)]);

  const getPokemons = async (): Promise<Pokemon[]> => {
    const response = await pokemonApi.get<PokemonListResponse>('/?limit=151');
    return response.data.results.map(pokemon => {
      const urlParts = pokemon.url.split('/');
      const id = urlParts.at(-2) ?? 0;
      return {
        name: pokemon.name,
        id: +id
      }
    }).sort(() => Math.random() - 0.5);
  }

  const getNextRound = (howMany = 4) => {
    gameStatus.value = GameStatus.PLAYING;
    pokemonOptions.value = pokemons.value.slice(0, howMany);
    pokemons.value = pokemons.value.slice(howMany);
  }

  const checkAnswer = (id: number) => {
    if (!randomPokemon.value) return;
    const hasWon = randomPokemon.value.id === id;
    if (hasWon) {
      gameStatus.value = GameStatus.WON;
      confetti({
        particleCount: 300,
        spread: 150,
        origin: {y: 0.6}
      });
    }
    else {
      gameStatus.value = GameStatus.LOST;
    }
  }

  onMounted(async () => {
    pokemons.value = await getPokemons();
    getNextRound();
  });

  return {
    gameStatus,
    isLoading,
    pokemonOptions,
    randomPokemon,
    //METHODS
    getNextRound,
    checkAnswer,
  }
}
