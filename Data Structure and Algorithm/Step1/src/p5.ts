const fibonaci = (n: number): number => {
  let result: number[] = [];
  for (let i = 0; i < n; i++) {
    if (i == 0) {
      result.push(1);
    } else if (i == 1) {
      result.push(1);
    } else {
      result.push(result[i - 1] + result[i - 2]);
    }
  }

  let finalResult = result[n - 1];
  return finalResult;
};

console.log(fibonaci(8));
// 1,1,2,3,5,8,13,21
