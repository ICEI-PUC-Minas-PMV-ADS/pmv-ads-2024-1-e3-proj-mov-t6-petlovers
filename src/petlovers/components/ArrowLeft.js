import React from 'react';
import { TouchableOpacity, StyleSheet, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const ArrowLeft = () => {
  const navigation = useNavigation();

  const handlePress = () => { //volta para a tela anterior
    navigation.goBack();
  };

  return (
    <View style={styles.arrow}>
        <TouchableOpacity onPress={navigation.goBack} style={styles.arrowContainer}>
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  arrow: {
    flexDirection: 'row',
    paddingVertical: 10,
    marginLeft: 15,
    marginTop: 30,
  },
});

export default ArrowLeft;
