import React, { useState } from "react";
import {
  Text,
  SafeAreaView,
  StyleSheet,
  View,
  TouchableOpacity,
  Alert,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import FormInput from "../components/FormInput";
import FormButton from "../components/FormButton";
import ArrowLeft from "../components/ArrowLeft";

export default function Cadastro() {
  const navigation = useNavigation();
  const [fullName, setFullName] = useState("");
  const [fullNameError, setFullNameError] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [birthDateError, setBirthDateError] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [whatsappError, setWhatsappError] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const goToLogin = () => {
    navigation.navigate("Login");
  };

  const validateFullName = (text) => {
    if (!text) {
      setFullNameError("Campo obrigatório");
    } else if (!/^[a-zA-Z\s]*$/.test(text)) {
      setFullNameError("Apenas letras são permitidas");
    } else {
      setFullNameError("");
    }
    setFullName(text);
  };

  const validateBirthDate = (text) => {
    if (!text) {
      setBirthDateError("Campo obrigatório");
    } else if (!/^\d{2}\/\d{2}\/\d{4}$/.test(text)) {
      setBirthDateError("Formato inválido");
    } else {
      setBirthDateError("");
    }
    setBirthDate(text);
  };

  const validateWhatsapp = (text) => {
    if (!text) {
      setWhatsappError("Campo obrigatório");
    } else {
      // Remove todos os caracteres não numéricos
      const phoneNumber = text.replace(/\D/g, '');
  
      // Verifica se o número possui o DDD (código local) e pelo menos 8 dígitos
      if (phoneNumber.length < 10) {
        setWhatsappError("Número inválido");
      } else {
        setWhatsappError("");
      }
    }
    setWhatsapp(text);
  };

  const validateEmail = (text) => {
    if (!text) {
      setEmailError("Campo obrigatório");
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(text)) {
        setEmailError("Insira um endereço de e-mail válido");
      } else {
        setEmailError("");
      }
    }
    setEmail(text);
  };

  const validatePassword = (text) => {
    if (!text || text.length < 6) {
        setPasswordError("A senha deve ter no mínimo 6 caracteres");
    } else {
        setPasswordError("");
    }
    setPassword(text);
};

const handleCadastro = async () => {
  // Validar os campos antes de enviar a requisição
  validateFullName(fullName);
  validateBirthDate(birthDate);
  validateWhatsapp(whatsapp);
  validateEmail(email);
  validatePassword(password);

  // Verificar se há erros de validação
  if (
    !fullNameError &&
    !birthDateError &&
    !whatsappError &&
    !emailError &&
    !passwordError
  ) {
    try {
      // Enviar os dados do usuário para o backend
      const response = await fetch("http://localhost:3000/api/user", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          fullName,
          birthDate,
          whatsapp,
          email,
          password,
        }),
      });

      // Verificar se a solicitação foi bem-sucedida
      if (response.ok) {
        // Cadastro bem-sucedido
        navigation.navigate("ProximaTela");
      } else {
        // Exibir mensagem de erro
        const data = await response.json();
        Alert.alert("Erro", data.message);
      }
    } catch (error) {
      // Exibir mensagem de erro genérica
      console.error("Erro ao cadastrar usuário:", error);
      Alert.alert(
        "Erro",
        "Falha ao cadastrar usuário. Por favor, tente novamente."
      );
    }
  }
};

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.arrow}>
        <ArrowLeft />
      </View>

      {/* Conteúdo do formulário */}
      <View style={styles.container}>
        <Text style={styles.title}>Cadastro</Text>
        <Text style={styles.subtitle}>
          Informe seus dados para criar uma conta
        </Text>
        <FormInput
          label='Nome completo'
          value={fullName}
          onChangeText={(text) => {
            setFullName(text);
            validateFullName(text);
          }}
          error={fullNameError}
        />
        <FormInput
          label='Data de nascimento'
          keyboardType='number-pad'
          value={birthDate}
          onChangeText={(text) => validateBirthDate(text)}
          error={birthDateError}
        />
        <FormInput
          label='Contato (WhatsApp)'
          keyboardType='number-pad'
          value={whatsapp}
          onChangeText={(text) => validateWhatsapp(text)}
          error={whatsappError}
        />
        <FormInput
          label='E-mail'
          keyboardType='email-address'
          value={email}
          onChangeText={(text) => validateEmail(text)}
          error={emailError}
        />
        <FormInput
          label='Senha'
          secureTextEntry={true}
          value={password}
          onChangeText={(text) => validatePassword(text)}
          error={passwordError}
        />
        <FormButton onPress={handleCadastro}>Cadastrar</FormButton>
        <View style={styles.subtitleContainer}>
          <Text style={styles.text}>Já é cadastrado?</Text>
          <Text style={styles.text2} onPress={goToLogin}>
            Clique aqui para fazer login
          </Text>
        </View>
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
    color: '#827397',
    fontSize: 15,
  },
});
