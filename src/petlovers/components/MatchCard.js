import { Card } from 'react-native-paper';
import React, { useState, useEffect, useRef } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import SwipeCards from 'react-native-swipe-cards';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { getAllPetsAPI_URL } from "../apiConfig";
import NoMoreCards from './NoMoreCards';
import { LogBox } from 'react-native';
import { getAuth } from "firebase/auth";
import {baseAPI_URL} from '../apiConfig';

const CardComponent = ({ item, handleCardPress }) => (
  <Card style={styles.card}>
    <Card.Cover
      source={{ uri: item.imageURL }}
      style={{ height: 400, borderRadius: 0 }}
      resizeMode="cover"
    />
    <View style={styles.petData}>
      <Text style={styles.text}>{item.nome}, {item.idade}, anos</Text>
      <Text style={styles.raca}>{item.raca}</Text>
      <View style={styles.local}>
        <Icon style={styles.icon} name="location-outline" size={19} />
        <Text style={styles.text1}>{item.cidade}, {item.estado}</Text>
      </View>
    </View>
    <View style={styles.buttonContainer}>
      <View style={[styles.button, styles.likeButton]}>
        <Text style={[styles.buttonText, { color: 'yellow' }]}>✖️</Text>
      </View>
      <TouchableOpacity onPress={() => handleCardPress(item)} style={[styles.buttonInfo, styles.infoButton]}>
        <Icon name="information-circle" size={29} color="blue" />
      </TouchableOpacity>
      <View style={[styles.button, styles.dislikeButton]}>
        <Text style={styles.buttonText}>♥️</Text>
      </View>
    </View>
  </Card>
);

const MatchCard = ({ searchTerm }) => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [petId, setPetId] = useState(null);
  const navigation = useNavigation();
  const swiperRef = useRef(null);

  const auth = getAuth();
  const user = auth.currentUser;

  // Função para obter dados do pet
  const fetchPetData = async () => {
    try {
      if (!user) return;
      const userId = user.uid;
    
      const response = await fetch(`${baseAPI_URL}/api/get-pet-data/${userId}`);
      const responseData = await response.json();
    
      const petId = responseData.petId;
      setPetId(petId);
    
    } catch (error) {
      console.error("Erro ao obter dados do pet:", error);
    }
  };

  useEffect(() => {
    fetchPetData();
  }, [user]);

  //renderiza todos os pets cadastrados
  useEffect(() => {
    fetch(getAllPetsAPI_URL)
      .then((response) => response.json())
      .then((responseData) => {
        setData(responseData.data);
        setFilteredData(responseData.data);
      })
      .catch((error) => console.error('Error:', error));
  }, []);

  
    //Funcao match
    const handleYup = (item) => {
      if (!petId) return;
  
      fetch(`${baseAPI_URL}/api/match`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          pet1_id: petId, // Id do pet autenticado
          pet2_id: item.id, // Id do pet do card atual
        }),
      })
        .then(response => response.json())
        .then(data => {
          Alert.alert('Gostei!', `Você curtiu ${item.nome}`);
        })
        .catch(error => {
          console.error('Erro ao enviar like:', error);
        });
    };
  
    const handleNope = (item) => {
      Alert.alert('Não Gostei!', `Você não gostou do pet ${item.nome}`);
    };

  //funcao de pesquisa
  useEffect(() => {
    if (searchTerm) {
      const filtered = data.filter(item =>
        item.nome.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.raca.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.cidade.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.estado.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredData(filtered);
    } else {
      setFilteredData(data);
    }
  }, [searchTerm, data]);

  useEffect(() => {
    LogBox.ignoreLogs(['Animated: `useNativeDriver`']);
  }, []);

  const handleCardPress = (item) => {
    navigation.navigate('InfoPet', { ...item });
  };

  const noResults = filteredData.length === 0;

  return (
    <View style={styles.container}>
         {noResults ? (
        <Text style={styles.noResultsText}>Nenhum perfil encontrado.</Text>
      ) : (
      <SwipeCards
        ref={swiperRef}
        cards={searchTerm ? filteredData : data}
        renderCard={(item) => <CardComponent item={item} handleCardPress={handleCardPress} />}
        renderNoMoreCards={() => <NoMoreCards />}
        useNativeDriver={true}
        handleYup={handleYup}
        handleNope={handleNope}
      />
      )}
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
    right: 80,
    fontSize: 26,
  },
  dislikeButton: {
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
    marginTop: 30,
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




