import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';

import ResetFilterButton from "../components/ResetFilterButton";
import MyContext from "../context/myContext";

describe('Testa componente "ResetFilterButton"', () => {
  const providerValue = () => {};

  const renderComponent = () => {
    return (
      render(
        <MyContext.Provider value={providerValue}>
          <ResetFilterButton />
        </MyContext.Provider>
      )
    );
  };

  test('O documento deve conter um botão com o texto "Limpar Filtragem"', () => {
    renderComponent();
    const resetButton = screen.getByRole('button', { name: 'Limpar Filtragem' });

    expect(resetButton).toBeInTheDocument();
  });
});