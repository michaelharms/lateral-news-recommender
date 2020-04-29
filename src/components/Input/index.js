import React from "react";
import PropTypes from "prop-types";
import { StyledInput, Label, Error } from "./styled";

/**
 * Controlled Input Component
 *
 * Value state has to be managed by its parent.
 */
function Input({ id, value, label, onChange, onEnter, error }) {
  return (
    <>
      {label && <Label htmlFor={id}>{label}</Label>}
      <StyledInput id={id} value={value} onChange={onChange} error={error} />
      {error && <Error>{error}</Error>}
    </>
  );
}

Input.propTypes = {
  /**
   * Unique html id for connecting with label
   */
  id: PropTypes.string.isRequired,
  /**
   * The value the input should display.
   */
  value: PropTypes.string,
  /**
   * Label for the input
   */
  label: PropTypes.string,
  /**
   * Handler function for input change event.
   */
  onChange: PropTypes.func.isRequired,
  /**
   * Error message to display.
   */
  error: PropTypes.string,
};

Input.defaultProps = {
  value: "",
  label: "",
  error: null,
};

export default Input;
