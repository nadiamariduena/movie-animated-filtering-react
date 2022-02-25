import React from "react";
import styled from "styled-components";
import { mobile, mobileM, tablet } from "../responsive";

const Header = styled.header`
  width: 100vw;
  min-height: 3vh;
  padding: 1vh 0;
  background: #1ba1aa;
`;
const Nav = styled.nav`
  width: 100%;
  height: 100%;

  background: #b7dad5;
  display: flex;
  justify-content: center;
  align-items: center;

  font-size: calc(5px + 1.8vmin);
  text-transform: uppercase;
  font-weight: 600;
`;

export const Navigation = () => {
  return (
    <Header>
      <Nav>hello</Nav>
    </Header>
  );
};
