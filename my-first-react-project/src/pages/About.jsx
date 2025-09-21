import React from "react";
import NavApp from "../components/NavApp";
import { Link, Outlet } from "react-router";

const About = () => {
  return (
    <div>
      <NavApp />
      <h1> This is About Page</h1>
      <nav>
        <ul>
          <li>
            <Link to="product">Product</Link>
          </li>
           <li>
            <Link to="category">Category</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
};

export default About;
