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
      id="email"
      label="Email"
      placeholder="user@mail.com"
      value={value}
      onChange={handleChange}
    />
  );

  const input = getByLabelText("Email");

  expect(input.value).toBe("");
  fireEvent.change(input, { target: { value: "abc@mail.com" } });
  expect(handleChange).toHaveBeenCalledTimes(1);

  rerender(
    <Input
      id="email"
      label="Email"
      placeholder="user@mail.com"
      value={value}
      onChange={handleChange}
    />
  );

  expect(input.value).toBe("abc@mail.com");
});

test("displays error", () => {
  const { getByText } = render(
    <Input
      id="email"
      label="Email"
      placeholder="user@mail.com"
      value="Test"
      onChange={jest.fn()}
      error="Invalid Email"
    />
  );
  const error = getByText(/Invalid Email/i);
  expect(error).toBeInTheDocument();
});

test("displays placeholder", () => {
  const { getByPlaceholderText } = render(
    <Input
      id="email"
      label="Username"
      placeholder="user@mail.com"
      value=""
      onChange={jest.fn()}
    />
  );
  const error = getByPlaceholderText(/user@mail.com/i);
  expect(error).toBeInTheDocument();
});
