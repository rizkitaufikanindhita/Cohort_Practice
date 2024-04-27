const pattern18 = (n: number) => {
  const abjad: string = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  const abjadNew: string[] = abjad.split("")
  for (let i = 0; i < n; i++) {
    let num: number = n - 1 - i
    for (let j = 0; j <= i; j++) {
      let numNew: number = num + j
      process.stdout.write(abjadNew[numNew])
    }
    console.log('\n')
  }
}

pattern18(5)
