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

//API URL do cadastro user
import { userAPI_URL } from "../apiConfig";
import { getUserByIdAPI_URL } from "../apiConfig";

export default function DadosUser() {
  const navigation = useNavigation();

  const [fullName, setFullName] = useState("");
  const [fullNameError, setFullNameError] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [birthDateError, setBirthDateError] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [whatsappError, setWhatsappError] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [formValid, setFormValid] = useState(false);

  // Função para obter os dados do usuário
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const userId = "7cA33UHzjYYFDSVEbhOYszj50303"; // ID do usuário
        const response = await fetch(getUserByIdAPI_URL(userId));
        const userDataFromServer = await response.json();

        const userDataBD = {
          fullName: userDataFromServer.full_name,
          birthDate: userDataFromServer.birth_date,
          whatsapp: userDataFromServer.whatsapp,
          email: userDataFromServer.email,
          userId: userId,
        };

        setUserData(userDataBD);
        setFullName(userDataFromServer.full_name);
        setWhatsapp(userData.whatsapp);
        setEmail(userData.email);

        // Formatar a data de nascimento para exibição
        const formattedBirthDate = userDataFromServer.birth_date
          .split("T")[0]
          .split("-")
          .reverse()
          .join("/");
        setBirthDate(formattedBirthDate);

        //console.log("Dados do usuário:", userDataFromServer);
      } catch (error) {
        console.error("Erro ao obter dados do usuário:", error);
      }
    };

    fetchUserData();
  }, []);

  {
    /* VALIDAÇÕES DE FORMULÁRIO */
  }

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
    // Formato de data DD/MM/AAAA
    const regex = /^([0-2][0-9]|3[0-1])\/(0[1-9]|1[0-2])\/\d{4}$/;

    if (!text.trim()) {
      setBirthDateError("Campo obrigatório");
      return { isValid: false, error: "Campo obrigatório" };
    } else if (!regex.test(text)) {
      setBirthDateError("Insira uma data válida");
      return { isValid: false, error: "Insira uma data válida" };
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
      return { isValid: false, error: "Insira uma data válida" };
    }

    // Verifica se o usuário é maior de idade
    const eighteenYearsAgo = new Date();
    eighteenYearsAgo.setFullYear(eighteenYearsAgo.getFullYear() - 18);

    if (date > eighteenYearsAgo) {
      setBirthDateError("Você deve ter pelo menos 18 anos para se cadastrar");
      return {
        isValid: false,
        error: "Você deve ter pelo menos 18 anos para se cadastrar",
      };
    }

    // Formata a data para o formato ISO 8601
    const formattedDate = `${year}-${month}-${day}`;

    // Retorna um objeto com a propriedade isValid definida como true
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

  const [userData, setUserData] = useState({
    full_name: "",
    birth_date: "",
    whatsapp: "",
    email: "",
  });

  // Função para validar o formulário
const validateForm = () => {
  console.log("fullName:", fullName);
  console.log("birthDate:", birthDate);
  console.log("whatsapp:", whatsapp);
  console.log("email:", email);
  console.log("fullNameError:", fullNameError);
  console.log("birthDateError:", birthDateError);
  console.log("whatsappError:", whatsappError);
  console.log("emailError:", emailError);

  const isValid =
    fullName.trim() !== "" &&
    birthDate.trim() !== "" &&
    whatsapp.trim() !== "" &&
    email.trim() !== "" &&
    fullNameError === "" &&
    birthDateError === "" &&
    whatsappError === "" &&
    emailError === "";

  console.log("isValid:", isValid);

  return isValid;
};

  // Atualizar estado de validação a cada campo
  useEffect(() => {
    setFormValid(validateForm());
  }, [fullName, birthDate, whatsapp, email]);

  // Função para enviar a atualização dos dados
  const handleSave = async (userId) => {
    // Verifica se o formulário é válido antes de enviar
    if (!validateForm()) {
      Alert.alert("Erro", "Por favor, preencha os campos corretamente");
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

      const response = await fetch(getUserByIdAPI_URL(userId), {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          full_name: capitalizedFullName || userData.fullName,
          birth_date: birthDateValidation.formattedDate, //Usa a data formatada,
          whatsapp: whatsapp || userData.whatsapp,
          email: email || userData.email,
        }),
      });

      if (response.ok) {
        // Dados atualizados com sucesso
        Alert.alert("Sucesso", "Dados atualizados com sucesso.");

        // Atualize o estado local com os novos dados do usuário
        setUserData({
          ...userData,
          fullName: capitalizedFullName,
          birthDate: birthDateValidation.formattedDate,
          whatsapp,
          email,
        });
      } else {
        // Erro ao atualizar dados
        Alert.alert("Erro", "Erro ao atualizar dados.");
      }
    } catch (error) {
      console.error("Erro ao salvar dados:", error);
      Alert.alert("Erro", "Erro ao salvar dados.");
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
          <Text style={defaultTheme.title}>Meus dados</Text>
          <Text style={{ ...defaultTheme.subtitle, ...styles.subtitle }}>
            Atualize seu cadastro
          </Text>
          <FormInput
            label="Nome completo"
            value={fullName}
            editable={true}
            onChangeText={(text) => {
              setFullName(text);
              const isValid = validateFullName(text);
              if (!isValid) {
                /// Função validateFullName
              } else {
                setFullNameError(""); // Limpa o erro quando o texto for válido
              }
            }}
            error={fullNameError}
          />
          <FormInput
            label="Data de nascimento"
            keyboardType="number-pad"
            value={birthDate}
            editable={true}
            onChangeText={(text) => {
              setBirthDate(text);
              const validation = validateBirthDate(text);
              if (!validation.isValid) {
                // Função validateBirthDate
              } else {
                setBirthDateError(""); // Limpa o erro quando a data for válida
              }
            }}
            error={birthDateError}
          />
          <FormInput
            label="Contato (WhatsApp)"
            keyboardType="number-pad"
            value={whatsapp}
            editable={true}
            onChangeText={(text) => {
              setWhatsapp(text);
              const isValid = validateWhatsapp(text);
              if (!isValid) {
                // Função validateWhatsapp
              } else {
                setWhatsappError(""); // Limpa o erro quando o texto for válido
              }
            }}
            error={whatsappError}
          />
          <FormInput
            label="E-mail"
            keyboardType="email-address"
            autoCapitalize="none"
            value={email}
            editable={true}
            onChangeText={(text) => {
              setEmail(text);
              const isValid = validateEmail(text);
              if (!isValid) {
                // Função validateEmail
              } else {
                setEmailError(""); // Limpa o erro quando o texto for válido
              }
            }}
            error={emailError}
          />

          <Text style={{ ...defaultTheme.subtitle, ...styles.subtitle }}>
            Alterar senha
          </Text>

          <FormInput
            label="Nova senha"
            autoCapitalize="none"
            secureTextEntry={true}
            value={userData.password}
            onChangeText={(text) => {
              setPassword(text);
            }}
          />
          <FormInput
            label="Confirmar nova senha"
            autoCapitalize="none"
            secureTextEntry={true}
            value={userData.password}
            onChangeText={(text) => {
              setPassword(text);
            }}
          />
          <FormInput
            label="Senha atual"
            autoCapitalize="none"
            secureTextEntry={true}
            value={userData.password}
            onChangeText={(text) => {
              setPassword(text);
            }}
          />

          <FormButton onPress={() => handleSave(userData.userId)}>
            Salvar
          </FormButton>
          <View style={styles.subtitleContainer}></View>
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
