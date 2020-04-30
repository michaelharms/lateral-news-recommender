import React from "react";
import Image from "./";

export default {
  title: "Image",
  component: Image,
};

export const basic = () => {
  const src = "https://images.getnewsbot.com/1807247.jpg";
  return <Image src={src} alt="Test Image" />;
};

export const imageNotFound = () => {
  const src = "no-image";
  return <Image src={src} alt="Test Image" />;
};
