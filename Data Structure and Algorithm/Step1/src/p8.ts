// pattern
const pattern1 = (n: number) => {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      process.stdout.write("*");
    }
    console.log("\n");
  }
};

pattern1(5);
