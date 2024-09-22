// Your code here
const chai = require('chai');
const expect = chai.expect;
const { Triangle, Scalene, Isosceles } = require('../problems/triangle');

describe('Triangle', function() {
    let validTriangle, invalidTriangle;

    beforeEach(function() {
        validTriangle = new Triangle(3, 4, 5);
        invalidTriangle = new Triangle(3, 4, 10);
    });

    describe('constructor', function() {
        it('should have three properties', function() {
            expect(validTriangle).to.have.property('side1', 3);
            expect(validTriangle).to.have.property('side2', 4);
            expect(validTriangle).to.have.property('side3', 5);
        });
    });

    describe('getPerimeter()', function() {
        it('should return the perimeter of the triangle', function() {
            expect(validTriangle.getPerimeter()).to.equal(12);
        });
    });

    describe('hasValidSideLengths()', function() {
        it('should return true if the side lengths are valid', function() {
            expect(validTriangle.hasValidSideLengths()).to.be.true;
        });

        it('should return false if the side lengths are invalid', function() {
            expect(invalidTriangle.hasValidSideLengths()).to.be.false;
        });
    });

    describe('validate()' , function() {
        it('should add isValid property set to true for a valid triangle', function() {
            validTriangle.validate();
            expect(validTriangle.isValid).to.be.true;
        });

        it('should add isValid property set to false for an invalid triangle', function() {
            invalidTriangle.validate();
            expect(invalidTriangle.isValid).to.be.false;
        });
    });

    describe('getValidTriangles()', function() {
        it('should return an array of valid triangles', function() {
            const triangles = Triangle.getValidTriangles([
                { side1: 3, side2: 4, side3: 5 },
                { side1: 3, side2: 4, side3: 10 }
            ]);
            expect(triangles.length).to.equal(1);
            expect(triangles[0]).to.be.an.instanceof(Triangle);
            expect(triangles[0].side1).to.equal(3);
            expect(triangles[0].side2).to.equal(4);
            expect(triangles[0].side3).to.equal(5);
        });
    });
});

describe('Scalene', function() {
    let validScalene, invalidScalene;

    beforeEach(function() {
        validScalene = new Scalene(3, 4, 5);
        invalidScalene = new Scalene(3, 4, 10);
    });

    it('should inherit from Triangle', function() {
        expect(validScalene instanceof Triangle).to.be.true;
    });

    it('should have isValidTriangle property', function() {
        expect(validScalene.isValidTriangle).to.be.true;
        expect(invalidScalene.isValidTriangle).to.be.false;
    });

    describe('isScalene()', function() {
        it('should return true if the triangle is scalene', function() {
            expect(validScalene.isScalene()).to.be.true;
        });

        it('should return false if the triangle is not scalene', function() {
            expect(invalidScalene.isScalene()).to.be.false;
        });
    });

    describe('validate()', function() {
        it('should add isValidScalene property set to true for a valid scalene triangle', function() {
            validScalene.validate();
            expect(validScalene.isValidScalene).to.be.true;
        });

        it('should add isValidScalene property set to false for an invalid scalene triangle', function() {
            invalidScalene.validate();
            expect(invalidScalene.isValidScalene).to.be.false;
        });

        it('should override the Triangle class validate method', function() {
            validScalene.validate();
            expect(validScalene.isValid).to.be.undefined;
        });
    });
});

describe('Isosceles', function() {
    let validIsosceles, invalidIsosceles;

    beforeEach(function() {
        validIsosceles = new Isosceles(3, 4, 4);
        invalidIsosceles = new Isosceles(3, 4, 10);
    });

    it('should inherit from Triangle', function() {
        expect(validIsosceles instanceof Triangle).to.be.true;
    });

    it('should have isValidTriangle property', function() {
        expect(validIsosceles).to.have.property('isValidTriangle', true);
        expect(invalidIsosceles).to.have.property("isValidTriangle", false);
    });

    describe('isIsosceles()', function() {
        it('should return true if the triangle is isosceles', function() {
            expect(validIsosceles.isIsosceles()).to.be.true;
        });

        it('should return false if the triangle is not isosceles', function() {
            expect(invalidIsosceles.isIsosceles()).to.be.false;
        });
    });

    describe('validate()', function() {
        it('should add isValidIsosceles property set to true for a valid isosceles triangle', function() {
            validIsosceles.validate();
            expect(validIsosceles.isValidIsosceles).to.be.true;
        });

        it('should add isValidIsosceles property set to false for an invalid isosceles triangle', function() {
            invalidIsosceles.validate();
            expect(invalidIsosceles.isValidIsosceles).to.be.false;
        });

        it('should override the Triangle class validate method', function() {
            validIsosceles.validate();
            expect(validIsosceles.isValid).to.be.undefined;
        });
    });
});