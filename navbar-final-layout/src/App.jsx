import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Nav from "./components/Nav";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Product from "./pages/Product";
import Category from "./pages/Category";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <div className="container-fluid p-0">
          <header className="bg-secondary text-white p-4 d-flex justify-content-between align-items-center fw-bold fs-1">
            <a className="navbar-brand">
              <img
                src="/public/images.jpg"
                alt=""
                width="60"
                height="70"
                class="d-inline-block align-text-top"
              ></img>
              Navbar
            </a>
            <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
            {/* This is Header */}
          </header>

          <div className="container-fluid vh-50">
            <div className="row main-container">
              <div
                className="col-4 p-9"
                style={{ backgroundColor: "yellowgreen" }}
              >
                <Nav />
              </div>

              <div className="col-8 p-0" style={{ backgroundColor: "yellow" }}>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/contact-us" element={<Contact />} />
                  <Route path="/about-us" element={<About />}>
                    <Route path="product" element={<Product />} />
                    <Route path="category" element={<Category />} />
                  </Route>
                </Routes>
              </div>
            </div>
          </div>

          <div className="row">
            <footer className="bg-secondary text-white text-center p-4 fw-bold fs-1">
              This is Footer
            </footer>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
