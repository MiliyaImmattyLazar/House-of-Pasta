import React from 'react'
// import data from '../../data'
import Product from '../../components/Product'
function Menu(props){
    const {menu} = props;
    return(
            <main classname="block">
            <h1>Menu</h1>
            <div className='row'>
                {menu.map((menuitem) => (
                    <Product key={menuitem.id} menuitem={menuitem}></Product>
                ))}
            </div>
            </main>
    )
}
export default Menu