import React from 'react';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

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
        />
    );
}
