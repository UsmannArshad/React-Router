import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Home from './components/home';
import About from './components/about';
import Contact from './components/contact';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  <h1>Header</h1>
  <BrowserRouter>
  <Routes>
  <Route path="/" element={<App/>}/>
  <Route path="/home" element={<Home/>}/>
  <Route path="/about" element={<About/>}/>
  <Route path="/contact" element={<Contact/>}/>
  </Routes>
  </BrowserRouter>
  <h1>Footer</h1>
  </>
);
