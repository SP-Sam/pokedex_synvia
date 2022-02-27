import { useEffect, useState } from 'react';
import { getPokemons } from '../helpers/getPokemons';
import MyContext from './myContext';

const Provider = ({ children }) => {
  const [allPokemons, setAllPokemons] = useState([]);
  const [currentPokemons, setCurrentPokemons] = useState([]);

  useEffect(() => {
    getPokemons().then(pokemons => {
      localStorage.setItem('allPokemons', JSON.stringify(pokemons));

      setAllPokemons(pokemons);
    });
  }, []);

  return (
    <MyContext.Provider value={
      {
        allPokemons,
        currentPokemons,
        setCurrentPokemons
      }
    }>
      {children}
    </MyContext.Provider>
  )
};

export default Provider;