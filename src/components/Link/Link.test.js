import React from "react";
import { render } from "@testing-library/react";
import Link from "./";

test("renders children", () => {
  const { getByText } = render(
    <Link href="https://www.google.de">Google</Link>
  );

  const text = getByText(/Google/i);
  expect(text).toBeInTheDocument();
});
