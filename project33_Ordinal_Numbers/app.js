"use strict";
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
arr.map((v) => {
    if (v === 1) {
        console.log(v + "st");
    }
    else if (v === 2) {
        console.log(v + "nd");
    }
    else if (v === 3) {
        console.log(v + "rd");
    }
    else if (v > 3) {
        console.log(v + "th");
    }
});
