import * as React from "react";
import { TextInput } from "react-native-paper";
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  ScrollView,
  Alert,
} from "react-native";
import { useRoute } from "@react-navigation/native";

import ArrowLeft from "../components/ArrowLeft";
import FormButton from "../components/FormButton";
import FormInput from "../components/FormInput";

const CadastroPet = () => {
  const [nome, setNome] = React.useState("");
  const [idade, setIdade] = React.useState("");
  const [cidade, setCidade] = React.useState("");
  const [sexo, setSexo] = React.useState("");
  const [cor, setCor] = React.useState("");
  const [raca, setRaca] = React.useState("");
  const [porte, setPorte] = React.useState("");
  const [sobre, setSobre] = React.useState("");

  const route = useRoute();
  const userId = route.params.userId; // Recupera o ID do usuário dos parâmetros de navegação
  console.log("UserID recebido:", userId); // Verificar userId

  const handleCadastro = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/pet", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userId, // Adiciona o ID do usuário ao corpo da requisição
          nome,
          idade,
          cidade,
          sexo,
          cor,
          raca,
          porte,
          sobre,
        }),
      });

      if (response.ok) {
        Alert.alert("Sucesso", "Pet cadastrado com sucesso!");
        // Limpar os campos após o cadastro
        setNome("");
        setIdade("");
        setCidade("");
        setSexo("");
        setCor("");
        setRaca("");
        setPorte("");
        setSobre("");
      } else {
        throw new Error("Falha ao cadastrar pet");
      }
    } catch (error) {
      console.error("Erro ao cadastrar pet:", error);
      Alert.alert(
        "Erro",
        "Falha ao cadastrar pet. Por favor, tente novamente mais tarde."
      );
    }
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ArrowLeft />
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.textAreaContainer}>
          <Text style={styles.title}>Cadastre o seu pet</Text>
          <FormInput
            label="Nome pet"
            value={nome}
            onChangeText={setNome}
            style={styles.input}
          />
          <FormInput
            label="Idade"
            value={idade}
            onChangeText={setIdade}
            keyboardType="number-pad"
            style={styles.input}
          />
          <FormInput
            label="Cidade"
            value={cidade}
            onChangeText={setCidade}
            style={styles.input}
            placeholderTextColor="grey"
          />
          <FormInput
            label="Sexo"
            value={sexo}
            onChangeText={setSexo}
            style={styles.input}
            placeholderTextColor="grey"
          />
          <FormInput
            label="Cor"
            value={cor}
            onChangeText={setCor}
            style={styles.input}
          />
          <FormInput
            label="Raça"
            value={raca}
            onChangeText={setRaca}
            style={styles.input}
          />
          <FormInput
            label="Porte"
            value={porte}
            onChangeText={setPorte}
            style={styles.input}
          />
          <TextInput
            style={styles.textArea}
            value={sobre}
            onChangeText={setSobre}
            placeholder="Sobre o seu pet..."
            placeholderTextColor="grey"
            //numberOfLines={10}
            multiline={false}
            mode="outlined"
          />
          <FormButton style={styles.cadastrarButton} onPress={handleCadastro}>
            Cadastrar
          </FormButton>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  scrollViewContent: {
    flexGrow: 1,
  },
  textAreaContainer: {
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  textArea: {
    height: 100,
    justifyContent: "flex-start",
    marginTop: 20,
  },
  cadastrarButton: {
    backgroundColor: "#827397",
    width: 352,
    marginTop: 20,
    padding: 5,
    textTransform: "none",
    borderRadius: 10,
  },
  input: {
    marginTop: 10,
    color: "grey",
  },
});

export default CadastroPet;
