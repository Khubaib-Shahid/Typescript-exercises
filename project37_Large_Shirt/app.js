"use strict";
let makeShirt = (size = "Large", message = "I love TypeScript") => {
    console.log(`Size : ${size}, Message : ${message}`);
};
makeShirt();
makeShirt("Medium");
makeShirt("Small", "I Love JavaScript");
