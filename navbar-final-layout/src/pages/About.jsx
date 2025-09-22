import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const About = () => {
  return (
    <div>
        <h1>This is About Page</h1>
        <nav>
        <ul>
            <li>
                <Link to='product'>Product</Link>
            </li>
            <li>
                <Link to='category'>Category</Link>
            </li>
        </ul>
        </nav>
        <Outlet/>
    </div>
  )
}

export default About