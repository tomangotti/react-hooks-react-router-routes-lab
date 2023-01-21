import React from "react";
import { actors } from "../data";

function Actors() {

  const actorList = actors.map((actor) =>{
    let actors = actor.movies.map((movie) => {
      return <li>{movie}</li>
    })
    return <div>
      <h2>{actor.name}</h2>
      <ul>
        {actors}
      </ul>
    </div>
  })


  return <div>{actorList}</div>;
}

export default Actors;
