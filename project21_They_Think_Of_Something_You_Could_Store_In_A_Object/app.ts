interface obj {
    name : string,
    height : number,
    location : string,
    country : string,
    prominence : string
}

let mountain1 : obj = {
  name: "Mount Everest",
  height: 8848,
  location: "Himalayas",
  country: "Nepal/China",
  prominence: "8850 meters",
};

let mountain2 : obj = {
  name: "K2",
  height: 8611,
  location: "Karakoram",
  country: "Pakistan/China",
  prominence: "4017 meters",
};

let mountain3 : obj = {
  name: "Makalu",
  height: 8485,
  location: "Himalayas",
  country: "Nepal/China",
  prominence: "2386 meters",
};

let mountain4 : obj = {
  name: "Lhotse",
  height: 8516,
  location: "Himalayas",
  country: "Nepal/China",
  prominence: "610 meters",
};

let mountain5 : obj = {
  name: "Manaslu",
  height: 8163,
  location: "Himalayas",
  country: "Nepal",
  prominence: "3092 meters",
};

let mountains: {}[] = [];

mountains.push(mountain1);

mountains.push(mountain2);

mountains.push(mountain3);

mountains.push(mountain4);

mountains.push(mountain5);

console.log(mountains);

