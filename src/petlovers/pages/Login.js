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
        <View style={styles.signupContainer}>
          <Text style={styles.signupText}>Não possui conta?</Text>
          <Text style={styles.signupText2} onPress={goToCadastro}>Cadastre-se aqui</Text>
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
    marginHorizontal: 20, 
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 15,
    marginBottom: 20,
    textAlign: 'center',
  },
  signupText: {
    fontSize: 15,
    textAlign: 'center',
    marginRight: 5,
  },
  signupContainer: {
    flexDirection: 'row', 
    justifyContent: 'center', 
    marginTop: 20,
  },
  signupText2: {
    fontSize: 15,
    color: "#827397"
  },
});

