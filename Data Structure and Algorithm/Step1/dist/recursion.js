"use strict";
const printNum = (n) => {
    let num = n + 1;
    console.log('cetak nilai', num);
    printNum(n + 1);
    if (num == 100) {
        num = 0;
    }
};
printNum(0);
