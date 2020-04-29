import React from "react";
import { addDecorator } from "@storybook/react";
import { GlobalStyle } from "../src/styles/global.js";

addDecorator((story) => (
  <>
    <GlobalStyle />
    {story()}
  </>
));
