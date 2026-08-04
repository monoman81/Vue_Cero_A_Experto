export interface PokemonDataResponse {
  name: string;
  url: string;
}
export interface PokemonListResponse {
  count: number;
  next: string;
  previous: string;
  results: PokemonDataResponse[];
}

export interface Result {
  name: string;
  url: string;
}
