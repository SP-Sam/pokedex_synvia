import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';


const PokemonCard = ({ image, name, id, types }) => {
  const [isMouseOver, setIsMouseOver] = useState(false);
  const [isFav, setIsFav] = useState(false);

  const mouseEnter = () => {
    setIsMouseOver(true);
  };

  const mouseLeave = () => {
    setIsMouseOver(false);
  };

  const handleClick = () => {
    setIsFav(!isFav);
  }

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
        className="p-4 rounded-t-xl bg-white"/>

      <div className="p-2 rounded-b-xl flex flex-col bg-white pb-4">
        <div className="flex flex-col items-center">
          <span className="bg-indigo-300 px-2 rounded-xl">
            #{id}
          </span>
          <span className="h-3 mt-2">
            {isMouseOver || isFav
              ? <FontAwesomeIcon icon={faStar} className="text-yellow-400"/>
              : <FontAwesomeIcon icon={faStar} className="text-yellow-400 hidden"/>}
          </span>
        </div>
        <h2 className="font-bold text-center my-3">
          {name}
        </h2>
        <div className="flex justify-around">
          {types.map(type => {
            return (
              <span
                key={type}
                className="bg-rose-700 px-2 text-white rounded-xl font-bold"
              >
                {type}
              </span>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default PokemonCard;