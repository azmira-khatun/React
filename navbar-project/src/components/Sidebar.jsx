import React from 'react'

const Sidebar = () => {
  return (
    <div>
        <div className="sidebar">
       <nav>
          <ul>
            <li>
             <Link to="/">Home</Link>
            </li>
            <li>
             <Link to="/about-us">About</Link>
            </li>
            <li>
             <Link to="/search">Search</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default Sidebar