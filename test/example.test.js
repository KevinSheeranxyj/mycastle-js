import assert from "node:assert";


describe("Array", function() {
    describe("#indexOf()", function () {
        // pending test
        it("shoudl return -1 when the value is not present", function () {

            assert.equal([1, 2, 3].indexOf(4), -1);
        });

        it("should return the index when present", function () {
                assert.equal([3, 33].indexOf(0), -1);
        })
    })
})