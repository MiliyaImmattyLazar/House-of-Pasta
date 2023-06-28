import React from 'react'
import {Routes,Route} from 'react-router-dom'
import {useState} from 'react'
import Home from './pages/Home/Home'
import Contact from './pages/Contact/Contact'
import Menu from './pages/Menu/Menu'
import About from './pages/About/About'
import Cart from './pages/Cart/Cart'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import data from './data'
import Book from './pages/Book/Book'
function App() {
  const {menu} = data
  const [cartItems,setCartItems] = useState([])
  const onadd = (menuitem) => {
    const exist = cartItems.find((x) => x.id === menuitem.id)
    if(exist) {
      setCartItems(
        cartItems.map((x) =>
        x.id === menuitem.id ? { ...exist, qty: exist.qty + 1} : x)
      )
    } else {
      setCartItems([...cartItems,{...menuitem,qty : 1}])
    }
  }
  const onremove = (menuitem) => {
    const exist = cartItems.find((x) => x.id === menuitem.id)
    if(exist.qty ===1) {
     setCartItems(cartItems.filter((x) => x.id !== menuitem.id))
    } else {
      setCartItems(
        cartItems.map((x)=>
        x.id ===menuitem.id ? {...exist,qty:exist.qty-1}:x)
      )
    }
  }
    return (
    <div>
   <Navbar />
   <Routes>
    <Route path = "/" element={<Home />} />
    <Route path = "/contact" element={<Contact />} />
    <Route path = "/menu" element={<Menu onadd={onadd}menu={menu} />} />
    <Route path = "/about" element={ <About/>} />
    <Route path = "/cart" element={ <Cart onremove={onremove} onadd={onadd}cartItems={cartItems}/>} />
    <Route path = "/book" element={ <Book/>} />
   </Routes>
   <Footer />
    </div>
    
  );
}

export default App;
