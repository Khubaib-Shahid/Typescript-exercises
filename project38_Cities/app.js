"use strict";
let describeCity = (city, country = "Pakistan") => {
    console.log(`${city} is in ${country}`);
};
describeCity("Karachi");
describeCity("Lahore");
describeCity("San Francisco", "USA");
