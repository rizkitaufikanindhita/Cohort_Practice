const pattern16 = (n: number) => {
  const abjad: string = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  const abjadNew: string[] = abjad.split("")
  for (let i = 0; i < n; i++) {
    let num: number = 0 + i
    for (let j = 0; j <= i; j++) {
      process.stdout.write(abjadNew[num])
    }
    console.log("\n")
  }
}

pattern16(5)
