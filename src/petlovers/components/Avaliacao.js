import React, { useState } from 'react';
import { Modal, StyleSheet, Text, View, Pressable, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
//API URL avaliação
import { AvaliacaoAPI_URL } from "../apiConfig";
import { getAuth } from "firebase/auth";

//Modal Avaliação
export default function Avaliacao() {
  const [modalVisible, setModalVisible] = useState(false);
  const [rate, setRating] = useState(0);
  const [message, setMessage] = useState("");
  const [rating1, setRating1] = useState("paw-outline");
  const [rating2, setRating2] = useState("paw-outline");
  const [rating3, setRating3] = useState("paw-outline");
  const [rating4, setRating4] = useState("paw-outline");
  const [rating5, setRating5] = useState("paw-outline");
  const auth = getAuth();
  const user = auth.currentUser;
  const userId = user ? user.uid : "";


  handleRating = (nota) => {
    setRating(nota);
    if (nota == 1) {
      setRating1("paw");
      setRating2("paw-outline");
      setRating3("paw-outline");
      setRating4("paw-outline");
      setRating5("paw-outline");
    } else if (nota == 2) {
      setRating1("paw");
      setRating2("paw");
      setRating3("paw-outline");
      setRating4("paw-outline");
      setRating5("paw-outline");
    } else if (nota == 3) {
      setRating1("paw");
      setRating2("paw");
      setRating3("paw");
      setRating4("paw-outline");
      setRating5("paw-outline");
    } else if (nota == 4) {
      setRating1("paw");
      setRating2("paw");
      setRating3("paw");
      setRating4("paw");
      setRating5("paw-outline");
    } else if (nota == 5) {
      setRating1("paw");
      setRating2("paw");
      setRating3("paw");
      setRating4("paw");
      setRating5("paw");
    } else {
      setRating1("paw-outline");
      setRating2("paw-outline");
      setRating3("paw-outline");
      setRating4("paw-outline");
      setRating5("paw-outline");
    }
  }

  handleSendRating = async () => {
    try {
      const response = await fetch(AvaliacaoAPI_URL, { //API URL da avaliação
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userId,
          rate,
          message
        }),
      });

      if (response.ok) {
        const responseData = await response.json();
      }

      // Limpar os campos após a avaliação
      handleRating(0);
      setMessage("");
      setModalVisible(false);

    } catch (error) {
      Alert.alert(
        "Erro",
        "Falha ao Avaliar, tente novamente mais tarde."
      );
    }
  }

  return (
    <View style={styles.popup}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.popup}>
          <View style={styles.modalView}>
            <Pressable
              style={[styles.Exit, styles.buttonExit]}
              onPress={() => setModalVisible(false)}>
              <Text style={styles.textExit}>X</Text>
            </Pressable>
            <Text style={styles.text}>Avalie sua experiência !</Text>
            <View style={styles.align}>
              <Pressable
                onPress={() => { handleRating(1) }}
              >
                <Ionicons style={styles.icon} name={rating1} size={25} />
              </Pressable>
              <Pressable
                onPress={() => { handleRating(2) }}
              >
                <Ionicons style={styles.icon} name={rating2} size={25} />
              </Pressable>
              <Pressable
                onPress={() => { handleRating(3) }}
              >
                <Ionicons style={styles.icon} name={rating3} size={25} />
              </Pressable>
              <Pressable
                onPress={() => { handleRating(4) }}
              >
                <Ionicons style={styles.icon} name={rating4} size={25} />
              </Pressable>
              <Pressable
                onPress={() => { handleRating(5) }}
              >
                <Ionicons style={styles.icon} name={rating5} size={25} />
              </Pressable>

            </View>

            <TextInput
              value={message}
              onChangeText={setMessage}
              maxLength={30}
              style={styles.input}
              placeholder="Avalie como foi sua experiência aqui..."
              keyboardType="default"

            />
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => handleSendRating()}>
              <Text style={styles.textBtn}>Enviar</Text>
            </Pressable>
          </View>
        </View>
      </Modal>

     
        <Pressable
          style={[styles.button, styles.buttonOpen]}
          onPress={() => setModalVisible(true)}>
          <Text style={styles.textBtn}>Avalie</Text>
        </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  popup: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    width: 350,
    height: 350,
    margin: 20,
    backgroundColor: '#ffffff',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 5,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#827397',
    width: 120,
    height: 38,
    marginLeft: 10,
    marginTop: 60,
    marginBottom: 60,
    borderRadius: 7.53,
  },
  buttonClose: {
    backgroundColor: '#827397',
    width: 120,
    height: 38,
    marginLeft: 10,
    marginTop: 40,
    borderRadius: 7.53,
  },
  textBtn: {
    marginBottom: 10,
    marginLeft: 35,
    marginTop: 5,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  align: {
    marginTop: 30,
    flexDirection: 'row',
  },
  icon: {
    marginTop: 5,
    marginLeft: 14,
    color: "#827397",
  },
  text: {
    color: '#5F5B5B',
    fontSize: 18,
    marginTop: 20,
    marginLeft: 10,
    fontWeight: 'bold',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  Exit: {
    alignSelf: 'flex-end'
  },
  buttonExit: {
    marginLeft: 120,
    borderRadius: 7.53,
  },
  textExit: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#827397',
  },
  input: {
    height: 40,
    marginTop: 15,
    borderWidth: 1,
    borderRadius: 7.53,
    borderColor: '#827397',
    padding: 10,
  },

});