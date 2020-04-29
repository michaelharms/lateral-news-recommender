import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Input from "./";

// https://codesandbox.io/s/rlny13191q?from-embed=&file=/src/components/Input.test.js:226-275
test("updates value", () => {
  let value = "";

  // Input is a controlled stateless component,
  // which means its input value has to be managed
  // by its parent component
  const handleChange = jest.fn((event) => {
    value = event.target.value;
  });

  const { getByLabelText, rerender } = render(
    <Input
      id="username"
      label="Username"
      value={value}
      onChange={handleChange}
    />
  );

  const input = getByLabelText("Username");

  expect(input.value).toBe("");
  fireEvent.change(input, { target: { value: "abc" } });
  expect(handleChange).toHaveBeenCalledTimes(1);

  rerender(
    <Input
      id="username"
      label="Username"
      value={value}
      onChange={handleChange}
    />
  );

  expect(input.value).toBe("abc");
});

test("displays error", () => {
  const { getByText } = render(
    <Input
      id="username"
      label="Username"
      value=""
      onChange={jest.fn()}
      error="Invalid username"
    />
  );
  const error = getByText(/Invalid username/i);
  expect(error).toBeInTheDocument();
});
