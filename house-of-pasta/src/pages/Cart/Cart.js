import React from 'react'
function Cart(props) {
const {cartItems,onadd,onremove} = props
const total = cartItems.reduce((a,c) => a+c.price * c.qty,0)
return (
    <aside className='block-col-1'>
        <h2>cart items</h2>
        <div>
            {cartItems.length === 0 && <div>Cart is empty</div>}
        </div>
        {cartItems.map((item) => (
            <div key={item.id} classname="row">
                <div className='col-2'>{item.name}</div>
                <div className='col-2'>
                    <button onClick={() => onadd(item)} className='add'>+</button>
                    <button onClick={() => onremove(item)} className='remove'>-</button>
                    </div>
                    <div className='col-2 text-right'>{item.qty} x ${item.price}</div>
                </div>
            
        ))}
        {cartItems.length !== 0 && (
            <>
            <hr></hr>
            <div className='row'>Total Price</div>
            <div>${total}</div>
            </>
        )}
    </aside>
)
}
export default Cart