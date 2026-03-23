var BooleanLikHeterogeneousEnum;
(function (BooleanLikHeterogeneousEnum) {
    BooleanLikHeterogeneousEnum[BooleanLikHeterogeneousEnum["No"] = 0] = "No";
    BooleanLikHeterogeneousEnum["Yes"] = "YES";
})(BooleanLikHeterogeneousEnum || (BooleanLikHeterogeneousEnum = {}));
console.log(BooleanLikHeterogeneousEnum);
var Direction;
(function (Direction) {
    Direction["Up"] = "Up";
    Direction["Down"] = "DOWN";
    Direction["Left"] = "LEFT";
    Direction["Right"] = "RIGHT";
})(Direction || (Direction = {}));
console.log(Direction);
function first() {
    console.log("first(): factory evaluated");
    return function (target, propertyKey, description) {
        console.log(target, propertyKey);
    };
}
console.log(first);
