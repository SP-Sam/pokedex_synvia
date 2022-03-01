import { useContext } from 'react';
import MyContext from '../context/myContext';

const FilterTypeButton = ({ type }) => {
  const { setCurrentPokemons } = useContext(MyContext);

  const handleClick = () => {
    const allPokemons = JSON.parse(localStorage.getItem('allPokemons'));
    const filteredPokemons = allPokemons.filter(pokemon => pokemon.type.includes(type));

    setCurrentPokemons(filteredPokemons);
  };

  return (
    <button
      onClick={handleClick}
      className="px-1.5 m-1 border border-purple-0 text-purple-0 rounded-lg hover:bg-purple-0 hover:text-white transition duration-200 type"
    >
      <span>{type}</span>
    </button>
  )
};

export default FilterTypeButton;