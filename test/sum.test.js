const sum = require("../sum.cjs");

test("adds 1 + 2  to equals 3", () => {
    expect(sum(1, 2)).toBe(4);
});