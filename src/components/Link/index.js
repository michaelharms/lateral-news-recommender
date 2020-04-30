import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { colors } from "../../styles";

const StyledLink = styled.a`
  text-decoration: none;
  color: ${colors.blue};
`;

/**
 * HTML Link with best security practices.
 */
function Link({ href, children, target }) {
  const conditionalProps = {};

  // https://developers.google.com/web/tools/lighthouse/audits/noopener
  if (target === "_blank") {
    conditionalProps.rel = "noopener noreferrer";
  }

  return (
    <StyledLink href={href} target={target} {...conditionalProps}>
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
