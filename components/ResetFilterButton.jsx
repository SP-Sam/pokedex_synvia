import { useContext } from 'react';
import MyContext from '../context/myContext';

const ResetFilterButton = () => {
  const { setCurrentPokemons } = useContext(MyContext);

  const handleClick = () => {
    const pokemons = JSON.parse(localStorage.getItem('allPokemons'));

    setCurrentPokemons(pokemons);
  };

  return (
    <button
      onClick={handleClick}
      className="w-full sm:w-32 px-1.5 m-1 bg-purple-0 border border-purple-0 text-white rounded-lg hover:bg-white hover:text-purple-0 transition duration-200"
    >
      Mostrar Todos
    </button>
  );
}

export default ResetFilterButton;