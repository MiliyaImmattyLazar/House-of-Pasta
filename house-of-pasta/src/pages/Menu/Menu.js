import React from 'react'
import './menu.css'
import Product from '../../components/Product'
import './menu.css'
function Menu(props){
    const {menu,onadd} = props;
    return(
            <div classname="menu-style">
            <h1 className='menu-heading'> Our Menu</h1>
            <div className='row'>
                {menu.map((menuitem) => (
                    <Product key={menuitem.id} menuitem={menuitem} onadd={onadd}></Product>
                ))}
            </div>
            </div>
    )
}
export default Menu