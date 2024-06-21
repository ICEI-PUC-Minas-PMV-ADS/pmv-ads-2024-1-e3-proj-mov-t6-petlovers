import React, { useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import Header from "./components/Header";
import Navigations from "./navigations/Navigations";
import { initializeApp } from "firebase/app";
import store from './redux/store';
import { Provider } from 'react-redux';
import { getAuth } from "firebase/auth";
import { LogBox } from 'react-native';




export default function App() {
  
  LogBox.ignoreAllLogs(true);
 
  const firebaseConfig = {
    apiKey: "AIzaSyC7fzOdKdqh16p9KIio1fRJ3P89vK-r3_A",
    authDomain: "petlovers-f3fd9.firebaseapp.com",
    projectId: "petlovers-f3fd9",
    storageBucket: "petlovers-f3fd9.appspot.com",
    messagingSenderId: "830194750691",
    appId: "1:830194750691:web:333f00570f025f1cd921d6",
    measurementId: "G-4TKLFHVG8R",
  }; 

  initializeApp(firebaseConfig);

  return (
    <Provider store={store}>
      <View style={styles.container}>
        <StatusBar style="auto" />
        <Header />
        <Navigations />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});

