import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';

import SortForm from "../components/SortForm";
import MyContext from "../context/myContext";

describe('Testa componente "SortForm"', () => {
  const providerValue = () => {};

  const renderComponent = () => {
    return (
      render(
        <MyContext.Provider value={providerValue}>
          <SortForm />
        </MyContext.Provider>
      )
    );
  };

  beforeEach(() => renderComponent());

  test('Deve ter dois inputs radio', () => {
    const radios = screen.getAllByRole('radio');

    expect(radios).toHaveLength(2);
  });

  test('Os inputs radio devem conter os labels corretos', () => {
    const radioName = screen.getByLabelText('Ordenar por nome');
    const radioId = screen.getByLabelText('Ordenar por Registro nacional');

    expect(radioName).toBeInTheDocument();
    expect(radioId).toBeInTheDocument();
  });

  test('Deve conter um select', () => {
    const select = screen.getByTestId('select');

    expect(select).toBeInTheDocument();
  });

  test('O select deve conter as opções corretas', () => {
    const options = screen.getAllByTestId('select-option');

    expect(options[0].value).toContain('ascendente');
    expect(options[1].value).toContain('descendente');
  });

  test('Deve ter um botão desabilitado com o texto "Ordenar"', () => {
    const sortButton = screen.getByText('Ordenar');

    expect(sortButton).toBeInTheDocument();
    expect(sortButton).toBeDisabled();
  });
});