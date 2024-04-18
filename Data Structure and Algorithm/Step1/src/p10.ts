// pattern
const pattern3 = (n: number) => {
  for (let i = 0; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      process.stdout.write(j.toString());
    }
    console.log("\n");
  }
};

pattern3(5);

// 1
// 12
// 123
// 1234
// 12345
