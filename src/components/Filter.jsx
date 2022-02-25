import React from "react";
import styled from "styled-components";

//
//
const FilterContainer = styled.div``;
const Button = styled.button`
  padding: 12px 28px;
  border: 0;
  background: #000;
  color: #fff;
`;
//

export const Filter = () => {
  return (
    <FilterContainer>
      <Button>a</Button>
      <Button>b</Button>
      <Button>c</Button>
    </FilterContainer>
  );
};
