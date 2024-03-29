import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, Stack } from 'react-native';
import Header from './components/Header';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
    </SafeAreaView>
    
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 50,
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
