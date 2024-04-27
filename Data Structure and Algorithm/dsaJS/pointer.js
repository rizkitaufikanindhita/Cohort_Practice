let obj1 = {
  value: 29
}

let obj2 = obj1

console.log(obj1.value)   // 29
console.log(obj2.value)   // 29

// pointer
// nilai akan sama karena menggunakan memory yang sama

obj1.value = 30

console.log(obj1.value)   // 30
console.log(obj2.value)   // 30

// pointer bisa dipindah tempat
const obj3 = {
  value: "Hallo"
}

obj2 = obj3
obj1 = obj3

console.log(obj2.value)
console.log(obj1.value)
