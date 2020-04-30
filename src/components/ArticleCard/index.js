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
  Divider,
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
    source_name,
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
              <Divider />
              <Meta>{formatDate(published)}</Meta>
              <Divider />
              <Meta>{source_name}</Meta>
            </div>
            <Thumbnail src={thumbnail} alt={`${title} Thumbnail`} />
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
  }).isRequired,
};

ArticleCard.defaultProps = {
  article: {
    similarity: null,
    title: "No Title",
    published: "",
    author: "",
    image: "",
    thumbnail: "",
    summary: "",
    source_name: "Unknown source",
    source_slug: "",
  },
};

export default ArticleCard;
