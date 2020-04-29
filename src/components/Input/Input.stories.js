import React, { useState } from "react";
import Input from "./";

export default {
  title: "Input",
  component: Input,
};

export const basic = () => {
  function Parent({ children }) {
    // Input is a controlled stateless component,
    // which means its input value has to be managed
    // by its parent component
    const [inputValue, setInputValue] = useState("");
    return (
      <>
        <Input
          id="email"
          label="Email"
          placeholder="user@mail.com"
          value={inputValue}
          onChange={({ target: { value } }) => setInputValue(value)}
        />
      </>
    );
  }

  return <Parent />;
};

export const error = () => {
  function Parent({ children }) {
    const [inputValue, setInputValue] = useState("Test");
    return (
      <>
        <Input
          id="email"
          label="Email"
          placeholder="user@mail.com"
          value={inputValue}
          onChange={({ target: { value } }) => setInputValue(value)}
          error="Invalid Email"
        />
      </>
    );
  }

  return <Parent />;
};
