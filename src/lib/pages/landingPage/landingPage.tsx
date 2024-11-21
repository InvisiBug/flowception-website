"use client";
import React, { FC } from "react";
import styled from "styled-components";
import { Header, Carousel, Item } from "@/lib/ui";
import Image from "next/image";

import one from "./pics/1.jpg";
import two from "./pics/2.jpg";
import three from "./pics/3.jpg";

const LandingPage: FC<any> = ({ dbItems }) => {
  return (
    <>
      <Header background={true} />

      <Carousel includeControls={false} pausable={true} height={"100vh"} slideTimer={5000}>
        <Item width={"100vw"}>
          <ImageContainer>
            <Image
              src={two.src}
              style={{
                width: "100%",
                height: "auto",
                marginTop: "-200px",
              }}
              width="100"
              height="100"
              alt="2"
              unoptimized
            />
          </ImageContainer>
        </Item>

        <Item width={"90"}>
          <ImageContainer>
            <Image
              src={one.src}
              style={{
                width: "100%",
                height: "auto",
                marginTop: "-200px",
              }}
              width="100"
              height="100"
              alt="2"
              unoptimized
            />
          </ImageContainer>
        </Item>

        <Item width={"90"}>
          <ImageContainer>
            <Image
              src={three.src}
              style={{
                width: "100%",
                height: "auto",
                marginTop: "-200px",
              }}
              width="100"
              height="100"
              alt="2"
              unoptimized
            />
          </ImageContainer>
        </Item>
      </Carousel>
    </>
  );
};

export default LandingPage;

const borders = false;

export const ImageContainer = styled.div`
  border: 1px solid red;
  display: flex;
  justify-content: center;
  align-items: center;
  /* height: 100vh; */
  /* width: 100vw; */
  overflow: hidden;
  background: "linear-gradient(0deg, #000088 30%, #ffffff44 100%";
`;
