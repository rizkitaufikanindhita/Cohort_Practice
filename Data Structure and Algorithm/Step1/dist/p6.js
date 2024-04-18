"use strict";
const sumOddEven = (n) => {
    const val = n.toString().split("");
    const valNum = val.map((item) => {
        return parseInt(item);
    });
    let resultEven = 0;
    let resultOdd = 0;
    for (let i = 0; i < valNum.length; i++) {
        if (valNum[i] % 2 == 0) {
            resultEven += valNum[i];
        }
        else {
            resultOdd += valNum[i];
        }
    }
    console.log(valNum, resultEven, resultOdd);
};
sumOddEven(16453);
