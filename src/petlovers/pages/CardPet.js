import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Image, FlatList } from "react-native";
import { Ionicons } from '@expo/vector-icons';

export default function CardPet() {
    const [data, setData] = useState([]);

    // Obtem os dados dos pets no backend
    useEffect(() => {
        fetch("http://localhost:3000/api/fourpets")
            .then((response) => response.json())
            .then((data) => setData(data.data))
            .catch((error) => console.error('Error:', error));
    }, []);

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

            <FlatList
                horizontal={true}
                data={data}
                renderItem={({ item }) => (

                    <View style={styles.cards1}>
                        <Image style={styles.imgcards} source={{ uri: item.imageURL }} />
                        <Text key={item.id} style={styles.text}>{item.nome}, {item.idade} anos</Text>
                        <View style={styles.local}>
                            <Ionicons style={styles.icon} name='location-outline' size={19} />
                            <Text key={item.id} style={styles.text1}>{item.cidade}</Text>
                        </View>
                    </View>

                )}
            />
        </View>


    );
}


const styles = StyleSheet.create({


    text: {
        color: '#5F5B5B',
        fontSize: 18,
        marginTop: 20,
        marginLeft: 10,
        fontWeight: 'bold',



    },
    text1: {
        color: '#5F5B5B',
        fontSize: 15,
        marginLeft: 5,
        marginTop: 8,
        marginBottom: 15,


    },
    local: {
        flexDirection: 'row',

    },

    icon: {
        marginTop: 5,
        marginLeft: 8,
        color: "#827397",
    },
    

    cards1: {
        width: 160,
        borderRadius: 5,
        backgroundColor: '#ffffff',
        marginRight: 10,
        flex: 1,
        flexWrap: 'row',
        marginTop: 15,
        alignSelf: 'flex-start',


    },

    imgcards: {
        width: 160,
        height: 150,
        borderRadius: 5,
        borderBottomRightRadius: 25,
    },

})