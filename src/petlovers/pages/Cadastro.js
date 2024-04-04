import React, { useState } from 'react';
import { Text, SafeAreaView, StyleSheet, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

// You can import supported modules from npm
import { Card } from 'react-native-paper';

// or any files within the Snack
import FormInput from '../components/FormInput';
import FormButton from '../components/FormButton';

export default function Cadastro() {
  const navigation = useNavigation();
  
  const goToLogin = () => {
    navigation.navigate('Login');
  };

  return (
    <SafeAreaView style={styles.safeArea}>
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
          <Text style={styles.text2} onPress={goToLogin} >Clique aqui para fazer login</Text>
      </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 20, // Adicionando margem horizontal
  },
  title: {
    marginTop: 20,
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  subtitle: {
    textAlign: 'center',
    marginBottom: 40,
    marginRight: 5,
    marginTop: 10,
  },
  text: {
    textAlign: 'center',
    marginBottom: 50,
    marginRight: 5,
  },
  subtitleContainer: {
    flexDirection: 'row', 
    justifyContent: 'center', 
    marginTop: 20,
  },
  text2: {
    color: "#827397"
  },
});