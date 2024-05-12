import React, { useState, useEffect } from 'react';
import { TextInput } from "react-native-paper";
import { SafeAreaView, StyleSheet, View, Text, Alert, TouchableOpacity, Image, } from "react-native";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { getAuth } from "firebase/auth";
import ArrowLeft from "../components/ArrowLeft";
import FormButton from "../components/FormButton";
import FormInput from "../components/FormInput";
import validateCadastroPet from '../services/validateCadastroPet';

import {baseAPI_URL} from '../apiConfig';

const DadosPet = ({ }) => {
    const [petData, setPetData] = useState(null);
    const auth = getAuth();
    const user = auth.currentUser;

    useEffect(() => {
        const fetchPetData = async () => {
            try {
                if (!user) return;
                const userId = user.uid;

                const response = await fetch(`${baseAPI_URL}/api/get-pet-data/${userId}`);
                const petDataFromServer = await response.json();


                setPetData(petDataFromServer.data);
            } catch (error) {
                console.error("Erro ao obter dados do pet:", error);
            }
        };

        fetchPetData();
    }, [user]);

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ArrowLeft />
            <KeyboardAwareScrollView >
                <View style={styles.textAreaContainer}>
                    <Text style={styles.title}>Editar dados pet</Text>

                    {user ? (
                        <>
                            <FormInput
                                label="Nome pet"
                                style={styles.input}
                                value={petData?.nome || ''}
                            />
                            <FormInput
                                label="Idade"
                                keyboardType="number-pad"
                                style={styles.input}
                                value={petData?.idade.toString() || ''}
                            />
                            <FormInput
                                label="Cidade"
                                style={styles.input}
                                placeholderTextColor="grey"
                                value={petData?.cidade || ''}
                            />
                            <FormInput
                                label="Estado"
                                style={styles.input}
                                placeholderTextColor="grey"
                                value={petData?.estado || ''}
                            />
                            <FormInput
                                label="Sexo"
                                style={styles.input}
                                placeholderTextColor="grey"
                                value={petData?.sexo || ''}
                            />
                            <FormInput
                                label="Cor"
                                style={styles.input}
                                value={petData?.cor || ''}
                            />
                            <FormInput
                                label="Raça"
                                style={styles.input}
                                value={petData?.raca || ''}
                            />
                            <FormInput
                                label="Porte"
                                style={styles.input}
                                value={petData?.porte || ''}
                            />
                            <TextInput
                                style={styles.textArea}
                                placeholder="Sobre o seu pet..."
                                placeholderTextColor="grey"
                                //numberOfLines={10}
                                multiline={false}
                                mode="outlined"
                                value={petData?.sobre || ''}
                            />
                            <FormButton style={styles.cadastrarButton}>
                                Salvar
                            </FormButton>
                        </>
                    ) : (
                        <Text style={styles.notlogged}>Por favor, faça login para editar os dados do seu pet.</Text>
                    )}
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
    marginBottom: 30,
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
    marginTop: 20,
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
  notlogged: {
    fontSize: 20,
    fontWeight: 'bold',
    color: "#827397",
    marginTop: 100,
  }
  
});

export default DadosPet;