const pattern23 = (n: number) => {
  for (let i = 0; i < n; i++) {
    if (i == 0 || i == n - 1) {
      for (let j = 0; j < n; j++) {
        process.stdout.write("*")
      }
    } else {
      for (let j = 0; j < n; j++) {
        if (j == 0 || j == n - 1) {
          process.stdout.write("*")
        } else {
          process.stdout.write(" ")
        }
      }
    }
    console.log('\n')
  }
}
pattern23(10)
