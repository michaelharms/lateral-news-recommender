import styled from "styled-components";
import colors from "../../styles/colors";
import { Newspaper } from "@styled-icons/fa-regular";
import { Time } from "@styled-icons/boxicons-regular";
import { QuestionCircle } from "@styled-icons/fa-solid";
import { ChevronDown } from "@styled-icons/boxicons-solid";

export const Container = styled.div`
  padding: 0.5rem 0 1rem 0;
`;

export const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Divider = styled.span`
  &:before {
    content: "|";
  }

  color: ${colors.lightGray};
  padding: 0 0.75rem;
`;

export const FiltersLabel = styled.span`
  font-family: "Lato", sans-serif;
  color: ${colors.gray};
  font-size: 15px;
  padding-right: 1rem;
`;

export const FilterValue = styled.span`
  font-family: "Lato", sans-serif;
  color: ${colors.blue};
  font-size: 15px;
  text-transform: uppercase;
  display: inline-flex;
  align-items: center;
  cursor: pointer;
`;

export const HelpIcon = styled(QuestionCircle)`
  color: ${colors.blue};
  cursor: pointer;
`;

export const SourcesIcon = styled(Newspaper)`
  padding-right 0.5rem;
`;

export const TimeFrameIcon = styled(Time)`
  padding-right: 0.5rem;
`;

export const SelectArrow = styled(ChevronDown)`
  padding-left: 0.25rem;
`;
