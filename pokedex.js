const fetchPokemon = require('./api')

class Pokedex {
    constructor () {
        this.pokemons = []
    }
    all () {
        return this.pokemons
    }
    catch (pokemon) {
        return fetchPokemon(pokemon)
        .then((response) => this.pokemons.push(response))
    }
}

module.exports = Pokedex