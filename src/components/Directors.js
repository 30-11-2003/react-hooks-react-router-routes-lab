import React from "react";
import { directors } from "../data";

function Directors() {
  return <div>
    <h1>Directors Page</h1>
    {directors.map((director,index)=>(
      <div key={index}>
        <h2>name:{directors.name}</h2>
        <ul>
          {directors.movies.map((movie,movieIndex)=>(
            <li key={movieIndex}>{movie}</li>
          ))}
        </ul>
      </div>
    ))}
  </div>;
}

export default Directors;
