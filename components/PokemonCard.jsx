import { useContext, useEffect, useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import MyContext from '../context/myContext';
import {
  getLocalStorage,
  setLocalStorage,
} from '../helpers/manageLocalStorage';

const PokemonCard = ({ image, name, id, types }) => {
  const [isMouseOver, setIsMouseOver] = useState(false);
  const [isFav, setIsFav] = useState(false);
  const { setPokemons } = useContext(MyContext);

  useEffect(() => {
    const favorites = getLocalStorage('favoritePokemons');

    if (favorites) {
      const hasFav = favorites.some((fav) => fav.name === name);
      setIsFav(hasFav);
    }
  }, []);

  const mouseEnter = () => {
    setIsMouseOver(true);
  };

  const mouseLeave = () => {
    setIsMouseOver(false);
  };

  const handleClick = () => {
    setIsFav(!isFav);
    const favorites = getLocalStorage('favoritePokemons');

    const newFavorite = {
      image,
      national_number: id,
      name,
      type: types,
    };

    if (!isFav) {
      if (!favorites) {
        setLocalStorage('favoritePokemons', [newFavorite]);
      } else {
        const newFavorites = [...favorites, newFavorite];
        favorites.push(newFavorite);

        setLocalStorage('favoritePokemons', newFavorites);
      }
    } else {
      if (favorites.length !== 0) {
        const newFavorites = favorites.filter(
          (pokemon) => Number(pokemon.national_number) !== Number(id)
        );

        setLocalStorage('favoritePokemons', newFavorites);

        if (favorites.length === 1) {
          const allPokemons = getLocalStorage('allPokemons');
          alert('Você removeu o último Pokemon dos favoritos!');
          return setPokemons(allPokemons);
        }
      } else {
        setLocalStorage('favoritePokemons', []);
      }
    }
  };

  return (
    <div
      onMouseEnter={mouseEnter}
      onMouseLeave={mouseLeave}
      onClick={handleClick}
      className="rounded-xl flex flex-col hover:cursor-pointer hover:drop-shadow-lg transition duration-75"
    >
      <img
        src={image}
        alt={`Imagem de ${name}`}
        className="p-4 rounded-t-xl bg-white"
      />

      <div className="p-2 rounded-b-xl flex flex-col bg-white pb-4">
        <div className="flex flex-col items-center">
          <span className="bg-indigo-300 px-2 rounded-xl">#{id}</span>
          <div className="h-4 mt-2 mb-1 w-full flex justify-center items-center">
            {isFav || isMouseOver ? (
              <FontAwesomeIcon
                icon={faStar}
                className="text-yellow-400 h-full"
              />
            ) : null}
          </div>
        </div>
        <h2 className="font-bold text-center mb-3">{name}</h2>
        <div className="flex justify-around">
          {types.map((type) => {
            return (
              <span
                key={type}
                className="bg-rose-700 px-2 text-white rounded-xl font-bold"
              >
                {type}
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default PokemonCard;
