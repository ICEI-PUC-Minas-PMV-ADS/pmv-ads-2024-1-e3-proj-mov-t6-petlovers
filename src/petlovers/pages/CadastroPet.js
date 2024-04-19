import React, { useState } from 'react';
import { TextInput } from 'react-native-paper';
import { SafeAreaView, StyleSheet, View, Text, ScrollView, Alert, Image , TouchableOpacity} from 'react-native';
import {  } from "expo-status-bar";
import * as ImagePicker from 'expo-image-picker';
import Icon from 'react-native-vector-icons/FontAwesome';


import ArrowLeft from '../components/ArrowLeft';
import FormButton from '../components/FormButton';
import FormInput from '../components/FormInput';


const CadastroPet = () => {
  const [name, setName] = React.useState("");
  const [age, setAge] = React.useState("");
  const [city, setCity] = React.useState("");
  const [state, setState] = React.useState("");
  const [sex, setSex] = React.useState("");
  const [color, setColor] = React.useState("");
  const [breed, setBreed] = React.useState("");
  const [size, setSize] = React.useState("");
  const [about, setAbout] = React.useState("");

  const handleCadastro = async () => {
    if (!name ||!age ||!city ||!state ||!sex ||!color ||!breed ||!size ||!about) {
      alert("Todos os campos são obrigatórios");
      return;
    }

    try {
      const response = await fetch("http://localhost:3000/api/pet", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
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
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.textAreaContainer}>
          <Text style={styles.title}>Cadastre o seu pet</Text>
          <View style={styles.container}>
           <TouchableOpacity onPress={pickImage}>
           <Icon name="camera" size={30} color="#827397" />
           </TouchableOpacity>
           {image && <Image source={{ uri: image }} style={styles.image} />}
         </View>
          <FormInput label='Nome pet' value={name} onChangeText={setName} style={styles.input} />
          <FormInput label='Idade' value={age} onChangeText={setAge} keyboardType="number-pad" style={styles.input} />
          <FormInput label='Cidade' value={city} onChangeText={setCity} style={styles.input} placeholderTextColor="grey" />
          <FormInput label='Estado' value={state} onChangeText={setState} style={styles.input} placeholderTextColor="grey" />
          <FormInput label='Sexo' value={sex} onChangeText={setSex} style={styles.input} placeholderTextColor="grey" />
          <FormInput label='Cor' value={color} onChangeText={setColor} style={styles.input} />
          <FormInput label='Raça' value={breed} onChangeText={setBreed} style={styles.input} />
          <FormInput label='Porte' value={size} onChangeText={setSize} style={styles.input} />
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
          <FormButton style={styles.cadastrarButton} onPress={handleCadastro}>Cadastrar</FormButton>
        </View>
      </ScrollView>

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 200,
    height: 200,
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
    height: 150,
    justifyContent: "flex-start",
    marginTop: 20,
  },
  cadastrarButton: {
    backgroundColor: '#827397',
    width: 352,
    marginTop: 20,
    marginBottom: 60,
    padding: 5,
    textTransform: 'none',
    borderRadius: 10,
  },
  input: {
    marginTop: 10,
    color: "grey"
  },
});

export default CadastroPet;


