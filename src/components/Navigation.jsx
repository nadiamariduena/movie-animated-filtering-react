import React from "react";
import styled from "styled-components";
import { mobile, mobileM, tablet } from "../responsive";

const Header = styled.header`
  width: 100vw;
  min-height: 3vh;
  padding: 1vh 0;

  border-bottom: 1px solid #000;
`;
const Nav = styled.nav`
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  font-size: calc(8px + 1.8vmin);
  text-transform: uppercase;
  font-weight: 600;
  h3 {
    letter-spacing: 9px;
  }
`;

export const Navigation = () => {
  return (
    <Header>
      <Nav>
        <h3>LOGO</h3>
      </Nav>
    </Header>
  );
};
