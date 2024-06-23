const validAnagram = (str1: string, str2: string) => {
  if(str1.length != str2.length){
    return false
  }

  const n1bj: {[index: string]:number} = {}
  const n2bj: {[index: string]:number} = {}

  for(let i = 0;i<str1.length;i++){
    n1bj[str1[i]] > 0 ? n1bj[str1[i]]++ : n1bj[str1[i]] = 1 
  }

  for(let i = 0;i<str2.length;i++){
    n2bj[str2[i]] > 0 ? n2bj[str2[i]]++ : n2bj[str2[i]] = 1 
  }

  for(let key in n1bj){
    if(!(key in n2bj)){
      return false
    }
  }
  return {n1bj,n2bj}
}

console.log(validAnagram("anagrem","nagaram"))

// O(n)
