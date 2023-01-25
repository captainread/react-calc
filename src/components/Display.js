import { CalculatorContext } from "../context/CalculatorContext";
import { Textfit } from "react-textfit";
// Textfit is a small package to ensure numbers fit within the calculator's visual display
// ...seems to cause height-related warnings when running render tests in Jest
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
