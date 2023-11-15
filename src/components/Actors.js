import React from "react";
import { actors } from "../data";

function Actors() {
  return (
  <div>
    <h1>Actors Page</h1>
    {actors.map((actor,index)=>(
      <div key={index}>
        <h2>name:{actor.name}</h2>
        <ul>
          {actors.map((movies,moviesIndex)=>(
            <li key={moviesIndex}>{movies}</li>
          ))}
        </ul>
        </div>
        ))}
  </div>
  )
}

export default Actors;
