import { Card } from 'react-native-paper';
import React, { useState, useEffect, useRef } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import SwipeCards from 'react-native-swipe-cards';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

import { getAllPetsAPI_URL } from "../apiConfig";
import NoMoreCards from './NoMoreCards';

import { LogBox } from 'react-native';


const CardComponent = ({ item, handleLike, handleDislike, handleCardPress }) => (
  <Card style={styles.card}>
    <Card.Cover
      source={{ uri: item.imageURL }}
      style={{ height: 400, borderRadius: 0 }}
      resizeMode="cover"
    />
    <View style={styles.petData}>
      <Text style={styles.text}>{item.nome}, {item.idade} anos</Text>
      <Text style={styles.raca}>{item.raca}</Text>
      <View style={styles.local}>
        <Icon style={styles.icon} name="location-outline" size={19} />
        <Text style={styles.text1}>{item.cidade}, {item.estado}</Text>
      </View>
    </View>
    <View style={styles.buttonContainer}>
      <TouchableOpacity onPress={() => handleDislike()} style={[styles.button, styles.likeButton]}>
        <Text style={[styles.buttonText, { color: 'yellow' }]}>✖️</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handleCardPress(item.id, item.nome, item.idade, item.cidade, item.imageURL, item.estado, item.sobre, item.raca, item.sexo, item.cor, item.porte)} style={[styles.buttonInfo, styles.infoButton]}>
        <Icon name="information-circle" size={29} color="blue" />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handleLike()} style={[styles.button, styles.dislikeButton]}>
        <Text style={styles.buttonText}>♥️</Text>
      </TouchableOpacity>
    </View>
  </Card>
);

const MatchCard = () => {
  const [data, setData] = useState([]);
  const navigation = useNavigation();
  const swiperRef = useRef(null);

  useEffect(() => {
    fetch(getAllPetsAPI_URL)
      .then((response) => response.json())
      .then((data) => setData(data.data))
      .catch((error) => console.error('Error:', error));
  }, []);

  useEffect(() => {
    LogBox.ignoreLogs(['Animated: `useNativeDriver`']);
}, [])

  const handleLike = () => {
    //swiperRef.current.swipeRight();
    // Lógica para quando o usuário curte um perfil 
  };

  const handleDislike = () => {
    //swiperRef.current.swipeLeft();
    // Lógica para quando o usuário rejeita um perfil 
  };

  const handleCardPress = (id, nome, idade, cidade, imageURL, estado, sobre, raca, sexo, cor, porte) => {
    navigation.navigate('InfoPet', { id, nome, idade, cidade, imageURL, estado, sobre, raca, sexo, cor, porte });
  };

  return (
    <View style={styles.container}>
      <SwipeCards
        ref={swiperRef}
        cards={data}
        renderCard={(item) => <CardComponent item={item} handleLike={handleLike} handleDislike={handleDislike} handleCardPress={handleCardPress} />}
        renderNoMoreCards={() => <NoMoreCards />}
        useNativeDriver={true}
      />
    </View>
  );
};


const styles = StyleSheet.create({
  cardImage: {
    flex: 1,
  },
  raca: {
    color: 'white',
    fontSize: 18,
    marginTop: 13,
    marginBottom: 5,
    fontWeight: 'bold',
  },
  button: {
    bottom: 20,
    width: 60,
    height: 60,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonInfo: {
    bottom: 20,
    width: 50,
    height: 50,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonTextDislike: {
    color: 'yellow',
    fontSize: 26,
  },
  likeButton: {
    backgroundColor: 'white',
    right: 80,
    fontSize: 26,
  },
  dislikeButton: {
    backgroundColor: 'white',
    right: 20,
    color: 'yellow',
    fontSize: 26,
  },
  infoButton:{
    backgroundColor: 'white',
    right: 50,
  },
  buttonText: {
    fontSize: 27,
    color: 'white',
  },
  buttonContainer: {
    top: 14,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    marginLeft: 50,
  },
  container: {
    marginTop: 70,
  },
  text: {
    color: 'white',
    fontSize: 30,
    marginTop: 20,
    fontWeight: 'bold',
  },
  text1: {
    color: 'white',
    fontSize: 18,
    marginTop: 13,
    marginBottom: 16,
    marginLeft: 5,
    fontWeight: 'bold',
  },
  local: {
    flexDirection: 'row',
  },
  icon: {
    marginTop: 15,
    color: "white",
    width: 20,
  },
  petData: {
    marginLeft: 10,
    marginTop: -200,
    marginBottom: 60,
  }
});

export default MatchCard;


