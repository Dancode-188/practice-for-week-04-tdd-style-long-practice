// Your code here
const chai = require("chai");
const expect = chai.expect;
const Person = require("../problems/person");

describe("Person", function () {
  let person1, person2;

  beforeEach(function () {
    person1 = new Person("Elie", 21);
    person2 = new Person("John", 25);
  });

  describe("constructor", function () {
    it("should have a name and age property", function () {
      expect(person1).to.have.property("name");
      expect(person1).to.have.property("age");
    });
  });

  describe("sayHello", function () {
    it("should return a greeting with the person's name", function () {
      expect(person1.sayHello()).to.equal("Hello, my name is Elie");
    });
  });

  describe("visit(otherPerson)", function () {
    it("should return a string with the name of the other person", function () {
      expect(person1.visit(person2)).to.equal("Elie visited John");
    });
  });

  describe("switchVisit(otherPerson)", function () {
    it("should return a string with the name of the other person", function () {
      expect(person1.switchVisit(person2)).to.equal("John visited Elie");
    });
  });

  describe("update(obj)", function () {
    context("when the argument is not an object", function () {
      it("should throw a TypeError", function () {
        expect(function () {
          person1.update(42);
        }).to.throw(TypeError);
      });
    });

    context("when the argument is an object", function () {
      it("should update the person's properties", function () {
        person1.update({ name: "Bob", age: 22 });
        expect(person1.name).to.equal("Bob");
        expect(person1.age).to.equal(22);
      });
    });

    context("when argument object is missing properties", function () {
      it("should throw a TypeError", function () {
        expect(function () {
          person1.update({ name: "Bob" });
        }).to.throw(TypeError);
      });
    });
  });

  describe("tryUpdate(obj)", function () {
    it("should return true and update properties for valid input", function () {
      expect(person1.tryUpdate({ name: "Bob", age: 22 })).to.be.true;
      expect(person1.name).to.equal("Bob");
      expect(person1.age).to.equal(22);
    });

    it("should return false and not update properties for invalid input", function () {
      const originalName = person1.name;
      expect(person1.tryUpdate({ name: "Bob" })).to.be.false;
      expect(person1.name).to.equal(originalName);
    });
  });

  describe("greetAll(personArray)", function () {
    it("should return an array of greetings from all persons", function () {
      expect(Person.greetAll([person1, person2])).to.deep.equal([
        "Hello, my name is Elie",
        "Hello, my name is John",
      ]);
    });
  });
});