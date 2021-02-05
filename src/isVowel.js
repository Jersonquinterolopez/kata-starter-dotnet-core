const isVowel = (char) => 'aeiou'.includes(char);

try {
  module.exports = isVowel;
} catch (error) {
  console.error('we caught an error');
}
