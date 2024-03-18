"use strict";
const data = {
    email: "rizki@gmail.com",
    firstName: "rizki",
    lastName: "anindhita",
    age: 29,
};
const isLegalNew = (user) => {
    return user.age > 19 ? true : false;
};
console.log(isLegalNew(data));
