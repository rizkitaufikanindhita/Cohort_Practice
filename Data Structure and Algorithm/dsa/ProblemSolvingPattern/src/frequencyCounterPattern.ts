const same = (n1:number[],n2:number[]) => {
  if(n1.length != n2.length){
    return false
  }

  const frequentN1:{[index:string]:number} = {}
  const frequentN2:{[index:string]:number} = {}

  for(let char of n1){
    const charNew = char.toString()
    frequentN1[charNew] = (frequentN1[charNew] || 0) + 1
  }
  for(let char of n2){
    const charNew = char.toString()
    frequentN2[charNew] = (frequentN2[charNew] || 0) + 1
  }

  for(let key in frequentN1){
    if(!(parseInt(key)**2 in frequentN2)){
      return false
    }
  }
  return true
}

console.log(same([1,2,3,4],[4,9,1,16]))

// O(n)
