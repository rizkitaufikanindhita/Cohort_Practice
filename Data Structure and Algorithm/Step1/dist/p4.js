"use strict";
const count = (n1, n2) => {
    switch (n1) {
        case 1:
            return 3.14 * n2[0];
            break;
        case 2:
            return n2[0] * n2[1];
            break;
    }
};
console.log(count(2, [5, 10]));
