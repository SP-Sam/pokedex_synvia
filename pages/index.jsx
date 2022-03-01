import { useContext } from 'react';
import MyContext from '../context/myContext';

import Header from '../components/Header';
import FilterForm from '../components/FilterForm';
import FilterTypeButton from '../components/FilterTypeButton';
import FilterFavoritesButton from '../components/FilterFavoritesButton';
import ResetFilterButton from '../components/ResetFilterButton';
import SortForm from '../components/SortForm';
import PokemonCard from '../components/PokemonCard';

import pokemonTypes from '../pokemon-types';

const HomePage = () => {
  const { pokemons } = useContext(MyContext);

  return (
    <div className="flex flex-col items-center">
      <Header />
      <FilterForm />

      <div className="flex flex-wrap justify-center w-5/6 lg:w-[64rem] mt-4">
        {pokemonTypes.map(type => <FilterTypeButton key={type} type={type}/>)}

        <FilterFavoritesButton />
        <ResetFilterButton />
      </div>

      <SortForm />

      <main className="grid grid-cols-1 mob-1:grid-cols-2 gap-3 p-4 sm:grid-cols-3 lg:grid-cols-4 max-w-screen-lg">
        {pokemons.map(({ image, name, national_number, type }, i) => {
          return (
            <PokemonCard
              key={`${national_number}${i}`}
              image={image}
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