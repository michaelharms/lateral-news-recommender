import React, { useState } from "react";
import PropTypes from "prop-types";

const fallbackSrc = "https://placehold.it/100x100";

/**
 * Image component with placeholder fallback
 * https://medium.com/@webcore1/react-fallback-for-broken-images-strategy-a8dfa9c1be1e
 */
function Image({ src, alt, className }) {
  const [useFallback, setUseFallback] = useState(false);

  function handleError(event) {
    setUseFallback(true);
  }

  return (
    <img
      className={className}
      src={useFallback ? fallbackSrc : src}
      alt={alt}
      onError={handleError}
    />
  );
}

Image.propTypes = {
  /**
   * Class name for overwriting styles.
   */
  className: PropTypes.string,
  /**
   * Image source.
   */
  src: PropTypes.string,
  /**
   * Text description as alternative.
   */
  alt: PropTypes.string.isRequired,
};

Image.defaultProps = {
  className: "",
  src: fallbackSrc,
};

export default Image;
