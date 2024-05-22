import React, { useState, useEffect } from 'react';
import { TextInput } from "react-native-paper";
import { SafeAreaView, StyleSheet, View, Text, Alert } from "react-native";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { getAuth } from "firebase/auth";
import ArrowLeft from "../components/ArrowLeft";
import FormButton from "../components/FormButton";
import FormInput from "../components/FormInput";
import validateCadastroPet from '../services/validateCadastroPet';

import {baseAPI_URL} from '../apiConfig';

const DadosPet = ({ }) => {
    const [petData, setPetData] = useState(null);
    const [editedPetData, setEditedPetData] = useState({});

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
                console.error("Erro ao obter dados do pet:");
            }
        };

        fetchPetData();
    }, [user]);


    const handleUpdatePetData = async () => {
        try {
            if (!user || !petData) return;
            const userId = user.uid;
    
            const updatedFields = {};
    
            Object.keys(editedPetData).forEach(field => {
                if (editedPetData[field] !== petData[field]) {
                    updatedFields[field] = editedPetData[field];
                }
            });
    
            const response = await fetch(`${baseAPI_URL}/api/update-pets/${userId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(updatedFields)
            });
    
            if (response.ok) {
                const contentType = response.headers.get('content-type');
                if (contentType && contentType.includes('application/json')) {
                    const updatedPetData = await response.json();
    
                    setPetData(prevPetData => ({
                        ...prevPetData,
                        ...updatedPetData
                    }));
                    Alert.alert("Sucesso", "Dados atualizados com sucesso.");
                } else {
                    console.error('Resposta não é JSON:', await response.text());
                    throw new Error('Resposta não é JSON');
                }
            } else {
                const text = await response.text();
                console.error('Erro:', text);
                throw new Error(text);
            }
        } catch (error) {
            console.error('Erro:', error);
            Alert.alert("Erro", error.message);
        }
    };
    
    
    const handleInputChange = (value, field) => {
        setEditedPetData(prevEditedPetData => ({
            ...prevEditedPetData,
            [field]: value
        }));
    };
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
                                value={editedPetData?.nome ?? petData?.nome ?? ''}
                                editable={true}
                                onChangeText={(text) => handleInputChange(text, 'nome')} 
                            />
                            <FormInput
                                label="Idade"
                                keyboardType="number-pad"
                                style={styles.input}
                                value={editedPetData?.idade ?? petData?.idade?.toString() ?? ''} 
                                editable={true}
                                onChangeText={(text) => handleInputChange(text, 'idade')} 
                            />
                            <FormInput
                                label="Cidade"
                                style={styles.input}
                                placeholderTextColor="grey"
                                value={editedPetData?.cidade ?? petData?.cidade ?? ''}
                                editable={true}
                                onChangeText={(text) => handleInputChange(text, 'cidade')} 
                            />
                            <FormInput
                                label="Estado"
                                style={styles.input}
                                placeholderTextColor="grey"
                                value={editedPetData?.estado ?? petData?.estado ?? ''}
                                editable={true}
                                onChangeText={(text) => handleInputChange(text, 'estado')} 
                            />
                            <FormInput
                                label="Sexo"
                                style={styles.input}
                                placeholderTextColor="grey"
                                value={editedPetData?.sexo ?? petData?.sexo ?? ''}
                                editable={true}
                                onChangeText={(text) => handleInputChange(text, 'sexo')} 
                            />
                            <FormInput
                                label="Cor"
                                style={styles.input}
                                value={editedPetData?.cor ?? petData?.cor ?? ''}
                                editable={true}
                                onChangeText={(text) => handleInputChange(text, 'cor')} 
                            />
                            <FormInput
                                label="Raça"
                                style={styles.input}
                                value={editedPetData?.raca ?? petData?.raca ?? ''}
                                editable={true}
                                onChangeText={(text) => handleInputChange(text, 'raca')} 
                            />
                            <FormInput
                                label="Porte"
                                style={styles.input}
                                value={editedPetData?.porte ?? petData?.porte ?? ''}
                                editable={true}
                                onChangeText={(text) => handleInputChange(text, 'porte')} 
                            />
                            <TextInput
                                style={styles.textArea}
                                placeholder="Sobre o seu pet..."
                                placeholderTextColor="grey"
                                multiline={false}
                                mode="outlined"
                                editable={true}
                                value={editedPetData?.sobre ?? petData?.sobre ?? ''}
                                onChangeText={(text) => handleInputChange(text, 'sobre')} 
                            />
                            <FormButton style={styles.cadastrarButton}  onPress={handleUpdatePetData }>
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