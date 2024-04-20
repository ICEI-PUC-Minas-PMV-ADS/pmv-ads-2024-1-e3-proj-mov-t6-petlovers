import * as React from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import { Ionicons } from '@expo/vector-icons';



export default function CardPet() {
    return (

        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

            <View style={styles.cards}>
                <View style={styles.cards1}>
                    <Image style={styles.imgcards} source={require('../assets/image/caramelo.jpg')} />
                    <Text style={styles.text}>Caramelo, 7 anos</Text>
                    <Ionicons name='location-outline' />
                    <Text style={styles.text1}>Santos - SP</Text>
                </View>

                <View style={styles.cards1}>
                    <Image style={styles.imgcards} source={require('../assets/image/gigii.jpg')} />
                    <Text style={styles.text}>Gigii, 3 anos</Text>
                    <Ionicons name='location-outline' />
                    <Text style={styles.text1}>Campinas - SP</Text>
                </View>
            </View>
        </View>
    );
}


const styles = StyleSheet.create({

  
    
    text: {
        color: '#5F5B5B',
        fontSize: 20,
        marginTop: 40,
        fontWeight: 'bold',

    },
    text1: {
        color: '#5F5B5B',
        fontSize: 12,
        marginLeft: 5,
        marginTop: 5,
    },
  
    cards: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: 15,
        alignSelf: 'flex-start',
        marginBottom: 15,

    },

    cards1: {
        width: 180,
        borderRadius: 5,
        backgroundColor: '#ffffff',
        marginRight: 10,


    },
    imgcards: {
        width: 180,
        height: 180,
        borderRadius: 5,
        borderBottomRightRadius: 25,
    },

})