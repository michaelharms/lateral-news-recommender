import React from "react";
import Button from "./";
import { action } from "@storybook/addon-actions";

export default {
  title: "Button",
  component: Button,
};

export const basic = () => {
  return <Button onClick={action("button-click")}>Click me!</Button>;
};

export const disabled = () => {
  return (
    <Button disabled onClick={action("button-click")}>
      Click me!
    </Button>
  );
};
