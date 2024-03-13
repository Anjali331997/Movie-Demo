
import './Movie.css'


const MovieSearch = ({query,setQuery}) => {
  
  return (
    <>
      <div className='searchDiv'>
        <input className='inputComp' type="text" placeholder='Search...' value={query} onChange={(e) => {
          setQuery(e.target.value)
        }} />
      </div>

      
    </>
  )
}

export default MovieSearch