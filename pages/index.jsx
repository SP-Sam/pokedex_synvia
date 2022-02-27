import { useContext, useEffect, useState } from 'react';
import MyContext from '../context/myContext';

import FilterForm from '../components/FilterForm';
import PokemonCard from '../components/PokemonCard';
import FilterTypeButton from '../components/FilterTypeButton';
import pokemonTypes from '../pokemon_types';
import FilterFavoritesButton from '../components/FilterFavoritesButton';

const HomePage = () => {
  const { allPokemons, currentPokemons } = useContext(MyContext);

  return (
    <div className="flex flex-col items-center">
      <FilterForm />
      <div className="flex flex-wrap justify-center w-11/12 mt-4">
        {pokemonTypes.map(type => <FilterTypeButton key={type} type={type}/>)}
      </div>
      <div className="flex justify-center w-11/12 mt-3">
        <FilterFavoritesButton />
      </div>

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