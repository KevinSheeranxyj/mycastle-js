let someArr = [1, "sein", false];
let pets = new Set(["cat", "Dog", "Hamster"]);
pets["species"] = "mammals";
for (let pet in pets) {
    console.log(pet);
}
for (let pet of pets) {
    console.log(pet);
}
for (let entry of someArr) {
    console.log(entry);
}
