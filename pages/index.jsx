import { useContext, useEffect, useState } from 'react';
import FilterForm from '../components/FilterForm';
import PokemonCard from '../components/PokemonCard';
import MyContext from '../context/myContext';

const HomePage = () => {
  const { allPokemons, currentPokemons } = useContext(MyContext);
  
  return (
    <div className="flex flex-col w-100 items-center">
      <FilterForm />
      <main className="grid grid-cols-1 mob-1:grid-cols-2 gap-3 p-4 sm:grid-cols-3 lg:grid-cols-4 max-w-screen-lg">
        {currentPokemons.length !== 0
          ? (
            currentPokemons.map(({ sprites, name, national_number, type }, i) => {
              return (
                <PokemonCard
                  key={`${national_number}${i}`}
                  image={sprites.large}
                  name={name}
                  id={national_number}
                  types={type}
                />
              )
            })
          ) : (
            allPokemons.map(({ sprites, name, national_number, type }, i) => {
              return (
                <PokemonCard
                  key={`${national_number}${i}`}
                  image={sprites.large}
                  name={name}
                  id={national_number}
                  types={type}
                />
              )
            })
          )}
      </main>
    </div>
  );
};

export default HomePage;