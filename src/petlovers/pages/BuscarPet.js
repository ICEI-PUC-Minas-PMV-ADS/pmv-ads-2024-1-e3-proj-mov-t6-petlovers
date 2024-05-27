import React, { useState, useEffect } from 'react';
import { View, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { getAuth } from "firebase/auth";
import ArrowLeft from "../components/ArrowLeft";
import MatchCard from "../components/MatchCard";
import SearchBar from "../components/SearchBar";
import Login from "./Login";
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function BuscarPet() {
  const [userLogado, setUserLogado] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [color, setColor] = useState('');

  useEffect(() => {
    const auth = getAuth();
    const user = auth.currentUser;
    setUserLogado(user?.displayName.length > 0);
  }, []);

  const handleSearch = (term, color) => {
    setSearchTerm(term);
    setColor(color);
  };

  const handleFavorito = async (pet) => {
    try {
      const favoritosData = await AsyncStorage.getItem('favoritos');
      const favoritos = favoritosData ? JSON.parse(favoritosData) : [];
      if (!favoritos.some(f => f.id === pet.id)) { // Evita duplicatas
        favoritos.push(pet);
        await AsyncStorage.setItem('favoritos', JSON.stringify(favoritos));
      }
    } catch (error) {
      console.error('Erro ao salvar favorito:', error);
    }
  };

  if (userLogado) {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <ArrowLeft />
        <KeyboardAwareScrollView>
          <View>
            <SearchBar onSearch={handleSearch} />
            <MatchCard searchTerm={searchTerm} color={color} handleFavorito={handleFavorito} />
          </View>
        </KeyboardAwareScrollView>
      </SafeAreaView>
    );
  } else {
    return <Login />
  }
}
