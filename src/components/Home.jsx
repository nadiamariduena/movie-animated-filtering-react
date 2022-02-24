import React from "react";
import styled from "styled-components";
import { mobile, mobileM, tablet } from "../responsive";

//
//

const Wrapper = styled.div`
  width: 100vw;
  min-height: 100vh;
  padding: 0 0 100px 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Container = styled.div``;

//
//
const AddContent = styled.div`
  width: 100%;
  height: 100%;
  min-height: 4vh;
  padding: 0px 0 20px 0;
  text-align: center;
`;

//
//
const Home = () => {
  //
  //
  const fetchPopular = async () => {
    //
    //
  };

  //
  //

  return (
    <Wrapper>
      <Container>
        <AddContent>
          <h1>home</h1>
        </AddContent>{" "}
      </Container>
    </Wrapper>
  );
};

export default Home;
