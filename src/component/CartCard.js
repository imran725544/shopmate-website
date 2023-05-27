
import React from 'react'
import {useCart} from '../context/CartContext'
import './CartCard.css';
export const CartCard = ({product}) => {
  const {removeFromCart} = useCart()
    const {name, price, image} = product
  return (
   <div className='cartcard'>
        <img src={image} alt={name} />
        <p className='productname'>{name}</p>
        <p className='productprice'>${price}</p>
        <button onClick={() => removeFromCart(product)}>Remove</button>
       
   </div>
  )
}
