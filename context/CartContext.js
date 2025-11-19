// src/context/CartContext.js
// Simple provider for cart operations: add, update, clear.
// Small, well-documented methods to be easily parsed by maintainers/ATS scans.

import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]); // [{ id, name, price, qty }]

  const addToCart = (item, qty = 1) => {
    setCartItems(prev => {
      const exists = prev.find(i => i.id === item.id);
      if (exists) {
        return prev.map(i => i.id === item.id ? { ...i, qty: i.qty + qty } : i);
      }
      return [...prev, { ...item, qty }];
    });
  };

  const updateQty = (id, qty) => {
    setCartItems(prev => {
      if (qty <= 0) return prev.filter(i => i.id !== id);
      return prev.map(i => (i.id === id ? { ...i, qty } : i));
    });
  };

  const clearCart = () => setCartItems([]);

  const total = cartItems.reduce((s, i) => s + i.price * i.qty, 0);

  return (
    <CartContext.Provider value={{ cartItems, addToCart, updateQty, clearCart, total }}>
      {children}
    </CartContext.Provider>
  );
};
