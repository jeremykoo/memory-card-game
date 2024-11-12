function PokemonAPI() {
  const MAX_POKEMON = 1025;

  function printHello() {
    console.log('hello');
  }

  async function getPokemon(id) {
    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
      if (!response.ok) {
        throw new Error('Failed to fetch pokemon');
      }
      const data = await response.json();
      return data;
    } catch(error) {
      console.error('Fetch error:', error);
    }
  }

  async function loadPokemonSet(size) {
    const randomIds = new Set();
    while (randomIds.size < size) {
      const random = Math.floor(Math.random() * (MAX_POKEMON + 1));
      randomIds.add(random);
    }

    const pokemonList = await Promise.all(
      [...randomIds].map(async id => {
        const result = await getPokemon(id);
        return result;
      })
    );

    return pokemonList.map((pokemon) => {
      return {
        name: pokemon.name,
        imageUrl: pokemon.sprites.front_default
      }
    });
  }

  return {
    printHello,
    getPokemon,
    loadPokemonSet
  }
}

export default PokemonAPI;