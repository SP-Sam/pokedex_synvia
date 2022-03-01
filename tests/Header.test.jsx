import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Header from '../components/Header';

describe('Testa componente "Header"', () => {
  test('Deve conter uma imagem', () => {
    render(<Header />);

    const logo = screen.getByAltText('Imagem Synvia Pokedex');

    expect(logo).toBeInTheDocument();
  });

  test('Deve conter dois links', () => {
    render(<Header />);

    const links = screen.getAllByRole('link');

    expect(links).toHaveLength(2);
  });
});