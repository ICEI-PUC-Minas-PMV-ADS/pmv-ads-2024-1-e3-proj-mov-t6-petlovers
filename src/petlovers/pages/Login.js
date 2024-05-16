import React, { useState } from "react";
import {
  Text,
  SafeAreaView,
  StyleSheet,
  View,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import FormInput from "../components/FormInput";
import FormButton from "../components/FormButton";

export default function Login() {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const goToCadastro = () => {
    navigation.navigate("Cadastro");
  };

  const goToHome = () => {
    navigation.navigate("Home");
  };

  const loginFunction = async () => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        goToHome();
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.title}>Login</Text>
        <Text style={styles.subtitle}>Entre com seu e-mail e senha</Text>
        <FormInput
          label="E-mail"
          keyboardType="email-address"
          autoCapitalize="none"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <FormInput
          label="Senha"
          autoCapitalize="none"
          secureTextEntry={true}
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
        {error && <Text style={styles.errorText}>{error}</Text>}
        <FormButton onPress={loginFunction}>Entrar</FormButton>
        <View style={styles.signupContainer}>
          <Text style={styles.signupText}>Não possui conta?</Text>
          <Text style={styles.signupText2} onPress={goToCadastro}>
            Cadastre-se aqui
          </Text>
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
    justifyContent: "center",
    marginHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 15,
    marginBottom: 25,
    textAlign: "center",
  },
  signupText: {
    fontSize: 15,
    textAlign: "center",
    marginRight: 5,
  },
  signupContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 20,
  },
  signupText2: {
    fontSize: 15,
    color: "#827397",
  },
});
