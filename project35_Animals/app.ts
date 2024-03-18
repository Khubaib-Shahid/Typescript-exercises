let animals : string[] = ["dog", "cat", "rabbit"];

animals.map((v) => {
    console.log(v);
})

animals.map((v) => {
    if (v === "dog") {
        console.log(`${v} can read our emotion.`);
    } else if (v === "cat") {
        console.log(`${v} have acute sense of hearing and smell.`);
    } else if (v === "rabbit") {
        console.log(`${v} are small, furry mammals with long ears.`);
    }
});

console.log("these animals have ability to provide companionship");