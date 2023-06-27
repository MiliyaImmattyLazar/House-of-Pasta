 import React from 'react'
function Product (props){
    const{menuitem,onadd} = props
    return (
        <div>
         <img className='small' src={menuitem.image} alt={menuitem.name}></img> 
         <h3>{menuitem.name}</h3>
         <div>${menuitem.price}</div>
         <div>
            <button onClick={() => onadd(menuitem)} >add to cart</button>
         </div>
        </div>
    )
}
export default Product