function numPerfecto(numero) {
    if (numero <= 0) {
      return false;
    }
  
    let sumaDivisores = 0;
    for (let i = 1; i < numero; i++) {
      if (numero % i === 0) {
        sumaDivisores += i;
      }
    }
  
    return sumaDivisores === numero;
  }
  
  module.exports = numPerfecto;