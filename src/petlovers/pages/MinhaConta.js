import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import ArrowLeft from "../components/ArrowLeft";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

export default function MinhaConta({ navigation }) {
  const goToVerPerfil = () => {
    navigation.navigate('VerPerfil');
  };
  
  const goToDadosPet = () => {
    navigation.navigate('DadosPet');
  };
  
  const goToMeusDados = () => {
    navigation.navigate('MeusDados');
  };
  
  const goToExcluirConta = () => {
    navigation.navigate('ExcluirConta');
  };

  const handleLogout = () => {
    // Lógica para fazer logout do usuário
  };

  return (
    <SafeAreaView style={styles.container}>
      <ArrowLeft style={styles.arrow} />
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
        <TouchableOpacity style={styles.item} onPress={goToMeusDados}>
          <Text style={styles.subTitle}>Editar meus dados</Text>
          <Text style={styles.icon}>&gt;</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.item} onPress={goToExcluirConta}>
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
    marginBottom: 20,
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
  },
  logoutText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
