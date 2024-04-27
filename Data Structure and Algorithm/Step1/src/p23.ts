const pattern15 = (n: number) => {
  const abjad: string = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  const abjadNew: string[] = abjad.split("")
  for (let i = 0; i < n; i++) {
    let num: number = 0
    for (let j = 0; j < n - i; j++) {
      process.stdout.write(abjadNew[num])
      num += 1
    }
    console.log("\n")
  }
}

pattern15(5)
