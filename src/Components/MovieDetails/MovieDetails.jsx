import React, { useEffect, useState } from 'react'
import './MovieDetails.css'
import axios from 'axios'

const MovieDetails = ({ id, movieClicked }) => {
  const [movieData, setMovieData] = useState({})

  const getData = async () => {
    await axios.get(`https://www.omdbapi.com/?apiKey=38519d97&i=${id}`).then((res) => {
      const data = res.data;
      console.log(data)
    })

  }
  useEffect(() => {
    getData
      ()
  }, [movieData])
  return (
    <>
      {
        movieClicked ?
          <div className='movieDetails'>

          </div> : <><h1>hmmmm</h1></>
      }
    </>
  )
}

export default MovieDetails