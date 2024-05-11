"use strict";
const countUnique = (n) => {
    if (n.length == 0) {
        return 0;
    }
    let i = 0;
    for (let j = 1; j < n.length; j++) {
        if (n[i] !== n[j]) {
            i++;
            n[i] = n[j];
        }
    }
    return i + 1;
};
console.log(countUnique([1, 1, 1, 1, 1, 2]));
console.log(countUnique([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]));
console.log(countUnique([]));
console.log(countUnique([-2, -1, -1, 0, 1]));
