import "./styles/index.css";

import Button from "./components/Button";
import ButtonGrid from "./components/ButtonGrid";
import Container from "./components/Container";
import Display from "./components/Display";

const buttonVals = [
  [7, 8, 9, "/"],
  [4, 5, 6, "-"],
  [1, 2, 3, "+"],
  [0, "C", "=", "x"],
];

function App() {
  return (
    <Container>
      <Display />
      <ButtonGrid>
        {buttonVals.flat().map((btn, index) => {
          return <Button value={btn} key={index} />;
        })}
      </ButtonGrid>
    </Container>
  );
}

export default App;
