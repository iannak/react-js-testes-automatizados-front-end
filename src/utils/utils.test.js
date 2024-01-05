test('Deve retornar o valor do saldo atualizado com o rendimento', () => {
    const calcularNovoSaldo = jest.fn(saldo => saldo + saldo*0.005);

    const saldoAtualizado =  100;

    const novoSaldo = calcularNovoSaldo(saldoAtualizado);
    
    expect(novoSaldo).toBe(100.5);
    expect(calcularNovoSaldo).toBeCalled();
    expect(calcularNovoSaldo).toBeCalledWith(saldoAtualizado);
});