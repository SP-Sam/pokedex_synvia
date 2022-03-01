import { useContext } from 'react';
import MyContext from '../context/myContext';
import { getLocalStorage } from '../helpers/manageLocalStorage';

const ResetFilterButton = () => {
  const { setPokemons } = useContext(MyContext);

  const handleClick = () => {
    const pokemons = getLocalStorage('allPokemons');

    setPokemons(pokemons);
  };

  return (
    <button
      onClick={handleClick}
      className="w-full sm:w-36 px-1.5 m-1 bg-purple-0 border border-purple-0 text-white rounded-lg hover:bg-white hover:text-purple-0 transition duration-200"
    >
      Limpar Filtragem
    </button>
  );
}

export default ResetFilterButton;