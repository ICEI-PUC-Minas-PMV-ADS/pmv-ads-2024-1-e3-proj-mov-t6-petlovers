import React, { useState, useEffect } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { View, Text, StyleSheet, Image } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { getAuth } from "firebase/auth";
import { getUserByIdAPI_URL } from "../apiConfig";

export default function CardAvaliacao(props) {
    const [data, setData] = useState([]);
    const [userName, setUserName] = useState("");
    const navigation = useNavigation();
    const auth = getAuth();
    const user = auth.currentUser;
    const isLoggedIn = user != null;
    const item = props.item;
    const [rating1, setRating1] = item.rate >= 1 ? useState("paw") : useState("paw-outline");
    const [rating2, setRating2] = item.rate >= 2 ? useState("paw") : useState("paw-outline");
    const [rating3, setRating3] = item.rate >= 3 ? useState("paw") : useState("paw-outline");
    const [rating4, setRating4] = item.rate >= 4 ? useState("paw") : useState("paw-outline");
    const [rating5, setRating5] = item.rate >= 5 ? useState("paw") : useState("paw-outline");
    
    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const userId = item.userId;
                const response = await fetch(getUserByIdAPI_URL(userId));
                const userDataFromServer = await response.json();
                const userDataBD = {
                    fullName: userDataFromServer.full_name,
                    birthDate: userDataFromServer.birth_date,
                    whatsapp: userDataFromServer.whatsapp,
                    email: userDataFromServer.email,
                    userId: userId,
                };
                if (userDataBD) {
                    setUserName(userDataBD.fullName);
                } else {
                    setUserName("");
                }
            } catch (error) {
                console.error("Erro ao obter o nome do usuário:", error);
            }
        };
        fetchUserData();
    }, [userName]);

    return (
        <View style={styles.cards1}>
            <View style={styles.align}>
                <Ionicons style={styles.icon} name={rating1} size={19} />
                <Ionicons style={styles.icon} name={rating2} size={19} />
                <Ionicons style={styles.icon} name={rating3} size={19} />
                <Ionicons style={styles.icon} name={rating4} size={19} />
                <Ionicons style={styles.icon} name={rating5} size={19} />
            </View>
            <Text key={item.id} style={styles.text1}>" {item.message}"</Text>
            <Text key={item.id} style={styles.text2}>{userName}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    cards1: {
        width: '100%',
        borderRadius: 5,
        backgroundColor: '#ffffff',
        paddingRight: 10,
        paddingLeft: 10,
        flex: 2,
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
        marginTop: 20,
        flexDirection: 'row',
        alignSelf: 2,
    },
    text1: {
        color: '#5F5B5B',
        fontSize: 15,
        marginLeft: 15,
        marginTop: 20,
        marginBottom: 4,
    },
    text2: {
        color: '#5F5B5B',
        fontSize: 15,
        marginLeft: 150,
        marginTop: 8,
        marginBottom: 15,
    }
})