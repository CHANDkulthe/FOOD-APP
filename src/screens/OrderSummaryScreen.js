// src/screens/OrderSummaryScreen.js
// Shows final order summary and submits order to Firebase Firestore.

import React, { useContext, useState } from 'react';
import { View, Text, TouchableOpacity, Alert, StyleSheet, ActivityIndicator } from 'react-native';
import { CartContext } from '../context/CartContext';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../firebase';

export default function OrderSummaryScreen({ navigation }) {
  const { cartItems, total, clearCart } = useContext(CartContext);
  const [loading, setLoading] = useState(false);

  const handleSubmitOrder = async () => {
    if (cartItems.length === 0) {
      Alert.alert("Cart is empty", "Add items before placing an order.");
      return;
    }

    setLoading(true);

    try {
      // Save order to Firestore
      await addDoc(collection(db, 'orders'), {
        items: cartItems,
        total: total,
        createdAt: serverTimestamp()
      });

      setLoading(false);

      Alert.alert("Order Placed", "Your order has been submitted successfully!");
      clearCart(); // empty the cart
      navigation.navigate("Menu");

    } catch (error) {
      setLoading(false);
      Ale
