import React, { useState } from 'react';
import { Text, SafeAreaView, StyleSheet, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import axios from "axios";
import FormInput from '../components/FormInput';
import FormButton from '../components/FormButton';

export default function Login() {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const handleLoginRequest = async () => {  
   
    try {          
          const response = await axios.post("http://localhost:3000/api/login", {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              email,
              senha,
            }),
          });   

          console.log(response);
        } catch (error) {         
          console.error(error);
        }
  };

  const goToCadastro = () => {
    navigation.navigate('Cadastro');
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.title}>Login</Text>
        <Text style={styles.subtitle}>Entre com seu e-mail e senha</Text>
        <FormInput style={styles.input} label='E-mail' value={email} onChangeText={setEmail}/>
        <FormInput style={styles.input} label='Senha' secureTextEntry={true} value={senha} onChangeText={setSenha}/>
        <FormButton onPress={handleLogin}>Entrar</FormButton>
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
    marginBottom: 10,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 15,
    marginBottom: 25,
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

