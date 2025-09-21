import React from 'react'
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import NavBarDesign from './components/NavBar';
import"./assets/ExternalCss.css";
import Sidebar from './components/Sidebar';
const App = () => {
  return (
    <div>
<BrowserRouter>
        <Routes>
          <Route path="/" element={<NavBarDesign />} />
          <Route path="/" element={<Sidebar />} />

          
        
        </Routes>
      </BrowserRouter>
      
    </div>
  )
}

export default App