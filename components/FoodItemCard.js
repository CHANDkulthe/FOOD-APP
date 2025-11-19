// src/components/FoodItemCard.js
// Reusable card displaying image, title, description, price, and Add button.

import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

export default function FoodItemCard({ item, onAdd }) {
  return (
    <View style={styles.card}>
      <Image source={{ uri: item.imageUrl || 'https://via.placeholder.com/80' }} style={styles.img} />
      <View style={styles.info}>
        <Text style={styles.name}>{item.name}</Text>
        <Text numberOfLines={2} style={styles.desc}>{item.description}</Text>
        <View style={styles.footer}>
          <Text style={styles.price}>₹{Number(item.price).toFixed(2)}</Text>
          <TouchableOpacity style={styles.btn} onPress={onAdd}>
            <Text style={styles.btnText}>Add</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: { flexDirection: 'row', padding: 12, backgroundColor: '#fff', borderRadius: 8, marginBottom: 10 },
  img: { width: 80, height: 80, borderRadius: 8 },
  info: { flex: 1, marginLeft: 12 },
  name: { fontSize: 16, fontWeight: '600' },
  desc: { color: '#555', marginTop: 4 },
  footer: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 8 },
  price: { fontWeight: '700' },
  btn: { backgroundColor: '#1976D2', paddingVertical: 6, paddingHorizontal: 12, borderRadius: 6 },
  btnText: { color: '#fff', fontWeight: '600' }
});
