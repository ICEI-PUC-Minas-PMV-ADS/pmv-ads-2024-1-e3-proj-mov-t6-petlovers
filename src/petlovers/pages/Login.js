import React from 'react';
import { Text, SafeAreaView, StyleSheet, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import FormInput from '../components/FormInput';
import FormButton from '../components/FormButton';

export default function Login() {
  const navigation = useNavigation();
  
  const goToCadastro = () => {
    navigation.navigate('Cadastro');
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.title}>Login</Text>
        <Text style={styles.subtitle}>Entre com seu e-mail e senha</Text>
        <FormInput label='E-mail' />
        <FormInput label='Senha' secureTextEntry={true} />
        <FormButton>Entrar</FormButton>
        <Text style={styles.signupText} onPress={goToCadastro}>Não possui conta? Cadastre-se aqui</Text>
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

