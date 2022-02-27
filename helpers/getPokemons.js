const getPokemons = async () => {
  const response = await fetch('https://unpkg.com/pokemons@1.1.0/pokemons.json');
  const { results } = await response.json();

  return results;
};

export {
  getPokemons,
};