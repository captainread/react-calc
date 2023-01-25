import { getStyle, mathOperation } from "../utilities/utility";

import { CalculatorContext } from "../context/CalculatorContext";
import { useContext } from "react";

const Button = ({ value }) => {
  const { calcMemory, setCalcMemory } = useContext(CalculatorContext);

  // handles button clicking, leading to operation functions
  const handleClick = () => {
    const results = {
      "C": clickClear,
      "/": clickSign,
      "-": clickSign,
      "x": clickSign,
      "+": clickSign,
      "=": clickEquals,
    };
    if (results[value]) {
      // if btn corresponds to above functions, lead to correct function
      return results[value]();
    } else {
      // ...otherwise btn clicked is a number, so go to number function
      return clickNumber();
    }
  };

  // handles clicking a number
  const clickNumber = () => {
    const numStr = value.toString();
    let numValue;

    if (numStr === "0" && calcMemory.num === 0) {
      // if current number displayed is 0, do not add more zeroes to the display - stay as one zero
      numValue = "0";
    } else {
      // ...otherwise, append the clicked value to the num stored in memory
      numValue = +(calcMemory.num + numStr);
    }

    setCalcMemory({ ...calcMemory, num: numValue });
  };

  // handles clicking a math sign
  const clickSign = () => {
    setCalcMemory({
      sign: value,
      // store the value of the sign button in the memory
      result: !calcMemory.result && calcMemory.num ? calcMemory.num : calcMemory.result,
      // if appropriate, transfer stored num to stored result
      num: 0,
    });
  };

  // handles clicking equals button and performs the math operation needed
  const clickEquals = () => {
    if (calcMemory.result && calcMemory.num) {
      // if both a num and a result stored, can perform operation
      setCalcMemory({
        result: mathOperation(calcMemory.result, calcMemory.num, calcMemory.sign),
        // new result = outcome of passing stored data to mathOperation(a, b, sign) above
        sign: "",
        num: 0,
      });
    }
  };

  // handles clicking C to clear
  const clickClear = () => {
    setCalcMemory({ clickSign: "", num: 0, result: 0 });
  };

  return (
    <button className={`${getStyle(value)} calc-btn`} onClick={handleClick} data-testid="test-btn">
      {value}
    </button>
  );
};

export default Button;
