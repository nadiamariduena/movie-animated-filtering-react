import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { mobile, mobileM, tablet } from "../responsive";
import Movie from "./Movie";

// API
const { REACT_APP_TMDB_KEY } = process.env;
//

const Wrapper = styled.div`
  width: 100vw;
  min-height: 100vh;
  padding: 0 0 100px 0;
  background: #fceba0;
`;

//
//
const AddContent = styled.div`
  /* width: 100%;
  height: 100%;
  min-height: 4vh;
  padding: 0px 0 20px 0; */
  text-align: center;
  background: #1400c7;
`;

//
// -- GRID --
const PopularMovies = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-column-gap: 1rem;
  grid-row-gap: 2rem;

  /*  */
  img {
    width: 100%;
    height: 30vh;
    object-fit: cover;
  }
`;
//
//
const Home = () => {
  //
  //4
  const [popular, setPopular] = useState([]);

  //
  //2
  useEffect(() => {
    fetchPopular();
  }, []);

  //
  //1
  const fetchPopular = async () => {
    //
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${REACT_APP_TMDB_KEY}&language=en-US&page=1&include_adult=false`
    );
    //
    const movies = await data.json();
    console.log(movies);
    setPopular(movies.results);
  };

  //
  //

  return (
    <Wrapper>
      <AddContent>
        <h1>home</h1>

        <PopularMovies>
          {" "}
          {popular.map((movie) => (
            <>
              <Movie key={movie.id} movie={movie} />
            </>
          ))}
        </PopularMovies>
      </AddContent>{" "}
    </Wrapper>
  );
};

export default Home;
