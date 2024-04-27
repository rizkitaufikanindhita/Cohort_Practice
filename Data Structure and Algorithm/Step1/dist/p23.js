"use strict";
const pattern15 = (n) => {
    const abjad = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const abjadNew = abjad.split("");
    for (let i = 0; i < n; i++) {
        let num = 0;
        for (let j = 0; j < n - i; j++) {
            process.stdout.write(abjadNew[num]);
            num += 1;
        }
        console.log("\n");
    }
};
pattern15(5);
