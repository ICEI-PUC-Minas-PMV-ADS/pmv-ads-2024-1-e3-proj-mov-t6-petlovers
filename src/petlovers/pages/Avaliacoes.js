import React, { useState, useEffect } from "react";
import { View, SafeAreaView, StyleSheet, FlatList, Text, ScrollView } from "react-native";
import { getAuth } from "firebase/auth";
import ArrowLeft from "../components/ArrowLeft";
import { baseAPI_URL } from "../apiConfig";
import CardAvaliacao from "../components/CardAvaliacao";
import Avaliacao from "../components/Avaliacao";

export default function Avaliacoes() {
    const [data, setData] = useState([]);
    const auth = getAuth();
    const user = auth.currentUser;
    const isLoggedIn = user != null;
    const userId = isLoggedIn ? user.uid : '0';
    // Obtem os dados das avaliações no backend
    useEffect(() => {
        fetch(`${baseAPI_URL}/api/avaliacoes/${userId}`) //API URL dos cards
            .then((response) => response.json())
            .then((responseData) => setData(responseData.data))
            .catch((error) => console.error('Error:', error));
    }, [])
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.arrow}>
                <ArrowLeft />
            </View>
            <ScrollView style={{ flex: 1, }}>
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    {!!isLoggedIn && <Avaliacao />}
                    <View>
                        <Text style={styles.text}>Avaliações Recentes</Text>
                    </View>
                    <View style={styles.listCard}>
                        <FlatList scrollEnabled={false} data={data} renderItem={({ item }) => (<CardAvaliacao item={item} />)} />
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    listCard: {
        gap: 4,
        flexDirection: 'row',
        flex: 0,
        flexWrap: 'row',
        alignContent: 'flex-start',
        marginLeft: 20,
        marginRight: 20,
    },
    arrow: {
        marginLeft: 10,
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
    text2: {
        color: '#5F5B5B',
        fontSize: 15,
        marginLeft: 205,
        marginTop: 8,
        marginBottom: 15,
    },
})