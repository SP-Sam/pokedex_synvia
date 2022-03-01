import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';

import FilterForm from "../components/FilterForm";
import MyContext from "../context/myContext";

describe('Testa componente "FilterForm"', () => {
  const providerValue = () => {};

  const renderComponent = () => {
    return (
      render(
        <MyContext.Provider value={providerValue}>
          <FilterForm />
        </MyContext.Provider>
      )
    );
  };

  beforeEach(() => renderComponent());

  test('Deve ter um input de texto', () => {
    const textInput = screen.getByPlaceholderText('Pesquisar');

    expect(textInput).toBeInTheDocument();
  });

  test('Deve ter dois inputs radio', () => {
    const radios = screen.getAllByRole('radio');

    expect(radios).toHaveLength(2);
  });

  test('Os inputs radio devem conter os labels corretos', () => {
    const radioName = screen.getByLabelText('Nome');
    const radioId = screen.getByLabelText('Registro Nacional');

    expect(radioName).toBeInTheDocument();
    expect(radioId).toBeInTheDocument();
  });

  test('Deve ter um botão desabilitado com o texto "Filtrar"', () => {
    const filterButton = screen.getByText('Filtrar');

    expect(filterButton).toBeInTheDocument();
    expect(filterButton).toBeDisabled();
  });
});