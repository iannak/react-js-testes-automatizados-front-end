import { screen, render } from "@testing-library/react";
import Saldo from "./index";

describe("Componente de Saldo", () => {
  test("Deve renderizar o saldo com valor monetário", () => {
    render(<Saldo saldo={1000} />);

    const saldo = screen.getByTestId("saldo");

    expect(saldo).toHaveTextContent("R$ 1000");
  });
});