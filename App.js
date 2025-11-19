// App.js
// Entry point of the React Native App
// Sets up Navigation + Cart Provider (global cart state)

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { CartProvider } from './src/context/CartContext';

// Screens
import MenuScreen from './src/screens/MenuScreen';
import CartScreen from './src/screens/CartScreen';
import OrderSummaryScreen from './src/screens/OrderSummaryScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <CartProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Menu">

          <Stack.Screen
            name="Menu"
            component={MenuScreen}
            options={{ title: "Food Menu" }}
          />

          <Stack.Screen
            name="Cart"
            component={CartScreen}
            options={{ title: "Your Cart" }}
          />

          <Stack.Screen
            name="OrderSummary"
            component={OrderSummaryScreen}
            options={{ title: "Order Summary" }}
          />

        </Stack.Navigator>
      </NavigationContainer>
    </CartProvider>
  );
}
