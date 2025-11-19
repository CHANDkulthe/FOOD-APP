# FOOD-APP
Develop a simple food-ordering mobile app interface using React Native that fetches menu items from Firebase and allows users to place orders


README 

Food Order App – React Native (Expo) + Firebase
Description: This is a simple mobile food–ordering application built using Expo React Native. It allows users to view menu items from Firebase Firestore, add items to a cart, review the cart, and place an order. All menu data and orders are stored in Firebase.


Features:

1. Menu Screen
Fetches menu items from Firebase Firestore in real-time
Displays food image, name, description, and price
Allows the user to select quantity and add items to the cart


2. Cart Screen
Shows selected food items from the cart
Allows users to update quantities or remove items
Calculates and displays the total price
Button to proceed to checkout


3. Order Summary Screen
Shows list of items user is ordering
Shows total cost
Submits the order to Firestore database (orders collection)

Project Structure:

App.js firebase/firebaseConfig.js context/CartContext.js components/MenuItemCard.js screens/MenuScreen.js screens/CartScreen.js screens/OrderSummary.js screenshots/menu.png screenshots/cart.png screenshots/summary.png README.txt


Firebase Setup Instructions:

1. Go to the Firebase Console online.
2. Create a new Firebase project.
3. Enable Firestore Database.
4. Start Firestore in Test Mode for development.
5. Copy your Firebase configuration from Firebase Console.
6. Replace the placeholder values in: firebase/firebaseConfig.js
Example Firebase config fields to replace: apiKey authDomain projectId storageBucket messagingSenderId appId

Firestore Collections:

Collection: menu Fields: name (string) description (string) price (number) image (string URL)

Collection: orders Automatically created when the user confirms an order. Fields: items (array) total (number) createdAt (timestamp)

How to Run the App (Android):
1. Install Node.js and Expo CLI. Command: npm install -g expo-cli
2. Install project dependencies. Command: npm install
3. Run project on Android. Command: npm run android Or: expo start
4. You can run it on:

Android Studio emulator
Physical Android phone using the Expo Go app



