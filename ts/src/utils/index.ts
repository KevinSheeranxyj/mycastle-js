

namespace Utils {
    export const getRandomNumber = () => {
        return Math.floor(Math.random() * 100);
    }

    const sub = (a: number, b: number): number => {
        return a - b;
    }
}

export default Utils;

console.log(Utils.getRandomNumber());