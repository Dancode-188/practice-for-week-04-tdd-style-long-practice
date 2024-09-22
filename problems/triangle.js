// Your code here
class Triangle {
    constructor(side1, side2, side3) {
        this.side1 = side1;
        this.side2 = side2;
        this.side3 = side3;
    }

    getPerimeter() {
        return this.side1 + this.side2 + this.side3;
    }

    hasValidSideLengths() {
        return (
          this.side1 + this.side2 > this.side3 &&
          this.side1 + this.side3 > this.side2 &&
          this.side2 + this.side3 > this.side1
        );
    }

    validate() {
        this.isValid = this.hasValidSideLengths();
    }

    static getValidTriangles(triangles) {
        return triangles.map(
            triangle => new Triangle(triangle.side1, triangle.side2, triangle.side3)
        ).filter(triangle => triangle.hasValidSideLengths());
    }
}

class Scalene extends Triangle {
    constructor(side1, side2, side3) {
        super(side1, side2, side3);
        this.isValidTriangle = this.hasValidSideLengths();
    }

    isScalene() {
        return this.isValidTriangle && this.side1 !== this.side2 && this.side1 !== this.side3 && this.side2 !== this.side3;
    }

    validate() {
        this.isValidScalene = this.isValidTriangle && this.isScalene();
    }
}

class Isosceles extends Triangle {
    constructor(side1, side2, side3) {
        super(side1, side2, side3);
        this.isValidTriangle = this.hasValidSideLengths();
    }

    isIsosceles() {
        return this.isValidTriangle && (this.side1 === this.side2 || this.side1 === this.side3 || this.side2 === this.side3);
    }

    validate() {
        this.isValidIsosceles = this.isValidTriangle && this.isIsosceles();
    }
}


module.exports = { Triangle, Scalene, Isosceles };