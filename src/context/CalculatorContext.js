import { createContext, useState } from "react";

export const CalculatorContext = createContext("");
// the React useContext hook is used to create a global state, which can be passed to nested components more easily than via useState

const ContextProvider = ({ children }) => {
  // setting up an empty context state which will store the mathematical sign (plus, minus, etc); current number; and current result number
  const [calcMemory, setCalcMemory] = useState({
    sign: "",
    num: 0,
    result: 0,
  });

  const memoryProvider = { calcMemory, setCalcMemory };

  return <CalculatorContext.Provider value={memoryProvider}>{children}</CalculatorContext.Provider>;
};

export default ContextProvider;
