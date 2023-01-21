import React from "react";
import { directors } from "../data";

function Directors() {

  const directorList = directors.map((direct) => {
    let movies = direct.movies.map((movie) => {
      return <li>{movie}</li>
    })
    return <div>
      <h2>{direct.name}</h2>
      <ul>
        {movies}
      </ul>
    </div>
  })

  return <div>
    <h1>Directors Page</h1>
    {directorList}
  </div>;
}

export default Directors;
