import React, { useEffect, useState, useContext } from 'react';
import { View, FlatList, ActivityIndicator, Text } from 'react-native';
import { collection, onSnapshot } from 'firebase/firestore';
import { db } from '../firebase';
import FoodItemCard from '../components/FoodItemCard';
import { CartContext } from '../context/CartContext';

export default function MenuScreen({ navigation }) {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState(null);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    const unsub = onSnapshot(
      collection(db, 'menu'),
      snapshot => {
        const data = snapshot.docs.map(d => ({ id: d.id, ...d.data() }));
        setItems(data);
        setErr(null);
        setLoading(false);
      },
      error => {
        setErr(error.message || 'Failed to load menu');
        setLoading(false);
      }
    );
    return () => unsub();
  }, []);

  if (loading) return <ActivityIndicator style={{ marginTop: 30 }} size="large" />;
  if (err) return <View style={{ padding: 20 }}><Text style={{ color: 'red' }}>{err}</Text></View>;

  return (
    <FlatList
      data={items}
      keyExtractor={i => i.id}
      renderItem={({ item }) => (
        <FoodItemCard item={item} onAdd={() => addToCart(item, 1)} />
      )}
      contentContainerStyle={{ padding: 12 }}
    />
  );
}
