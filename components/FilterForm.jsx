import { useContext, useEffect, useState } from 'react';
import MyContext from '../context/myContext';
import { getLocalStorage } from '../helpers/manageLocalStorage';

const FilterForm = () => {
  const [filter, setFilter] = useState('');
  const [inputValue, setInputValue] = useState('');
  const [hasNoFilter, setHasNoFilter] = useState(true);

  const { setPokemons } = useContext(MyContext);

  const handleSubmit = (event) => {
    event.preventDefault();

    const allPokemons = getLocalStorage('allPokemons');
  
    if (filter === 'name') {
      const filteredPokemons = allPokemons
        .filter(pokemon => pokemon.name.toLowerCase().includes(inputValue.toLowerCase()));

      if (filteredPokemons.length === 0) {
        alert(`Nenhum Pokémon com o nome "${inputValue}" encontrado!`);
        setInputValue('');

        return setPokemons(allPokemons);
      }

      setPokemons(filteredPokemons);
    }

    if (filter === 'national_number') {
      const filteredPokemon = allPokemons
        .filter(pokemon => Number(pokemon.national_number) === Number(inputValue));

      if (filteredPokemon.length === 0) {
        alert(`Nenhum Pokémon com o Registro "${inputValue}" encontrado!`);
        setInputValue('');

        return setPokemons(allPokemons);
      }

      setPokemons(filteredPokemon);
    }
  };

  const handleRadioValue = ({ target }) => {
    setFilter(target.value);
    setHasNoFilter(false);
  };

  const handleInputValue = ({ target }) => {
    setInputValue(target.value);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col w-4/5 lg:w-[61rem] mt-6">
      <input
        type="text"
        placeholder="Pesquisar"
        value={inputValue}
        onChange={handleInputValue}
        className="p-1.5 rounded-lg border border-purple-1 focus:outline-none focus:ring focus:ring-purple-2 text-purple-0"
      />

      <div className="flex flex-col mt-1 sm:flex-row sm:items-center">
        <div className="flex flex-col sm:flex-row">
          <label htmlFor="filter-name" className="mr-3 text-purple-0 hover:cursor-pointer">
            <input
              type="radio"
              id="filter-name"
              name="filter"
              value="name"
              onChange={handleRadioValue}
              className="mr-1"
            />
            Nome
          </label>

          <label htmlFor="filter-id" className="mr-3 text-purple-0 hover:cursor-pointer">
            <input
              type="radio"
              id="filter-id"
              name="filter"
              value="national_number"
              onChange={handleRadioValue}
              className="mr-1"
            />
            Registro Nacional
          </label>
        </div>

        <div className="w-100 mt-1">
          <button
            type="submit"
            disabled={hasNoFilter}
            className="border border-purple-0 text-purple-0 rounded-lg hover:bg-purple-0 hover:text-white transition duration-200 w-full sm:px-2 disabled:cursor-not-allowed disabled:opacity-40"
          >
            Filtrar
          </button>
        </div>

      </div>
    </form>
  )
};

export default FilterForm;