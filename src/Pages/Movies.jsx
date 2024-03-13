import React, { useEffect, useState } from 'react';
import MovieSearch from '../Components/MovieSearch/MovieSearch';
import axios from 'axios';
import MovieCard from '../Components/MovieCards/MovieCard';
import MovieDetails from '../Components/MovieDetails/MovieDetails';
import Pagination from '../Components/Pagination/Pagination';
import MovieContainer from '../Components/MovieContainer/MovieContainer';



const Movies = () => {
    const [query, setQuery] = useState('');
    const [result, setResult] = useState([]);

    const [error, setError] = useState(null);

    const [movieSelect, setmovieSelect] = useState(false)
    const [movieDetails, setMovieDetails] = useState({})
    const [currentPage, setcurrentPage] = useState(1);
    const [totalPage, setTotalPage] = useState(null)

    const handleNext = () => {
        if (currentPage >= totalPage) {
            setcurrentPage(1)
        } else {
            setcurrentPage(currentPage => currentPage + 1)
        }

    }

    const handlePrev = () => {
        if (currentPage <= 1) {
            setcurrentPage(totalPage)
        } else {
            setcurrentPage(currentPage => currentPage - 1)
        }
    }

    const handleClick = async (id) => {
        setmovieSelect(true)
        await axios.get(`https://omdbapi.com/?apiKey=38519d97&i=${id}&plot=full`).then((res) => {
            setMovieDetails(res.data)
            console.log(movieDetails)
        }).catch((err) => {
            console.log(err)
        })

    }

    const getData = async () => {
        await axios.get(`https://www.omdbapi.com/?apiKey=38519d97&s=${query}&page=${currentPage}`).then((res) => {
            const data = res.data;
            setTotalPage(Math.ceil(data.totalResults / 10));
            console.log(totalPage)

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
    }, [query, currentPage])

    return (
        <>
            <MovieSearch query={query} setQuery={setQuery} />
            <MovieDetails movieSelect={movieSelect} movieDetails={movieDetails} />
            {
                result.length > 0 ?
                    <>
                        <div className='movieContainer'>
                            {
                                result.map((ele, ind) => {
                                    return (
                                        ele.Poster !== "N/A" ?
                                            <MovieCard key={ind} data={ele}
                                                handleClick={handleClick} />
                                            : <></>)
                                })
                            }
                        </div>
                        <Pagination
                            handlePrev={handlePrev}
                            handleNext={handleNext}
                            currentPage={currentPage} />
                    </>
                    :
                    <>
                    </>
            }


            {/* <MovieSearch setQuery={setQuery} /> */}
            {/* <MovieContainer query={query} setResult={setResult}/> */}
        </>
    )
}

export default Movies