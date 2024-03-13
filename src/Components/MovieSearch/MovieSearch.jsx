import React, { useEffect, useState } from 'react'
import axios from 'axios';
import './Movie.css'
import MovieCard from '../MovieCards/MovieCard';

const MovieSearch = () => {
  const [search, setSearch] = useState('');
  const [result, setResult] = useState([]);
  const [err, setError] = useState(null);

  const getData = () => {
    axios.get(`https://www.omdbapi.com/?apiKey=38519d97&s=${search}`).then((res) => {
      const data = res.data;
      if (data.Response === "True") {
        setResult(data.Search)
        setError(null)
      }
      else {
        setResult([]);
        setError(true)
      }
    }).catch((err) => {
      console.log(err)
    })
  }

  useEffect(() => {
    getData();
    console.log(result)
  }, [search])

  return (
    <>
      <div className='searchDiv'>
        <input className='inputComp' type="text" placeholder='Search...' value={search} onChange={(e) => {
          setSearch(e.target.value)
        }} />
      </div>

      {
        result.length > 0 ?
          <div className='movieContainer'>
            {
              result.map((ele, ind) => {
                return <MovieCard key={ind} data={ele} />
              })
            }
          </div>
          :
          <></>}
    </>
  )
}

export default MovieSearch