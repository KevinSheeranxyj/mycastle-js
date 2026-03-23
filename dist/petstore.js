let pet;
let dog = { name: "lassie", owner: "Rudd Weatherwax" };
pet = dog;
function greet(pet) {
    console.log("Hello " + pet.name);
}
let x = (a) => 0;
let y = (b, s) => 0;
y = x;
console.log(x);
let items = [1, 2, 4];
items.forEach((item, index, array) => console.log(item, index, array));
items.forEach((item) => console.log(item));
greet(dog);
console.log(pet);
