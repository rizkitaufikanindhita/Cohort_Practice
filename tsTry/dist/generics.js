"use strict";
const findFirst = (data) => {
    return data[0];
};
const dataSatu = findFirst(["RIZKI", "TAUFIK", "ANINDHITA"]);
console.log(dataSatu.toLowerCase());
console.log(findFirst([4, 3, 1, 2, 1, 5]));
console.log(findFirst([7, 3, 1, 2, 1, "5", "10"]));
