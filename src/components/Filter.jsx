import React from "react";
import styled from "styled-components";

//
//
const FilterContainer = styled.div`
  margin-top: 40px;
  padding: 20px 0;
  height: 30vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Button = styled.button`
  margin: 0 3px;
  padding: 12px 28px;
  border-radius: 2rem;
  border: 2px solid #000;
  background: transparent;
  color: #000;

  cursor: pointer;
  /*  */
  &:hover {
    background: #f7f4e79a;

    color: #0e0e0e;
  }
  &:active {
    background: #000;
    color: #ffffff;
  }
`;
//

export const Filter = () => {
  return (
    <FilterContainer>
      <Button>All</Button>
      <Button>Comedy</Button>
      <Button>Action</Button>
    </FilterContainer>
  );
};
