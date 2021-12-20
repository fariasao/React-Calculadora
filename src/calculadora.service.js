function CalculadoraService() {

  const SOMA = '+';
  const SUBTRACAO = '-';
  const DIVISAO = '/';
  const MULTIPLICACAO = '*';

  function calcular(numero1, numero2, operacao) {
    let resultado;

    // eslint-disable-next-line default-case
    switch(operacao) {
      case SOMA:
        resultado = numero1 + numero2;
        break
      case SUBTRACAO:
        resultado = numero1 - numero2;
        break

      case DIVISAO:
        resultado = numero1 / numero2;
        break
      
      case MULTIPLICACAO:
        resultado = numero1 * numero2;
        break

      default:
        resultado = 0;
    }
    
    return resultado
  }

  function concatenarNumero(numAtual, numConcatenar) {
    // caso seja 0 ou null, reinicia
    if(numAtual === '0' || numAtual === null) {
      numAtual= '';
    }

    // primeiro digito for '.', concatena zero antes
    if(numConcatenar === '.' && numAtual.indexOf('.') > -1) {
      return numAtual
    }

    // caso '.' digitado e ja contenha um ponto, apneas retorna
    return numAtual + numConcatenar
  }

  return [
    calcular,
    concatenarNumero,
    SOMA,
    SUBTRACAO,
    DIVISAO,
    MULTIPLICACAO,
  ];

}

export default CalculadoraService