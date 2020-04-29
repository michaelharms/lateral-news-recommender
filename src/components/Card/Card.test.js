import React from "react";
import { render } from "@testing-library/react";
import Card from "./";

test("renders children", () => {
  const { getByText } = render(<Card>Test</Card>);
  const children = getByText(/Test/i);
  expect(children).toBeInTheDocument();
});
