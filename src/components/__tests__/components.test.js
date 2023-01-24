import "@testing-library/jest-dom";

import { cleanup, render, screen } from "@testing-library/react";

import App from "../../App";
import Button from "../Button";
import ButtonGrid from "../ButtonGrid";
import Container from "../Container";
import Display from "../Display";
import renderer from "react-test-renderer";

afterEach(() => {
  cleanup();
});

describe("Component rendering", () => {
  test("renders Container component", () => {
    render(<Container />);
    expect(screen.getByTestId("container")).toBeInTheDocument();
  });

  // test("renders Display component", () => {
  //   render(<Display />);
  //   expect(screen.getByTestId("display")).toBeInTheDocument();
  // });

  test("renders Grid component", () => {
    render(<ButtonGrid />);
    expect(screen.getByTestId("buttongrid")).toBeInTheDocument();
  });

  test("renders Button component", () => {
    render(<Button />);
    expect(screen.getByTestId("button")).toBeInTheDocument();
  });
});

// describe("Components match snapshots", () => {
//   test("matches snapshot", () => {
//     const tree = renderer.create(<Container />).toJSON();
//     console.log(tree)
//     expect(tree).toMatchSnapshot();
//   });
// });
