import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';

import PokemonCard from "../components/PokemonCard";
import MyContext from "../context/myContext";

describe('Testa componente "PokemonCard"', () => {
  const providerValue = () => {};

  const renderComponent = () => {
    return render
    (
      <MyContext.Provider value={providerValue}>
        <PokemonCard
          image="https://img.pokemondb.net/artwork/bulbasaur.jpg"
          name="Bulbasaur"
          id="001"
          types={[ "Grass", "Poison" ]}
        />
      </MyContext.Provider>
    )
  };

  test('O card deve conter a imagem correta', () => {
    renderComponent();
    const bulbaImage = screen.getByAltText('Imagem de Bulbasaur');
    const URL = 'https://img.pokemondb.net/artwork/bulbasaur.jpg';

    expect(bulbaImage.src).toContain(URL);
    expect(bulbaImage).toHaveAttribute('src', URL);
  });

  test('O card deve conter o Registro Nacional correto', () => {
    renderComponent();
    const bulbaId = screen.getByText('#001');

    expect(bulbaId).toBeInTheDocument();
  });

  test('O card deve conter o nome correto do pokémon', () => {
    renderComponent();
    const bulbaName = screen.getByText('Bulbasaur');

    expect(bulbaName).toBeInTheDocument();
  });

  test('O card deve conter os tipos corretos do pokémon', () => {
    renderComponent();
    const type1 = screen.getByText('Grass');
    const type2 = screen.getByText('Poison');


    expect(type1).toBeInTheDocument();
    expect(type2).toBeInTheDocument();
  });
});