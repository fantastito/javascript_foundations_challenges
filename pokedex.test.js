const Pokedex = require('./pokedex')

describe('Testing Pokedex', () => {
    it('Returns an empty list when no pokemon inside', () => {
        const pokedex = new Pokedex();
        expect(pokedex.all()).toEqual([]);
    })
    it('Cathches a pokemon and adds it to the array', async () => {
        const pokedex = new Pokedex();
        await pokedex.catch('pikachu')
        let pokemons = pokedex.all()
        expect(pokemons.length).toEqual(1)
        expect(pokemons[0].name).toBe('pikachu')
    })
    it('Cathches two pokemon and it returns an array of names', async () => {
        const pokedex = new Pokedex();
        await pokedex.catch('pikachu')
        await pokedex.catch('jigglypuff')
        let pokemons = pokedex.all()
        expect(pokemons.map((i) => i.name)).toEqual([ 'pikachu', 'jigglypuff' ])
    })
    
})