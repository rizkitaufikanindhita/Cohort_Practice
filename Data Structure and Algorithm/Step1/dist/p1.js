"use strict";
const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lower = upper.toLowerCase();
const upperChar = upper.split("");
const lowerChar = lower.split("");
const check = (char) => {
    let result;
    for (let i = 0; i <= upperChar.length; i++) {
        if (char == upperChar[i]) {
            result = 1;
        }
        else if (char == lowerChar[i]) {
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
