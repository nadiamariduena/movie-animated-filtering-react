import React from "react";

const Movie = ({ movie }) => {
  return (
    <div>
      <h2>{movie.title}</h2>
      <img
        src={"https://image.tmdb.org/t/p/w500" + movie.backdrop_path}
        alt={movie.title}
      />
    </div>
  );
};

export default Movie;
