import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Vans from './pages/Vans/Vans';
import VanDetails from './pages/Vans/VanDetails';
import Layout from './components/Layout';
import Dashboard from './pages/Host/Dashboard';
import Income from './pages/Host/Income';
import Reviews from './pages/Host/Reviews';

import './server'
import HostLayout from './components/HostLayout';

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route element = {<Layout />} >
            <Route path='/' element = {<Home />} />
            <Route path='/about' element = {<About />} />
            <Route path='/vans' element = {<Vans />} />
            <Route path='/vans/:id' element = {<VanDetails />} />
            <Route path='/host' element = {<HostLayout />} >
              <Route path='/host' element = {<Dashboard />} />
              <Route path='/host/income' element = {<Income />} />
              <Route path='/host/reviews' element = {<Reviews />} />
            </Route>
          </Route>
        </Routes>
    </BrowserRouter>
  )
}


ReactDOM.createRoot(document.getElementById('root')).render(
  <App />
);
