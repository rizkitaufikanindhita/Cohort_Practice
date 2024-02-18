/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  let b;
  let c;
  if (str.length != 0 && str.length > 1) {
    b = str.replace(/[^\w]/g, "").toLowerCase().split("");
    c = str.replace(/[^\w]/g, "").toLowerCase().split("").reverse();
  } else if (str.length == 1) {
    b = str.replace(/[^\w]/g, "u").toLowerCase().split("");
    c = str.replace(/[^\w]/g, "u").toLowerCase().split("").reverse();
  } else {
    return true;
  }

  for (let i = 0; i < b.length; i++) {
    if (b[i] == c[i]) {
      return true;
    } else {
      return false;
    }
  }
}

module.exports = isPalindrome;
