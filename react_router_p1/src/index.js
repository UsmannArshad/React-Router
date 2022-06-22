import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {BrowserRouter,Route,Routes,Link,HashRouter} from 'react-router-dom'
import Home from './components/home';
import About from './components/about';
import Contact from './components/contact';
import Users from './components/users';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  <HashRouter>
        <header>
          <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm">
            <h5 className="my-0 mr-md-auto font-weight-normal">Company name</h5>
            <nav className="my-2 my-md-0 mr-md-3">
              <Link className="p-2 text-dark" to="/home">Home</Link> -
              <Link className="p-2 text-dark" to="/about">About</Link> - 
              <Link className="p-2 text-dark" to={{
                pathname:'/contact',
                hash:'usman',
              }}>Contact</Link>
              <Link className="p-2 text-dark" to="/users">Users</Link>
            </nav>
          </div>
        </header>
        <div className="container">
          <Routes>
          <Route path="/" element={<App/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="/About" element={<About/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/users" element={<Users/>}/>
          <Route path="/users/:name" element={<Users/>}/>
          </Routes>
        </div>
    </HashRouter>
  </>
);
