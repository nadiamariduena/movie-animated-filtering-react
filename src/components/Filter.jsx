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
    //  if the user didnt type anything,
    //  it will stay with the popular movies as default
    if (activeGenre === 0) {
      setFiltered(popular);
      return;
    }
    // here we will filter the popular array with the filter(), then
    // once filtered, we will grab the _ids from the array and tell it
    // to get only the ones that includes() all the movies that match with
    // the bumbers we have inside the buttons here below
    const filtered = popular.filter((movie) =>
      movie.genre_ids.includes(activeGenre)
    );
    //
    setFiltered(filtered);
    //
    //
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
