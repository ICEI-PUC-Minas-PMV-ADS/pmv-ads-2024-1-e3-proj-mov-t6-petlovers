import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const CardDetailsPet= () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>labrador</Text>
      <Text style={styles.description}>Sexo</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: '#CCCCCC', 
    borderRadius: 8,
    padding: 10,
    marginTop: 20,
    width: 85,
    alignItems: 'center',
    marginRight: 7,
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 5,
    color: "#827397",
  },
  description: {
    fontSize: 13,
    color: '#5F5B5B',
    textAlign: 'center',
  },
});

export default CardDetailsPet;
