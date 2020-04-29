import React from "react";
import PropTypes from "prop-types";
import { StyledButton } from "./styled";

/**
 * Button component.
 */
function Button({ children, disabled }) {
  return <StyledButton disabled={disabled}>{children}</StyledButton>;
}

Button.propTypes = {
  /**
   * Elements to render as children.
   */
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.string])
    .isRequired,
  /**
   * Whether the Button should be clickable
   */
  disabled: PropTypes.bool,
};

Button.defaultProps = {
  disabled: false,
};

export default Button;
