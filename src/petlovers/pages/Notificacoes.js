import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Image, ActivityIndicator } from "react-native";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { baseAPI_URL } from '../apiConfig';
import { getAuth } from "firebase/auth";
import * as SQLite from 'expo-sqlite';
import CardPet from "../components/CardPet";

export default function Notificacoes() {


  return (
    <KeyboardAwareScrollView style={{ flex: 1 }}>
      <Text style={styles.title}>Notificações</Text>
      <View style={styles.container}>
          <View  style={styles.matchContainer}>
            <Image 
              source={{ uri: "https://picsum.photos/200/300"}} 
              style={styles.petImage} 
            />
            <View style={styles.petInfo}>
              <Text style={styles.text}>Você deu match com Capitu</Text>
              <Text style={styles.data}>25/05/2025</Text>
            </View>
          </View>
        <CardPet/>
      </View>
    </KeyboardAwareScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
    marginTop: 15,
  },
  matchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  text: {
    color: "#5F5B5B",
  },
  data: {
    color: "#B4AEAE",
    fontSize: 12,
  },
  petImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 10,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 24,
    marginLeft: 20,
    marginTop: 15,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
