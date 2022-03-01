import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';

import FilterTypeButton from "../components/FilterTypeButton";
import MyContext from "../context/myContext";

import pokemonTypes from '../pokemon-types';

describe('Testa componente "FilterTypeButton"', () => {
  const providerValue = () => {};

  const renderComponent = (type) => {
    return (
      render(
        <MyContext.Provider value={providerValue}>
          <FilterTypeButton type={type} />
        </MyContext.Provider>
      )
    );
  };

  test('O documento deve conter todos os botões de filtragem por tipo', () => {
    pokemonTypes.forEach(type => {
      renderComponent(type);

      const typeButton = screen.getByRole('button', { name: type });

      expect(typeButton).toBeInTheDocument();
    });
  });
});