import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

//import { useFonts } from 'expo-font';

import Header from './components/Header';
import BottomNavigation  from './components/BottomNavigation';

export default function App() {
  return (
  <SafeAreaProvider style={styles.container}>
    <StatusBar style="auto" />
    <Header />
    <BottomNavigation /> 
  </SafeAreaProvider>   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent', 
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
