import React, { useState, useEffect } from "react";
import { View, SafeAreaView, StyleSheet, FlatList, Text } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { getAuth } from "firebase/auth";
import Avaliacao from "../components/Avaliacao";
import ArrowLeft from "../components/ArrowLeft";
import { AvaliacaoAPI_URL } from "../apiConfig";
import { Ionicons } from '@expo/vector-icons';

export default function Avaliacoes() {
    const [data, setData] = useState([]);
    const navigation = useNavigation();
    const auth = getAuth();
    const user = auth.currentUser;

    // Obtem os dados das avaliações no backend
    useEffect(() => {
        fetch(AvaliacaoAPI_URL) //API URL dos cards
            .then((response) => response.json())
            .then((data) => setData(data.data))
            .catch((error) => console.error('Error:', error));
    },)
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <View style={styles.arrow}>
                    <ArrowLeft />
                </View>
                <FlatList
            
                    data={data}
                    renderItem={({ item }) => (
                        <View style={styles.cards1}>
                            <Text key={item.id} style={styles.text1}>{item.message} </Text>
                            <Text key={item.id} style={styles.text}>{item.rate}</Text>
                            <View style={styles.align}>
                                <Ionicons style={styles.icon} name='paw' size={19} />
                                <Ionicons style={styles.icon} name='paw' size={19} />
                                <Ionicons style={styles.icon} name='paw' size={19} />
                                <Ionicons style={styles.icon} name='paw' size={19} />
                                <Ionicons style={styles.icon} name='paw' size={19} />
                            </View>
                            <Text key={item.id} style={styles.text}>Liana </Text>
                        </View>
                    )}
                />
            </View>

            <Avaliacao />

        </SafeAreaView>
    );
}

const styles = StyleSheet.create({

    cards1: {
        width: 250,
 
        borderRadius: 5,
        backgroundColor: '#ffffff',
        marginRight: 10,
        flex: 1,
        flexWrap: 'row',
        marginTop: 15,
        alignSelf: 'flex-start',
    },
    text: {
        color: '#5F5B5B',
        fontSize: 18,
        marginTop: 20,
        marginLeft: 10,
        fontWeight: 'bold',
    },
    icon: {
        marginTop: 5,
        marginLeft: 14,
        color: "#827397",
    },
    align: {
        marginTop: 30,
        flexDirection: 'row',
    },
    text1: {
        color: '#5F5B5B',
        fontSize: 15,
        marginLeft: 5,
        marginTop: 8,
        marginBottom: 15,
    },
})