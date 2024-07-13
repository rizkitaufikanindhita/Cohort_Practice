"use strict";
const sameSquare = (n1, n2) => {
    if (n1.length != n2.length) {
        return false;
    }
    const n1Obj = {};
    const n2Obj = {};
    for (let i = 0; i < n1.length; i++) {
        n1Obj[n1[i]] > 0 ? n1Obj[n1[i]]++ : n1Obj[n1[i]] = 1;
    }
    for (let i = 0; i < n2.length; i++) {
        n2Obj[n2[i]] > 0 ? n2Obj[n2[i]]++ : n2Obj[n2[i]] = 1;
    }
    for (let key in n1Obj) {
        if (!(parseInt(key) ** 2 in n2Obj)) {
            return false;
        }
    }
    return { n1Obj, n2Obj, msg: true };
};
console.log(sameSquare([1, 2, 3], [1, 4, 6]));
