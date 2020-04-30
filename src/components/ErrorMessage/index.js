import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { colors } from "../../styles";

const StyledDiv = styled.div`
  color: ${colors.red};
  padding: 0.5rem;
  border: 1px solid ${colors.red};
  border-radius: 8px;
  margin: 1rem 0;
`;

/**
 * Basic Error Message
 */
function ErrorMessage({ children }) {
  return <StyledDiv>{children}</StyledDiv>;
}

ErrorMessage.propTypes = {
  /**
   * The message text that should be displayed.
   */
  children: PropTypes.string.isRequired,
};

export default ErrorMessage;
