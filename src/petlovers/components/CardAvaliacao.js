
import React, { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { View, Text, StyleSheet, Image } from "react-native";
import ArrowLeft from "../components/ArrowLeft";
import { useNavigation } from '@react-navigation/native';
import { getAuth } from "firebase/auth";



export default function CardAvaliacao(props) {
    const [data, setData] = useState([]);
    const navigation = useNavigation();
    const auth = getAuth();
    const user = auth.currentUser;
    const item = props.item;
    const [rating1, setRating1] = item.rate >= 1 ? useState("paw") : useState("paw-outline");
    const [rating2, setRating2] = item.rate >= 2 ? useState("paw") : useState("paw-outline");
    const [rating3, setRating3] = item.rate >= 3 ? useState("paw") : useState("paw-outline");
    const [rating4, setRating4] = item.rate >= 4 ? useState("paw") : useState("paw-outline");
    const [rating5, setRating5] = item.rate >= 5 ? useState("paw") : useState("paw-outline");

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
            <Text key={item.id} style={styles.text2}>Liana</Text>


        </View>

    )
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