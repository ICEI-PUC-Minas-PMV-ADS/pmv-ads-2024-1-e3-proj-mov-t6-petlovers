import React, { useState, useEffect } from "react";
import { SafeAreaView, StyleSheet, View, Text} from "react-native";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import ArrowLeft from "../components/ArrowLeft";
import CardCoverPet from '../components/CardCoverPet';
import { Ionicons } from '@expo/vector-icons';

import { cardpetsAPI_URL } from "../apiConfig";
import CardDetailsPet from "../components/CardDetailsPet";

export default function InfoPet() {
    return (
        <SafeAreaView>
            <ArrowLeft />
            <KeyboardAwareScrollView >
            <CardCoverPet />
                <View style={styles.container}>
                    <Text style={styles.text}>Scooby, 6 anos</Text>
                    <View style={styles.local}>
                            <Ionicons style={styles.icon} name='location-outline' size={19} />
                            <Text style={styles.text1}>Campinas, Sao Paulo</Text>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                         <CardDetailsPet />
                          <CardDetailsPet />
                           <CardDetailsPet />
                            <CardDetailsPet />
                    </View>
                    <View style={styles.containersobre}>
                        <Text style={styles.sobretitle}>Sobre mim</Text>
                        <Text style={styles.sobre}>
                            Olá! Sou o Scooby, um labrador marrom cheio de energia e amor para dar!{"\n\n"}
                            Adoro explorar o mundo ao lado dos meus humanos, seja correndo pelos parques ou farejando novos cheiros. 
                            Sou um verdadeiro amante de comida e estou sempre pronto para qualquer aventura que envolva um petisco saboroso! {"\n\n"}
                            Se você está procurando por um companheiro leal e divertido para compartilhar momentos incríveis, vamos dar um passeio
                            juntos e ver onde nossas patas nos levam!
                        </Text>
                        <Text style={styles.title2}>Tutor</Text>
                        <Text style={[styles.tutor, styles.marginBottom]}>Joana</Text>
                    </View>
                </View>
            </KeyboardAwareScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 20, // Margem lateral
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
        marginBottom: 20,
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
        marginBottom: 5,
        color: "#827397",
      },
      title2: {
        fontSize: 15,
        fontWeight: 'bold',
        marginTop: 35,
        marginBottom: 5,
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