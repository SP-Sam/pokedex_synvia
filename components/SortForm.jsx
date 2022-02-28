import { useContext, useState } from 'react';
import MyContext from '../context/myContext';

const SortForm = () => {
  const [type, setType] = useState('');
  const [order, setOrder] = useState('ascendente');
  const [hasNoType, setHasNoType] = useState(true);
  const { setCurrentPokemons } = useContext(MyContext);

  const sortPokemons = (event) => {
    event.preventDefault();

    const allPokemons = JSON.parse(localStorage.getItem('allPokemons'));

    if (type === 'name') {
      if (order === 'ascendente') {
        const sortedPokemons = allPokemons.sort((a, b) => {
          if (a.name > b.name) {
            return 1;
          }
          if (a.name < b.name) {
            return -1;
          }
          return 0;
        });
        setCurrentPokemons(sortedPokemons);
      }
      if (order === 'descendente') {
        const sortedPokemons = allPokemons.sort((a, b) => {
          if (a.name > b.name) {
            return -1;
          }
          if (a.name < b.name) {
            return 1;
          }
          return 0;
        });
        setCurrentPokemons(sortedPokemons);
      }
    }

    if (type === 'id') {
      if (order === 'ascendente') {
        const sortedPokemons = allPokemons.sort((a, b) => a.national_number - b.national_number);
        setCurrentPokemons(sortedPokemons);
      }
      if (order === 'descendente') {
        const sortedPokemons = allPokemons.sort((a, b) => b.national_number - a.national_number);
        setCurrentPokemons(sortedPokemons);
      }
    }
  };
  
  const handleSortType = ({ target }) => {
    setType(target.value);
    setHasNoType(false);
  };

  const handleOrder = ({ target }) => {
    setOrder(target.value);
  };

  return (
    <form
      onSubmit={sortPokemons}
      className="flex flex-col border border-purple-1 p-3 bg-white rounded-lg mt-4 mb-1"
    >
      <label htmlFor="name" className="text-purple-0 hover:cursor-pointer">
        <input
          type="radio"
          name="sort"
          id="name"
          value="name"
          onChange={handleSortType}
          className="mr-1"
        />
        Ordenar por nome
      </label>

      <label htmlFor="id" className="text-purple-0 hover:cursor-pointer">
        <input
          type="radio"
          name="sort"
          id="id"
          value="id"
          onChange={handleSortType}
          className="mr-1"
        />
        Ordenar por Registro nacional
      </label>

      <select
        onChange={handleOrder}
        className="bg-white p-1.5 rounded-lg border border-purple-1 focus:outline-none focus:ring focus:ring-purple-2 text-purple-0 mt-1 hover:cursor-pointer"
      >
        <option value="ascendente">
          Ascendente
        </option>
        <option value="descendente">
          Descendente
        </option>
      </select>

      <button
        type="submit"
        disabled={hasNoType}
        className="border border-purple-0 text-purple-0 rounded-lg hover:bg-purple-0 hover:text-white transition duration-200 w-full sm:px-2 disabled:cursor-not-allowed disabled:opacity-40 mt-2"
      >
        Ordenar
      </button>
    </form>
  )
}

export default SortForm;