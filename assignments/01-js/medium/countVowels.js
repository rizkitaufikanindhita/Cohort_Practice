/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
  const a = ["a", "i", "u", "e", "o"];
  let b = str.toLowerCase().split("");
  let counter = 0;
  for (let i = 0; i < b.length; i++) {
    for (let j = 0; j < a.length; j++) {
      if (b[i] == a[j]) {
        counter += 1;
      }
    }
  }
  return counter;
}

module.exports = countVowels;
