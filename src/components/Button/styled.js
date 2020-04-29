import styled from "styled-components";
import colors from "../../styles/colors";

export const StyledButton = styled.button`
  -webkit-appearance: none;
  border-radius: 100px;
  background-color: ${colors.blue};
  color: white;
  border: none;
  cursor: pointer;
  line-height: 1;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  font-size: 15px;
  font-weight: 600;
  letter-spacing: 0.5px;
  padding: 12px 24px;
  transition: background-color 0.3s ease;

  &:hover,
  &:focus,
  &:active {
    background-color: ${colors.lightBlue};
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px ${colors.focusBorder};
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;

    &:hover,
    &:focus {
      background-color: ${colors.blue};
    }
  }
`;
