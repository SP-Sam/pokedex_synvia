import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';

import PokemonCard from "../components/PokemonCard";
import MyContext from "../context/myContext";

describe('Testa componente "PokemonCard"', () => {
  const providerValue = () => {};

  const renderComponent = () => {
    return (
      render(
        <MyContext.Provider value={providerValue}>
          <PokemonCard
            image="https://img.pokemondb.net/artwork/bulbasaur.jpg"
            name="Bulbasaur"
            id="001"
            types={[ "Grass", "Poison" ]}
          />
        </MyContext.Provider>
      )
    );
  };

  test('O documento deve conter pelo menos um card', () => {
    renderComponent();
    const bulba = screen.getByText('#001');

    expect(bulba).toBeInTheDocument();
  });
});