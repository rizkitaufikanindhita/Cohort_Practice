const countUnique = (n: number[]) => {
  if(n.length == 0){
    return 0
  } else {
    let result = 0
    let i = 0
    for(let j=1; j<n.length; j++){
      if(n[i] != n[j]){
        result++
        n[i] = n[j]
      }
    }
    return result + 1
  }
}

console.log(countUnique([1,1,1,1,1,1,1]))
console.log(countUnique([]))
console.log(countUnique([1,2,2,2,3,4,4,4,4,5]))
console.log(countUnique([-4,-4,-3,-1,0,1,2]))
