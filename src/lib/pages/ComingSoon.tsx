"use client";
import React, { FC } from "react";
import { Header, Carousel, Item } from "src/lib/components";
import Image from "next/image";

import one from "./pics/1.jpg";
import styled from "styled-components";

// import two from "./pics/2.jpg";
// import three from "./pics/3.jpg";

const LandingPage: FC<any> = ({ dbItems }) => {
  return (
    <>
      <ImageContainer>
        <Image
          src="https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExOHppa3NxOTV2bTE0aWttcXg0OG1tbmV4OHZsazg4emRxbWIycHZubyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/dgVQkiSSL4TsZDrXYx/giphy.gif"
          alt="Image"
          width="500"
          height="500"
          unoptimized
        />
        <h1>
          In the meantime, please check out our <Link href="https://twitter.com/chibicode">linktree</Link>
        </h1>
        {/* <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <title>Linktree</title>
          <path d="m13.73635 5.85251 4.00467-4.11665 2.3248 2.3808-4.20064 4.00466h5.9085v3.30473h-5.9365l4.22865 4.10766-2.3248 2.3338L12.0005 12.099l-5.74052 5.76852-2.3248-2.3248 4.22864-4.10766h-5.9375V8.12132h5.9085L3.93417 4.11666l2.3248-2.3808 4.00468 4.11665V0h3.4727zm-3.4727 10.30614h3.4727V24h-3.4727z" />
        </svg> */}
      </ImageContainer>
    </>
  );
};

export default LandingPage;

const borders = false;
export const ImageContainer = styled.div`
  border: ${borders ? "2px solid green" : "none"};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
`;

const Link = styled.a`
  color: #3b2fbe;
`;

const Picture = styled.div`
  border: ${borders ? "2px solid green" : "none"};
  /* width: 100vw; */
  max-height: 100vh;
  width: 100vw;
  position: relative;
  z-index: -1;
  object-fit: contain;
  display: flex;
  /* justify-content: spacebetween; */

  animation: image 5s infinite alternate;

  @keyframes image {
    0% {
      background-image: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url("https://i.imgur.com/c6LKIfd.jpg");
      /* background-image: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)); */
      /* transform: translatex(100%); */
    }
    100% {
      background-image: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url("https://i.imgur.com/uBzjBrT.jpg");
      /* transform: translatex(0%); */
    }
  }

  /* background-image: url(https://i.imgur.com/uBzjBrT.jpg); */

  /* border: 5px solid red; */
  /* display: flex; */
  /* overflow: hidden; */
  /* vertical-align: bottom; */
  /* position: relative; */
  /* object-fit: contain; */
`;

// const Pic = styled.div`
//   height: 100vh;
//   width: 100vw;

//   /* background-position: center; */
//   /* background-repeat: no-repeat; */
//   /* background-size: cover; */
// `;

// const Image = styled.img`
//   z-index: 1;
//   width: 100vw;
//   /* align-self: flex-end; */
//   width: 100%;
//   bottom: 0;
//   /* height: 100%; */
//   /* object-fit: contain; */
//   /* object-position: 0% 0%; */
//   /* vertical-align: bottom; */
//   /* margin-top: -200px; */
// `;

// export const Image = styled.img`
//   flex-shrink: 0;
//   min-height: 100%;
//   min-width: 100vw;
// `;
