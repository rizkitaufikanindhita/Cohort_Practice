const countString = (str: string) => {
  const result: any = {}
  for(const char of str){
    if(result[char] > 0){
      result[char]++
    } else {
      result[char] = 1
    }
  }
  return result
}

console.log(countString("hello"))
