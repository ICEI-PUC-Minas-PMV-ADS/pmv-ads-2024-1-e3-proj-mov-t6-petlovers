import React, { useState } from 'react';
import { TextInput } from 'react-native-paper';
import { SafeAreaView, StyleSheet, View, Text, Alert, Image , TouchableOpacity} from 'react-native';
import {  } from "expo-status-bar";
import * as ImagePicker from 'expo-image-picker';
import Icon from 'react-native-vector-icons/FontAwesome';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { useRoute } from "@react-navigation/native";

import ArrowLeft from '../components/ArrowLeft';
import FormButton from '../components/FormButton';
import FormInput from '../components/FormInput';
import validateCadastro from '../services/validateCadastro';


const CadastroPet = ({ navigation }) => {
  const [name, setName] = React.useState("");
  const [age, setAge] = React.useState("");
  const [city, setCity] = React.useState("");
  const [state, setState] = React.useState("");
  const [sex, setSex] = React.useState("");
  const [color, setColor] = React.useState("");
  const [breed, setBreed] = React.useState("");
  const [size, setSize] = React.useState("");
  const [about, setAbout] = React.useState("");

  const [errors, setErrors] = useState({});

  const route = useRoute();
  const userId = route.params.userId; // Recupera o ID do usuário dos parâmetros de navegação
  console.log("UserID recebido:", userId); // Verificar userId

  const handleCadastro = async () => {
    const validationErrors = validateCadastro({ name, age, city, state, sex, color, breed, size, about });

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    try {
      const response = await fetch("http://localhost:3000/api/pet", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userId, // Adiciona o ID do usuário ao corpo da requisição
          name,
          age,
          city,
          state,
          sex,
          color,
          breed,
          size,
          about,
        }),
      });

      if (!response.ok) {
        throw new Error('Falha ao cadastrar pet');
      }
      Alert.alert('Sucesso', 'Pet cadastrado com sucesso!');
      // Limpar os campos após o cadastro
      setName("");
      setAge("");
      setCity("");
      setState("");
      setSex("");
      setColor("");
      setBreed("");
      setSize("");
    } catch (error) {
      console.error('Erro ao cadastrar pet:', error);
      Alert.alert('Erro', 'Falha ao cadastrar pet. Por favor, tente novamente.');
    }

    navigation.navigate('Login');
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
    <SafeAreaView>
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
          <FormInput label='Nome pet' value={name} onChangeText={setName} style={styles.input}/>
          <Text style={styles.errorMessage}>{errors.name}</Text>
          <FormInput label='Idade' value={age} onChangeText={setAge} keyboardType="number-pad" style={styles.input}/>
          <Text style={styles.errorMessage}>{errors.age}</Text>
          <FormInput label='Cidade' value={city} onChangeText={setCity} style={styles.input} placeholderTextColor="grey" />
          <Text style={styles.errorMessage}>{errors.city}</Text>
          <FormInput label='Estado' value={state} onChangeText={setState} style={styles.input} placeholderTextColor="grey"/>
          <Text style={styles.errorMessage}>{errors.state}</Text>
          <FormInput label='Sexo' value={sex} onChangeText={setSex} style={styles.input} placeholderTextColor="grey" />
          <Text style={styles.errorMessage}>{errors.sex}</Text>
          <FormInput label='Cor' value={color} onChangeText={setColor} style={styles.input} />
          <Text style={styles.errorMessage}>{errors.color}</Text>
          <FormInput label='Raça' value={breed} onChangeText={setBreed} style={styles.input} />
          <Text style={styles.errorMessage}>{errors.breed}</Text>
          <FormInput label='Porte' value={size} onChangeText={setSize} style={styles.input} />
          <Text style={styles.errorMessage}>{errors.size}</Text>
          <TextInput
            style={styles.textArea}
            value={about}
            onChangeText={setAbout}
            placeholder="Sobre o seu pet..."
            placeholderTextColor="grey"
            numberOfLines={10}
            multiline={true}
            mode="outlined"
          />
           <Text style={styles.errorMessage}>{errors.about}</Text>
          <FormButton style={styles.cadastrarButton} onPress={handleCadastro}>Cadastrar</FormButton>
        </View>
      </KeyboardAwareScrollView >
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
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  textArea: {
    height: 120,
    justifyContent: "flex-start",
    marginTop: 20,
  },
  cadastrarButton: {
    backgroundColor: '#827397',
    width: 352,
    marginTop: 20,
    marginBottom: 50,
    padding: 5,
    textTransform: 'none',
    borderRadius: 10,
  },
  input: {
    marginTop: 10,
    color: "grey"
  },
  errorMessage: {
    color: 'red',
    fontSize: 14,
    marginTop: 5,
  },
});

export default CadastroPet;


