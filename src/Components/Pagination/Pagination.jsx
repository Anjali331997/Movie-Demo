import React from 'react'
import './Pagination.css'

const Pagination = ({ handleNext, handlePrev, currentPage }) => {
    return (
        <>
            <div className='paginationButtons'>
                <button onClick={handlePrev}> {"<<"}</button>
                <p data-testid="currentPage">{currentPage}</p>
                <button onClick={handleNext}>{">>"}</button>
            </div>

        </>
    )
}

export default Pagination