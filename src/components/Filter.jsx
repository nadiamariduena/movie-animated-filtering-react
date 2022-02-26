import React, { useEffect } from "react";
import styled from "styled-components";

//
//
const FilterContainer = styled.div`
  height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #f7f4e7;
`;
const Button = styled.button`
  margin: 0 3px;
  padding: 12px 20px;
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

export const Filter = ({
  setFiltered,
  activeGenre,
  setActiveGenre,
  popular,
}) => {
  //
  //

  useEffect(() => {
    if (activeGenre === 0) {
      setFiltered(popular);
      return;
    }
  }, [activeGenre]);

  //
  //
  return (
    <FilterContainer>
      <Button onClick={() => setActiveGenre(0)}> All</Button>
      <Button onClick={() => setActiveGenre(878)}>Science Fiction</Button>
      <Button onClick={() => setActiveGenre(28)}>Action</Button>
    </FilterContainer>
  );
};
