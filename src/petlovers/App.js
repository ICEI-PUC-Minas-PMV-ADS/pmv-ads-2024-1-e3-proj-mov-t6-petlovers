import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

//import { useFonts } from 'expo-font';

import Header from './components/Header';
import Login from './pages/Login'
import Cadastro from './pages/Cadastro';
import BottomNavigation  from './navigation/BottomNavigation';

export default function App() {
  return (
  <SafeAreaProvider>
    <BottomNavigation/>
  </SafeAreaProvider>   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 20,
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
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
