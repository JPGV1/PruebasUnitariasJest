const contarVocales = require('./contarVocales');

test('Cuenta las vocales de una cadena', () => {
  expect(contarVocales('Murcielago')).toBe(5);
  expect(contarVocales('guineoecuatorial')).toBe(10);
  expect(contarVocales('Mari Mendez')).toBe(4);
  expect(contarVocales('Angarita')).toBe(4);
});
