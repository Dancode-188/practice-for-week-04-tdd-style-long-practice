// Your code here
const chai = require('chai');
const expect = chai.expect;
const { returnsThree, reciprocal } = require("../problems/number-fun");

describe("returnsThree()", function() {
    it("should return the number 3", function() {
        expect(returnsThree()).to.equal(3);
    });
});

describe("reciprocal()", function() {
    context('with invalid arguments', function() {
        it("should throw a RangeError when the argument is less than or equal to 0", function() {
            expect(function() {
                reciprocal(0);
            }).to.throw(RangeError, 'The argument must be a number more than 0');
        });
        it("should throw a RangeError when the argument is greater than or equal to 1000001", function() {
            expect(function() {
                reciprocal(1000001);
            }).to.throw(RangeError, 'The argument must be a number less than 1000001');
        });
    });

    context('with valid arguments', function() {
        it("should return the reciprocal of the number", function() {
            expect(reciprocal(2)).to.equal(0.5);
        });
    });
});