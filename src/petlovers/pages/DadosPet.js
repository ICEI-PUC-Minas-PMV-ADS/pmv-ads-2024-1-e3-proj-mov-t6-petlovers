import React, { useState } from 'react';
import { TextInput } from "react-native-paper";
import { SafeAreaView, StyleSheet, View, Text, Alert, TouchableOpacity, Image, } from "react-native";
import { useRoute } from "@react-navigation/native";
import Icon from 'react-native-vector-icons/FontAwesome';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { getAuth } from "firebase/auth";
import ArrowLeft from "../components/ArrowLeft";
import FormButton from "../components/FormButton";
import FormInput from "../components/FormInput";
import validateCadastroPet from '../services/validateCadastroPet';

//API URL do cadastro pet
import { petAPI_URL } from "../apiConfig";

const DadosPet = ({ }) => {
  
 return (
    <SafeAreaView style={{ flex: 1 }}>
      <ArrowLeft />
      <KeyboardAwareScrollView >
        <View style={styles.textAreaContainer}>
          <Text style={styles.title}>Editar dados pet</Text>
          <View style={styles.container}>
            <View style={styles.imageContainer}>
              <TouchableOpacity style={styles.cameraButton}>
                <Icon name="camera" size={40} color="#827397" />
              </TouchableOpacity>
              
            </View>
          </View>
          <FormInput
            label="Nome pet"
            style={styles.input}
          />
          <FormInput
            label="Idade"
            keyboardType="number-pad"
            style={styles.input}
          />
          <FormInput
            label="Cidade"
            style={styles.input}
            placeholderTextColor="grey"
          />
          <FormInput
            label="Estado"
            style={styles.input}
            placeholderTextColor="grey"
          />
          <FormInput
            label="Sexo"
            style={styles.input}
            placeholderTextColor="grey"
          />
          <FormInput
            label="Cor"
            style={styles.input}
          />
          <FormInput
            label="Raça"
            style={styles.input}
          />
          <Text style={styles.errorMessage}></Text>
          <FormInput
            label="Porte"
            style={styles.input}
          />
          <TextInput
            style={styles.textArea}
            placeholder="Sobre o seu pet..."
            placeholderTextColor="grey"
            //numberOfLines={10}
            multiline={false}
            mode="outlined"
          />
          <FormButton style={styles.cadastrarButton}>
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

export default DadosPet;