import { render, screen } from '@testing-library/react';
import Menu from './index';

test('Deve renderizar um link para a pagina inicial', () => {
  render(<Menu />);
  const linkPaginaInicial = screen.getByText('Inicial');
  expect(linkPaginaInicial).toBeInTheDocument();
});

test('Deve renderizar uma lista de link', () => {
  render(<Menu />);
  const listaDeLinks = screen.getAllByRole('link');
  expect(listaDeLinks).toHaveLength(4);
});

test('Não deve renderizar o link para Extrato', () => {
  render(<Menu />);
  // verifica se tem elemento ou não
  const linkExtrato = screen.queryByText('Extrato');
  expect(linkExtrato).not.toBeInTheDocument();
});

test('Deve renderizar uma lista de links com a classe link', () => {
  render(<Menu />);

  const links = screen.getAllByRole('link');
  links.forEach((link) => expect(link).toHaveClass('link'));

  expect(links).toMatchSnapshot();
});

