"use client";
import React, { FC } from "react";
import styled from "styled-components";
import { mq, px } from "src/lib/mediaQueries";
import { background } from "src/lib/colours";
import Link from "next/link";
import { links } from "src/lib/constants";

//  TODO: Make hamburger menu for mobile
// * Use this site to make compound component

const Header: FC<Props> = ({ background = true }) => {
  return (
    <>
      <Container $showBackground={background}>
        <NavBar>
          <Link href={"/"} as={"/"}>
            <Title>
              <div>Flowception</div>
            </Title>
          </Link>

          <Links>
            {links.map((link, index) => {
              return (
                <Link href={link.url} as={`/${link.url}`} key={index}>
                  <LinkItem>
                    <NavLink>{link.text}</NavLink>
                  </LinkItem>
                </Link>
              );
            })}
          </Links>
        </NavBar>
      </Container>
    </>
  );
};

export default Header;

type Props = {
  background?: boolean;
};

const borders = false;

const Container = styled.div<NavbarProps>`
  border: ${borders ? "1px solid orange" : "none"};

  position: fixed;
  width: 100vw;
  margin-top: 0px;

  /* background: ${background}; */

  background: ${({ $showBackground }) => ($showBackground ? background : null)};
  display: flex;
  color: white;

  justify-content: center;
  border-bottom: ${({ $showBackground }) => ($showBackground ? "1px solid rgba(255, 255, 255, 0.1)" : null)};

  height: 5rem;
  z-index: 10;
`;

type NavbarProps = {
  $showBackground: boolean;
};

const NavBar = styled.div`
  border: ${borders ? "1px solid limegreen" : "none"};
  display: flex;
  justify-content: space-between;
  align-items: center;

  height: 100%;
  ${mq("medium")} {
    width: ${px("medium")}px;
  }
  ${mq("large")} {
    width: ${px("large")}px;
  }
`;

const Links = styled.ul`
  border: ${borders ? "1px solid white" : "none"};
  height: 100%;
  display: flex;
  align-items: center;
`;

const LinkItem = styled.li`
  border: ${borders ? "1px solid purple" : "none"};
  /* min-width: 100px; */
  /* margin-right: 2rem; */

  list-style: none;

  font-weight: bold;
  text-align: center;
  font-size: large;
  cursor: pointer;
  :hover {
    border-bottom: 1px solid white;
  }
  :active {
    color: grey;
  }
`;

const NavLink = styled.div`
  display: block;
  margin: 0 0.5rem;
`;

const Github = styled.a`
  border: ${borders ? "1px solid red" : "none"};
  height: 50%;
`;

const Insta = styled.a`
  border: ${borders ? "1px solid red" : "none"};
  height: 50%;
  margin-left: 2rem;
`;

const Image = styled.img`
  height: 100%;
`;

const Title = styled.div`
  border: ${borders ? "1px solid pink" : "none"};
  font-weight: bold;
  font-size: 2rem;

  cursor: pointer;

  display: none;
  ${mq("small")} {
    display: block;
  }
`;
