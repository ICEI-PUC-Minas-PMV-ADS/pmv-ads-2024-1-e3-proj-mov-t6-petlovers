import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const ArrowLeft = () => {
  const navigation = useNavigation();

  const handlePress = () => { //volta para a tela anterior
    navigation.goBack();
  };

  return (
    <TouchableOpacity onPress={handlePress} style={styles.container}>
      <Ionicons name="arrow-back" size={24} color="black" />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 20, 
    left: 20,
  },
});

export default ArrowLeft;
