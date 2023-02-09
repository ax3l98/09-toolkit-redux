// PokemonSlice
import { setPokemons, startLoadingPokemons } from "./pokemonSlice";

// Api
import { pokemonApi } from "../../../api/pokemonApi";

export const getPokemons = ( page = 0 ) => {
    return async( dispatch, getState ) => {
        dispatch( startLoadingPokemons() );

        // TODO: realizar petición http
        // const resp = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=10&offset=${ page * 10 }`);
        // const data = await resp.json();
        const { data } = await pokemonApi.get(`/pokemon?limit=10&offset=${ page * 10 }`); // Funciona como las dos líneas de arriba

        dispatch( setPokemons({ pokemons: data.results, page: page + 1 }) );
    }
}