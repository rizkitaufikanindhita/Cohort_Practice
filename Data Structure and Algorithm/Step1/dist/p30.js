"use strict";
const pattern24 = (n) => {
    for (let i = 0; i <= 2 * n - 2; i++) {
        let num = n;
        for (let j = 0; j <= 2 * n - 2; j++) {
            process.stdout.write(num.toString());
        }
        console.log('\n');
    }
};
pattern24(4);
