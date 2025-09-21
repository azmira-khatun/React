import React from 'react'
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from './components/Nav';

const App = () => {
  return (
    <div>
<BrowserRouter>
<div className='row'>
<header>This is Header</header>
</div>
<div className='row'>
<div className='col-4'>
<Nav/>
</div>
<div className='col-8'>
<Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contact-us" element={<ContactPage />} />
          <Route path="/about-us" element={<AboutUs />} />
        </Routes>

</div>


</div>

        
      </BrowserRouter>
    </div>
  )
}

export default App