import React from "react";
import { movies } from "../data";

function Movies() {
  return <div>
    <h1>Movies Page</h1>
    
      {movies.map((movies,index)=>(
        <div key={index}>
          <h2>Name{movies.title}</h2>
          <p>Time:{movies.time}</p>
          <ul>
            {movies.genres.map((genre,genreIndex)=>(
              <li key={genreIndex}>{genre}</li>
            ))}
          </ul>
          </div>
      ))}
    
    </div>;
}

export default Movies;
