import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import MoviesList from '../components/MoviesList'

export default function Movies() {
    const [searchValue, setSearchValue] = useState('god')
    const [year, setYear] = useState('')
    const [type, setType] = useState('')

    const handleTypeChange = (e) => {
        setType(e.target.value)
    }

    const handleYearChange = (date, dateString) => {
        setYear(parseInt(dateString))
    }

    const handleInputChange = (event) => {
        event.persist()
        setSearchValue(event.target.value || 'God')
    }

    // const handleYear

    return (
        <div>
            <Navbar
                searchValue={searchValue}
                setSearchValue={handleInputChange}
                year={year}
                setYear={handleYearChange}
                type={type}
                setType={handleTypeChange}
            ></Navbar>
            <MoviesList searchValue={searchValue} year={year} type={type} />
        </div>
    )
}
