import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Header from './components/Header';
import BottomNavigationComponent from './components/BottomNavigationComponent';

export default function App() {
  return (
    <SafeAreaProvider>
      <View>
        <StatusBar style="auto" />
        <Header />
        <BottomNavigationComponent />
      </View>
    </SafeAreaProvider>
  );
}

