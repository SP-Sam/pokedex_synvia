import { useContext } from 'react';
import MyContext from '../context/myContext';

const FilterFavoritesButton = () => {
  const { setCurrentPokemons } = useContext(MyContext);

  const handleClick = () => {
    const favorites = JSON.parse(localStorage.getItem('favoritePokemons'));

    if (!favorites || favorites.length === 0) {
      return alert('Você não tem Pokemons favoritados!');
    }

    setCurrentPokemons(favorites);
  };

  return (
    <button
      onClick={handleClick}
      className="w-full sm:w-24 px-1.5 m-1 bg-amber-500 border border-amber-500 text-white rounded-lg hover:bg-white hover:text-amber-500 transition duration-200"
    >
      Favoritos
    </button>
  );
};

export default FilterFavoritesButton;