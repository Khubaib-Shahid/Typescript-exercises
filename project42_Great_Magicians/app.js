"use strict";
let magicians = ["David Blaine", "Lance Burton", "Dynamo"];
function showMagicians(arr) {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}
;
function makeGreat(arr) {
    arr.forEach((v, i) => {
        arr[i] = `${v} The Great`;
    });
}
showMagicians(magicians);
makeGreat(magicians);
showMagicians(magicians);
