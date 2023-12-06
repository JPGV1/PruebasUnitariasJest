function clasTriangulo(a, b, c) {
    if (a === 0 || b === 0 || c === 0) {
      return "No es un triángulo";
    } else if (a === b && b === c) {
      return "Triángulo Equilátero";
    } else if (a === b || b === c || a === c) {
      return "Triángulo Isósceles";
    } else {
      return "Triángulo Escaleno";
    }
  }
  
  module.exports = clasTriangulo;