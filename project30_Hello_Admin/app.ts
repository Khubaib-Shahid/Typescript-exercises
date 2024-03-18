let user : string[] = ["nolan", "mark", "admin", "david", "harley"];

user.map((v) => {
    if (v === "admin") {
        console.log(`Hello ${v}, would you like to see a status report.`);
    } else {
    console.log(`Hello ${v}, thank you for logging in again.`);
    }
})
