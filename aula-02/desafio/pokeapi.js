import fetch from 'node-fetch'

const URL = "https://pokeapi.co/api/v2/pokemon/?limit=151";

async function getPokemons(url) {

    const response = await fetch(url);      //  Faz a chamada da API
    const pokemons = await response.json(); //  Transforma o resposta da API em um JSON
    return pokemons.results;                //  Retorna apenas as informações dos Pokemons; O .results foi definido pelo criador da API
}

const pokemon = await getPokemons(URL);
console.log(pokemon);
