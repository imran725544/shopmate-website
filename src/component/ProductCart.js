import { useEffect, useState } from "react";

import { useCart } from "../context/CartContext";

import "./ProductCart.css";

const ProductCart = ({ product }) => {
  const { cartList, addToCart, removeFromCart } = useCart();
  const [ isInCart, setIsInCart ] = useState(false);
  const { id, image, name, price } = product;

  useEffect(() => { 
    const productIsInCart = cartList.find(cartItem => cartItem.id === id);

    if (productIsInCart) {
      setIsInCart(true);
    } else {
      setIsInCart(false);
    }
  }, [cartList, id]);

  return (
    <div className="productcart">
      <img src={image} alt="pic" />
      <p className="name">{name}</p>

      <div className="action">
        <p>${price}</p>

        {isInCart ? (
          <button onClick={() => removeFromCart(product)}>Remove</button>
        ) : (
          <button onClick={() => addToCart(product)}>Add to Cart</button>
        )}
      </div>
    </div>
  );
};

export default ProductCart;
