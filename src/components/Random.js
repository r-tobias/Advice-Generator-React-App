import React from 'react'
import { randomAdvice } from '../services/constants'
import { useState, useEffect } from 'react'

function Random() {
    const [counsel, setCounsel] = useState("")
    
    async function handleClick() {
      const answer = await randomAdvice()
      console.log(answer)
      // console.log(answer.data.slip.advice)
      setCounsel(answer.data.slip.advice)
    }
    
    useEffect(() => {
        handleClick()
    },[])
    
  return (
    <div className='random-container'>
        {/* <h1>Random Advice</h1> */}
        {/* some kind of function that does the api call */}
        <button onClick={handleClick}>Click For Random Advice</button>
        <p className='advice'>
          {counsel}
          </p>
    </div>
  )
}

export default Random