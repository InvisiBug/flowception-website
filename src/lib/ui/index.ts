"use client";
export { default as NotionShowcase } from "./showcase";
export { LandingPage } from "../pages/landingPage";
export { default as BackArrow } from "./backArrow";
export { default as Showcase } from "./showcase";
export { default as Header } from "./header";
export { default as Tag } from "./tag";
export { Carousel } from "./carousel";
export { Item } from "./carousel";

import { createGlobalStyle } from "styled-components";
import { background } from "../colours";

export const GlobalSytles = createGlobalStyle`
  body {
    margin: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    box-sizing: border-box;
    /* color: white; */
    font-family: "Nunito", sans-serif;
    user-select: none;
    /* overflow: none; */
    /* overscroll-behavior: none; */
    background-color: ${background};
    -ms-overflow-style: none;
    ::-webkit-scrollbar {
      display: none;
    }
  }
`;
