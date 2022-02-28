import { useContext } from 'react';
import MyContext from '../context/myContext';

import FilterForm from '../components/FilterForm';
import FilterTypeButton from '../components/FilterTypeButton';
import FilterFavoritesButton from '../components/FilterFavoritesButton';
import SortForm from '../components/SortForm';
import PokemonCard from '../components/PokemonCard';

import pokemonTypes from '../pokemon-types';
import ResetFilterButton from '../components/ResetFilterButton';
import Header from '../components/Header';
import Head from 'next/head';

const HomePage = () => {
  const { currentPokemons } = useContext(MyContext);

  return (
    <div className="flex flex-col items-center">
      <Head>
        <title>Pokedex Synvia</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      </Head>
      <Header />
      <FilterForm />

      <div className="flex flex-wrap justify-center w-5/6 lg:w-[64rem] mt-4">
        {pokemonTypes.map(type => <FilterTypeButton key={type} type={type}/>)}
        <FilterFavoritesButton />
        <ResetFilterButton />
      </div>

      <SortForm />

      <main className="grid grid-cols-1 mob-1:grid-cols-2 gap-3 p-4 sm:grid-cols-3 lg:grid-cols-4 max-w-screen-lg">
        {currentPokemons.map(({ sprites, name, national_number, type }, i) => {
          return (
            <PokemonCard
              key={`${national_number}${i}`}
              image={sprites.large}
              name={name}
              id={national_number}
              types={type}
            />
          )
        })}
      </main>
    </div>
  );
};

export default HomePage;