import React, { useEffect, useState } from 'react';
import MovieSearch from '../Components/MovieSearch/MovieSearch';
import axios from 'axios';
import MovieCard from '../Components/MovieCards/MovieCard';
import MovieDetails from '../Components/MovieDetails/MovieDetails';


const Movies = () => {
    const [query, setQuery] = useState('');
    const [result, setResult] = useState([]);
    const [error, setError] = useState(null);

    const [movieSelect,setmovieSelect] = useState(false)
    const [movieDetails, setMovieDetails] = useState({})

    const handleClick = async (id) => {
        // console.log("Movie Clicked",ele)

        setmovieSelect(true)
        await axios.get(`https://omdbapi.com/?apiKey=38519d97&i=${id}&plot=full`).then((res) => {
            setMovieDetails(res.data)
            console.log(movieDetails)
        }).catch((err) => {
            console.log(err)
        })

    }

    const getData = async () => {
        await axios.get(`https://www.omdbapi.com/?apiKey=38519d97&s=${query}`).then((res) => {
            const data = res.data;
            if (data.Response === "True") {
                setResult(data.Search)
                setError(null)
            }
            else {
                setResult([]);
                setError(true);
                console.log(error)
            }
        }).catch((err) => {
            console.log(err)
        })
    }

    useEffect(() => {
        getData();
        console.log(result)
    }, [query])

    return (
        <>
            <MovieSearch query={query} setQuery={setQuery} />
            <MovieDetails movieSelect={movieSelect} movieDetails={movieDetails}/>

            {
                result.length > 0 ?
                    <div className='movieContainer'>
                        {
                            result.map((ele, ind) => {
                                return <MovieCard key={ind} data={ele} handleClick={handleClick} />
                            })
                        }
                    </div>
                    :
                    <>
                    </>
            }

        </>
    )
}

export default Movies