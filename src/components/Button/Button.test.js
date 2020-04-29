import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Button from "./";

test("renders children", () => {
  const { getByText } = render(<Button>Click me!</Button>);
  const button = getByText(/Click me!/i);
  expect(button).toBeInTheDocument();
});

test("calls click handler", () => {
  const handleClick = jest.fn();
  const { getByText } = render(
    <Button onClick={handleClick}>Click me!</Button>
  );
  const button = getByText(/Click me!/i);
  fireEvent(
    button,
    new MouseEvent("click", { bubbles: true, cancelable: true })
  );
  expect(handleClick).toHaveBeenCalled();
});

test("no click handling if disabled", () => {
  const handleClick = jest.fn();
  const { getByText } = render(
    <Button disabled onClick={handleClick}>
      Click me!
    </Button>
  );
  const button = getByText(/Click me!/i);
  fireEvent(
    button,
    new MouseEvent("click", { bubbles: true, cancelable: true })
  );
  expect(handleClick).not.toHaveBeenCalled();
});
