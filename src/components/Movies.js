import React from "react";
import { movies } from "../data";

function Movies() {
  const movieList = movies.map((movie) => {
    let genreList = movie.genres.map((genre) => {
      return <li>{genre}</li>
    })
    return <div>
      <h2>Title: {movie.title}</h2>
      <h3>Time: {movie.time}</h3>
      <ul>
        {genreList}
      </ul>
      </div>
  })
  return <div>
    <h1>Movie Page</h1>
      {movieList}
    </div>;
}

export default Movies;

