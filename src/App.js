import './App.css';
import Catalog from './components/catolog';
import Footer from './components/footer';
import Navbar from './components/navbar';

import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"

import "@fortawesome/fontawesome-free/css/all.min.css"
import "@fortawesome/fontawesome-free/js/all.min.js"
import Home from './components/home';

import { BrowserRouter, Router, Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import About from './components/about';
import Cart from './components/cart';
import Admin from './components/admin';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <main>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/home' element={<Home />} />
            
            <Route path='/catalog' element={<Catalog />} />
            <Route path='/about' element={<About />} />
            <Route path='/cart' element={<Cart />} />
            
            <Route path='/admin' element={<Admin />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
