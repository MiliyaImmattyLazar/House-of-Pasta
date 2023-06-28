import React,{useState} from 'react'
import {Link,NavLink} from 'react-router-dom'

import './Navbar.css'
import logo from '../../assets/images/logo.png'
const Navbar = () => {
    return(
        <div className='header'>
            <div className='container'>
                <div className='nav-bar'>
                    <Link to="/">
                    <img src={logo} alt="logo" width={100} />
                    </Link>
                    <ul className='nav-menu'>
                        <li>
                            <NavLink className="nav-link" to="/">Home</NavLink>
                        </li>
                        <li>
                            <NavLink className="nav-link" to="/menu">Menu</NavLink>
                            </li>
                            <li>
                            <NavLink className="nav-link" to="/about">About</NavLink>
                           </li>
                            <li>
                            <NavLink className="nav-link" to="/book">Book a Table</NavLink>
                            </li>
                            <li>
                            <NavLink className="nav-link" to="/contact">Contact us</NavLink>
                        </li>
                        <li>
                        <NavLink className="nav-link" to="/cart">Cart</NavLink>
                        </li>
                    </ul>

                </div>
            </div>
        </div>
    )
}
export default Navbar