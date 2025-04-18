import React, { createContext, useState } from 'react';
import Swal from 'sweetalert2';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    const existingItem = cartItems.find((item) => item.id === product.id);
    if (existingItem) {
      
      setCartItems((prevItems) =>
        prevItems.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
      Swal.fire({
        icon: 'success',
        title: 'Updated!',
        text: 'Product quantity increased in your cart.',
        confirmButtonColor: '#3085d6',
      });
    } else {
      
      setCartItems((prevItems) => [...prevItems, { ...product, quantity: 1 }]);
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

  const increaseQuantity = (id) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQuantity = (id) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const removeFromCart = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
    Swal.fire({
      icon: 'success',
      title: 'Removed!',
      text: 'Product has been removed from your cart.',
      confirmButtonColor: '#3085d6',
    });
  };

  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        cartCount,
        addToCart,
        clearCart,
        increaseQuantity,
        decreaseQuantity,
        removeFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
