import React from "react";
import logoIcon from "../../img/logo-icon.svg";
import logoText from "../../img/logo-text.svg";
import styled from "styled-components";

const IconImage = styled.img`
  width: 40px;
`;

const TextImage = styled.img`
  padding-left: 15px;
  width: 135px;
`;

const FlexRow = styled.div`
  display: flex;
  align-items: center;
`;

/**
 * Lateral Logo Component
 */
function Logo() {
  return (
    <FlexRow>
      <IconImage src={logoIcon} alt="Lateral Logo Icon" />
      <TextImage src={logoText} alt="Lateral Logo Text" />
    </FlexRow>
  );
}

export default Logo;
