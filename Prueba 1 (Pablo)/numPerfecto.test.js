const numPerfecto = require('./numPerfecto');

test('Verifica si un número es perfecto', () => {
  expect(numPerfecto(28)).toBe(true);
  expect(numPerfecto(6)).toBe(true);
  expect(numPerfecto(12)).toBe(false);
  expect(numPerfecto(7)).toBe(false);
});