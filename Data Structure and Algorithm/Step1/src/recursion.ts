const printNum = (n: number) => {
  let num: number = n + 1
  console.log('cetak nilai', num)
  printNum(n + 1)
}

printNum(0)
