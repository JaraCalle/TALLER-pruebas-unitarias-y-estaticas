// TODO: Escribe pruebas unitarias para isPalindrome.
// Sugerencias: "radar" -> true; "anita lava la tina" -> true; "python" -> false; "" -> true; "Radar" -> true

const { isPalindrome } = require('../src/stringUtils')

test('ejemplo siembra', () => {
  expect(true).toBe(true);
});

test('radar', () => {
  expect(true).toBe(isPalindrome('radar'))
});

test('anita lava la tina', () => {
  expect(true).toBe(isPalindrome('anita lava la tina'))
});

test('python', () => {
  expect(false).toBe(isPalindrome('python'))
});

test('', () => {
  expect(true).toBe(isPalindrome(''))
});

test('Radar', () => {
  expect(true).toBe(isPalindrome('Radar'))
});

