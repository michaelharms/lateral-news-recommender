import React from "react";
import PropTypes from "prop-types";
import Card from "../Card";
import Link from "../Link";
import styled from "styled-components";
import { space } from "styled-system";
import colors from "../../styles/colors";
import formatDate from "../../utils/formatDate";

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
                <Meta>{formatDate(published)}</Meta>
                <Meta>{sourceName}</Meta>
              </div>
              <Thumbnail src={thumbnail} alt={`${sourceName} Icon`} />
            </FlexRow>
          </TextContainer>
        </FlexRow>
      </Card>
    </Link>
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
  font-family: "Lato", sans-serif;
  color: ${colors.green};
`;

const Meta = styled.span`
  color: ${colors.gray};
`;

const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const TextContainer = styled.div`
  ${space};
  color: ${colors.black};
`;

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
