const pattern10 = (n: number) => {
  for (let i = 0; i <= 2 * n - 1; i++) {
    if (i > n) {
      for (let j = 0; j < 2 * n - i; j++) {
        process.stdout.write("*");
      }
    } else {
      for (let j = 0; j <= i; j++) {
        process.stdout.write("*");
      }
    }

    console.log("\n");
  }
};

pattern10(5);

// 5 => 9
// 2n - 1
// 6 => 11

//0 *
//1 **
//2 ***
//3 ****
//4 *****
//5 ****
//6 ***
//7 **
//8 *
