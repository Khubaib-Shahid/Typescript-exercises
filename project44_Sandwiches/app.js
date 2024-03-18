"use strict";
function sandwich(...items) {
    items.forEach((v, i) => {
        console.log(i + 1, v);
    });
    console.log("\n");
}
;
sandwich("meat", "cheeze", "spinach", "tomato");
sandwich("cocumber", "sausage", "tomato", "cheeze", "salad");
sandwich("cheeze", "tomato", "bacon");
