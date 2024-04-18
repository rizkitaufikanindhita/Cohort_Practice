const pattern11 = (n: number) => {
  for (let i = 0; i < n; i++) {
    if (i % 2 == 0) {
      for (let j = 0; j <= i; j++) {
        if (j % 2 == 0) {
          let num: number = 1;
          process.stdout.write(num.toString());
        } else {
          let numZero: number = 0;
          process.stdout.write(numZero.toString());
        }
      }
    } else {
      for (let j = 0; j <= i; j++) {
        if (j % 2 == 0) {
          let numZero: number = 0;
          process.stdout.write(numZero.toString());
        } else {
          let num: number = 1;
          process.stdout.write(num.toString());
        }
      }
    }
    console.log("\n");
  }
};

pattern11(10);

// 1
// 01
// 101
// 0101
// 10101
