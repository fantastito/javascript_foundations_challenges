const fetchPokemon = require('./api')

describe('fetch Pokemon', () => {
    it('Can fetch the data for pikachu and returns an object', (done) => {
        fetchPokemon('pikachu')
        .then((pokemon) => {
            expect(pokemon.name).toEqual('pikachu');
            expect(pokemon.id).toEqual(25);
            done();
        });
    });
});

describe('fetch Pokemon 2 different method', () => {
    it('Can fetch the data for pikachu', async () => {
        const pokemon = await fetchPokemon('pikachu')
        expect(pokemon.name).toEqual('pikachu');
    });
});