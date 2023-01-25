// brief example of testing React components. Would normally break down into separate file for each component.

import "@testing-library/jest-dom";

import { cleanup, render, screen } from "@testing-library/react";

import Button from "../Button";
import ButtonGrid from "../ButtonGrid";
import Container from "../Container";
import { buttonVals } from "../../App";

beforeEach(() => {
  render(
    <Container>
      <ButtonGrid>
        {buttonVals.flat().map((btn, index) => {
          return <Button value={btn} key={index} />;
        })}
      </ButtonGrid>
    </Container>
  );
});

afterEach(() => {
  cleanup();
});

describe("Component rendering", () => {
    
  test("renders container", () => {
    const cont = screen.getByTestId("container");
    expect(cont).toBeInTheDocument();
  });

  test("renders 16 buttons", () => {
    const buttons = screen.getAllByTestId("test-btn");
    expect(buttons).toHaveLength(16);
  });
  
});
