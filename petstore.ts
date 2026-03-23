
interface Pet {
    name: string
}

let pet: Pet;

let dog = {name: "lassie", owner: "Rudd Weatherwax"};

pet = dog;

function greet(pet: Pet) {
    console.log("Hello " + pet.name);
}

let x = (a: number) => 0;
let y = (b: number, s: string) => 0;

y = x;
console.log(x);

let items = [1, 2, 4];
items.forEach((item, index, array) => console.log(item, index, array));

items.forEach((item) => console.log(item));

greet(dog);

console.log(pet);
