import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]); // { id, name, price, qty, imageUrl }

  const addToCart = (item, qty = 1) => {
    setCartItems(prev => {
      const existing = prev.find(i => i.id === item.id);
      if (existing) {
        return prev.map(i => i.id === item.id ? { ...i, qty: i.qty + qty } : i);
      }
      return [...prev, { ...item, qty }];
    });
  };

  const updateQty = (id, qty) => {
    setCartItems(prev => {
      if (qty <= 0) return prev.filter(i => i.id !== id);
      return prev.map(i => i.id === id ? { ...i, qty } : i);
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
