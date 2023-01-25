// typically I'd store a test file for each component within a "__tests__" folder inside the components folder
// but in this case, I'm just unit testing as a brief example

import { mathOperation } from "./utility";

describe("mathOperation function", () => {
  test("returns a number", () => {
    expect(typeof mathOperation(1, 1, "+")).toEqual("number");
  });

  test("correctly adds when given two integers", () => {
    expect(mathOperation(2, 3, "+")).toBe(5);
    expect(mathOperation(-2, -4, "+")).toBe(-6);
  });

  test("correctly subtracts when given two integers", () => {
    expect(mathOperation(3, 2, "-")).toBe(1);
    expect(mathOperation(-2, -4, "-")).toBe(2);
  });

  test("correctly multiplies when given two integers", () => {
    expect(mathOperation(5, 5, "x")).toBe(25);
    expect(mathOperation(-50, 10, "x")).toBe(-500);
  });

  test("correctly divides when given two integers", () => {
    expect(mathOperation(100, 2, "/")).toBe(50);
    expect(mathOperation(12345, 12345, "/")).toBe(1);
  });

  // could also format tests in "Arrange-Act-Assert" style
  test("correctly adds when given two integers", () => {
    // Arrange
    const argA = 1;
    const argB = 2;
    const argC = "+";
    const assertion = 3;
    // Act
    const result = mathOperation(argA, argB, argC);
    // Assert
    expect(result).toBe(assertion);
  });
});
