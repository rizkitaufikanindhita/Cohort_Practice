"use strict";
const pattern14 = (n) => {
    const abjad = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const abjadNew = abjad.split("");
    for (let i = 0; i < n; i++) {
        let num = 0;
        for (let j = 0; j <= i; j++) {
            process.stdout.write(abjadNew[num]);
            num += 1;
        }
        console.log("\n");
    }
};
pattern14(5);
