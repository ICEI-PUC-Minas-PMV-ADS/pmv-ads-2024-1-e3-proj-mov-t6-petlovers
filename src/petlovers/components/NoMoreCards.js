import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const NoMoreCards = () => (
  <View style={styles.card}>
    <Text style={styles.noMoreCardsText}>Ops, não há mais perfis!</Text>
  </View>
);

const styles = StyleSheet.create({
  card: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  noMoreCardsText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: "#827397",
    marginTop: 100,
  },
});

export default NoMoreCards;
