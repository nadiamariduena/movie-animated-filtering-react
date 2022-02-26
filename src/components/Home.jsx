import React, { useEffect, useState } from "react";
import styled from "styled-components";
// import { mobile, mobileM, tablet } from "../responsive";
import { Filter } from "./Filter";
import MovieCard from "./MovieCard";
import { motion } from "framer-motion";

// API
const { REACT_APP_TMDB_KEY } = process.env;
//

const Wrapper = styled.div`
  width: 100vw;
  min-height: 100vh;
  padding: 0 0 60px 0;
  text-align: center;
  background: #0f0f0f;
  h1 {
    padding: 10px 0;
    font-size: calc(25px + 1.8vmin);
    text-transform: uppercase;
    font-weight: 600;
  }
`;

//
//
const AddContent = styled.div`
  padding: 0px 0 20px 0;
`;

//
// -- GRID --
const PopularMovies = styled.div`
  .wrapper-cards {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    grid-column-gap: 1rem;
    grid-row-gap: 2rem;
    margin-top: 40px;
    padding: 40px 40px;
  }
  /*  */
  img {
    width: 100%;
    height: 30vh;
    object-fit: cover;
    margin-bottom: 1rem;
    border-radius: 1rem;
  }

  h2 {
    padding: 10px 0;
    font-size: calc(6px + 1vmin);
    font-weight: 600;
    color: #f7f4e79a;
    font-family: "PoppinsThin";
  }
`;
//
//
const Home = () => {
  //
  //4
  const [popular, setPopular] = useState([]);
  //
  const [filtered, setFiltered] = useState([]);
  //
  const [activeGenre, setActiveGenre] = useState(0);
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
    //
    setFiltered(movies.results);
  };

  //
  //

  return (
    <Wrapper>
      {" "}
      <Filter
        popular={popular}
        setFiltered={setFiltered}
        activeGenre={activeGenre}
        setActiveGenre={setActiveGenre}
      />
      <AddContent>
        <PopularMovies>
          <motion.div className="wrapper-cards">
            {filtered.map((movie) => (
              <div key={movie.id}>
                <MovieCard movie={movie} />
              </div>
            ))}
          </motion.div>
        </PopularMovies>
      </AddContent>{" "}
    </Wrapper>
  );
};

export default Home;
