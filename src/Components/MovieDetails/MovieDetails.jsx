// import React, { useEffect, useState } from 'react'
// import { useEffect } from 'react'
import './MovieDetails.css'
// import axios from 'axios'

const MovieDetails = ({ movie, movieDetails }) => {

  return (
    <>
      {
        movie ?
          <div className='movieDetails'>
            <img src={movieDetails.Poster} alt={movieDetails.Title} />
            <h3>{movieDetails.Title}</h3>
            <p>Director: {movieDetails.Director}</p>
            <p>Actors: {movieDetails.Actors || 'N/A'}</p>
            <p>{movieDetails.Plot}</p>
            <h5>IMDb Rating: {movieDetails.imdbRating || 'N/A'}</h5>
          </div> :
          <></>
      }
    </>
  )
}

export default MovieDetails