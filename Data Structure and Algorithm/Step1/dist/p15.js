"use strict";
// Reverse Bits
const costTicket = (n) => {
    const data = Number(n).toString(2).split("");
    let dataNum = data.map((item) => parseInt(item));
    let dataRev = dataNum.reverse().join("");
    console.log(parseInt(dataRev, 2));
};
costTicket(56);
