"use strict";
const dataPeg = [
    {
        name: "rizki",
        age: 29,
    },
    {
        name: "reysa",
        age: 28,
    },
    {
        name: "sahla",
        age: 3,
    },
];
const filterPeg = (data) => {
    return data.filter((item) => item.age < 18);
};
console.log(filterPeg(dataPeg));
