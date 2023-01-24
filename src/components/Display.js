import { CalculatorContext } from "../context/CalculatorContext";
import { Textfit } from "react-textfit";
import { useContext } from "react";

const Display = () => {
  const { calcMemory } = useContext(CalculatorContext);

  return (
    <Textfit id="display" mode={"single"} max={80}>
      {calcMemory.num ? calcMemory.num : calcMemory.result}
    </Textfit>
  );
};

export default Display;
