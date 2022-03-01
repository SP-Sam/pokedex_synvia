import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';

import FilterFavoritesButton from "../components/FilterFavoritesButton";
import MyContext from "../context/myContext";

describe('Testa componente "FilterFavoritesButton"', () => {
  const providerValue = () => {};

  const renderComponent = () => {
    return (
      render(
        <MyContext.Provider value={providerValue}>
          <FilterFavoritesButton />
        </MyContext.Provider>
      )
    );
  };

  test('O documento deve conter um botão com o texto "Favoritos"', () => {
    renderComponent();
    const filterFavoriteButton = screen.getByRole('button', { name: 'Favoritos' });
    expect(filterFavoriteButton).toBeInTheDocument();
  });
});