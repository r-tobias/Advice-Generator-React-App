import React from 'react'
import { adviceSearch } from '../services/constants'
import { useState, useEffect } from 'react'
function Search() {
    const [advices, setAdvices] = useState([])
    const [inputValue, setInputValue] = useState('')
  
    const updateInputValue = (event) => {
        event.preventDefault()
        let inputEntry = event.target.value;
        return setInputValue(inputEntry)
        
    }
    async function handleSearch () {
        const answer = await adviceSearch(inputValue)
        if (answer.data.slips) {
            setAdvices(answer.data.slips)
        } 
        // console.log(answer)

        // setAdvice(answer.data.slips[0].advice)
    }

    useEffect(() => {
        handleSearch()
    },[])

    return (
    <div className='search-container'>
        {/* <h1>Search For a Specific Advice</h1> */}
        <input placeholder = "Enter a Random Word" 
        onChange = {e => updateInputValue(e)}>
        </input>
        <button type = "submit" onClick={handleSearch}>Search Advice</button>
       {advices.map((advice, index) => {
           return <p className='advice'>{advice.advice}</p>
       })}


    </div>
  )
}

export default Search