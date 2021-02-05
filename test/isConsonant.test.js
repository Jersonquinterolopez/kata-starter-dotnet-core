const isConsonant = require('../src/isConsonant');

describe('isConsonant', () => {
  it('should return true for input "f"', () => {
    expect(isConsonant('f')).toBe(true);
  });

  it('should return false for input "a"', () => {
    expect(isConsonant('a')).toBe(false);
  });
});
