
import React, { useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { getApps, initializeApp } from "firebase/app";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// Komponenter for dine skærme
import CarList from "./components/CarList";
import CarDetails from "./components/CarDetails";
import Add_edit_Car from "./components/Add_edit_Car";

const firebaseConfig = {
  apiKey: "AIzaSyDaXVV5IYG9jVe2hqyunWsMD3dN-HgmMTA",
  authDomain: "tutormatch3520-7cf45.firebaseapp.com",
  databaseURL:
    "https://tutormatch3520-7cf45-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "tutormatch3520-7cf45",
  storageBucket: "tutormatch3520-7cf45.appspot.com",
  messagingSenderId: "1099419957035",
  appId: "1:1099419957035:web:baa4db538e00b6f70d376e",
};

export default function App() {
  // Initialize Firebase
  useEffect(() => {
    if (getApps().length < 1) {
      initializeApp(firebaseConfig);
      console.log("Firebase On!");
    }
  }, []);

  // Opret en Stack Navigator
  const Stack = createStackNavigator();

  // Stack navigation funktion
  const StackNavigation = () => {
    return (
      <Stack.Navigator initialRouteName="CarList">
        {/* Den første skærm som brugeren ser */}
        <Stack.Screen name="CarList" component={CarList} />
        <Stack.Screen name="CarDetails" component={CarDetails} />
        <Stack.Screen name="Add_edit_Car" component={Add_edit_Car} />
      </Stack.Navigator>
    );
  };

  return (
    <NavigationContainer>
      {/* Du kan tilføje en Tab navigator her, hvis du ønsker det */}
      <StackNavigation />
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});





