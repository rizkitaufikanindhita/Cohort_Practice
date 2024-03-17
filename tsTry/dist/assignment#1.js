"use strict";
const rizki = {
    firstName: "Rizki",
    lastName: "Anindhita",
    email: "rizki@gmail.com",
    age: 29,
};
const isLegalAge = (user) => {
    return user.age > 18 ? true : false;
};
console.log(isLegalAge(rizki));
