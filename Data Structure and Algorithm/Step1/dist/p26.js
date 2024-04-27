"use strict";
const pattern18 = (n) => {
    const abjad = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const abjadNew = abjad.split("");
    for (let i = 0; i < n; i++) {
        let num = n - 1 - i;
        for (let j = 0; j <= i; j++) {
            let numNew = num + j;
            process.stdout.write(abjadNew[numNew]);
        }
        console.log('\n');
    }
};
pattern18(5);
