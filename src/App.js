import "./styles/index.css";

import Button from "./components/Button";
import ButtonGrid from "./components/ButtonGrid";
import CalculatorContext from "./context/CalculatorContext";
import Container from "./components/Container";
import Display from "./components/Display";

export const buttonVals = [
  [7, 8, 9, "/"],
  [4, 5, 6, "-"],
  [1, 2, 3, "+"],
  [0, "C", "=", "x"],
];

function App() {
  return (
    <CalculatorContext>
      <Container>
        <Display />
        <ButtonGrid>
          {buttonVals.flat().map((btn, index) => {
            return <Button value={btn} key={index} />;
          })}
        </ButtonGrid>
      </Container>
    </CalculatorContext>
  );
}

export default App;
