import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const StyledDiv = styled.div`
  box-shadow: 0px 9px 17px -5px rgba(0, 0, 0, 0.25);
  border-radius: 14px;
  overflow: hidden;
  background-color: white;
`;

/**
 * Universal card component.
 */
function Card({ children }) {
  return <StyledDiv>{children}</StyledDiv>;
}

Card.propTypes = {
  /**
   * Elements to render as children.
   */
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
};

export default Card;
