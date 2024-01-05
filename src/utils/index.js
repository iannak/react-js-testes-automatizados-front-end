export const calculaNovoSaldo = (valores, saldo) => {
    const valorNumerico = parseInt(valores.valor);
  
    if (valores.transacao === "Depósito") {
      return saldo + valorNumerico;
    } else {
      return saldo - valorNumerico;
    }
  };
  