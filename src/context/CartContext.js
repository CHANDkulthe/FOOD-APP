// src/context/CartContext.js
// Global cart state using React Context API.
// Handles: Add to cart, update quantity, remove, clear cart, calculate total.

import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  // cartItems structure:
  // { id, name, price, description, imageUrl, qty }

  // Add item or increase quantity
  const addToCart = (item, qty = 1) => {
    setCartItems(prev => {
      const existing = prev.find(i => i.id === item.id);

      if (existing) {
        // Increase quantity if item already exists
        return prev.map(i =>
          i.id === item.id ? { ...i, qty: i.qty + qty } : i
        );
      }

      // New item added
      return [...prev, { ...item, qty }];
    });
  };

  // Update quantity of a specific item
  const updateQty = (id, qty) => {
    setCartItems(prev => {
      if (qty <= 0) {
        return prev.filter(i => i.id !== id); // remove item
      }
      return prev.map(i =>
        i.id === id ? { ...i, qty } : i
      );
    });
  };

  // Remove item from cart
  const removeItem = id => {
    setCartItems(prev => prev.filter(i => i.id !== id));
  };

  // Clear the entire cart (used after submitting order)
  const clearCart = () => {
    setCartItems([]);
  };

  // Calculate total price
  const total = cartItems.reduce(
    (sum, i) => sum + i.price * i.qty,
    0
  );

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        updateQty,
        removeItem,
        clearCart,
        total
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
