"use strict";
const login = (data) => {
    console.log(`selamat datang kembali ${data.name} dengan email ${data.email}`);
};
login({
    name: "Rizki",
    email: "rizki@gmail.com",
});
