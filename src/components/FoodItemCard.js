// src/components/FoodItemCard.js
// A reusable UI card for displaying menu items (image, title, description, price)
// Includes "Add to Cart" button.

import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

export default function FoodItemCard({ item, onAdd }) {
  return (
    <View style={styles.card}>
      <Image
        source={{ uri: item.imageUrl || "https://via.placeholder.com/100" }}
        style={styles.image}
      />

      <View style={styles.infoContainer}>
        <Text style={styles.name}>{item.name}</Text>

        <Text style={styles.description} numberOfLines={2}>
          {item.description}
        </Text>

        <View style={styles.footerRow}>
          <Text style={styles.price}>₹{Number(item.price).toFixed(2)}</Text>

          <TouchableOpacity style={styles.addButton} onPress={onAdd}>
            <Text style={styles.addButtonText}>Add</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

// ---------------------- Styles ----------------------
const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    backgroundColor: "#fff",
    padding: 12,
    borderRadius: 10,
    marginBottom: 12,
    elevation: 3
  },
  image: {
    width: 90,
    height: 90,
    borderRadius: 10
  },
  infoContainer: {
    flex: 1,
    marginLeft: 12
  },
  name: {
    fontSize: 16,
    fontWeight: "bold"
  },
  description: {
    color: "#666",
    marginTop: 3
  },
  footerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
    alignItems: "center"
  },
  price: {
    fontSize: 16,
    fontWeight: "bold"
  },
  addButton: {
    backgroundColor: "#1976D2",
    paddingVertical: 6,
    paddingHorizontal: 15,
    borderRadius: 8
  },
  addButtonText: {
    color: "#fff",
    fontWeight: "bold"
  }
});
