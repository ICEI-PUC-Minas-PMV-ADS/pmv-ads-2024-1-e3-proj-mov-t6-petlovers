import React from 'react';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet } from 'react-native'; 

export default function ArrowLeft() {
  const navigation = useNavigation();
  
  const goToHome = () => {
    navigation.navigate('Home');
  };

    return (
        <AntDesign
          name="arrowleft" 
          size={24} color="black" 
          onPress={goToHome}
          style={styles.arrow}
        />
    );
}

const styles = StyleSheet.create({ 
    arrow: {
      position: 'absolute',
      top: 80,
      marginLeft: 15,
      zIndex: 1,
    },
});
