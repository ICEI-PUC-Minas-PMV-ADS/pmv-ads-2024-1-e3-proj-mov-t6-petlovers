import React, { useState, useEffect } from "react";
import { SafeAreaView, StyleSheet, View, Text} from "react-native";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Ionicons } from '@expo/vector-icons';
import { Card } from 'react-native-paper';
import { getAuth } from "firebase/auth";

import {baseAPI_URL} from '../apiConfig';
import ArrowLeft from "../components/ArrowLeft";


export default function VerPerfil() {

    const [petData, setPetData] = useState(null);
    const [editedPetData, setEditedPetData] = useState(null);
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

    const handleInputChange = (value, field) => {
        setEditedPetData({ ...editedPetData, [field]: value });
    };


    return (
      <SafeAreaView>
        <ArrowLeft />
        <KeyboardAwareScrollView>
          <Card>
            <Card.Cover
              source={{ uri: petData?.imageURL  }}
              resizeMode="cover"
              style={{ height: 300, borderRadius: 0 }}
            />
          </Card>

          <View style={styles.container}>
            <Text style={styles.text}>{petData?.nome}, {petData?.idade.toString()} anos</Text>
            <View style={styles.local}>
              <Ionicons style={styles.icon} name="location-outline" size={19} />
              <Text style={styles.text1}>{petData?.cidade}, {petData?.estado}</Text>
            </View>

            <View style={{ flexDirection: 'row' }}>
              <View style={styles.containerinfo}>
                <Text style={styles.titlelab}>{petData?.sexo}</Text>
                <Text style={styles.descriptionlab}>Sexo</Text>
              </View>
              <View style={styles.containerinfo}>
                <Text style={styles.titlelab}>{petData?.cor}</Text>
                <Text style={styles.descriptionlab}>Cor</Text>
              </View>
              <View style={styles.containerinfo}>
                <Text style={styles.titlelab}>{petData?.raca}</Text>
                <Text style={styles.descriptionlab}>Raça</Text>
              </View>
              <View style={styles.containerinfo}>
                <Text style={styles.titlelab}>{petData?.porte}</Text>
                <Text style={styles.descriptionlab}>Porte</Text>
              </View>
            </View>

            <View style={styles.containersobre}>
              <Text style={styles.sobretitle}>Sobre mim</Text>
              <Text style={styles.sobre}>
                {petData?.sobre}{"\n\n"} 
              </Text>

              <Text style={styles.titletutor}>Tutor</Text>
              <Text style={[styles.tutor, styles.marginBottom]}></Text>
            </View>
          </View>
        </KeyboardAwareScrollView>
      </SafeAreaView>
    );
  }
  

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 15, // Margem lateral
      },
      containerinfo: {
        borderWidth: 1,
        borderColor: '#CCCCCC', 
        borderRadius: 8,
        padding: 5,
        marginTop: 20,
        width: 88,
        alignItems: 'center',
        marginRight: 5,
      },
      titlelab: {
        fontSize: 14,
        fontWeight: 'bold',
        marginBottom: 5,
        color: "#827397",
      },
      descriptionlab: {
        fontSize: 13,
        color: '#5F5B5B',
        textAlign: 'center',
      },
    scrollViewContent: {
        flexGrow: 1,
      },
      text: {
        color: '#5F5B5B',
        fontSize: 20,
        marginTop: 20,
        fontWeight: 'bold',
      },
      text1: {
        color: '#5F5B5B',
        fontSize: 13,
        marginTop: 17,
        marginBottom: 16,
        marginLeft: 5,
      },
      local: {
        flexDirection: 'row',
      },
      icon: {
        marginTop: 15,
        color: "#827397",
      },
      containersobre: {
        marginTop: 20,
        marginBottom: 15,
      },
      titulo: {
        fontSize: 20, // Mesmo estilo do nome
        fontWeight: 'bold',
        marginBottom: 10,
        color: "#827397",
      },
      sobre: {
        fontSize: 16,
        lineHeight: 24,
        marginTop: 15, 
        color: '#5F5B5B',
      },
      sobretitle: {
        fontSize: 15,
        fontWeight: 'bold',
        marginTop: 10,
        marginBottom: 0,
        color: "#827397",
      },
      titletutor: {
        fontSize: 15,
        fontWeight: 'bold',
        marginBottom: 5,
        marginTop: -15,
        color: "#827397",
      },
      tutor: {
        marginBottom: 15, 
        color: '#5F5B5B',
      },
      marginBottom: {
        marginBottom: 70,
      },
})