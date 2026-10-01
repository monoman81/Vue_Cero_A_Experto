import {pokemonApi} from "@pokemon/api/pokemonApi.ts";

describe('pokemonApi', () => {

  test('should be configured as expected', done => {
    const baseUrl = 'https://pokeapi.co/api/v2/pokemon';
    expect(pokemonApi.defaults.baseURL).toBe(baseUrl);
  });

});
