// function to perform basic math operations in calculator
export const mathOperation = (a, b, sign) => {
  // clickEquals function in Button.js passed the calculator memory data through to this function
  const operation = {
    "+": (a, b) => a + b,
    "-": (a, b) => a - b,
    "/": (a, b) => a / b,
    "x": (a, b) => a * b,
  };
  // returns corresponding anon function result
  return operation[sign](a, b);
};

// function to add unique styling for operation buttons
export const getStyle = (btnVal) => {
  const className = {
    "=": "special",
    "C": "special",
    "x": "operation",
    "-": "operation",
    "/": "operation",
    "+": "operation",
  };
  return className[btnVal];
};
