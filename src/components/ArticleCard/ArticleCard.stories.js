import React from "react";
import ArticleCard from "./";

export default {
  title: "ArticleCard",
  component: ArticleCard,
};

export const basic = () => {
  const article = {
    similarity: 0.6782692075,
    title:
      "Play To Your Strengths: 13 Even Better Ways To Improve Your Leadership Skills",
    url:
      "https://www.forbes.com/sites/forbescoachescouncil/2020/01/10/play-to-your-strengths-13-even-better-ways-to-improve-your-leadership-skills/",
    published: "2020-01-10T18:15:00.000Z",
    image:
      "https://thumbor.forbes.com/thumbor/600x315/https%3A%2F%2Fblogs-images.forbes.com%2Fforbescoachescouncil%2Ffiles%2F2020%2F01%2F13up-blog-post-Play-To-Strengths-1200x1213.jpg",
    thumbnail: "https://images.getnewsbot.com/17517611.jpg",
    sourceName: "Forbes",
  };

  return <ArticleCard article={article} />;
};
