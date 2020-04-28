import React from "react";
import { render } from "@testing-library/react";
import Button from "./";

test("renders button children", () => {
  const { getByText } = render(<Button>Test</Button>);
  const btnChildren = getByText(/Test/i);
  expect(btnChildren).toBeInTheDocument();
});
