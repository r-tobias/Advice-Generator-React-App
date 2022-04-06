import React from 'react'
import {Route, Routes} from 'react-router-dom'
import About from './components/About'
import Error from './components/Error'
import Random from './components/Random'
import Search from './components/Search'

function Container() {
  return (
    <div>
        <Routes>
        <Route path="/"/>
        <Route path="/random" element = {<Random/>}/>
        <Route path="/search" element = {<Search/>}/>
        <Route path="/about" element = {<About/>}/>
        <Route path="*" element = {<Error/>}/>
        </Routes>



    </div>
  )
}

export default Container