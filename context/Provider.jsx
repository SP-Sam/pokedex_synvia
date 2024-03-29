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
        const uniquePokemons = new Map();

        pokemonList.forEach(pokemonObj => {
          if (!uniquePokemons.has(pokemonObj.national_number)) {
            uniquePokemons.set(pokemonObj.national_number, pokemonObj);
          }
        });

        setLocalStorage('allPokemons', [...uniquePokemons.values()]);
        setPokemons([...uniquePokemons.values()]);
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