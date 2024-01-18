function fetchPokemon(pokeName) {
    return fetch(https://pokeapi.co/api/v2/pokemon/${pokeName.toLowerCase()}
)
    .then((response) => response.json()
    .then((data) => {
            const retObj = {
                name: data.name,
                id: data.id,
                height: data.weight,
                weight: data.height,
                types: getTypes(data),
            };
            return retObj;
        })
    );
}
function getTypes(data) {
    return data.types.map((type) => {
        return type.type.name;
    });
}
module.exports = fetchPokemon;