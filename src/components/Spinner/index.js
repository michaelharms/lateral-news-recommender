import React from "react";
import styled, { keyframes } from "styled-components";
import { colors } from "../../styles";

const spin = keyframes`
  to { transform: rotate(360deg); 
`;

const StyledDiv = styled.div`
  display: inline-block;
  width: 20px;
  height: 20px;
  border: 2px solid white;
  border-radius: 50%;
  border-top-color: ${colors.blue};
  animation: ${spin} 0.75s ease-in-out infinite;
  margin: 0 1rem;
`;

/**
 * Simple Spinner Component.
 * https://codepen.io/mandelid/pen/vwKoe
 */
function Spinner() {
  return <StyledDiv />;
}

export default Spinner;
