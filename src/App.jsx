import './styling/main.scss';
import { useState } from 'react'
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';

import Header from './components/Header';
import Home from './components/pages/home';
import Catalog from './components/pages/catalog';
import Footer from './components/Footer';

function App() {
  return (
    <div className='Container'>
      <HashRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/catalogo' element={<Catalog />}/>
        
        </Routes>
        <Footer />
      </HashRouter>
    </div>
  )
}

export default App
