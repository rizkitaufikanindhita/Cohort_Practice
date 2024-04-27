const pattern19 = (n: number) => {
  for (let i = 0; i < n; i++) {
    // star
    for (let j = 0; j < n - i; j++) {
      process.stdout.write("*")
    }
    // space
    for (let j = 0; j < i; j++) {
      process.stdout.write(" ")
    }
    // space
    for (let j = 0; j < i; j++) {
      process.stdout.write(" ")
    }
    // star
    for (let j = 0; j < n - i; j++) {
      process.stdout.write("*")
    }

    console.log('\n')
  }
}
const pattern20 = (n: number) => {
  for (let i = 0; i < n; i++) {
    // star
    for (let j = 0; j <= i; j++) {
      process.stdout.write("*")
    }
    // space
    for (let j = 0; j < n - i - 1; j++) {
      process.stdout.write(" ")
    }
    // space
    for (let j = 0; j < n - i - 1; j++) {
      process.stdout.write(" ")
    }
    // star
    for (let j = 0; j <= i; j++) {
      process.stdout.write("*")
    }

    console.log('\n')
  }
}

pattern19(5)
pattern20(5)
