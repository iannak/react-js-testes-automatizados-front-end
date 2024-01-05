import { calculaNovoSaldo } from './index';

describe('Quando realizo uma transação', () => {
    test('Que é um deposito, o valor deve aumentar', () => {
        const transacao = {
            transacao: 'Depósito',
            valor: 50
        }
        
        const novoSaldo = calculaNovoSaldo(transacao, 100)
        expect(novoSaldo).toBe(150)
    })

    test('Que é uma transferência, o saldo deve diminuir', () => {
        const transacao = {
            transacao: 'Transferência',
            valor: 50
        }
        
        const novoSaldo = calculaNovoSaldo(transacao, 100)
        expect(novoSaldo).toBe(50)
    })
})

test('Deve retornar o valor do saldo atualizado com o rendimento', () => {
    const calcularNovoSaldo = jest.fn(saldo => saldo + saldo*0.005);

    const saldoAtualizado =  100;

    const novoSaldo = calcularNovoSaldo(saldoAtualizado);
    
    expect(novoSaldo).toBe(100.5);
    expect(calcularNovoSaldo).toBeCalled();
    expect(calcularNovoSaldo).toBeCalledWith(saldoAtualizado);
});