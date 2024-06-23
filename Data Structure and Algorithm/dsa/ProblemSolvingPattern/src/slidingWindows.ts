const slidingWindows = (n: number[],num: number) => {
  if(n.length < num){
    return []
  }

  let maxNum: number = 0
  let tempNum: number = 0

  for(let i=0;i<num;i++){
    maxNum += n[i] 
  }

  tempNum = maxNum
 
  for (let j=num;j<n.length;j++){
    tempNum = tempNum - n[j-num] + n[j]
    maxNum = Math.max(maxNum, tempNum)
  }

  return maxNum
}

console.log(slidingWindows([1,3,2,1,4,5,6],3));

