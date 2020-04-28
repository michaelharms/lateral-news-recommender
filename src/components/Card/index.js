import PropTypes from "prop-types";
import styled from "styled-components";

/**
 * Universal card component.
 *
 * @component
 * @example
 * return <Card>Content</Card>;
 */
const Card = styled.div`
  box-shadow: 0px 9px 17px -5px rgba(0, 0, 0, 0.56);
  border-radius: 16px;
`;

Card.propTypes = {
  /**
   * Elements to render as children.
   */
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
};

export default Card;
