import { createContext, useState } from "react";

export const CalculatorContext = createContext();

const ContextProvider = ({ children }) => {
  const [calcMemory, setCalcMemory] = useState({
    sign: "",
    num: 0,
    result: 0,
  });

  const memoryProvider = { calcMemory, setCalcMemory };

  return <CalculatorContext.Provider value={memoryProvider}>{children}</CalculatorContext.Provider>;
};

export default ContextProvider;
