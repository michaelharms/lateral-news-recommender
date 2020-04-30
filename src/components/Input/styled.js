import styled from "styled-components";
import colors from "../../styles/colors";

export const StyledInput = styled.input`
  appearance: none;
  border-radius: 5px;
  border: 1px solid ${({ error }) => (error ? colors.red : colors.lightGray)};
  display: inline-block;
  font-size: 14px;
  font-weight: 400;
  height: 40px;
  outline: none;
  padding: 4px 8px;
  width: 100%;
  line-height: 1;
  box-sizing: border-box;
  transition: border-color 0.3s ease;
`;

export const Label = styled.label`
  cursor: pointer;
  margin-bottom: 0.5rem;
  text-transform: uppercase;
  color: ${colors.gray};
  font-size: 14px;
  display: inline-block;
`;

export const Error = styled.p`
  font-size: 14px;
  color: ${colors.red};
  margin-top: 0.5rem;
`;
