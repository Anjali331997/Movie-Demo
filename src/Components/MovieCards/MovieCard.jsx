import React from 'react'
import './MovieCard.css'

const handleMovieClick=()=>{
  console.log("Movie Clicked");
}

const MovieCard = ({ data }) => {
  return (
    <div>
      <div key={data.imdbID} className="movie-card" onClick={() => handleMovieClick(data.imdbID)}>
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