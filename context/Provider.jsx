import { useEffect, useState } from 'react';
import { getPokemons } from '../helpers/getPokemons';
import MyContext from './myContext';

const Provider = ({ children }) => {
  const [currentPokemons, setCurrentPokemons] = useState([]);

  useEffect(() => {
    const pokemonsOnLocalStorage = JSON.parse(localStorage.getItem('allPokemons'));

    if (pokemonsOnLocalStorage) {
      setCurrentPokemons(pokemonsOnLocalStorage);
    } else {
      getPokemons().then(pokemons => {
        localStorage.setItem('allPokemons', JSON.stringify(pokemons));
        setCurrentPokemons(pokemons);
      });
    }
  }, []);

  return (
    <MyContext.Provider value={{
      currentPokemons,
      setCurrentPokemons,
    }}>
      {children}
    </MyContext.Provider>
  )
};

export default Provider;