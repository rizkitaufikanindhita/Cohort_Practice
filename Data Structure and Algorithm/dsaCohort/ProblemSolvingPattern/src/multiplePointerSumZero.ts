const sumZero = (n: number[]) => {
  let left = 0
  let right = n.length - 1 
  while(left < right){
    const sum = n[left] + n[right]
    if(sum == 0){
      return ([n[left],n[right]])
    } else if(sum > 0){
      right--
    } else {
      left++
    }
  }
}

console.log(sumZero([-4,-3,-2,0,1,2,6,5,7]));

