import { createGlobalStyle } from "styled-components";
import normalize from "./normalize";
import fonts from "./fonts";
import colors from "./colors";

export const GlobalStyle = createGlobalStyle`
  ${normalize}
  ${fonts}

  *:focus {
    outline: none;
    box-shadow: 0 0 0 3px ${colors.focusBorder};
    transition: box-shadow 0.3s ease;
  }

  body {
    padding: 1rem;
    background-color: ${colors.offWhite};
    color: ${colors.black};
    font-family: 'Nunito', sans-serif;
    max-width: 500px;
    margin: 0 auto;

    h1 {
      margin-top: 3rem;
    }

    h2 {
      font-family: 'Lato', sans-serif;
      margin-top: 2rem;
    }

    h3 {
      font-family: 'Nunito', sans-serif;    
      font-weight: 600;
      font-size: 18px;
      line-height: 1.5;
    }

    p {
      line-height: 1.4;
    }
  }
`;
