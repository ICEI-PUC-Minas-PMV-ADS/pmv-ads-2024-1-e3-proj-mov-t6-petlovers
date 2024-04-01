import React from 'react';
import { Text, SafeAreaView, StyleSheet } from 'react-native';

import FormInput from '../components/FormInput';
import FormButton from '../components/FormButton';

export default function Login() {
  return (
    <SafeAreaView>
      <Text style={styles.title}>Login</Text>
      <Text style={styles.subtitle}>Entre com seu e-mail e senha</Text>
      <FormInput label='E-mail' />
      <FormInput label='Senha' secureTextEntry={true} />
      <FormButton>Entrar</FormButton>
      <Text style={styles.signupText}>Não possui conta? Cadastre-se aqui</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: 'center',
  },
  signupText: {
    marginTop: 20,
    fontSize: 16,
    textAlign: 'center',
  },
});
