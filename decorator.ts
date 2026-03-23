
enum BooleanLikHeterogeneousEnum {
    No = 0,
    Yes = 'YES'
}
console.log(BooleanLikHeterogeneousEnum);


enum Direction {
    Up = "Up",
    Down = "DOWN",
    Left = "LEFT",
    Right = "RIGHT",
}
console.log(Direction);


const enum EDirection {
    Up,
    Down,
    Left,
    Right,
}

const ODirection = {
    Up: 0,
    Down: 1,
    Left: 2,
    Right: 3
} as const;

function first() {
    console.log("first(): factory evaluated");
    return function (target: any, propertyKey: string, description: PropertyDescriptor) {
        console.log(target, propertyKey);
    }
}
console.log(first);