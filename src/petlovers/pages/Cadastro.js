import React, { useState, useEffect } from "react";
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
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import FormInput from "../components/FormInput";
import FormButton from "../components/FormButton";
import ArrowLeft from "../components/ArrowLeft";

import { defaultTheme } from "../components/Themes";

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
  const [formValid, setFormValid] = useState(false);

  const goToLogin = () => {
    navigation.navigate("Login");
  };

  const goToCadastroPet = (userId) => {
    navigation.navigate("CadastroPet", { userId: userId });
  };

  // Função para capitalizar o nome completo
  const capitalizeFullName = (name) => {
    return name
      .toLowerCase()
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1)) // Capitalizar a primeira letra
      .join(" ");
  };

  // Função para validar o nome completo
  const validateFullName = (text) => {
    if (!text.trim()) {
      setFullNameError("Campo obrigatório");
      return false;
    } else if (!/^[\p{L}\s]+$/u.test(text)) {
      setFullNameError("O nome deve conter apenas letras");
      return false;
    } else {
      setFullNameError(""); // Limpa o erro quando o texto for válido
      return true;
    }
  };

  // Função para validar a data de nascimento
  const validateBirthDate = (text) => {
    //Formato de data DD/MM/AAAA
    const regex = /^([0-2][0-9]|3[0-1])\/(0[1-9]|1[0-2])\/\d{4}$/;

    if (!text.trim()) {
      setBirthDateError("Campo obrigatório");
      return false;
    } else if (!regex.test(text)) {
      setBirthDateError("Insira uma data válida");
      return false;
    }

    // Extrai dia, mês e ano
    const parts = text.split("/");
    const day = parseInt(parts[0], 10);
    const month = parseInt(parts[1], 10);
    const year = parseInt(parts[2], 10);

    // Verifica se é uma data válida
    const date = new Date(year, month - 1, day);
    if (
      isNaN(date.getTime()) ||
      date.getMonth() !== month - 1 ||
      date.getDate() !== day
    ) {
      setBirthDateError("Insira uma data válida");
      return false;
    }

    // Verifica se o usuário é maior de idade
    const eighteenYearsAgo = new Date();
    eighteenYearsAgo.setFullYear(eighteenYearsAgo.getFullYear() - 18);

    if (date > eighteenYearsAgo) {
      setBirthDateError("Você deve ter pelo menos 18 anos para se cadastrar");
      return false;
    }

    // Formata a data para o formato ISO 8601
    const formattedDate = `${year}-${month}-${day}`;

    return { isValid: true, formattedDate: formattedDate };
  };

  const validateWhatsapp = (text) => {
    if (!text.trim()) {
      setWhatsappError("Campo obrigatório");
      return false;
    } else if (text.trim().replace(/\D/g, "").length < 10) {
      setWhatsappError("Insira um número válido");
      return false;
    } else {
      setWhatsappError(""); // Limpa o erro quando o texto for válido
      return true;
    }
  };

  const validateEmail = (text) => {
    // Formato padrão de e-mail
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!text.trim()) {
      setEmailError("Campo obrigatório");
      return false;
    } else if (!emailRegex.test(text)) {
      setEmailError("Insira um e-mail válido");
      return false;
    } else {
      setEmailError(""); // Limpa o erro quando o texto for válido
      return true;
    }
  };

  const validatePassword = (text) => {
    if (!text.trim()) {
      setPasswordError("Campo obrigatório");
      return false;
    } else if (text.length < 6) {
      setPasswordError("A senha deve ter no mínimo 6 caracteres");
      return false;
    } else {
      setPasswordError(""); // Limpa o erro quando o texto for válido
      return true;
    }
  };

  // Função para validar o formulário
  const validateForm = () => {
    return (
      fullName !== "" &&
      birthDate !== "" &&
      whatsapp !== "" &&
      email !== "" &&
      password !== ""
    );
  };

  // Atualizar estado de validação a cada campo
  useEffect(() => {
    setFormValid(validateForm());
  }, [fullName, birthDate, whatsapp, email, password]);

  const handleCadastro = async () => {
    // Verifica se o formulário é válido antes de enviar
    if (!validateForm()) {
      Alert.alert("Erro", "Por favor, preencha todos os campos");
      return;
    }

    // Validar a formatação da data de nascimento para o Firestone
    const birthDateValidation = validateBirthDate(birthDate); // Armazena o resultado da validação

    if (!birthDateValidation.isValid) {
      // Se a data não for válida, não continue
      return;
    }

    try {
      // Capitalizar o nome completo
      const capitalizedFullName = capitalizeFullName(fullName);

      // Enviar os dados do usuário para o backend
      const response = await fetch("http://localhost:3000/api/user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          full_name: fullName,
          birth_date: birthDateValidation.formattedDate, //Usa a data formatada
          whatsapp: whatsapp,
          email: email,
          password: password,
        }),
      });

      // Verificar se a solicitação foi bem-sucedida
      if (response.ok) {
        // Extrair o ID do usuário da resposta
        const responseData = await response.json();
        const userId = responseData.id;

        // Cadastro bem-sucedido
        goToCadastroPet(userId); // Passa o ID do usuário para a página de cadastro de pet
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
  };

  return (
    <KeyboardAwareScrollView>
      <SafeAreaView style={defaultTheme.safeArea}>
        <View style={styles.arrow}>
          <ArrowLeft />
        </View>

        {/* Conteúdo do formulário */}
        <View style={defaultTheme.container}>
          <Text style={defaultTheme.title}>Cadastro</Text>
          <Text style={{...defaultTheme.subtitle, ...styles.subtitle}}>
            Informe seus dados para criar uma conta
          </Text>
          <FormInput
            label="Nome completo"
            value={fullName}
            onChangeText={(text) => {
              setFullName(text);
              const isValid = validateFullName(text);
              if (!isValid) {
                // Função validateFullName
              } else {
                setFullNameError("");
              }
            }}
            error={fullNameError}
          />
          <FormInput
            label="Data de nascimento"
            keyboardType="number-pad"
            value={birthDate}
            onChangeText={(text) => {
              setBirthDate(text);
              const isValid = validateBirthDate(text);
              if (!isValid) {
                // Função validadeBirthDate
              } else {
                setBirthDateError("");
              }
            }}
            error={birthDateError}
          />
          <FormInput
            label="Contato (WhatsApp)"
            keyboardType="number-pad"
            value={whatsapp}
            onChangeText={(text) => {
              setWhatsapp(text);
              const isValid = validateWhatsapp(text);
              if (!isValid) {
                // Função validateWhatsapp
              } else {
                setWhatsappError("");
              }
            }}
            error={whatsappError}
          />
          <FormInput
            label="E-mail"
            keyboardType="email-address"
            autoCapitalize="none"
            value={email}
            onChangeText={(text) => {
              setEmail(text);
              const isValid = validateEmail(text);
              if (!isValid) {
                // Função validateEmail
              } else {
                setEmailError("");
              }
            }}
            error={emailError}
          />
          <FormInput
            label="Senha"
            autoCapitalize="none"
            secureTextEntry={true}
            value={password}
            onChangeText={(text) => {
              setPassword(text);
              const isValid = validatePassword(text);
              if (!isValid) {
                // Função validatePassword
              } else {
                setPasswordError("");
              }
            }}
            error={passwordError}
          />
          <FormButton onPress={handleCadastro}>Cadastrar</FormButton>
          <View style={styles.subtitleContainer}>
            <Text style={{...defaultTheme.text, ...styles.text}}>Já é cadastrado?</Text>
            <Text
              style={{ color: defaultTheme.colors.primary, ...defaultTheme.text, ...styles.text }}
              onPress={goToLogin}
            >
              Clique aqui para fazer login
            </Text>
          </View>

          {/* Página Cadastro Pet 
        <Text style={{ color: defaultTheme.colors.primary, ...styles.text}} onPress={goToCadastroPet}>
            Cadastro pet
          </Text>*/}
        </View>
      </SafeAreaView>
    </KeyboardAwareScrollView>
  );
}

// Estilos
const styles = StyleSheet.create({
  arrowContainer: {
    marginRight: 10,
    marginTop: 50,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 20,
  },
  arrow: {
    marginLeft: 10,
  },
  subtitleContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 20,
  },
  subtitle: {
    marginBottom: 30,
  },
  text: {
    marginRight: 5,
  },
});
