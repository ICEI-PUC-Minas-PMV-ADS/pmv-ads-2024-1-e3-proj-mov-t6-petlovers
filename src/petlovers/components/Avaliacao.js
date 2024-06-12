import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Pressable, TextInput, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
//API URL avaliação
import { AvaliacaoAPI_URL, baseAPI_URL } from "../apiConfig";
import { getAuth } from "firebase/auth";

//Avaliação
export default function Avaliacao() {
  const [id, setId] = useState("");
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

  useEffect(() => {
    const fetchAvaliacaoData = async () => {
      try {
        if (!user) return;
        const userId = user.uid;
        const response = await fetch(`${baseAPI_URL}/api/avaliacao/${userId}`);
        const avaliacaoDataFromServer = await response.json();
        const avaliacaoData = avaliacaoDataFromServer.data;
        const avaliacaoId = avaliacaoDataFromServer.avaliacaoId;
        if (avaliacaoData) {
          setId(avaliacaoId);
          handleRating(avaliacaoData.rate);
          setMessage(avaliacaoData.message);
        } else {
          handleRating(0);
          setMessage("");
        }
      } catch (error) {
        console.error("Erro ao obter avaliação:", error);
      }
    };
    fetchAvaliacaoData();
  }, [user]);


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
      if (!id && id == "") {
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
        Alert.alert("Avaliação inserida com sucesso.");
      }
      else {
        const response = await fetch(`${baseAPI_URL}/api/avaliacao-update`, { //API URL da avaliação
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            id,
            userId,
            rate,
            message
          }),
        });
        if (response.ok) {
          const responseData = await response.json();
        }
        Alert.alert("Avaliação atualizada com sucesso.");
      }

    } catch (error) {
      Alert.alert(
        "Erro",
        "Falha ao Avaliar, tente novamente mais tarde."
      );
    }
  }

  // Função para excluir avaliação
  const handleDeleteRating = async () => {
    try {
      if (!id) {
        return; // Pare a execução da função para evitar que o código a seguir seja executado
      }
      // Exibir um alerta de confirmação antes de excluir a avaliação
      Alert.alert(
        "Excluir avaliação",
        "Tem certeza de que deseja excluir sua avaliação? Esta ação é irreversível.",
        [{
          text: "Cancelar",
          style: "cancel",
        },
        {
          text: "Excluir",
          onPress: async () => {
            const userId = user.uid; // ID do usuário autenticado

            const response = await fetch(`${baseAPI_URL}/api/avaliacao-delete/${id}`, {
              method: "DELETE",
            });

            if (response.ok) {
              // Avaliação excluída com sucesso
              Alert.alert("Sucesso", "Sua avaliação foi excluída com sucesso.");
              // Limpar tela de avaliação
            } else {
              // Erro ao excluir a avaliação
              Alert.alert("Erro", "Erro ao excluir sua avaliação.");
            }
          },
        },
        ]
      );
    } catch (error) {
      console.error("Erro ao excluir conta:", error);
      Alert.alert("Erro", "Erro ao excluir sua conta.");
    }
  }

  return (
    <View style={styles.popup}>
      <View style={styles.modalView}>
        <Text style={styles.text}>Avalie sua experiência !</Text>
        <View style={styles.align}>
          <Pressable onPress={() => { handleRating(1) }}>
            <Ionicons style={styles.icon} name={rating1} size={25} />
          </Pressable>
          <Pressable onPress={() => { handleRating(2) }}>
            <Ionicons style={styles.icon} name={rating2} size={25} />
          </Pressable>
          <Pressable onPress={() => { handleRating(3) }} >
            <Ionicons style={styles.icon} name={rating3} size={25} />
          </Pressable>
          <Pressable onPress={() => { handleRating(4) }}>
            <Ionicons style={styles.icon} name={rating4} size={25} />
          </Pressable>
          <Pressable onPress={() => { handleRating(5) }}>
            <Ionicons style={styles.icon} name={rating5} size={25} />
          </Pressable>
        </View>
        <TextInput
          value={message}
          onChangeText={setMessage}
          maxLength={30}
          style={styles.input}
          placeholder="Avalie como foi sua experiência aqui..."
          keyboardType="default" />
        <View style={styles.comands}>
          <Pressable style={[styles.button, styles.buttonDelete]}
            onPress={() => handleDeleteRating()}>
            <Text style={styles.textBtn}>Excluir</Text>
          </Pressable>
          <Pressable style={[styles.button, styles.buttonClose]}
            onPress={() => handleSendRating()}>
            <Text style={styles.textBtn}>Enviar</Text>
          </Pressable>

        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  popup: {
    flex: 0,
    justifyContent: 'center',
    alignItems: 'center',
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
  comands: {
    flexDirection: 'row',
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
    marginBottom: 40,
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
  buttonDelete: {
    backgroundColor: '#ff0000',
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