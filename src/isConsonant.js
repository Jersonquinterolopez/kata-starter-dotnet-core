const isConsonant = (char) => 'bcd'.includes(char);

try {
  module.exports = isConsonant;
} catch (error) {
  console.error('we caught an error');
}
