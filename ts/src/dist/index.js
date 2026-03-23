"use strict";
// const toHex = (this: number) => {
//     return this.toString(16);
// }
Object.defineProperty(exports, "__esModule", { value: true });
function toHex() {
    return this.toString(16);
}
const fiveToHex = toHex.bind(5);
console.log(fiveToHex()); // "5"
exports.default = fiveToHex;
