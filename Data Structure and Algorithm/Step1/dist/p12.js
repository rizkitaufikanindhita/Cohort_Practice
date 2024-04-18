"use strict";
// pattern
const pattern5 = (n) => {
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n - i; j++) {
            process.stdout.write("*");
        }
        console.log("\n");
    }
};
pattern5(5);
// *****
// ****
// ***
// **
// *
