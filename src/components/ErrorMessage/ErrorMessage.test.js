import React from "react";
import { render } from "@testing-library/react";
import ErrorMessage from "./";

test("renders message", () => {
  const { getByText } = render(
    <ErrorMessage>Something went wrong here!</ErrorMessage>
  );
  const error = getByText(/Something went wrong here!/i);
  expect(error).toBeInTheDocument();
});
