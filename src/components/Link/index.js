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
  href: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.string])
    .isRequired,
  target: PropTypes.string,
};

Link.defaultProps = {
  target: "_self",
};

export default Link;
