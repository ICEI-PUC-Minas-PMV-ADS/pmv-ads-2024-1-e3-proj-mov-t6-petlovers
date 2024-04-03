import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from './pages/Login';
import Cadastro from './pages/Cadastro';
import BottomNavigation from './components/BottomNavigation';
import Header from './components/Header';


const Stack = createStackNavigator();

export default function App() {
  return (
<SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator 
          screenOptions={{
            contentStyle: {backgroundColor: '#3f2f25'},
            headerShown: false,
          }}>
          <Stack.Screen name='Main' component={MainScreen} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Cadastro" component={Cadastro} options={{headerShown:true}} />
           {/* Colocar aqui mais navegacoes de telas*/}
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

function MainScreen() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Header />
      <BottomNavigation />
    </View>
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
