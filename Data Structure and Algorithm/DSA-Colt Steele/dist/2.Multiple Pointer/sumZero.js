"use strict";
const sumZero = (n) => {
    let left = 0;
    let right = n.length - 1;
    while (left < right) {
        let sumNum = n[left] + n[right];
        if (sumNum == 0) {
            let result = {
                indexNum1: left,
                indexNum2: right
            };
            return result;
        }
        else if (sumNum > 0) {
            right--;
        }
        else {
            left++;
        }
    }
};
console.log(sumZero([-4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6]));
