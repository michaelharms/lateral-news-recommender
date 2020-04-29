import React from "react";
import PropTypes from "prop-types";
import Link from "../Link";
import formatDate from "../../utils/formatDate";
import {
  MinHeightCard,
  ImageContainer,
  TextContainer,
  FlexRow,
  Score,
  Meta,
  Image,
  Thumbnail,
} from "./styled";

/**
 * Similar Article Card.
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
    <Link href={url} target="_blank">
      <MinHeightCard>
        <ImageContainer>
          <Image src={image} alt={`${title}`} />
        </ImageContainer>
        <TextContainer p={3}>
          <h3>{title}</h3>

          <FlexRow>
            <div>
              <Score>{similarityText}</Score>
              <Meta>{formatDate(published)}</Meta>
              <Meta>{sourceName}</Meta>
            </div>
            <Thumbnail src={thumbnail} alt={`${sourceName} Icon`} />
          </FlexRow>
        </TextContainer>
      </MinHeightCard>
    </Link>
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
