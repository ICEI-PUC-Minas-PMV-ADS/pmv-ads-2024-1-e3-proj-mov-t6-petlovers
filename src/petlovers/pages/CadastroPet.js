import React, { useState } from 'react';
import { TextInput } from "react-native-paper";
import { SafeAreaView, StyleSheet, View, Text, Alert, TouchableOpacity, Image, } from "react-native";
import { useRoute } from "@react-navigation/native";
import * as ImagePicker from 'expo-image-picker';
import Icon from 'react-native-vector-icons/FontAwesome';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { getAuth } from "firebase/auth";
import ArrowLeft from "../components/ArrowLeft";
import FormButton from "../components/FormButton";
import FormInput from "../components/FormInput";
import validateCadastroPet from '../services/validateCadastroPet';

//API URL do cadastro pet
import { petAPI_URL } from "../apiConfig";

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
  const [errors, setErrors] = useState({});
  const [imageUrl, setImage] = useState(null);

  const route = useRoute();
  const userId = route.params.userId; // Recupera o ID do usuário dos parâmetros de navegação

  const handleCadastro = async () => {
    const validationErrors = validateCadastroPet({ nome, idade, cidade, estado, sexo, cor, raca, porte, sobre });

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    try {
      const response = await fetch(petAPI_URL, { //API URL do cadastro pet
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userId,
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
      console.log("Resposta: " + response.status)

      if (response.ok) {
        const responseData = await response.json();
        const petId = responseData.id;

        // Define a URL da API de imagens do pet com o petId
        const petimageAPI_URL = `${petAPI_URL}/${petId}/images`;

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
        setImage("");

        // Limpar os erros
        setErrors({});


        if (imageUrl) {
          await enviarImagem(petId, petimageAPI_URL);
        }

        navigation.navigate('Login');
      } else {
        const errorMessage = await response.text();
        throw new Error(`Falha ao cadastrar pet: ${response.status} - ${errorMessage}`);
      }
    } catch (error) {
      console.error("Erro na resposta da requisição:", error);
      Alert.alert(
        "Erro",
        "Falha ao cadastrar pet. Por favor, tente novamente mais tarde.", 
      );
    }
  };


  //Envio da imagem 
  const enviarImagem = async (petId, petimageAPI_URL) => {
    try {
      const formData = new FormData();
      formData.append('file', {
        uri: imageUrl, //ARMAZENA O LOCAL DO ARQUIVO
        //name: `pet_${Date.now()}.jpg`,
        name: 'pet_image.jpg',
        type: 'image/jpg',
      });

      const imageUploadResponse = await fetch(petimageAPI_URL, { //API URL do cadastro de imagem pet
        method: "POST",
        body: formData,
        headers: {
          'Content-Type': 'multipart/form-data'
        },
      });

      if (imageUploadResponse.ok) {
        setImage(null);
      } else {
        throw new Error("Falha ao fazer upload da imagem");
      }
    } catch (error) {
      console.error("Erro ao enviar imagem:", error);
      Alert.alert(
        "Erro",
        "Falha ao enviar imagem. Por favor, tente novamente mais tarde."
      );
    }
  };


  //IMAGE PICKER
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
              {imageUrl && <Image source={{ uri: imageUrl }} style={styles.image} />} 
            </View>
          </View>
          <FormInput
            label="Nome pet"
            value={nome}
            onChangeText={setNome}
            style={styles.input}
          />
          <Text style={styles.errorMessage}>{errors.nome}</Text>
          <FormInput
            label="Idade"
            value={idade}
            onChangeText={setIdade}
            keyboardType="number-pad"
            style={styles.input}
          />
          <Text style={styles.errorMessage}>{errors.idade}</Text>
          <FormInput
            label="Cidade"
            value={cidade}
            onChangeText={setCidade}
            style={styles.input}
            placeholderTextColor="grey"
          />
          <Text style={styles.errorMessage}>{errors.cidade}</Text>
          <FormInput
            label="Estado"
            value={estado}
            onChangeText={setEstado}
            style={styles.input}
            placeholderTextColor="grey"
          />
          <Text style={styles.errorMessage}>{errors.estado}</Text>
          <FormInput
            label="Sexo"
            value={sexo}
            onChangeText={setSexo}
            style={styles.input}
            placeholderTextColor="grey"
          />
          <Text style={styles.errorMessage}>{errors.sexo}</Text>
          <FormInput
            label="Cor"
            value={cor}
            onChangeText={setCor}
            style={styles.input}
          />
          <Text style={styles.errorMessage}>{errors.cor}</Text>
          <FormInput
            label="Raça"
            value={raca}
            onChangeText={setRaca}
            style={styles.input}
          />
          <Text style={styles.errorMessage}>{errors.raca}</Text>
          <FormInput
            label="Porte"
            value={porte}
            onChangeText={setPorte}
            style={styles.input}
          />
          <Text style={styles.errorMessage}>{errors.porte}</Text>
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
          <Text style={styles.errorMessage}>{errors.sobre}</Text>
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
    backgroundColor: 'white',
    overflow: 'hidden',
    marginBottom: 30,
    marginTop: 30,
  },
  cameraButton: {
    position: 'absolute',
    zIndex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
    color: "#FFFFFF",
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
  },
  cadastrarButton: {
    backgroundColor: "#827397",
    backgroundColor: '#827397',
    width: 352,
    marginTop: 10,
    marginBottom: 50,
    padding: 5,
    textTransform: "none",
    textTransform: 'none',
    borderRadius: 10,
  },
  input: {
    color: "grey",
    color: "grey",
  },
  errorMessage: {
    color: 'red',
    fontSize: 12,
  },
});

export default CadastroPet;