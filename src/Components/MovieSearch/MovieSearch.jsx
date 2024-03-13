import React, { useEffect, useState } from 'react'
import './Movie.css'

const MovieSearch = () => {
  const [search, setSearch] = useState()

  useEffect(() => {
    console.log(search)
  }, [search])
  
  return (
    <>
      <div>
        <input type="text" placeholder='Search...' value={search} onChange={(e) => {
          setSearch(e.target.value)
        }} />
      </div>
    </>
  )
}

export default MovieSearch