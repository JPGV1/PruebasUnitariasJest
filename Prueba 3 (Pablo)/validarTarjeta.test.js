const validarTarjeta = require('./validarTarjeta');

test('Validar número de tarjeta de crédito válido', () => {
  expect(validarTarjeta('4532015119714314')).toBe(true);
  expect(validarTarjeta('5450343085252863')).toBe(true);
  expect(validarTarjeta('4929803456789012')).toBe(true);
});

test('Validar número de tarjeta de crédito inválido', () => {
  expect(validarTarjeta('1234567890123456')).toBe(false); 
  expect(validarTarjeta('60112222333344445')).toBe(false); 
});