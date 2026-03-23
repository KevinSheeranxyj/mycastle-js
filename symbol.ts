
let sym1 = Symbol(1111);

let sym2 = Symbol();
console.log(sym2);


const classNameSymbol = Symbol();
class C {
    [classNameSymbol]() {
        return "c"
    }
}
let c = new C();
let className = c[classNameSymbol]();


/// Unique Symbol
declare const sym4: unique symbol;

let sym3: typeof sym4 = sym4;

console.log(className);
console.log(sym1);