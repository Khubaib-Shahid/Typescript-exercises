"use strict";
function createCar(manufacturer, model, ...properties) {
    let car = {
        manufacturer,
        model,
    };
    for (let [key, value] of properties) {
        car[key] = value;
    }
    return car;
}
console.log(createCar("toyota", "supra", ["nitro", true], ["color", "red"]));
