import React from "react";
import { render } from "@testing-library/react";
import ArticleCard from "./";

test("renders article data", () => {
  const article = {
    similarity: 0.6865737438,
    title: "Most Leaders Know Their Strengths",
    url: "https://www.google.com",
    published: "2020-03-19T09:15:10.000Z",
    image: "https://placehold.it/200x200",
    thumbnail: "https://placehold.it/20x20",
    sourceName: "Harvard Business",
  };

  const { getByText } = render(<ArticleCard article={article} />);
  const similarity = getByText(/69%/i);
  expect(similarity).toBeInTheDocument();

  const title = getByText(/Most Leaders Know Their Strengths/i);
  expect(title).toBeInTheDocument();

  const date = getByText(/2020-03-19/i);
  expect(date).toBeInTheDocument();

  const source = getByText(/Harvard Business/i);
  expect(source).toBeInTheDocument();
});
