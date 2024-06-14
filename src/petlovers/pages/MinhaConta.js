import React, { useState, useEffect } from "react";
import { Text, StyleSheet, TouchableOpacity, Alert } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import { getUserByIdAPI_URL } from "../apiConfig";
import * as firebaseAuth from "firebase/auth";

export default function MinhaConta({ navigation }) {

  const auth = firebaseAuth.getAuth();
  const user = auth.currentUser;
  const [matchInfo, setMatchInfo] = useState(null);
  const [userData, setUserData] = useState(null);


  const goToVerPerfil = () => {
    navigation.navigate('VerPerfil');
  };
  
  const goToDadosPet = () => {
    navigation.navigate('DadosPet');
  };
  
  const goToDadosUser = () => {
    navigation.navigate('DadosUser');
  };

  const goToLogin = () => {
    navigation.navigate('Login');
  };
  
  const clearAppState = () => {
    setMatchInfo(null);
    setUserData(null);
  };

  const handleLogout = async () => {  
      try {
      await firebaseAuth.signOut(auth);
      clearAppState();
      goToLogin();
    } catch {
      alert("Erro ao fazer logout");
    }  
  };


    // Função para excluir a conta
  const handleDeleteAccount = async () => {
    try {
      if (!user) {
        return; 
      }

      Alert.alert(
        "Excluir conta",
        "Tem certeza de que deseja excluir sua conta? Esta ação é irreversível.",
        [
          {
            text: "Cancelar",
            style: "cancel",
          },
          {
            text: "Excluir",
            onPress: async () => {
              const userId = user.uid; // ID do usuário autenticado
  
              const response = await fetch(getUserByIdAPI_URL(userId), {
                method: "DELETE",
              });
  
              if (response.ok) {
                // Conta excluída com sucesso
                Alert.alert("Sucesso", "Sua conta foi excluída com sucesso.");
                handleLogout (); //remove a autenticacao do user e redireciona para login
                
              } else {
                // Erro ao excluir a conta
                Alert.alert("Erro", "Erro ao excluir sua conta.");
              }
            },
          },
        ]
      );
    } catch (error) {
      console.error("Erro ao excluir conta:", error);
      Alert.alert("Erro", "Erro ao excluir sua conta.");
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAwareScrollView contentContainerStyle={styles.scrollViewContent}>
        <Text style={styles.title}>Minha Conta</Text>
        <TouchableOpacity style={styles.item} onPress={goToVerPerfil}>
          <Text style={styles.subTitle}>Ver Perfil Pet</Text>
          <Text style={styles.icon}>&gt;</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.item} onPress={goToDadosPet}>
          <Text style={styles.subTitle}>Editar dados pet</Text>
          <Text style={styles.icon}>&gt;</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.item} onPress={goToDadosUser}>
          <Text style={styles.subTitle}>Editar meus dados</Text>
          <Text style={styles.icon}>&gt;</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleDeleteAccount} style={styles.item}>
          <Text style={styles.subTitle}>Excluir Conta</Text>
          <Text style={styles.icon}>&gt;</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleLogout} style={styles.logoutButton}>
          <Text style={styles.logoutText}>Sair</Text>
        </TouchableOpacity>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  scrollViewContent: {
    flexGrow: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
    justifyContent: 'flex-start',
  },
  arrow: {
    position: 'absolute',
    top: 20,
    left: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 80,
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
    paddingBottom: 10,
    marginBottom: 20,
  },
  subTitle: {
    fontSize: 18,
  },
  icon: {
    fontSize: 24,
    color: 'gray',
  },
  logoutButton: {
    backgroundColor: '#827397', 
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignSelf: 'center',
    marginTop: 'auto', // Coloca o botão "Sair" no final da tela
    marginBottom: 20, // Espaço extra no final da tela
    width: 150,
  },
  logoutText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
