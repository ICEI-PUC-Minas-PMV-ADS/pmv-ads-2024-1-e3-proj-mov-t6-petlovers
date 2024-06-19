import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Alert, Image } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons'; // Importando o ícone do Expo
import { useNavigation } from '@react-navigation/native';


const Favoritos = () => {
  const [favoritos, setFavoritos] = useState([]);
  const navigation = useNavigation();


  useFocusEffect(
    React.useCallback(() => {
      const loadFavoritos = async () => {
        try {
          const favoritosData = await AsyncStorage.getItem('favoritos');
          if (favoritosData !== null) {
            setFavoritos(JSON.parse(favoritosData));
          }
        } catch (error) {
          console.error('Erro ao carregar favoritos:', error);
        }
      };

      loadFavoritos();

      return () => {
        // Optional: Any cleanup code if needed
      };
    }, [])
  );

  const removeFavorito = async (index) => {
    try {
      const updatedFavoritos = favoritos.filter((_, i) => i !== index);
      await AsyncStorage.setItem('favoritos', JSON.stringify(updatedFavoritos));
      setFavoritos(updatedFavoritos);
    } catch (error) {
      console.error('Erro ao remover favorito:', error);
    }
  };

  const confirmRemoverFavorito = (index) => {
    Alert.alert(
      'Remover Favorito',
      'Tem certeza de que deseja remover este pet dos favoritos?',
      [
        {
          text: 'Cancelar',
          style: 'cancel',
        },
        {
          text: 'Remover',
          onPress: () => removeFavorito(index),
          style: 'destructive',
        },
      ],
      { cancelable: true }
    );
  };

    // Navegação para a tela Info com os parâmetros salvos
    const handleCardPress = (userId, nome, idade, cidade, imageURL, estado, sobre, raca, sexo, cor, porte, id) => {
      navigation.navigate('InfoPet', { userId, nome, idade, cidade, imageURL, estado, sobre, raca, sexo, cor, porte, id});
    };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Favoritos</Text>
      <FlatList
        data={favoritos}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <TouchableOpacity style={styles.card} onPress={() => handleCardPress(item.userId, item.nome, item.idade, item.cidade, item.imageURL, item.estado, item.sobre, item.raca, item.sexo, item.cor, item.porte, item.id)}>
            <Image source={{ uri: item.imageURL }} style={styles.petImage} />
            <View style={styles.petInfo}>
              <Text style={styles.cardText}>{item.nome}</Text>
              <Text style={styles.cardText}>{item.idade} anos</Text>
              <Text style={styles.cardText}>{item.raca}</Text>
            </View>
            {/* Substituído o botão de remover pelo botão de coração */}
            <TouchableOpacity style={styles.heartButton} onPress={() => confirmRemoverFavorito(index)}>
              <Ionicons name="heart" size={24} color="red" />
            </TouchableOpacity>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F5F5F5',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 24,
    marginTop: 15,
    marginBottom: 25,
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
  },
  petImage: {
    width: 60,
    height: 60,
    borderRadius: 30, // Torna a imagem redonda
    marginRight: 10,
  },
  petInfo: {
    flex: 1,
  },
  cardText: {
    fontSize: 18,
  },
  heartButton: {
    // Botão de coração
    padding: 10,
  },
});

export default Favoritos;
