import React from "react";

const Movie = ({ movie }) => {
  return (
    <div>
      <h2>{movie.title}</h2>
      <img src={movie.poster_path} alt={movie.title} />
    </div>
  );
};

export default Movie;
