const getPokemons = async () => {
  const response = await fetch('https://unpkg.com/pokemons@1.1.0/pokemons.json');
  const { results } = await response.json();

  const formattedPokemons = results
    .map(({ name, national_number, type, sprites }) => {
      return {
        name,
        national_number,
        type,
        image: sprites.large
      }
    });
  return formattedPokemons;
};

export {
  getPokemons,
};