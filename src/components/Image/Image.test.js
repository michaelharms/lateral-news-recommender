import React from "react";
import { render } from "@testing-library/react";
import Image from "./";

test("renders image", () => {
  const src = "https://images.getnewsbot.com/1807247.jpg";

  const { getByAltText } = render(<Image src={src} alt="Test Image" />);
  const imgElement = getByAltText("Test Image");
  expect(imgElement.src).toBe(src);
});

test("renders fallback if image not found", async () => {
  const { getByAltText } = render(<Image alt="Test Image" />);
  const imgElement = getByAltText("Test Image");
  expect(imgElement.src).toBe("https://placehold.it/100x100");
});
