// Your code here
const chai = require('chai');
const expect = chai.expect;
const spies = require('chai-spies');
chai.use(spies);

const myMap = require('../problems/my-map');

describe('map()', function() {
    let arr, cb;

    beforeEach(function() {
        arr = [1, 2, 3];
        cb = chai.spy(num => num * 2);
    });

    it('should return a new array', function() {
        const result = myMap(arr, cb);
        expect(result).to.be.an('array');
        expect(result).to.not.equal(arr);
    });

    it('should call the callback for each element in the array', function() {
        myMap(arr, cb);
        expect(cb).to.have.been.called.exactly(arr.length);
    });

    it('should return a new array with each element transformed by the callback', function() {
        const result = myMap(arr, cb);
        expect(result).to.eql([2, 4, 6]);
    });

    it('should not mutate the original array', function() {
        myMap(arr, cb);
        expect(arr).to.eql([1, 2, 3]);
    });

    it('should not call the built-in map method', function() {
        const mapSpy = chai.spy.on(arr, 'map');
        myMap(arr, cb);
        expect(mapSpy).to.not.have.been.called();
    });
});