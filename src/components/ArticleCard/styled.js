import styled from "styled-components";
import Card from "../Card";
import { space } from "styled-system";
import colors from "../../styles/colors";

// https://stackoverflow.com/a/19193308/11939354
export const ImageContainer = styled.div`
  min-width: 98px;
  min-height: 100%;
  position: relative;
  display: inline-block;
  overflow: hidden;
  margin: 0;
`;

export const Image = styled.img`
  display: block;
  position: absolute;
  top: 50%;
  left: 50%;
  min-height: 100%;
  min-width: 100%;
  transform: translate(-50%, -50%);
`;

export const Thumbnail = styled.img`
  width: 25px;
  height: 25px;
  object-fit: cover;
  border-radius: 8px;
`;

export const Score = styled.span`
  font-weight: bold;
  font-family: "Lato", sans-serif;
  color: ${colors.green};
`;

export const Meta = styled.span`
  color: ${colors.gray};
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
`;

export const TextContainer = styled.div`
  ${space};
  color: ${colors.black};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: start;

  h3 {
    margin-top: 0;
  }
`;
