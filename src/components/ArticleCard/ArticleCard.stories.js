import React from "react";
import ArticleCard from "./";

export default {
  title: "ArticleCard",
  component: ArticleCard,
};

export const basic = () => {
  const article = {
    document_id: "1807247",
    similarity: 0.982821,
    title:
      "Piano playing transformed into Playstation controllers that play ...",
    url: "http://www.foobarflies.io/pianette/",
    published: "2015-02-18T14:30:02.000Z",
    author: "A Blog",
    image: "http://www.foobarflies.io/content/images/2015/02/fina.jpg",
    thumbnail: "https://images.getnewsbot.com/1807247.jpg",
    summary:
      "We transformed two classical pianos into Playstation 2 controlers ...",
    source_name: "Hacker News",
    source_slug: "hacker-news",
  };

  return <ArticleCard article={article} />;
};
