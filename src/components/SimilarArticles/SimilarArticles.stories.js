import React from "react";
import SimilarArticles from "./";

export default {
  title: "SimilarArticles",
  component: SimilarArticles,
};

export const basic = () => {
  const articles = [
    {
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
    },
    {
      document_id: "316776",
      similarity: 0.942164,
      title:
        "For my final project I built a sous-vide immersion cooker (mit.edu)",
      url:
        "http://fab.cba.mit.edu/classes/863.14/people/matthew_arbesfeld/2014/12/14/final-project/",
      published: "2014-12-15T09:20:01.000Z",
      author: "Matthew Arbesfeld",
      image:
        "http://fab.cba.mit.edu/classes/863.14/people/matthew_arbesfeld/img/output_ssr_powered.jpg",
      thumbnail: "https://images.getnewsbot.com/316776.jpg",
      summary:
        "Matthew Arbesfeld's website for MAS.863 -- How to Make Almost Anything",
      source_name: "Hacker News",
      source_slug: "hacker-news",
    },
  ];

  return <SimilarArticles articles={articles} />;
};

export const empty = () => {
  return <SimilarArticles articles={[]} />;
};
