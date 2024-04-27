"use strict";
const pattern17 = (n) => {
    const abjad = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const abjadNew = abjad.split("");
    for (let i = 1; i < n; i++) {
        // space
        for (let j = 0; j < n - 1 - i; j++) {
            process.stdout.write(" ");
        }
        // abjad
        let num = 0;
        for (let j = 0; j < 2 * i - 1; j++) {
            let numNew = 2 * i - 1 - i + 1;
            if (num > 2 * i - 1 - i) {
                let numJ = numNew;
                process.stdout.write(abjadNew[numJ - j + i - 2]);
            }
            else {
                process.stdout.write(abjadNew[num]);
            }
            num += 1;
        }
        for (let j = 0; j < n - 1 - i; j++) {
            process.stdout.write(" ");
        }
        console.log("\n");
    }
};
pattern17(10);
// 3,1,3
// 2,3,2
// 1,5,1
// 0,7,0
