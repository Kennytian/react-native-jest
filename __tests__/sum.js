test('加法 1 + 2 等于 3', () => {
  const sum = require('../src/sum');
  expect(sum(1, 2)).toBe(3);
})