import React from "react";
import PropTypes from "prop-types";
import Card from "../Card";
import Link from "../Link";
import styled from "styled-components";
import { space } from "styled-system";
import formatDate from "../../utils/formatDate";

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
    <CardLink href={url} target="_blank">
      <Card>
        <FlexRow>
          <div>
            <Image src={image} alt={`${title}`} />
          </div>

          <TextContainer p={3} pt={0}>
            <h3>{title}</h3>

            <FlexRow>
              <div>
                <Score>{similarityText}</Score>
                <span>{formatDate(published)}</span>
                <span>{sourceName}</span>
              </div>
              <Thumbnail src={thumbnail} alt={`${sourceName} Icon`} />
            </FlexRow>
          </TextContainer>
        </FlexRow>
      </Card>
    </CardLink>
  );
}

const Image = styled.img`
  max-width: 98px;
  object-fit: cover;
`;

const Thumbnail = styled.img`
  width: 25px;
  height: 25px;
  object-fit: cover;
  border-radius: 8px;
`;

const Score = styled.span`
  font-weight: bold;
  color: green;
`;

const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const CardLink = styled(Link)`
  color: black;
`;

const TextContainer = styled.div(space);

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
