/*
  Implement a class `Calculator` having below methods
    - initialise a result variable in the constructor and keep updating it after every arithmetic operation
    - add: takes a number and adds it to the result
    - subtract: takes a number and subtracts it from the result
    - multiply: takes a number and multiply it to the result
    - divide: takes a number and divide it to the result
    - clear: makes the `result` variable to 0
    - getResult: returns the value of `result` variable
    - calculate: takes a string expression which can take multi-arithmetic operations and give its result
      example input: `10 +   2 *    (   6 - (4 + 1) / 2) + 7`
      Points to Note: 
        1. the input can have multiple continuous spaces, you're supposed to avoid them and parse the expression correctly
        2. the input can have invalid non-numerical characters like `5 + abc`, you're supposed to throw error for such inputs

  Once you've implemented the logic, test your code by running
*/

let result = 0;
class Calculator {
  constructor() {}
  add(num) {
    result += num;
  }
  subtract(num) {
    result -= num;
  }
  multiply(num) {
    result *= num;
  }
  divide(num) {
    result /= num;
  }
  clear() {
    result = 0;
  }
  getResult() {
    console.log(result);
  }
}
const coba = new Calculator(5);
coba.subtract(5);
coba.add(16);
coba.divide(3);
coba.clear();
coba.add(2);
coba.multiply(4);
coba.getResult();
// module.exports = Calculator;
