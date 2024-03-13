import './MovieDetails.css'

const MovieDetails = ({ movieSelect, movieDetails }) => {

  return (
    <>
      {
        movieSelect ?
          <div className='movieDetails'>
            <img src={movieDetails.Poster} alt={movieDetails.Title} />
            <h3>{movieDetails.Title}</h3>
            <p>{movieDetails.Plot}</p> 
            <p>Director: {movieDetails.Director}</p>
            <p>Actors: {movieDetails.Actors || 'N/A'}</ p>
            <h5>IMDb Rating: {movieDetails.imdbRating || 'N/A'}</h5>

          </div> :
          <></>
      }
    </>
  )
}

export default MovieDetails