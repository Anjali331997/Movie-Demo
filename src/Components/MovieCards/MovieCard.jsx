// import React, { useState } from 'react'
import './MovieCard.css'
// import MovieDetails from '../MovieDetails/MovieDetails';


const MovieCard = ({ data ,handleClick}) => {
  return (
    <div>
      <div key={data.imdbID} className="movie-card" onClick={()=>handleClick(data.imdbID)}>
        <img src={data.Poster} alt={data.Title} />
        <div>
          <h3>{data.Title}</h3>
          <p>Year: {data.Year}</p>
          <p>IMDb Rating: {data.imdbRating || 'N/A'}</p>
        </div>
      </div>
    </div>
  )
}
export default MovieCard