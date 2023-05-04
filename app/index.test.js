import index from "./index.js";

describe("Given a checkIfContainsEveryVowel function", () => {
  describe("When it receive 'aeiou'", () => {
    test("Then it should return true", () => {
      const text = "aeiou";

      const expectedResult = index.checkIfContainsEveryVowel(text);

      expect(expectedResult).toBe(true);
    });
  });
  describe("When it receive 'ho la.'", () => {
    test("Then it should return false", () => {
      const text = "hola";

      const expectedResult = index.checkIfContainsEveryVowel(text);

      expect(expectedResult).toBe(false);
    });
  });
});

describe("Given a checkIfNumberIsEven function", () => {
  describe("When it receive '2'", () => {
    test("Then it should return true", () => {
      const number = 2;

      const expectedResult = index.checkIfNumberIsEven(number);

      expect(expectedResult).toBe(true);
    });
  });
  describe("When it receive '7'", () => {
    test("Then it should return false", () => {
      const number = 7;

      const expectedResult = index.checkIfNumberIsEven(number);

      expect(expectedResult).toBe(false);
    });
  });
});

describe("Given a checkIfNumberIsPrime function", () => {
  describe("When it receive '7'", () => {
    test("Then it should return true", () => {
      const number = 7;

      const expectedResult = index.checkIfNumberIsPrime(number);

      expect(expectedResult).toBe(true);
    });
  });
  describe("When it receive '4'", () => {
    test("Then it should return false", () => {
      const number = 4;

      const expectedResult = index.checkIfNumberIsPrime(number);

      expect(expectedResult).toBe(false);
    });
  });
});

describe("Given a getHighestNumber function", () => {
  describe("When it receive [1, 2, 3, 4, 5, 420]", () => {
    test("Then it should return 420", () => {
      const numberList = [1, 2, 3, 4, 5, 420];
      const expectedNumber = 420;

      const expectedResult = index.getHighestNumber(numberList);

      expect(expectedResult).toBe(expectedNumber);
    });
  });
});
