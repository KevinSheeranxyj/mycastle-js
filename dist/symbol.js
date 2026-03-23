let sym1 = Symbol(1111);
let sym2 = Symbol();
console.log(sym2);
const classNameSymbol = Symbol();
class C {
    [classNameSymbol]() {
        return "c";
    }
}
let c = new C();
let className = c[classNameSymbol]();
console.log(className);
console.log(sym1);
