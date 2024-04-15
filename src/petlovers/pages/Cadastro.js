import React from 'react';
import { Text, SafeAreaView, StyleSheet, View, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

// Importando os componentes de Formulário e seta de voltar
import FormInput from '../components/FormInput';
import FormButton from '../components/FormButton';

export default function Cadastro() {
  const navigation = useNavigation();
  
  const goToLogin = () => {
    navigation.navigate('Login');
  };

  const goToCadastroPet = () => {
    navigation.navigate('CadastroPet');
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.arrow}>
        <TouchableOpacity onPress={navigation.goBack} style={styles.arrowContainer}>
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
      </View>

      {/* Conteúdo do formulário */}
      <View style={styles.container}>
        <Text style={styles.title}>Cadastro</Text>
        <Text style={styles.subtitle}>Informe seus dados para criar uma conta</Text>
        <FormInput label='Nome completo'></FormInput>
        <FormInput label='Data de nascimento' keyboardType="number-pad"></FormInput>
        <FormInput label='Contato (WhatsApp)' keyboardType="number-pad"></FormInput>
        <FormInput label='E-mail' keyboardType='email-address'></FormInput>
        <FormInput label='Senha' secureTextEntry={true}></FormInput>
        <FormInput label='Confirmar senha' secureTextEntry={true}></FormInput>
        <FormButton>Entrar</FormButton>
        <View style={styles.subtitleContainer}>
          <Text style={styles.text}>Já é cadastrado?</Text>
          <Text style={styles.text2} onPress={goToLogin}>Clique aqui para fazer login</Text>
        </View>
        <Text style={[styles.text2, {textAlign: 'center', marginTop: 20}]} onPress={goToCadastroPet}>Cadastro pet</Text> 
      </View>
    </SafeAreaView>
  );
}

// Estilos
const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  arrowContainer: {
    marginRight: 10,
    marginTop: 50,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20,
  },
  arrow: {
    marginLeft: 10,

  },
  container: {
    flex: 1,
    padding: 20,
  },
  subtitle: {
    marginBottom: 30,
    textAlign: 'center',
    marginTop: 10,
    fontSize: 15,
  },
  subtitleContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
  text: {
    marginRight: 5,
    fontSize: 15,
  },
  text2: {
    color: "#827397",
    fontSize: 15,   
  },
});
