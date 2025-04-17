import React, { createContext, useState } from 'react';
import Swal from 'sweetalert2';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    if (cartItems.some((item) => item.id === product.id)) {
      Swal.fire({
        icon: 'warning',
        title: 'Oops...',
        text: 'This product is already in your cart!',
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
      });
    } else {
      setCartItems((prevItems) => [...prevItems, product]);
      Swal.fire({
        icon: 'success',
        title: 'Added!',
        text: 'Product has been added to your cart.',
        confirmButtonColor: '#3085d6',
      });
    }
  };

  const clearCart = () => {
    setCartItems([]);
    Swal.fire({
      icon: 'success',
      title: 'Cleared!',
      text: 'Your cart has been cleared.',
      confirmButtonColor: '#3085d6',
    });
  };

  const cartCount = cartItems.length;

  return (
    <CartContext.Provider value={{ cartItems, cartCount, addToCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};