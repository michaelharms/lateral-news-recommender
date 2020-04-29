import React from "react";
import PropTypes from "prop-types";
import { StyledButton } from "./styled";

/**
 * Button component.
 */
function Button({ children, disabled, onClick }) {
  return (
    <StyledButton disabled={disabled} onClick={onClick}>
      {children}
    </StyledButton>
  );
}

Button.propTypes = {
  /**
   * Elements to render as children.
   */
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.string])
    .isRequired,
  /**
   * Whether the Button should be clickable.
   */
  disabled: PropTypes.bool,
  /**
   * Handling click events.
   */
  onClick: PropTypes.func,
};

Button.defaultProps = {
  disabled: false,
  onClick: () => {},
};

export default Button;
