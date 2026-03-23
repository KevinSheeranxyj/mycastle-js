// const toHex = (this: number) => {
//     return this.toString(16);
// }


function toHex(this: number) {
    return this.toString(16);
}

const fiveToHex: OmitThisParameter<typeof toHex> = toHex.bind(5);

console.log(fiveToHex()); // "5"

export default fiveToHex;