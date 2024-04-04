import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import Header from './components/Header';
import Navigations from './navigations/Navigations';

export default function App() {
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
