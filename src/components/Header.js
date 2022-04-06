import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Header() {
    // const linkStyle = {
    //     textDecoration: "none",
    //     color: "red"

    // }
  return (
    <header>
        <h1>Advice</h1>
        <ul>
            <NavLink to ="/">
            <li>Home</li>
            </NavLink>
            <NavLink to ="/random">
            <li>Random Advice</li>
            </NavLink>
            <NavLink to ="/search">
            <li>Search</li>
            </NavLink>
            <NavLink to ="/about">
            <li>About Us</li>
            </NavLink>



        </ul>
    </header>
  )
}

