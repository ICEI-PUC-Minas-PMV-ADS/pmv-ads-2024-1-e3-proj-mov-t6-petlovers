import { Card } from 'react-native-paper';
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import SwipeCards from 'react-native-swipe-cards';
import Icon from 'react-native-vector-icons/Ionicons';


const profiles = [
  { id: 1, name: 'Doguinho', description: 'Um cão adorável', image: { uri: 'https://picsum.photos/700' } },
  { id: 2, name: 'Gatinho', description: 'Um gato fofo', image: { uri: 'https://picsum.photos/700' } },
  { id: 3, name: 'Coelhinho', description: 'Um coelho simpático', image: { uri: 'https://picsum.photos/700' } },
];

const CardComponent = ({ profile, handleLike, handleDislike }) => (
  <Card style={styles.card}>
    <Card.Cover
      source={profile.image}
      style={{ height: 500, borderRadius: 0 }}
    />
   
    <View style={styles.petData}>
      <Text style={styles.text}>Scooby, 6 anos</Text>
      <Text style={styles.raca}>Labrador</Text>
      <View style={styles.local}>
      <Icon style={styles.icon} name="location-outline" size={19} />
      <Text style={styles.text1}>Sorocaba, sp</Text>
      </View>
    </View>
    <View style={styles.buttonContainer}>
      <TouchableOpacity onPress={handleDislike} style={[styles.button, styles.likeButton]}>
        <Text style={[styles.buttonText, { color: 'yellow' }]}>✖️</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleLike} style={[styles.buttonInfo, styles.infoButton]}>
      <Icon name="information-circle" size={29} color="blue" />
      </TouchableOpacity>
      <TouchableOpacity onPress={handleLike} style={[styles.button, styles.dislikeButton]}>
        <Text style={styles.buttonText}>♥️</Text>
      </TouchableOpacity>
    </View>
  </Card>
);

const NoMoreCards = () => (
    <View style={styles.card}>
      <Text style={styles.noMoreCardsText}>Não há mais perfis</Text>
    </View>
  );
  
const MatchCard = () => {
  const [currentProfiles, setCurrentProfiles] = useState(profiles);

  const handleLike = () => {
    // Lógica para quando o usuário curte um perfil
  };

  const handleDislike = () => {
    // Lógica para quando o usuário rejeita um perfil
  };

  return (
    <View style={styles.container}>
      <SwipeCards
        cards={currentProfiles}
        renderCard={(profile) => <CardComponent profile={profile} handleLike={handleLike} handleDislike={handleDislike} />}
        renderNoMoreCards={() => <NoMoreCards />}
        useNativeDriver= {true }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: 500, 
  },
  cardImage: {
    flex: 1,
  },
  raca: {
    color: 'white',
    fontSize: 18,
    marginTop: 13,
    marginBottom: 5,
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
    bottom: 20,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    marginLeft: 50,
    marginBottom: 50,
  },
  container: {
    marginTop: 110,
  },
  text: {
    color: 'white',
    fontSize: 27,
    marginTop: 20,
    fontWeight: 'bold',
  },
  text1: {
    color: 'white',
    fontSize: 18,
    marginTop: 13,
    marginBottom: 16,
    marginLeft: 5,
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
    marginLeft: 70,
    marginTop: -200,
    marginBottom: 60,
  }
});

export default MatchCard;


