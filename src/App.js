import React from 'react';
import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './component/Home'
import Navbar from './component/Navbar';
import Service from './component/Service';


import Donate from './component/Donate'
import About from './component/About'
import Members from './component/Members'
import Areas from './component/Areas';
import Contact from './component/Contact';
import ImageUp from './component/ImageUp';
import Footer from './component/Footer';





function App() {
  return (

    <>
      
      <Router>

            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/gellary" element={<Service/>} />
                 <Route path="/work" element={<Areas/>} />
                 <Route path="/donate" element={<Donate/>} />
                 <Route path="/about" element={<About />} />
                  <Route path="/members" element={<Members />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/upload" element={<ImageUp />} />
                  
            </Routes>
            <Footer/>
        </Router>
    
    
    
    
    </>
    
  );
}

export default App;
