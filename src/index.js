import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Home from './pages/Home/'
import Logement from './pages/Logement';
import About from './pages/About';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Error404 from './pages/Error404';
 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Navbar/>
      <main>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/about' element={<About />}/>
        <Route path = "logement/:id" element ={<Logement />} />
        <Route path = "*" element ={<Error404 />} /> 
      </Routes>
      </main>
      <Footer/>
    </Router>
    
  </React.StrictMode>
);

 
