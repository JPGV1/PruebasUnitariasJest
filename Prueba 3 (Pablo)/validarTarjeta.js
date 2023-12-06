function validarTarjeta(numeroTarjeta) {
    const numeroLimpio = numeroTarjeta.replace(/\D/g, '');
  
    if (numeroLimpio.length !== 16) {
      return false;
    }
  
    const primerDigito = numeroLimpio[0];
    return primerDigito === '4' || primerDigito === '5' || primerDigito === '6';
  }
  
  module.exports = validarTarjeta;
  
  
  
  
  
  


