import { mathOperation } from "./utilities/utility";

describe("mathOperation function", () => {
  test("correctly adds two integers together", () => {
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
});
