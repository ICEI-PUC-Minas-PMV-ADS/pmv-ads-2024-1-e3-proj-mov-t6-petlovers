import React, { useState } from 'react';
import { TextInput } from "react-native-paper";
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Alert,
  TouchableOpacity,
  Image,
} from "react-native";
import { useRoute } from "@react-navigation/native";
import {  } from "expo-status-bar";
import * as ImagePicker from 'expo-image-picker';
import Icon from 'react-native-vector-icons/FontAwesome';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';


import ArrowLeft from "../components/ArrowLeft";
import FormButton from "../components/FormButton";
import FormInput from "../components/FormInput";

const CadastroPet = ({ navigation }) => {
  const [nome, setNome] = React.useState("");
  const [idade, setIdade] = React.useState("");
  const [cidade, setCidade] = React.useState("");
  const [estado, setEstado] = React.useState("");
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
          estado,
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
        setEstado("");
        setSexo("");
        setCor("");
        setRaca("");
        setPorte("");
        setSobre("");

        navigation.navigate('Login');
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

  //IMAGE PICKER
  const [image, setImage] = useState(null);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled && result.assets && result.assets.length > 0) {
      setImage(result.assets[0].uri);
    }
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ArrowLeft />
      <KeyboardAwareScrollView >
        <View style={styles.textAreaContainer}>
          <Text style={styles.title}>Cadastre o seu pet</Text>
          <View style={styles.container}>
              <View style={styles.imageContainer}>
                <TouchableOpacity onPress={pickImage} style={styles.cameraButton}>
                  <Icon name="camera" size={40} color="#827397" />
                </TouchableOpacity>
               {image && <Image source={{ uri: image }} style={styles.image} />}
              </View>
            </View>
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
            label="Estado"
            value={estado}
            onChangeText={setEstado}
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
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  scrollViewContent: {
    flexGrow: 1,
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  imageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 200,
    height: 200,
    borderRadius: 100, 
    backgroundColor:'white',
    overflow: 'hidden', 
  },
  cameraButton: {
    position: 'absolute',
    zIndex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
    color:"#FFFFFF",
  },
  image: {
    width: '100%',
    height: '100%',
  },
  textAreaContainer: {
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  textArea: {
    height: 100,
    height: 120,
    justifyContent: "flex-start",
    marginTop: 20,
  },
  cadastrarButton: {
    backgroundColor: "#827397",
    backgroundColor: '#827397',
    width: 352,
    marginTop: 20,
    marginBottom: 50,
    padding: 5,
    textTransform: "none",
    textTransform: 'none',
    borderRadius: 10,
  },
  input: {
    marginTop: 10,
    color: "grey",
    color: "grey"
  },
  errorMessage: {
    color: 'red',
    fontSize: 14,
    marginTop: 5,
  },
});

export default CadastroPet;
