"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Utils;
(function (Utils) {
    Utils.getRandomNumber = () => {
        return Math.floor(Math.random() * 100);
    };
    const sub = (a, b) => {
        return a - b;
    };
})(Utils || (Utils = {}));
exports.default = Utils;
console.log(Utils.getRandomNumber());
