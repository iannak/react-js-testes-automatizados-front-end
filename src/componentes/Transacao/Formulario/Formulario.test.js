import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Formulario from './index';

describe('Deve renderizar um campo input', () => {
  test('no documento', () => {
    render(<Formulario />);

    const campoTexto = screen.getByPlaceholderText('Digite um valor');
    expect(campoTexto).toBeInTheDocument();
  });

  test('com o type number', () => {
    render(<Formulario />);
    const campoTexto = screen.getByPlaceholderText('Digite um valor');
    expect(campoTexto).toHaveAttribute('type', 'number');
  });

  test('que pode ser preenchido', () => {
    render(<Formulario />);
    const campoTexto = screen.getByPlaceholderText('Digite um valor');
    userEvent.type(campoTexto, '10');
    expect(campoTexto).toHaveValue(10);
  });
});
