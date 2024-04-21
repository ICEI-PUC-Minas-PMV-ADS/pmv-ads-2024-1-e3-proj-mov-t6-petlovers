import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Header from './components/Header';
import Navigations from './navigations/Navigations';
import { initializeApp } from 'firebase/app';

export default function App() {

  const firebaseConfig = {
    apiKey: "AIzaSyC7fzOdKdqh16p9KIio1fRJ3P89vK-r3_A",
    authDomain: "petlovers-f3fd9.firebaseapp.com",
    projectId: "petlovers-f3fd9",
    storageBucket: "petlovers-f3fd9.appspot.com",
    messagingSenderId: "830194750691",
    appId: "1:830194750691:web:333f00570f025f1cd921d6",
    measurementId: "G-4TKLFHVG8R"
  };

  initializeApp(firebaseConfig);

  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        <StatusBar style="auto" />
        <Header />
        <Navigations />
      </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});




//const loadFonts = async () => {
//  await useFonts({
//    'Poppins-Regular': require('./assets/Poppins-Regular.ttf'),
//    'Poppins-Medium': require('./assets/Poppins-Medium.ttf'),
//    'Poppins-SemiBold': require('./assets/Poppins-SemiBold.ttf'),
//    'Poppins-Light': require('./assets/Poppins-Light.ttf'),
//    'Poppins-ExtraLight': require('./assets/Poppins-ExtraLight.ttf'),
//    'Poppins-Italic': require('./assets/Poppins-Italic.ttf')
//  });
//};