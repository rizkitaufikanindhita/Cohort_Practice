const goodpairs = (n: number[]) => {
  let result: number = 0
  for (let i = 0; i < n.length; i++) {
    for (let j = 0; j <= n.length; j++) {
      if (n[i] == n[j] && i < j) {
        result += 1
      } else {
        continue
      }
    }
  }
  return result
}

console.log(goodpairs([1, 2, 3, 1, 1, 3]))
console.log(goodpairs([1, 1, 1, 1]))
console.log(goodpairs([1, 2, 3]))



