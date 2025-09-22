import React from 'react'
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import Nav from './components/Nav';
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';
import Product from './pages/Product';
import Category from './pages/Category';

const App = () => {
  return (
    <div>
<BrowserRouter>
<div className="container-fluid p-0">
<header  className="bg-secondary text-white text-center p-3">This is Header</header>


<div className='container-fluid'>
 <div className="row main-container">
<div className='col-4 p-0' style={{backgroundColor:'yellowgreen'}}>
<Nav/>
</div>

<div className="col-8 p-0" style={{backgroundColor: 'yellow'}}>
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

<div className='row'>
<footer  className="bg-secondary text-white text-center p-3">This is Footer</footer>
</div>

</div>
        
      </BrowserRouter>
    </div>
  )
}

export default App