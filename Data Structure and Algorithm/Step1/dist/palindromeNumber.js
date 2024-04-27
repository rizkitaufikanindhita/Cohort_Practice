"use strict";
const palindromNumber = (n) => {
    const data = n.toString().split("");
    const newData = n.toString().split("");
    const dataRe = data.reverse();
    let result = [];
    for (let i = 0; i < dataRe.length; i++) {
        if (newData[i] != dataRe[i]) {
            result.push('false');
        }
        else {
            result.push('true');
        }
    }
    const resultFinal = result.sort();
    if (resultFinal[0] == 'false') {
        console.log('not palindrome');
    }
    else {
        console.log('palindrome');
    }
};
palindromNumber(1223221);
