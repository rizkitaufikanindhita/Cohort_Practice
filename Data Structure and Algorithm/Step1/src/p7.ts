const twoFunc = (n: number[]) => {
  let resut1: number = 0;
  if (n[0] < n[1]) {
    resut1 = n[1];
  } else {
    resut1 = n[0];
  }

  let result2: number[] = [0, 0];
  result2[0] = n[1];
  result2[1] = n[0];

  console.log(resut1, result2);
};

twoFunc([3, 5]);
