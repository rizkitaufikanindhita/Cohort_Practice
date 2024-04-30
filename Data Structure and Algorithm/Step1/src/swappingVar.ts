const swap = () => {
  let var1: number = 314
  let var2: number = 911
  let varTemp: number

  varTemp = var1
  var1 = var2
  var2 = varTemp

  console.log(`var1 = ${var1}, var2 = ${var2}`)
}

swap()
