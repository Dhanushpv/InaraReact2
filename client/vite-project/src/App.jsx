import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Componets/Home/Home.jsx';
import About from './Componets/About/About.jsx';
import Services from './Componets/Services/Services.jsx';
import Products from './Componets/Products/Products.jsx';
import Contact from './Componets/Contact/Contact.jsx';
import LadiesUnderwear from './Componets/LadiesUnderwear/LadiesUnderwear.jsx';
import Cozyknitting from './Componets/Cozyknitting/Cozyknitting.jsx';
import ActiveWear from './Componets/ActiveWear/ActiveWear.jsx';
import LadiesShorts from './Componets/LadiesShorts/LadiesShorts.jsx';
import MensVest from './Componets/MensVest/MensVest.jsx';
import MensShorts from './Componets/MensShorts/MensShorts.jsx';
import MensTShirts from './Componets/MensTShirts/MensTShirts.jsx';

import './Componets/Home/Home.css';

function App() {

      useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
  return (
    <div className=''>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Home' element={<Home />} />
          <Route path='/About' element={<About />} />
          <Route path='/Services' element={<Services />} />
          <Route path='/Products' element={<Products />} />
          <Route path='/Contact' element={<Contact />} />
          <Route path='/LadiesUnderwear' element={<LadiesUnderwear />} />
          <Route path='/Cozyknitting' element={<Cozyknitting />} />
          <Route path='/ActiveWear' element={<ActiveWear />} />
          <Route path='/LadiesShorts' element={<LadiesShorts />} />
          <Route path='/MensVest' element={<MensVest />} />
          <Route path='/MensShorts' element={<MensShorts />} />
          <Route path='/MensTShirts' element={<MensTShirts />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
  