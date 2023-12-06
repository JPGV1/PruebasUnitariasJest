const clasTriangulo = require('./clasTriangulo');

test('Que tipo de triángulo es', () => {
  expect(clasTriangulo(60, 60, 60)).toBe("Triángulo Equilátero"); 
  expect(clasTriangulo(70, 70, 40)).toBe("Triángulo Isósceles"); 
  expect(clasTriangulo(90, 70, 20)).toBe("Triángulo Escaleno"); 
});