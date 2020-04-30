import React from "react";
import PropTypes from "prop-types";
import ArticleCard from "../ArticleCard";
import styled from "styled-components";

const ArticleCardList = styled.ul`
  padding: 0;

  li {
    margin-bottom: 2rem;
    list-style-type: none;
  }
`;

/**
 * Component for displaying list of similar articles.
 */
function SimilarArticles({ articles }) {
  return (
    <>
      <h2>Similar articles</h2>
      {articles.length === 0 && <p>No similar articles.</p>}
      <ArticleCardList>
        {articles.map((article) => (
          <li key={article.document_id} data-testid="similar-article">
            <ArticleCard article={article} />
          </li>
        ))}
      </ArticleCardList>
    </>
  );
}

SimilarArticles.propTypes = {
  /**
   * The list of articles to be displayed.
   */
  articles: PropTypes.arrayOf(
    PropTypes.shape({
      document_id: PropTypes.string.isRequired,
      similarity: PropTypes.number,
      title: PropTypes.string,
      url: PropTypes.string.isRequired,
      published: PropTypes.string,
      author: PropTypes.string,
      image: PropTypes.string,
      thumbnail: PropTypes.string,
      summary: PropTypes.string,
      source_name: PropTypes.string,
      source_slug: PropTypes.string,
    }).isRequired
  ),
};

SimilarArticles.defaultProps = {
  articles: [],
};

export default SimilarArticles;
