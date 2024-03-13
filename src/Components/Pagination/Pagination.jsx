import React from 'react'
import './Pagination.css'

const Pagination = ({handleNext,handlePrev,currentPage}) => {
    return (
        <>
            <div className='paginationButtons'>
                <button onClick={handlePrev}> prev</button>
                <p>{currentPage}</p>
                <button onClick={handleNext}>next</button>
            </div>

        </>
    )
}

export default Pagination