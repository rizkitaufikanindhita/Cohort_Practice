"use strict";
// pattern
const pattern2 = (n) => {
    for (let i = 0; i < n; i++) {
        for (let j = 0; j <= i; j++) {
            process.stdout.write("*");
        }
        console.log("\n");
    }
};
pattern2(5);
