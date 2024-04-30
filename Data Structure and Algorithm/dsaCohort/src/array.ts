const array: number[] = [95, 1995, 27]

console.log(array)

let arrayNew: number[] = []
array.forEach((item) => {
  arrayNew.push(item * 2)
})

console.log(arrayNew)

arrayNew[0] = 3140

console.log(arrayNew)
