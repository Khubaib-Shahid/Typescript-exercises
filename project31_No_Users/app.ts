let user : string[] = ["khubaib"];

if (user.length < 1) {
    console.log("we need to find some users");
} else {
    user.map((v) => {
        if (v === "admin") {
            console.log(`Hello ${v}, would you like to see a status report.`);
        } else {
        console.log(`Hello ${v}, thank you for logging in again.`);
        }
    });
}

