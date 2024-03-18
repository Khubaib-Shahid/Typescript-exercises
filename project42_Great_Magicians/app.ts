let magicians : string[] = ["David Blaine", "Lance Burton", "Dynamo"];

function showMagicians(arr : string[]) : void {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
};

function makeGreat (arr : string[]) : void {
    arr.forEach((v, i) => {
        arr[i] = `${v} The Great`;
    })
}

showMagicians(magicians);

makeGreat(magicians);

showMagicians(magicians)