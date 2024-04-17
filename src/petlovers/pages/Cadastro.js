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

// Importando os componentes de Formulário e seta de voltar
import FormInput from "../components/FormInput";
import FormButton from "../components/FormButton";
import ArrowLeft from "../components/ArrowLeft";

export default function Cadastro() {
  const navigation = useNavigation();

  const [fullName, setFullName] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState({
    fullName: "",
    birthDate: "",
    whatsapp: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
}

// Função para validar o nome completo
const validateFullName = () => {
  if (!fullName) {
    setErrors((prevState) => ({
      ...prevState,
      fullName: "Campo obrigatório",
    }));
  } else {
    setErrors((prevState) => ({ ...prevState, fullName: "" }));
  }
};

// Função para validar a data de nascimento
const validateBirthDate = () => {
  if (!/^\d{2}\/\d{2}\/\d{4}$/.test(birthDate)) {
    setErrors((prevState) => ({
      ...prevState,
      birthDate: "Formato inválido (DD/MM/YYYY)",
    }));
  } else {
    setErrors((prevState) => ({ ...prevState, birthDate: "" }));
  }
};

// Função para validar o número de WhatsApp
const validateWhatsapp = () => {
  if (!/^\d{11}$/.test(whatsapp)) {
    setErrors((prevState) => ({
      ...prevState,
      whatsapp: "Formato inválido",
    }));
  } else {
    setErrors((prevState) => ({ ...prevState, whatsapp: "" }));
  }
};

// Função para validar o e-mail
const validateEmail = () => {
  if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
    setErrors((prevState) => ({ ...prevState, email: "E-mail inválido" }));
  } else {
    setErrors((prevState) => ({ ...prevState, email: "" }));
  }
};

// Função para validar a senha
const validatePassword = () => {
  if (password.length < 6) {
    setErrors((prevState) => ({
      ...prevState,
      password: "A senha deve ter pelo menos 6 caracteres",
    }));
  } else {
    setErrors((prevState) => ({ ...prevState, password: "" }));
  }
};

// Função para validar a confirmação de senha
const validateConfirmPassword = () => {
  if (password !== confirmPassword) {
    setErrors((prevState) => ({
      ...prevState,
      confirmPassword: "As senhas não coincidem",
    }));
  } else {
    setErrors((prevState) => ({ ...prevState, confirmPassword: "" }));
  }
};

const goToLogin = () => {
  navigation.navigate("Login");
};

const goToCadastroPet = () => {
  navigation.navigate("CadastroPet");
};

const handleCadastro = async () => {
  // Valida todos os campos antes de enviar a requisição
  validateFullName();
  validateBirthDate();
  validateWhatsapp();
  validateEmail();
  validatePassword();
  validateConfirmPassword();

  // Verifica se há erros de validação
  if (
    !errors.fullName &&
    !errors.birthDate &&
    !errors.whatsapp &&
    !errors.email &&
    !errors.password &&
    !errors.confirmPassword
  ) {
    // Verifica se a senha e a confirmação de senha são iguais
    if (password !== confirmPassword) {
      setErrors((prevState) => ({
        ...prevState,
        confirmPassword: "As senhas não coincidem",
      }));
    } else {
      try {
        const response = await fetch("http://localhost:3000/api/user", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            full_name: fullName,
            birth_date: birthDate,
            whatsapp: whatsapp,
            email: email,
            password: password,
          }),
        });

        if (response.ok) {
          // Se a requisição for bem-sucedida, navegue para a próxima tela
          navigation.navigate("ProximaTela");
        } else {
          // Caso contrário, exiba uma mensagem de erro
          Alert.alert(
            "Erro",
            "Falha ao cadastrar usuário. Por favor, tente novamente."
          );
        }
      } catch (error) {
        console.error("Erro ao enviar requisição de cadastro:", error);
        Alert.alert(
          "Erro",
          "Falha ao conectar-se ao servidor. Por favor, tente novamente mais tarde."
        );
      }
    }
  }

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
          label="Nome completo"
          value={fullName}
          onChangeText={setFullName}
        ></FormInput>
        <FormInput
          label="Data de nascimento"
          keyboardType="number-pad"
          value={birthDate}
          onChangeText={setBirthDate}
        ></FormInput>
        <FormInput
          label="Contato (WhatsApp)"
          keyboardType="number-pad"
          value={whatsapp}
          onChangeText={setWhatsapp}
        ></FormInput>
        <FormInput
          label="E-mail"
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
        ></FormInput>
        <FormInput
          label="Senha"
          secureTextEntry={true}
          value={password}
          onChangeText={setPassword}
        ></FormInput>
        <FormInput label="Confirmar senha" secureTextEntry={true}></FormInput>
        <FormButton>Entrar</FormButton>
        <View style={styles.subtitleContainer}>
          <Text style={styles.text}>Já é cadastrado?</Text>
          <Text style={styles.text2} onPress={goToLogin}>
            Clique aqui para fazer login
          </Text>
        </View>
        <Text
          style={[styles.text2, { textAlign: "center", marginTop: 20 }]}
          onPress={goToCadastroPet}
        >
          Cadastro pet
        </Text>
      </View>
    </SafeAreaView>
  );
};

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
    fontWeight: "bold",
    textAlign: "center",
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
    textAlign: "center",
    marginTop: 10,
    fontSize: 15,
  },
  subtitleContainer: {
    flexDirection: "row",
    justifyContent: "center",
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
