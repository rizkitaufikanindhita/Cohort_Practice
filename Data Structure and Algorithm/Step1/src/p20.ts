const pattern12 = (n: number) => {
  for (let i = 0; i < n; i++) {
    // number
    for (let j = 0; j < i + 1; j++) {
      let num: number = j + 1;
      process.stdout.write(num.toString());
    }

    // space
    for (let j = 0; j < 2 * n - (i + 1) * 2; j++) {
      process.stdout.write(" ");
    }

    // number
    for (let j = 0; j < i + 1; j++) {
      let num: number = i + 1 - j;
      process.stdout.write(num.toString());
    }

    console.log("\n");
  }
};

pattern12(4);

// 1      1
// 12    21
// 123  321
// 12344321

// 0 - [1,6,1]
// 1 - [2,4,2]
// 2 - [3,2,3]
// 3 - [4,0,4]

// 2 * n - (i+1) * 2 = 8 - 2 = 6
// 2 * n - (i+1) * 2 = 8 - 4 = 4
// 2 * n - (i+1) * 2 = 8 - 6 = 2
// 2 * n - (i+1) * 2 = 8 - 8 = 4
