const upper: string = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lower: string = upper.toLowerCase();
const upperChar: string[] = upper.split("");
const lowerChar: string[] = lower.split("");

const check = (char: string) => {
  let result;
  for (let i = 0; i <= upperChar.length; i++) {
    if (char == upperChar[i]) {
      result = 1;
    } else if (char == lowerChar[i]) {
      result = 0;
    }
  }
  let result2;
  if (char in upperChar || char in lowerChar) {
    result2 = false;
    if (result2 != true) {
      result = -1;
    }
  }
  console.log(result);
};

check("D");
