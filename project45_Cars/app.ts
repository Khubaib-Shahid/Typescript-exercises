function createCar(manufacturer : string, model : string, ...properties : [string, any][]) : object {
    let car : any = {
        manufacturer,
        model,
    }

    for (let [key, value] of properties) {
        car[key] = value;
    }

    return car
}

console.log(createCar("toyota", "supra", ["nitro", true], ["color", "red"]));

