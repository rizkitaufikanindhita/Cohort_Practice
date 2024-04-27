"use strict";
const pattern16 = (n) => {
    const abjad = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const abjadNew = abjad.split("");
    for (let i = 0; i < n; i++) {
        let num = 0 + i;
        for (let j = 0; j <= i; j++) {
            process.stdout.write(abjadNew[num]);
        }
        console.log("\n");
    }
};
pattern16(5);
