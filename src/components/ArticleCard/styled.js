import styled from "styled-components";
import Card from "../Card";
import Image from "../Image";
import { space } from "styled-system";
import { colors, breakpoints } from "../../styles";

// https://stackoverflow.com/a/19193308/11939354
export const ImageContainer = styled.div`
  min-width: 98px;
  min-height: 100%;
  position: relative;
  display: inline-block;
  overflow: hidden;
  margin: 0;
`;

export const ArticleImage = styled(Image)`
  display: block;
  position: absolute;
  top: 50%;
  left: 50%;
  min-height: 100%;
  min-width: 100%;
  transform: translate(-50%, -50%);
`;

export const ArticleThumbnail = styled(Image)`
  min-width: 25px;
  width: 25px;
  height: 25px;
  object-fit: cover;
  border-radius: 8px;
`;

export const Divider = styled.span`
  &:before {
    content: "|";
  }

  color: ${colors.gray};
  padding-right: 0.5rem;

  @media only screen and (max-width: ${breakpoints.mobile}) {
    display: none;
  }
`;

export const Score = styled.span`
  font-weight: bold;
  font-family: "Lato", sans-serif;
  color: ${colors.green};
  padding-right: 0.5rem;

  @media only screen and (max-width: ${breakpoints.mobile}) {
    padding-right: 0;
    padding-bottom: 0.5rem;
  }
`;

export const Meta = styled.span`
  color: ${colors.gray};
  padding-right: 0.5rem;

  @media only screen and (max-width: ${breakpoints.mobile}) {
    padding-right: 0;
    padding-bottom: 0.5rem;
  }
`;

export const MinHeightCard = styled(Card)`
  min-height: 140px;
  display: flex;
`;

export const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  @media only screen and (max-width: ${breakpoints.mobile}) {
    align-items: flex-end;
  }
`;

export const ResponsiveFlexRow = styled(FlexRow)`
  width: auto;
  @media only screen and (max-width: ${breakpoints.mobile}) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const TextContainer = styled.div`
  ${space};
  color: ${colors.black};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: start;
  flex: 1;

  h3 {
    margin-top: 0;
  }
`;
