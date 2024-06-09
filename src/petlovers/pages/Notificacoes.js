import * as React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import CardPet from "../components/CardPet";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Notificacao from "../components/Notificacao";

export default function Notificacoes() {
  return (
    <KeyboardAwareScrollView style={{ flex: 1 }}>
      <Text style={styles.title}>Notificações</Text>
      <View style={styles.container}>
        <View style={styles.matchContainer}>
          <Image 
            source={{ uri: 'https://picsum.photos/300' }} 
            style={styles.petImage} 
          />
          <View style={styles.petInfo}>
            <Text style={styles.text}>Você deu match com Mel</Text>
            <Text style={styles.data}>14/03/2024</Text>
          </View>
        </View>
        <CardPet />
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
    marginLeft: 10,
  },
  data: {
    color: "#B4AEAE",
    fontSize: 12,
    marginLeft: 10,
  },
  petImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginLeft: 15,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 24,
    marginLeft: 33,
    marginTop: 15,
  },
});
