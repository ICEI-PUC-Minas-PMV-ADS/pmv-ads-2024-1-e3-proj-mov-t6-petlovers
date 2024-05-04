import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import ArrowLeft from "../components/ArrowLeft";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

export default function MinhaConta({ navigation }) {
  const goToMinhaConta = () => {
    navigation.navigate('MinhaConta');
  };
  
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
    <SafeAreaView style={styles.safeArea}>
      <ArrowLeft />
      <KeyboardAwareScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Minha Conta</Text>
        <View style={styles.item}>
          <Text style={styles.subTitle}>Ver Perfil Pet</Text>
          <TouchableOpacity onPress={goToVerPerfil}>
            <Text style={styles.icon}>&gt;</Text> {/* Símbolo de maior */}
          </TouchableOpacity>
        </View>
        <View style={styles.item}>
          <Text style={styles.subTitle}>Editar dados pet</Text>
          <TouchableOpacity onPress={goToDadosPet}>
            <Text style={styles.icon}>&gt;</Text> {/* Símbolo de maior */}
          </TouchableOpacity>
        </View>
        <View style={styles.item}>
          <Text style={styles.subTitle}>Editar meus dados</Text>
          <TouchableOpacity onPress={goToMeusDados}>
            <Text style={styles.icon}>&gt;</Text> {/* Símbolo de maior */}
          </TouchableOpacity>
        </View>
        <View style={styles.item}>
          <Text style={styles.subTitle}>Excluir Conta</Text>
          <TouchableOpacity onPress={goToExcluirConta}>
            <Text style={styles.icon}>&gt;</Text> {/* Símbolo de maior */}
          </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={handleLogout} style={styles.logoutButton}>
          <Text style={styles.logoutText}>Sair</Text>
        </TouchableOpacity>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: 'white',
  },
  container: {
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 40,
    justifyContent: 'center',
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
    marginBottom: 20,
    borderBottomWidth: 1, // Adicionando borda inferior
    borderBottomColor: 'gray', // Definindo cor da borda inferior
    paddingBottom: 10, // Adicionando espaço entre o texto e a borda inferior
  },
  subTitle: {
    fontSize: 18,
  },
  icon: {
    fontSize: 24,
    color: 'gray', // Alterando a cor para cinza
  },
  logoutButton: {
    backgroundColor: '#827397', 
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignSelf: 'center',
    marginTop: 20,
  },
  logoutText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
