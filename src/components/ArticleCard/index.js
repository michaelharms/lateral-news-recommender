import React from "react";
import PropTypes from "prop-types";
import Card from "../Card";

/**
 * Similar Article Card.
 *
 * @component
 * @example
 * const article = {
 *    similarity: 0.6865737438,
 *    title: "Most Leaders Know Their Strengths",
 *    url: "https://www.google.com",
 *    published: "2020-03-19T09:15:10.000Z",
 *    image: "https://placehold.it/200x200",
 *    thumbnail: "https://placehold.it/20x20",
 *    sourceName: "Harvard Business"
 * };
 *
 * return <ArticleCard article={article} />
 */
function ArticleCard({ article }) {
  const {
    similarity,
    title,
    url,
    published,
    image,
    thumbnail,
    sourceName,
  } = article;

  const similarityText = similarity
    ? `${Math.round(similarity * 100)}% similar`
    : "No similarity score";

  return (
    <a href={url}>
      <Card>
        <div>
          <h3>{title}</h3>
          <p>{similarityText}</p>
          <p>{published}</p>
          <p>{image}</p>
          <p>{sourceName}</p>
          <p>{thumbnail}</p>
        </div>
      </Card>
    </a>
  );
}

ArticleCard.propTypes = {
  /**
   * The article to display.
   */
  article: PropTypes.shape({
    similarity: PropTypes.number,
    title: PropTypes.string,
    url: PropTypes.string.isRequired,
    published: PropTypes.string,
    image: PropTypes.string,
    thumbnail: PropTypes.string,
    sourceName: PropTypes.string,
  }).isRequired,
};

ArticleCard.defaultProps = {
  article: {
    similarity: null,
    title: "No Title",
    published: "",
    image: null,
    thumbnail: null,
    sourceName: "Unknown source",
  },
};

export default ArticleCard;
