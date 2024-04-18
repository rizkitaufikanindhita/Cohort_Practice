const pattern8 = (n: number) => {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      process.stdout.write(" ");
    }
    for (let j = 0; j < 2 * i + 1; j++) {
      process.stdout.write("*");
    }
    for (let j = 0; j < n - i - 1; j++) {
      process.stdout.write(" ");
    }
    console.log("\n");
  }
};
const pattern9 = (n: number) => {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < i; j++) {
      process.stdout.write(" ");
    }
    for (let j = 0; j < 2 * n - 1 - 2 * i; j++) {
      process.stdout.write("*");
    }
    for (let j = 0; j <= i; j++) {
      process.stdout.write(" ");
    }
    console.log("\n");
  }
};

pattern8(5);
pattern9(5);
