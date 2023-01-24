import "@testing-library/jest-dom";

import { cleanup, render, screen } from "@testing-library/react";

import Container from "../Container";

test("should render container component", () => {
  render(<Container />);
  const containerElement = screen.getByTestId("container");
  expect(containerElement).toBeInTheDocument();
});
