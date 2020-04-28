import React from "react";
import Link from "./";

export default {
  title: "Link",
  component: Link,
};

export const basic = () => (
  <Link href="https://www.google.de" target="_blank">
    Google
  </Link>
);
