import React, { useState } from 'react';
import { Text, SafeAreaView, StyleSheet } from 'react-native';

// You can import supported modules from npm
import { Card } from 'react-native-paper';

// or any files within the Snack
import FormInput from '../components/FormInput';
import FormButton from '../components/FormButton';

export default function Cadastro() {
  return (
    <SafeAreaView>
      <Text style={styles.title}>Cadastro</Text>
      <Text style={styles.subtitle}>Informe seus dados para criar uma conta</Text>
      <FormInput label='Nome completo'></FormInput>
      <FormInput label='Data de nascimento' keyboardType="number-pad"></FormInput>
      <FormInput label='Contato (WhatsApp)' keyboardType="number-pad"></FormInput>
      <FormInput label='E-mail' keyboardType='email-address'></FormInput>
      <FormInput label='Senha' secureTextEntry={true}></FormInput>
      <FormInput label='Confirmar senha' secureTextEntry={true}></FormInput>
      <FormButton>Entrar</FormButton>
      <Text style={styles.subtitle}>Já é cadastrado? Clique aqui para fazer login</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  title: {
    marginTop: 20,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  subtitle: {
    textAlign: 'center',
    marginBottom: 50,
  },
});