"use strict";
const swap = () => {
    let var1 = 314;
    let var2 = 911;
    let varTemp;
    varTemp = var1;
    var1 = var2;
    var2 = varTemp;
    console.log(`var1 = ${var1}, var2 = ${var2}`);
};
swap();
