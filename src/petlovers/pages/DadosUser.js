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
            onChangeText={(text) => {
              setFullName(text);
            }}
          />
          <FormInput
            label="Data de nascimento"
            keyboardType="number-pad"
            value={birthDate}
            onChangeText={(text) => {
              setBirthDate(text);
            }}
          />
          <FormInput
            label="Contato (WhatsApp)"
            keyboardType="number-pad"
            value={whatsapp}
            onChangeText={(text) => {
              setWhatsapp(text);
            }}

          />
          <FormInput
            label="E-mail"
            keyboardType="email-address"
            autoCapitalize="none"
            value={email}
            onChangeText={(text) => {
              setEmail(text);
            }}
          />
          <FormInput
            label="Senha"
            autoCapitalize="none"
            secureTextEntry={true}
            value={password}
            onChangeText={(text) => {
              setPassword(text);
            }}
          />

          <FormButton>Salvar</FormButton>
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
