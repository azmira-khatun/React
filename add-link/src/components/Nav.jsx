import React from 'react'
import {Link } from "react-router";
const Nav = () => {
  return (
    <div>
       <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/contact-us'>Contact</Link>
        </li><li>
          <Link to='/about-us'>About</Link>
        </li>
       </ul> 
    </div>
  )
}

export default Nav