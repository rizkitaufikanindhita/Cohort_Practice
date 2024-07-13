const anagram = (n1: string,n2: string) => {
  if(n1.length != n2.length){
    return false
  }

  // object keynya string, valuenya number
  const n1Array: {
    [index: string]: number
  } = {}

  // object keynya string, valuenya number
  const n2Array: {
    [index: string]: number
  } = {}

  for(let i=0;i<n1.length;i++){
    n1Array[n1[i]] > 0 ? n1Array[n1[i]]++ : n1Array[n1[i]] = 1
  }

  for(let i=0;i<n2.length;i++){
    n2Array[n2[i]] > 0 ? n2Array[n2[i]]++ : n2Array[n2[i]] = 1
  }

  for(let key in n1Array){
    if(!(key in n2Array)){
      return false
    }
  }

  return {n1Array, n2Array, msg:true}
}

console.log(anagram("kobog","bobok"))
console.log(anagram("anagram","magaran"))
