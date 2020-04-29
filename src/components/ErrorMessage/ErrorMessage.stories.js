import React from "react";
import ErrorMessage from "./";

export default {
  title: "ErrorMessage",
  component: ErrorMessage,
};

export const basic = () => (
  <ErrorMessage>Something went wrong here!</ErrorMessage>
);
