"use strict";
const jumlah = (num1, num2) => {
    return num1 + num2;
};
const show = (funct, delay) => {
    setTimeout(() => {
        console.log(funct());
    }, delay);
};
show(() => jumlah(10, 16), 10000);
