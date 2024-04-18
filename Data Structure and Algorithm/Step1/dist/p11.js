"use strict";
// pattern
const pattern4 = (n) => {
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= i; j++) {
            process.stdout.write(i.toString());
        }
        console.log("\n");
    }
};
pattern4(5);
// 1
// 22
// 333
// 4444
// 55555
