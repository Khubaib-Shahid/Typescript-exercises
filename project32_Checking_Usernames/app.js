"use strict";
let currentUsers = ["allin", "bob", "kathelina", "norman", "becky"];
let newUsers = ["albert", "jack", "Allin", "kathelina", "emily"];
newUsers.map((v) => {
    if (currentUsers.includes(v.toLowerCase())) {
        console.log("You will need to enter a new user name.");
    }
    else {
        console.log("User name is available.");
    }
});
