import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Cadastro = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Cadastro</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default Cadastro;