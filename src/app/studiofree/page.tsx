"use client";
import styled from "styled-components";
import { Header } from "@/lib/ui";

export default function Home() {
  return (
    <>
      <Header></Header>
      <Container>
        <h1>Oh Hai, it me Studio free</h1>
      </Container>
    </>
  );
}

const Container = styled.div`
  border: 1px solid red;

  width: 100vw;
  height: 100vh;

  display: grid;
  place-items: center;
`;
