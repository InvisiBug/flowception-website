"use client";
import React, { FC } from "react";
import Image from "next/image";
import styled from "styled-components";

const ComingSoon: FC = () => {
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
          In the meantime, please check out our <Link href="https://linktree.flowception.co.uk">linktree</Link>
        </h1>
      </ImageContainer>
    </>
  );
};

export default ComingSoon;

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
