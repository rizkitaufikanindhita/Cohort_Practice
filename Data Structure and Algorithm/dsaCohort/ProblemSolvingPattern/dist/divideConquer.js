"use strict";
const search = (n, val) => {
    let min = 0;
    let max = n.length - 1;
    while (min <= max) {
        let middle = Math.floor((min + max) / 2);
        if (n[middle] < val) {
            min = middle + 1;
        }
        else if (n[middle] > val) {
            max = middle - 1;
        }
        else {
            return middle;
        }
    }
    return -1;
};
console.log(search([1, 2, 3, 4, 5, 6], 4));
console.log(search([1, 2, 3, 4, 5, 6], 6));
console.log(search([1, 2, 3, 4, 5, 6], 11));
