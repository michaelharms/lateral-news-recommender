import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const StyledLink = styled.a`
  text-decoration: none;
`;

function Link({ href, children, target }) {
  return (
    <StyledLink href={href} target={target} rel="noopener noreferrer">
      {children}
    </StyledLink>
  );
}

Link.propTypes = {
  /**
   * The link target url.
   */
  href: PropTypes.string.isRequired,
  /**
   * Elements to render as children.
   */
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.string])
    .isRequired,
  /**
   * Whether to open the target in a new tab.
   */
  target: PropTypes.oneOf(["_self", "_blank"]),
};

Link.defaultProps = {
  target: "_self",
};

export default Link;
