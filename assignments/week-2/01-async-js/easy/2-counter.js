// ## Counter without setInterval

// Without using setInterval, try to code a counter in Javascript. There is a hint at the bottom of the file if you get stuck.

let counter = 1;
const a = () => {
  console.log(counter);
  counter++;
  setTimeout(a, 1000);
};

a();

// (Hint: setTimeout)
