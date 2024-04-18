"use strict";
// pattern
const pattern6 = (n) => {
    for (let i = 0; i <= n; i++) {
        for (let j = 1; j <= n - i; j++) {
            process.stdout.write(j.toString());
        }
        console.log("\n");
    }
};
pattern6(5);
// 12345
// 1234
// 123
// 12
// 1
