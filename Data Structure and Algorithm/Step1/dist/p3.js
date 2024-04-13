"use strict";
const compare = (a, b) => {
    if (a < b) {
        return "smaller";
    }
    else if (a > b) {
        return "greater";
    }
    else {
        return "equal";
    }
};
console.log(compare(10, 7));
