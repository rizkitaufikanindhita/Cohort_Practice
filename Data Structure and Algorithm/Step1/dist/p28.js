"use strict";
const pattern21 = (n) => {
    for (let i = 0; i < n; i++) {
        // star
        for (let j = 0; j < n - i; j++) {
            process.stdout.write("*");
        }
        // space
        for (let j = 0; j < i; j++) {
            process.stdout.write(" ");
        }
        // space
        for (let j = 0; j < i; j++) {
            process.stdout.write(" ");
        }
        // star
        for (let j = 0; j < n - i; j++) {
            process.stdout.write("*");
        }
        console.log('\n');
    }
};
const pattern22 = (n) => {
    for (let i = 0; i < n - 1; i++) {
        // star
        for (let j = 0; j <= i; j++) {
            process.stdout.write("*");
        }
        // space
        for (let j = 0; j < n - i - 1; j++) {
            process.stdout.write(" ");
        }
        // space
        for (let j = 0; j < n - i - 1; j++) {
            process.stdout.write(" ");
        }
        // star
        for (let j = 0; j <= i; j++) {
            process.stdout.write("*");
        }
        console.log('\n');
    }
};
pattern22(5);
pattern21(5);
