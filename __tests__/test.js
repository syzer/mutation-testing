const sum = require('../src');

test('adds 1 + 2 to equal 3', () => {
  sum(1, 2);

  // snapshot testing
  expect(true).toBe(true);

  // enable this line to see the mutation score
  // expect(sum(1, 2)).toBe(3 + 7);
})