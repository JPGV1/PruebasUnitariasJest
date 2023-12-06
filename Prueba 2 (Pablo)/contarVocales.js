function contarVocales(cadena) {
    const cadenaClear = cadena.toLowerCase().replace(/[^a-zA-Z]/g, ''); 
    if (cadenaClear.length === 0) {
      return null; 
    }
  
    let contador = 0;
  
    for (const letra of cadenaClear) {
      if ('aeiou'.includes(letra)) {
        contador++;
      }
    }
  
    return contador;
  }
  
  module.exports = contarVocales;