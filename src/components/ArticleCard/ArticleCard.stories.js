import React from "react";
import ArticleCard from "./";

export default {
  title: "ArticleCard",
  component: ArticleCard,
};

export const basic = () => {
  const article = {
    similarity: 0.6865737438,
    title: "Most Leaders Know Their Strengths",
    url: "https://www.google.com",
    published: "2020-03-19T09:15:10.000Z",
    image: "https://placehold.it/200x200",
    thumbnail: "https://placehold.it/20x20",
    sourceName: "Harvard Business",
  };

  return <ArticleCard article={article} />;
};
