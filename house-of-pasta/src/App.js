import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Home from './pages/Home/Home'
import Menu from './pages/Menu/Menu'
import About from './pages/About/About'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
function App() {
  return (
    <div>
   <Navbar />
   <Routes>
    <Route path = "/" element={<Home />} />
    <Route path = "/menu" element={<Menu />} />
    <Route path = "/about" element={ <About/>} />
   </Routes>
   <Footer />
  
    </div>
   
    
  );
}

export default App;
