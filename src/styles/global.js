import { createGlobalStyle } from "styled-components";
import normalize from "./normalize";
import fonts from "./fonts";
import colors from "./colors";

export const GlobalStyle = createGlobalStyle`
  ${normalize}
  ${fonts}

  body {
    padding: 1rem;
    background-color: ${colors.offWhite};
    color: ${colors.black};
    font-family: 'Nunito', sans-serif;
    max-width: 500px;
    margin: 0 auto;

    h3 {
      font-family: 'Nunito', sans-serif;    
      font-weight: 600;
      font-size: 18px;
      line-height: 1.5;
    }
  }
`;
