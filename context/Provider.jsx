import { useEffect, useState } from 'react';
import { getPokemons } from '../helpers/getPokemons';
import { getLocalStorage, setLocalStorage } from '../helpers/manageLocalStorage';
import MyContext from './myContext';

const Provider = ({ children }) => {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    const pokemonsOnLocalStorage = getLocalStorage('allPokemons');

    if (pokemonsOnLocalStorage) {
      setPokemons(pokemonsOnLocalStorage);
    } else {
      getPokemons().then(pokemonList => {
        setLocalStorage('allPokemons', pokemonList);
        setPokemons(pokemonList);
      });
    }
  }, []);

  return (
    <MyContext.Provider value={{
      pokemons,
      setPokemons,
    }}>
      {children}
    </MyContext.Provider>
  )
};

export default Provider;