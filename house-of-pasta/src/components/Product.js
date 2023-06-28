 import React from 'react'
import '../pages/Menu/menu.css'
function Product (props){
    const{menuitem,onadd} = props
    return (
        <div className ="big">
         <img className='small' src={menuitem.image} alt={menuitem.name}></img> 
         <h3>{menuitem.name}</h3>
         <div>${menuitem.price}</div>
         <div>
            <button onClick={() => onadd(menuitem)} >Add to Cart</button>
         </div>
        </div>
    )
}
export default Product