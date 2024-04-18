"use strict";
// count digits
const divide = (n) => {
    const data = n.toString().split("");
    const dataNum = data.map((item) => parseInt(item));
    let result = 0;
    for (let i = 0; i < dataNum.length; i++) {
        if (n % dataNum[i] == 0) {
            result += 1;
        }
        else {
            result += 0;
        }
    }
    return result;
};
console.log(divide(373));
