// Your code here
const chai = require('chai');
const expect = chai.expect;
const reverseString = require('../problems/reverse-string');

describe('reverseString()', function() {
    it('should return the reversed string', function() {
        expect(reverseString('fun')).to.equal('nuf');
    });
    it("should throw a TypeError when the argument is not a string", function() {
        expect(function() {
            reverseString(42);
        }).to.throw(TypeError, 'The argument must be a string');
    });
});